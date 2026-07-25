#!/usr/bin/env bun
/**
 * After a transcript push: bake Lanyang OG for changed root *.md (licensed Mac only).
 * Reads range from .git/og-lanyang-push.json (written by pre-push hook).
 *
 * One-off repair of an already-published speech (no marker needed):
 *   bun run bake-og -- --filename '2026-07-24-「維基媒體與-ai-現況」座談'
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
const NON_TRANSCRIPT_MARKDOWN: Record<string, true> = {
	'AGENTS.md': true,
	'README.md': true,
};

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
	// -z: without it Git quotes non-ASCII paths ("2026-…-\343\200\214….md"), so
	// every CJK-titled transcript would fail the .md suffix test and skip the bake.
	const out = execFileSync(
		'git',
		['diff', '--name-only', '-z', before, after, '--', '*.md'],
		{ cwd: REPO_ROOT, encoding: 'utf-8' }
	);
	return out
		.split('\0')
		.map((line) => line.trim())
		.some((file) => file.endsWith('.md') && !Object.hasOwn(NON_TRANSCRIPT_MARKDOWN, file));
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

function runBake(hono: string, bakeScript: string, bakeArgs: string[]): string {
	return execFileSync(
		'bun',
		['run', bakeScript, ...bakeArgs],
		{
			cwd: hono,
			encoding: 'utf-8',
			// The licensed bake intentionally writes the production bucket (CI passes
			// the same opt-in); REQUIRE_LANYANG_FONTS makes a font miss fail loudly
			// instead of exiting 0 and silently leaving the Noto fallback live.
			env: { ...process.env, ALLOW_PROD_R2: '1', REQUIRE_LANYANG_FONTS: '1' },
		}
	);
}

/**
 * True once `after` is reachable from the tracked remote branch. Ancestry, not
 * `ls-remote`: that lists only ref tips, so a follow-up push would strand the
 * previous bake even though its commits did land.
 */
function remoteHasCommit(after: string): boolean {
	try {
		// A push from this repo already moved the tracking ref; fetching also
		// covers the case where the branch advanced from somewhere else.
		execFileSync('git', ['fetch', '--quiet', 'origin'], { cwd: REPO_ROOT, stdio: 'pipe' });
	} catch {
		// Offline — fall through and judge on whatever the tracking ref knows.
	}
	try {
		const upstream = execFileSync('git', ['rev-parse', '--abbrev-ref', '--symbolic-full-name', '@{u}'], {
			cwd: REPO_ROOT,
			encoding: 'utf-8',
		}).trim();
		execFileSync('git', ['merge-base', '--is-ancestor', after, upstream], { cwd: REPO_ROOT, stdio: 'pipe' });
		return true;
	} catch {
		return false;
	}
}

/** pre-push detaches this bake before the push is known to succeed. */
async function waitForPushLanded(after: string, maxMs: number): Promise<boolean> {
	const step = 5_000;
	let waited = 0;
	while (waited <= maxMs) {
		if (remoteHasCommit(after)) return true;
		await sleep(step);
		waited += step;
	}
	return false;
}

/**
 * One-off rebake of an already-published speech:
 *   bun run bake-og -- --filename '2026-07-24-「維基媒體與-ai-現況」座談'
 * The push path is marker-driven, so it can never reach a file that already
 * landed on origin. This is the escape hatch for repairing a stale OG.
 */
function filenameOverride(): string | null {
	const at = process.argv.indexOf('--filename');
	const name = at >= 0 ? process.argv[at + 1] : undefined;
	return name && !name.startsWith('--') ? name : null;
}

async function main(): Promise<void> {
	// A deliberate one-off outranks TRANSCRIPT_SKIP_LANYANG_OG, which exists to
	// mute automatic push bakes.
	const only = filenameOverride();
	if (only) {
		const hono = sayitHonoRoot();
		const bakeScript = join(hono, 'scripts', 'bake-og-lanyang.ts');
		if (!existsSync(bakeScript)) {
			console.error(`[lanyang-og] sayit-hono not found at ${hono} (set SAYIT_HONO_ROOT)`);
			process.exitCode = 1;
			return;
		}
		try {
			process.stdout.write(runBake(hono, bakeScript, ['--filename', only]));
		} catch (err) {
			const failed = err as { stdout?: string; stderr?: string };
			process.stdout.write(failed.stdout ?? '');
			process.stderr.write(failed.stderr ?? `${String(err)}\n`);
			process.exitCode = 1;
		}
		return;
	}

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

	if (!(await waitForPushLanded(marker.after, 120_000))) {
		console.warn('[lanyang-og] push never landed on origin — skip bake');
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
		const out = runBake(hono, bakeScript, ['--git', marker.before, marker.after, '--transcript-root', REPO_ROOT]);
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
		// A --filename bake must not consume a pending push marker.
		if (filenameOverride()) return;
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