#!/usr/bin/env bun
/**
 * After a transcript push: bake Lanyang OG for changed root *.md (licensed Mac only).
 * Reads range from .git/og-lanyang-push.json (written by pre-push hook).
 *
 * Env:
 *   TRANSCRIPT_SKIP_LANYANG_OG=1  — skip (hook still clears marker)
 *   SAYIT_HONO_ROOT               — default ../sayit-hono from repo root
 *   BAKE_OG_WAIT_MS               — max wait for speech_index after CI sync (default 600000)
 */
import { execFileSync } from 'node:child_process';
import { existsSync, readFileSync, rmSync } from 'node:fs';
import { join, resolve } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const MARKER = join(REPO_ROOT, '.git', 'og-lanyang-push.json');

type Marker = { before: string; after: string };

function sayitHonoRoot(): string {
	const env = process.env.SAYIT_HONO_ROOT;
	if (env) return resolve(env);
	return resolve(REPO_ROOT, '..', 'sayit-hono');
}

function readMarker(): Marker | null {
	if (!existsSync(MARKER)) return null;
	try {
		return JSON.parse(readFileSync(MARKER, 'utf-8')) as Marker;
	} catch {
		return null;
	}
}

function mdChanged(before: string, after: string): boolean {
	const out = execFileSync(
		'git',
		['diff', '--name-only', before, after, '--', '*.md'],
		{ cwd: REPO_ROOT, encoding: 'utf-8' }
	);
	return out.split('\n').some((l) => l.trim().endsWith('.md'));
}

async function sleep(ms: number): Promise<void> {
	const { promise, resolve: done } = Promise.withResolvers<void>();
	setTimeout(done, ms);
	await promise;
}

function lanyangFontsOk(hono: string): boolean {
	try {
		execFileSync(
			'bun',
			[
				'-e',
				"import { lanyangFontsInstalled } from './scripts/og-lanyang-lib.ts'; process.exit(lanyangFontsInstalled() ? 0 : 1)",
			],
			{ cwd: hono, stdio: 'pipe' }
		);
		return true;
	} catch {
		return false;
	}
}

function runBake(hono: string, bakeScript: string, marker: Marker): string {
	return execFileSync(
		'bun',
		['run', bakeScript, '--git', marker.before, marker.after, '--transcript-root', REPO_ROOT],
		{ cwd: hono, encoding: 'utf-8', env: process.env }
	);
}

async function main(): Promise<void> {
	if (process.env.TRANSCRIPT_SKIP_LANYANG_OG === '1') {
		console.log('[lanyang-og] TRANSCRIPT_SKIP_LANYANG_OG=1 — skip');
		return;
	}

	const marker = readMarker();
	if (!marker?.before || !marker?.after) {
		console.log('[lanyang-og] no push marker — skip');
		return;
	}

	if (!mdChanged(marker.before, marker.after)) {
		console.log('[lanyang-og] no root *.md in push range — skip');
		return;
	}

	const hono = sayitHonoRoot();
	const bakeScript = join(hono, 'scripts', 'bake-og-lanyang.ts');
	if (!existsSync(bakeScript)) {
		console.warn(`[lanyang-og] sayit-hono not found at ${hono} — skip (set SAYIT_HONO_ROOT)`);
		return;
	}

	if (!lanyangFontsOk(hono)) {
		console.warn('[lanyang-og] jf Lanyang fonts missing under ~/Library/Fonts — skip local bake (CI self-hosted may still run)');
		return;
	}

	const waitMs = Number(process.env.BAKE_OG_WAIT_MS ?? 600_000);
	const step = 15_000;
	let waited = 0;
	console.log('[lanyang-og] waiting for archive.tw speech_index (CI sync)…');

	while (waited <= waitMs) {
		const out = runBake(hono, bakeScript, marker);
		process.stdout.write(out);
		if (!out.includes('nothing to bake') && !/→ 0 speech slug/.test(out)) {
			return;
		}
		if (waited >= waitMs) break;
		await sleep(step);
		waited += step;
		console.log(`[lanyang-og] retry in ${step / 1000}s (${waited / 1000}s waited)…`);
	}

	console.warn('[lanyang-og] timed out — speech may not be on archive.tw yet; re-run bake manually or wait for CI bake job');
}

main()
	.finally(() => {
		try {
			rmSync(MARKER, { force: true });
		} catch {
			// ignore
		}
	})
	.catch((err: unknown) => {
		console.error('[lanyang-og] failed:', err);
		process.exit(1);
	});