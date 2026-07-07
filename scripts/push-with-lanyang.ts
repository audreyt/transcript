#!/usr/bin/env bun
/**
 * Normal transcript publish flow: git push, then local Lanyang OG bake (after CI sync).
 * pre-push hook records the pushed range in .git/og-lanyang-push.json.
 *
 * Usage: bun run push -- [git push args…]   e.g. bun run push -- origin main
 *
 * Plain `git push` does NOT run bake — Git has no post-push hook.
 * Skip bake: TRANSCRIPT_SKIP_LANYANG_OG=1 bun run push -- …
 */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const gitArgs = process.argv.slice(2);

const push = spawnSync('git', ['push', ...gitArgs], {
	cwd: REPO_ROOT,
	stdio: 'inherit',
});
if (push.status !== 0) {
	process.exit(push.status ?? 1);
}

if (process.env.TRANSCRIPT_SKIP_LANYANG_OG === '1') {
	console.log('[lanyang-og] TRANSCRIPT_SKIP_LANYANG_OG=1 — skip post-push bake');
	process.exit(0);
}

const bake = spawnSync('bun', ['scripts/bake_lanyang_after_push.ts'], {
	cwd: REPO_ROOT,
	stdio: 'inherit',
	env: process.env,
});
process.exit(bake.status ?? 0);