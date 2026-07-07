#!/usr/bin/env bun
/**
 * Install pre-push hook to record *.md push range for Lanyang OG bake.
 * Bake runs via `bun run push` (after git push) — Git has no post-push hook.
 *
 * Run once: bun run setup-hooks
 */
import { chmodSync, existsSync, mkdirSync, readFileSync, rmSync, writeFileSync } from 'node:fs';
import { join, resolve } from 'node:path';

const ROOT = resolve(import.meta.dirname, '..');
const HOOKS_SRC = join(ROOT, '.githooks');
const GIT_HOOKS = join(ROOT, '.git', 'hooks');
const PRE_PUSH_FRAGMENT = 'pre-push-lanyang';
const MARKER_PREFIX = '# --- transcript ';

function chainPrePush(): void {
	const hookPath = join(GIT_HOOKS, 'pre-push');
	const srcPath = join(HOOKS_SRC, PRE_PUSH_FRAGMENT);
	const marker = `${MARKER_PREFIX}${PRE_PUSH_FRAGMENT} ---`;
	const runLine = `"${srcPath}"`;

	let body = '';
	if (existsSync(hookPath)) {
		body = readFileSync(hookPath, 'utf-8');
		if (body.includes(marker)) {
			console.log('hooks: pre-push already has pre-push-lanyang');
			return;
		}
	} else {
		body = `#!/bin/sh\nset -e\n`;
	}

	body += `\n${marker}\n${runLine}\n`;
	writeFileSync(hookPath, body, { mode: 0o755 });
	chmodSync(hookPath, 0o755);
	console.log(`hooks: chained ${PRE_PUSH_FRAGMENT} → .git/hooks/pre-push`);
}

/** Git never runs post-push; remove a prior mistaken install. */
function pruneDeadPostPushHook(): void {
	const hookPath = join(GIT_HOOKS, 'post-push');
	if (!existsSync(hookPath)) return;
	const body = readFileSync(hookPath, 'utf-8');
	if (!body.includes('post-push-lanyang')) return;
	rmSync(hookPath);
	console.log('hooks: removed dead .git/hooks/post-push (not a Git hook)');
}

function stripPostPushFromPrePush(): void {
	const hookPath = join(GIT_HOOKS, 'pre-push');
	if (!existsSync(hookPath)) return;
	const lines = readFileSync(hookPath, 'utf-8').split('\n');
	const out: string[] = [];
	let skip = false;
	for (const line of lines) {
		if (line.includes(`${MARKER_PREFIX}post-push-lanyang`)) {
			skip = true;
			continue;
		}
		if (skip) {
			if (line.startsWith(MARKER_PREFIX) && !line.includes('post-push-lanyang')) {
				skip = false;
				out.push(line);
			}
			continue;
		}
		out.push(line);
	}
	const trimmed = out.join('\n').replace(/\n{3,}/g, '\n\n').trimEnd() + '\n';
	writeFileSync(hookPath, trimmed, { mode: 0o755 });
}

mkdirSync(GIT_HOOKS, { recursive: true });
chmodSync(join(HOOKS_SRC, PRE_PUSH_FRAGMENT), 0o755);
stripPostPushFromPrePush();
pruneDeadPostPushHook();
chainPrePush();

console.log('Done. Use: bun run push -- [remote] [branch]  (git push + Lanyang bake)');
console.log('Plain git push: CI/sync only unless you run bun run bake-og');
console.log('Skip bake: TRANSCRIPT_SKIP_LANYANG_OG=1 bun run push -- …');