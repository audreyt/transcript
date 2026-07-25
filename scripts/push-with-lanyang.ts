#!/usr/bin/env bun
/**
 * Normal transcript publish flow: git push, then local Lanyang OG bake (after CI sync).
 * pre-push hook records the pushed range in .git/og-lanyang-push.json.
 *
 * Usage: bun run push -- [git push args…]   e.g. bun run push -- origin main
 *
 * Plain `git push` also bakes — the pre-push hook detaches it to a background
 * process logging to .git/og-lanyang-bake.log. This wrapper bakes in the
 * foreground instead, so use it when you want to watch the bake.
 * Skip bake: TRANSCRIPT_SKIP_LANYANG_OG=1 bun run push -- …
 */
import { spawnSync } from 'node:child_process';
import { resolve } from 'node:path';

const REPO_ROOT = resolve(import.meta.dirname, '..');
const gitArgs = process.argv.slice(2);

const push = spawnSync('git', ['push', ...gitArgs], {
	cwd: REPO_ROOT,
	stdio: 'inherit',
	// Tells the pre-push hook not to detach its own bake — this script bakes
	// below, in the foreground, where the operator can see the output.
	env: { ...process.env, TRANSCRIPT_LANYANG_PUSH_WRAPPER: '1' },
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