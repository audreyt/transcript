import { mkdtempSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";

export function createTempDir(prefix = "transcript-"): string {
  return mkdtempSync(path.join(tmpdir(), prefix));
}

export function git(cwd: string, args: string[]): string {
  return execFileSync("git", args, { cwd, encoding: "utf-8" });
}

export function initGitRepo(cwd: string): void {
  git(cwd, ["init", "-b", "master"]);
  git(cwd, ["config", "user.name", "Codex"]);
  git(cwd, ["config", "user.email", "codex@example.com"]);
}

export function writeFile(cwd: string, relativePath: string, contents: string): void {
  writeFileSync(path.join(cwd, relativePath), contents, "utf-8");
}

export function commitAll(cwd: string, message: string): string {
  git(cwd, ["add", "."]);
  git(cwd, ["commit", "-m", message, "--no-gpg-sign"]);
  return git(cwd, ["rev-parse", "HEAD"]).trim();
}

export function runBun(
  cwd: string,
  scriptPath: string,
  args: string[] = [],
  options: {
    env?: Record<string, string>;
    input?: string;
  } = {},
): { status: number | null; stdout: string; stderr: string } {
  const result = spawnSync("bun", [scriptPath, ...args], {
    cwd,
    input: options.input,
    encoding: "utf-8",
    env: {
      ...process.env,
      ...options.env,
    },
  });

  return {
    status: result.status,
    stdout: result.stdout,
    stderr: result.stderr,
  };
}
