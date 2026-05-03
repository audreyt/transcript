#!/usr/bin/env bun

import { existsSync, statSync, readFileSync } from "node:fs";
import path from "node:path";
import { execFileSync, spawnSync } from "node:child_process";

export interface PullAndCheckDeps {
  cwd?: string;
  git?: (args: string[], cwd: string) => string;
  headRequest?: (url: string) => Promise<number>;
  invokeUpload?: (url: string, cwd: string) => number;
  sleep?: (ms: number) => Promise<void>;
  stdout?: (line: string) => void;
}

function defaultGit(args: string[], cwd: string): string {
  return execFileSync("git", args, { cwd, encoding: "utf-8" });
}

function defaultSleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function defaultHeadRequest(url: string): Promise<number> {
  const response = await fetch(url, { method: "HEAD" });
  return response.status;
}

function defaultInvokeUpload(url: string, cwd: string): number {
  const uploadScript = path.join(cwd, "upload.ts");
  const result = spawnSync("bun", [uploadScript, url], {
    cwd,
    stdio: "inherit",
  });
  return result.status ?? 1;
}

export function parseCurrentBranch(headText: string): string {
  const match = headText.match(/ref: refs\/heads\/(.+)/);
  if (!match) {
    throw new Error("Cannot parse current branch");
  }
  return match[1].trim();
}

export function parseRemoteGitHubSlug(remotesText: string): string {
  const match = remotesText.match(/github\.com[/:](.*?)(?:\/|\.git) \(fetch\)/);
  if (!match) {
    throw new Error("Cannot parse remote (needs to be in github)");
  }
  return match[1];
}

export function extractDiffRange(pullOutput: string): string | null {
  return pullOutput.match(/([a-f0-9]{7}\.\.[a-f0-9]{7})/)?.[1] ?? null;
}

export function listChangedMarkdownFiles(
  diffOutput: string,
  cwd: string,
): string[] {
  return diffOutput
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter((line) => line.endsWith(".md"))
    .filter((relativePath) => {
      const absolutePath = path.join(cwd, relativePath);
      return existsSync(absolutePath) && statSync(absolutePath).size > 0;
    });
}

export async function waitUntilAvailable(
  url: string,
  headRequest: (url: string) => Promise<number>,
  sleep: (ms: number) => Promise<void>,
): Promise<void> {
  while ((await headRequest(url)) !== 200) {
    await sleep(5_000);
  }
}

export async function runPullAndCheck(
  deps: PullAndCheckDeps = {},
  options: { maxCycles?: number } = {},
): Promise<number> {
  const cwd = deps.cwd ?? process.cwd();
  if (!existsSync(path.join(cwd, "upload.ts"))) {
    throw new Error("upload.ts needs to be present in the current directory");
  }

  const git = deps.git ?? defaultGit;
  const headRequest = deps.headRequest ?? defaultHeadRequest;
  const invokeUpload = deps.invokeUpload ?? defaultInvokeUpload;
  const sleep = deps.sleep ?? defaultSleep;
  const stdout = deps.stdout ?? ((line: string) => console.log(line));
  const maxCycles = options.maxCycles ?? Number.POSITIVE_INFINITY;

  const branch = parseCurrentBranch(readFileSync(path.join(cwd, ".git/HEAD"), "utf-8"));
  const slug = parseRemoteGitHubSlug(git(["remote", "-v"], cwd));
  const baseUrl = `https://raw.githubusercontent.com/${slug}/${branch}/`;

  for (let cycle = 0; cycle < maxCycles; cycle += 1) {
    const pulled = git(["pull"], cwd);
    const diffRange = extractDiffRange(pulled);
    if (!diffRange) {
      await sleep(60_000);
      continue;
    }

    const changedFiles = listChangedMarkdownFiles(
      git(["diff", "--name-only", diffRange], cwd),
      cwd,
    );
    if (changedFiles.length === 0) {
      await sleep(60_000);
      continue;
    }

    for (const relativePath of changedFiles) {
      const waitUrl = `${baseUrl}${encodeURIComponent(relativePath)}`;
      await waitUntilAvailable(waitUrl, headRequest, sleep);
      const status = invokeUpload(waitUrl, cwd);
      if (status !== 0) {
        throw new Error(`upload failed for ${waitUrl}`);
      }
      stdout(`Uploaded ${relativePath}`);
    }
  }

  return 0;
}

export async function main(
  deps: PullAndCheckDeps = {},
  options: { maxCycles?: number } = {},
): Promise<number> {
  return runPullAndCheck(deps, options);
}

if (import.meta.main) {
  try {
    process.exit(await main());
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
