#!/usr/bin/env bun
/**
 * Sync changed markdown files and .alternates mappings to archive.tw.
 * Also syncs the .redirects snapshot (speech_redirects table) on every run.
 *
 * Environment variables:
 *   API_ENDPOINT             — POST/PATCH/DELETE markdown
 *   API_REDIRECTS_ENDPOINT   — PUT .redirects snapshot (optional; skipped if unset)
 *   TOKEN
 *   GITHUB_WORKSPACE
 *   BEFORE_SHA
 *   AFTER_SHA
 *   GITHUB_EVENT_NAME
 *   GITHUB_REF_NAME
 *
 * Pass --dry-run to print intended HTTP requests without sending them.
 */

import { existsSync, readFileSync } from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

export const MAX_RETRIES = 3;
export const BASE_DELAY_MS = 2_000;

export interface SyncEnvironment {
  API_ENDPOINT: string;
  API_REDIRECTS_ENDPOINT?: string;
  TOKEN: string;
  GITHUB_WORKSPACE: string;
  BEFORE_SHA?: string;
  AFTER_SHA?: string;
  GITHUB_EVENT_NAME?: string;
  GITHUB_REF_NAME?: string;
}

export interface SyncDeps {
  git?: (args: string[], cwd: string) => string;
  fetchImpl?: typeof fetch;
  sleep?: (ms: number) => Promise<void>;
  stdout?: (line: string) => void;
}

export interface RequestSpec {
  url: string;
  method: string;
  headers?: Record<string, string>;
  body?: string;
}

export interface AlternatesParseResult {
  filenamePairs: Record<string, string>;
  slugPairs: Record<string, string>;
}

export interface DiffSummary {
  addedFiles: string[];
  modifiedFiles: string[];
  removedFiles: string[];
  alternatesChanged: boolean;
}

function defaultGit(args: string[], cwd: string): string {
  return execFileSync("git", args, {
    cwd,
    encoding: "utf-8",
    stdio: ["ignore", "pipe", "pipe"],
  });
}

function defaultSleep(ms: number): Promise<void> {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function parseAlternatesText(rawText: string | null | undefined): AlternatesParseResult {
  const filenamePairs: Record<string, string> = {};
  const slugPairs: Record<string, string> = {};
  if (!rawText) {
    return { filenamePairs, slugPairs };
  }

  for (const rawLine of rawText.split(/\r?\n/)) {
    const line = rawLine.trim();
    if (!line || line.startsWith("#")) {
      continue;
    }
    const parts = line.split("\t");
    if (parts.length !== 2) {
      continue;
    }
    const a = path.basename(parts[0].trim());
    const b = path.basename(parts[1].trim());
    if (!a.endsWith(".md") || !b.endsWith(".md")) {
      continue;
    }

    filenamePairs[a] = b;
    filenamePairs[b] = a;
    slugPairs[a] = path.parse(b).name.toLowerCase();
    slugPairs[b] = path.parse(a).name.toLowerCase();
  }

  return { filenamePairs, slugPairs };
}

export function readFileAtRef(
  ref: string | undefined,
  relativePath: string,
  workspace: string,
  git: (args: string[], cwd: string) => string = defaultGit,
): string | null {
  if (!ref || ref === "0".repeat(40)) {
    return null;
  }

  try {
    return git(["show", `${ref}:${relativePath}`], workspace);
  } catch {
    return null;
  }
}

function uniq(values: string[]): string[] {
  return [...new Set(values)];
}

function isRootMarkdown(relativePath: string): boolean {
  return relativePath.endsWith(".md") && !relativePath.includes("/") && !relativePath.includes(path.sep);
}

export function parseNameStatusDiff(diffOutput: string): DiffSummary {
  const addedFiles: string[] = [];
  const modifiedFiles: string[] = [];
  const removedFiles: string[] = [];
  let alternatesChanged = false;

  const tokens = diffOutput
    .split("\0")
    .map((token) => token.trim())
    .filter(Boolean);

  for (let index = 0; index + 1 < tokens.length; index += 2) {
    const status = tokens[index];
    let relativePath = tokens[index + 1];
    if (
      relativePath.startsWith("\"") &&
      relativePath.endsWith("\"") &&
      relativePath.length >= 2
    ) {
      relativePath = relativePath.slice(1, -1);
    }

    if (relativePath === ".alternates") {
      alternatesChanged = true;
      continue;
    }

    if (!isRootMarkdown(relativePath)) {
      continue;
    }

    if (status.startsWith("A")) {
      addedFiles.push(relativePath);
    } else if (status.startsWith("M")) {
      modifiedFiles.push(relativePath);
    } else if (status.startsWith("D")) {
      removedFiles.push(relativePath);
    }
  }

  return {
    addedFiles: uniq(addedFiles),
    modifiedFiles: uniq(modifiedFiles),
    removedFiles: uniq(removedFiles),
    alternatesChanged,
  };
}

export function applyAlternatesImpact(
  summary: DiffSummary,
  beforeAltPairs: Record<string, string>,
  currentAltPairs: Record<string, string>,
  workspace: string,
): DiffSummary {
  if (!summary.alternatesChanged) {
    return summary;
  }

  const addedFiles = [...summary.addedFiles];
  const modifiedFiles = [...summary.modifiedFiles];
  const removedFiles = [...summary.removedFiles];

  const affectedFiles = uniq(
    [...Object.keys(beforeAltPairs), ...Object.keys(currentAltPairs)].filter(
      (relativePath) => beforeAltPairs[relativePath] !== currentAltPairs[relativePath],
    ),
  ).sort();

  for (const relativePath of affectedFiles) {
    if (
      addedFiles.includes(relativePath) ||
      modifiedFiles.includes(relativePath) ||
      removedFiles.includes(relativePath) ||
      !isRootMarkdown(relativePath)
    ) {
      continue;
    }

    if (existsSync(path.join(workspace, relativePath))) {
      modifiedFiles.push(relativePath);
    } else {
      removedFiles.push(relativePath);
    }
  }

  return {
    addedFiles: uniq(addedFiles),
    modifiedFiles: uniq(modifiedFiles),
    removedFiles: uniq(removedFiles),
    alternatesChanged: summary.alternatesChanged,
  };
}

export async function requestWithRetry(
  spec: RequestSpec,
  label: string,
  {
    dryRun = false,
    fetchImpl = fetch,
    sleep = defaultSleep,
    stdout = (line: string) => console.log(line),
    maxRetries = MAX_RETRIES,
  }: {
    dryRun?: boolean;
    fetchImpl?: typeof fetch;
    sleep?: (ms: number) => Promise<void>;
    stdout?: (line: string) => void;
    maxRetries?: number;
  } = {},
): Promise<{ status: number; body: string }> {
  if (dryRun) {
    stdout(`[dry-run] ${spec.method} ${spec.url}`);
    if (spec.body) {
      try {
        stdout(
          `[dry-run]   payload: ${JSON.stringify(JSON.parse(spec.body), null, 2)}`,
        );
      } catch {
        stdout(`[dry-run]   payload: ${spec.body.slice(0, 500)}`);
      }
    }
    stdout(`${label} -> HTTP 200 (dry-run)`);
    return { status: 200, body: "[dry-run]" };
  }

  for (let attempt = 1; attempt <= maxRetries; attempt += 1) {
    const response = await fetchImpl(spec.url, {
      method: spec.method,
      headers: spec.headers,
      body: spec.body,
    });
    const body = await response.text();

    if (response.status >= 500 && attempt < maxRetries) {
      const delay = BASE_DELAY_MS * 2 ** (attempt - 1);
      stdout(
        `${label} failed -> HTTP ${response.status} (attempt ${attempt}/${maxRetries}, retrying in ${delay / 1000}s)`,
      );
      stdout(body);
      await sleep(delay);
      continue;
    }

    if (!response.ok) {
      stdout(`${label} failed -> HTTP ${response.status}`);
      stdout(body);
      throw new Error(`HTTP ${response.status}: ${body}`);
    }

    stdout(`${label} -> HTTP ${response.status}`);
    stdout(body);
    return { status: response.status, body };
  }

  throw new Error(`exhausted retries for ${label}`);
}

function debug(stdout: (line: string) => void, message: string): void {
  stdout(`[debug] ${message}`);
}

function readWorkspaceFile(filePath: string): string {
  return readFileSync(filePath, "utf-8");
}

export function diffCommand(beforeSha: string, afterSha: string): string[] {
  if (beforeSha && beforeSha !== "0".repeat(40)) {
    return ["diff", "--name-status", "--no-renames", "-z", beforeSha, afterSha];
  }
  return ["show", "--name-status", "--pretty=format:", "--no-renames", "-z", afterSha];
}

function commonHeaders(token: string): Record<string, string> {
  return {
    Authorization: `Bearer ${token}`,
    "User-Agent": "github-actions/1.0",
    "X-GitHub-Repository": "audreyt/transcript",
  };
}

function buildUpsertSpec(
  endpoint: string,
  token: string,
  method: "POST" | "PATCH",
  payload: Record<string, string | null>,
): RequestSpec {
  return {
    url: endpoint,
    method,
    headers: {
      ...commonHeaders(token),
      "Content-Type": "application/json; charset=utf-8",
    },
    body: JSON.stringify(payload),
  };
}

function buildDeleteSpec(endpoint: string, token: string, relativePath: string): RequestSpec {
  const url = `${endpoint}?filename=${encodeURIComponent(relativePath)}`;
  return {
    url,
    method: "DELETE",
    headers: commonHeaders(token),
  };
}

function buildRedirectsSpec(endpoint: string, token: string, body: string): RequestSpec {
  return {
    url: endpoint,
    method: "PUT",
    headers: {
      ...commonHeaders(token),
      "Content-Type": "text/plain; charset=utf-8",
    },
    body,
  };
}

export async function runSync(
  env: SyncEnvironment,
  argv: string[] = [],
  deps: SyncDeps = {},
): Promise<number> {
  const dryRun = argv.includes("--dry-run");
  const stdout = deps.stdout ?? ((line: string) => console.log(line));
  const git = deps.git ?? defaultGit;
  const fetchImpl = deps.fetchImpl ?? fetch;
  const sleep = deps.sleep ?? defaultSleep;

  const endpoint = env.API_ENDPOINT;
  const token = env.TOKEN;
  const workspace = path.resolve(env.GITHUB_WORKSPACE);
  const beforeSha = env.BEFORE_SHA ?? "";
  const afterSha = env.AFTER_SHA ?? "";
  const eventName = env.GITHUB_EVENT_NAME ?? "";
  const refName = env.GITHUB_REF_NAME ?? "";

  if (!endpoint) {
    throw new Error("API_ENDPOINT is required");
  }
  if (!token) {
    throw new Error("TOKEN is required");
  }

  const alternatesPath = path.join(workspace, ".alternates");
  let currentAltPairs: Record<string, string> = {};
  let alternates: Record<string, string> = {};
  if (existsSync(alternatesPath)) {
    const parsed = parseAlternatesText(readWorkspaceFile(alternatesPath));
    currentAltPairs = parsed.filenamePairs;
    alternates = parsed.slugPairs;
    debug(stdout, `loaded ${Object.keys(alternates).length} alternate mappings`);
  }

  debug(stdout, `event=${eventName} ref=${refName}`);
  debug(stdout, `before=${beforeSha}`);
  debug(stdout, `after=${afterSha}`);
  if (dryRun) {
    debug(stdout, "DRY-RUN mode: no HTTP requests will be sent");
  }

  const command = diffCommand(beforeSha, afterSha);
  debug(stdout, `cmd=git ${command.join(" ")}`);
  const diffOutput = git(command, workspace);
  debug(stdout, "raw diff output:");
  stdout(diffOutput ? JSON.stringify(diffOutput) : "(empty)");

  const initialSummary = parseNameStatusDiff(diffOutput);
  debug(stdout, `added root md files=${JSON.stringify(initialSummary.addedFiles)}`);
  debug(stdout, `modified root md files=${JSON.stringify(initialSummary.modifiedFiles)}`);
  debug(stdout, `removed root md files=${JSON.stringify(initialSummary.removedFiles)}`);

  let summary = initialSummary;
  if (summary.alternatesChanged) {
    const beforeAltPairs = parseAlternatesText(
      readFileAtRef(beforeSha, ".alternates", workspace, git),
    ).filenamePairs;
    const affectedFiles = uniq(
      [...Object.keys(beforeAltPairs), ...Object.keys(currentAltPairs)].filter(
        (relativePath) => beforeAltPairs[relativePath] !== currentAltPairs[relativePath],
      ),
    ).sort();
    debug(stdout, `.alternates affected root md files=${JSON.stringify(affectedFiles)}`);
    summary = applyAlternatesImpact(summary, beforeAltPairs, currentAltPairs, workspace);
  }

  if (
    summary.addedFiles.length === 0 &&
    summary.modifiedFiles.length === 0 &&
    summary.removedFiles.length === 0
  ) {
    stdout("No root-level markdown or .alternates changes requiring sync.");
    return 0;
  }

  const failures: string[] = [];

  for (const relativePath of summary.addedFiles) {
    const absolutePath = path.join(workspace, relativePath);
    if (!existsSync(absolutePath)) {
      stdout(`Skip missing file: ${relativePath}`);
      continue;
    }

    try {
      const payload: Record<string, string | null> = {
        filename: relativePath,
        markdown: readWorkspaceFile(absolutePath),
      };
      if (alternates[relativePath]) {
        payload.alternate_filename = alternates[relativePath];
        debug(stdout, `alternate for ${relativePath}: ${alternates[relativePath]}`);
      }

      await requestWithRetry(
        buildUpsertSpec(endpoint, token, "POST", payload),
        `POST ${relativePath}`,
        { dryRun, fetchImpl, sleep, stdout },
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      stdout(`ERROR posting ${relativePath}: ${message}`);
      failures.push(relativePath);
    }
  }

  for (const relativePath of summary.modifiedFiles) {
    const absolutePath = path.join(workspace, relativePath);
    if (!existsSync(absolutePath)) {
      stdout(`Skip missing file: ${relativePath}`);
      continue;
    }

    const payload: Record<string, string | null> = {
      filename: relativePath,
      markdown: readWorkspaceFile(absolutePath),
      alternate_filename: alternates[relativePath] ?? null,
    };
    if (payload.alternate_filename) {
      debug(stdout, `alternate for ${relativePath}: ${payload.alternate_filename}`);
    }

    try {
      await requestWithRetry(
        buildUpsertSpec(endpoint, token, "PATCH", payload),
        `PATCH ${relativePath}`,
        { dryRun, fetchImpl, sleep, stdout },
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.startsWith("HTTP 404:")) {
        stdout(`PATCH ${relativePath} got 404, falling back to POST`);
        try {
          await requestWithRetry(
            buildUpsertSpec(endpoint, token, "POST", payload),
            `POST (fallback) ${relativePath}`,
            { dryRun, fetchImpl, sleep, stdout },
          );
        } catch (fallbackError) {
          const fallbackMessage =
            fallbackError instanceof Error ? fallbackError.message : String(fallbackError);
          stdout(`ERROR syncing ${relativePath}: ${fallbackMessage}`);
          failures.push(relativePath);
        }
      } else {
        stdout(`ERROR syncing ${relativePath}: ${message}`);
        failures.push(relativePath);
      }
    }
  }

  for (const relativePath of summary.removedFiles) {
    try {
      await requestWithRetry(
        buildDeleteSpec(endpoint, token, relativePath),
        `DELETE ${relativePath}`,
        { dryRun, fetchImpl, sleep, stdout },
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      if (message.startsWith("HTTP 404:")) {
        stdout(`DELETE ${relativePath}: already absent (HTTP 404), skipping`);
      } else {
        stdout(`ERROR deleting ${relativePath}: ${message}`);
        failures.push(relativePath);
      }
    }
  }

  // Sync .redirects snapshot to /api/redirects (speech_redirects SoT).
  // Runs every time, independent of the markdown diff: even if no .md
  // changed, the .redirects file may have been edited on its own.
  const redirectsEndpoint = env.API_REDIRECTS_ENDPOINT;
  const redirectsPath = path.join(workspace, ".redirects");
  if (redirectsEndpoint && existsSync(redirectsPath)) {
    try {
      const redirectsBody = readWorkspaceFile(redirectsPath);
      await requestWithRetry(
        buildRedirectsSpec(redirectsEndpoint, token, redirectsBody),
        "PUT .redirects",
        { dryRun, fetchImpl, sleep, stdout },
      );
    } catch (error) {
      const message = error instanceof Error ? error.message : String(error);
      stdout(`ERROR syncing .redirects: ${message}`);
      failures.push(".redirects");
    }
  } else if (!redirectsEndpoint) {
    debug(stdout, "API_REDIRECTS_ENDPOINT not set, skipping .redirects sync");
  } else {
    debug(stdout, ".redirects file absent, skipping redirects sync");
  }

  if (failures.length > 0) {
    stdout(`\nFailed to sync ${failures.length} file(s): ${JSON.stringify(failures)}`);
    return 1;
  }

  return 0;
}

export async function main(
  argv: string[] = Bun.argv.slice(2),
  env: NodeJS.ProcessEnv = process.env,
): Promise<number> {
  return runSync(
    {
      API_ENDPOINT: env.API_ENDPOINT ?? "",
      API_REDIRECTS_ENDPOINT: env.API_REDIRECTS_ENDPOINT,
      TOKEN: env.TOKEN ?? "",
      GITHUB_WORKSPACE: env.GITHUB_WORKSPACE ?? process.cwd(),
      BEFORE_SHA: env.BEFORE_SHA,
      AFTER_SHA: env.AFTER_SHA,
      GITHUB_EVENT_NAME: env.GITHUB_EVENT_NAME,
      GITHUB_REF_NAME: env.GITHUB_REF_NAME,
    },
    argv,
  );
}

if (import.meta.main) {
  process.exit(await main());
}
