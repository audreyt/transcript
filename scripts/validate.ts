#!/usr/bin/env bun
/**
 * Validate transcript content: filenames, encoding, and .alternates integrity.
 *
 * Usage:
 *   bun scripts/validate.ts --all
 *   bun scripts/validate.ts --changed
 *   bun scripts/validate.ts --changed --base REF
 */

import { existsSync, readFileSync, readdirSync } from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

export const FILENAME_RE = /^(\d{4})-(\d{2})-(\d{2})-.+\.md$/;

export const GRANDFATHERED_FILENAME = new Set([
  "README.md",
  "1999年全國司法改革會議.md",
  "2019\u201112\u201124-Interview-with-Leen-Vervaeke.md",
  "2024-03-29「2024 總統盃黑客松」第一次工作小組會議逐字稿.md",
]);

export const GRANDFATHERED_NFC_DRIFT = new Set([
  "2016-01-26-tout-numérique.md",
  "2016-03-09-Interview-with-Amaëlle-Guiton.md",
  "2017-04-25-Interview-with-Javier-C.-Hernández.md",
  "2017-08-28-Interview-with-Danny-Lämmerhirt.md",
  "2017-10-09-Interview-with-La-27e-Région.md",
  "2017-12-13-Meeting-with-Reporters-sans-frontières.md",
  "2018-09-23-Conversation-with-Mariéme-Jamme.md",
  "2018-10-04-Conversation-with-Clément-Mabi.md",
  "2019-07-17-Alexander-Görlach-visits.md",
  "2019-10-08-Interview-with-Renat-Künzi.md",
  "2019-11-27-Hernâni-Marques-and-David-Lanzendörfer-visit.md",
  "2019-12-07-Interview-with-Sébastien-Lebelzic.md",
  "2020-02-23-Interview-with-Ima-Sanchís.md",
  "2020-03-04-Dawid-Jańczak-visits.md",
  "2021-06-21-Conversation-with-Franci-Demšar.md",
  "2022-08-04-Interview-with-Dr.-Frédéric-Krumbein.md",
  "2023-10-18-Conversation-with-Yasmin-Green-and-Örkesh-Dölet.md",
  "2023-11-07-Conversation-with-Yongsuk-Jang-and-Göran-Marklund.md",
  "2025-11-14-Interview-with-Visegrád-24.md",
]);

const FATAL_UTF8_DECODER = new TextDecoder("utf-8", { fatal: true });

export class Failure {
  constructor(
    public readonly location: string,
    public readonly message: string,
  ) {}

  toString(): string {
    return `${this.location}: ${this.message}`;
  }
}

export type GitRunner = (
  args: string[],
  options: { cwd: string },
) => string;

export interface ValidateRunOptions {
  gitRunner?: GitRunner;
  stdout?: (line: string) => void;
  stderr?: (line: string) => void;
}

function defaultGitRunner(args: string[], options: { cwd: string }): string {
  return execFileSync("git", args, {
    cwd: options.cwd,
    encoding: "utf-8",
  });
}

function isValidIsoDate(yearText: string, monthText: string, dayText: string): boolean {
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const date = new Date(Date.UTC(year, month - 1, day));
  return (
    date.getUTCFullYear() === year &&
    date.getUTCMonth() === month - 1 &&
    date.getUTCDate() === day
  );
}

export function validateFilename(filePath: string, failures: Failure[]): void {
  const name = path.basename(filePath);
  const nfc = name.normalize("NFC");
  if (GRANDFATHERED_FILENAME.has(nfc)) {
    return;
  }

  const match = name.match(FILENAME_RE);
  if (!match) {
    failures.push(new Failure(name, "filename does not match YYYY-MM-DD-<slug>.md"));
    return;
  }

  const [, year, month, day] = match;
  if (!isValidIsoDate(year, month, day)) {
    failures.push(
      new Failure(name, `filename has invalid ISO date: ${year}-${month}-${day}`),
    );
  }

  if (nfc !== name && !GRANDFATHERED_NFC_DRIFT.has(nfc)) {
    failures.push(
      new Failure(name, "filename is not NFC-normalized (macOS NFD drift?)"),
    );
  }
}

export function validateMdEncoding(filePath: string, failures: Failure[]): void {
  const raw = readFileSync(filePath);
  if (raw.subarray(0, 3).equals(Buffer.from([0xef, 0xbb, 0xbf]))) {
    failures.push(new Failure(path.basename(filePath), "file has UTF-8 BOM; strip it"));
  }

  try {
    FATAL_UTF8_DECODER.decode(raw);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    failures.push(
      new Failure(path.basename(filePath), `file is not valid UTF-8: ${message}`),
    );
  }
}

export function validateMdTrailingWhitespace(filePath: string, failures: Failure[]): void {
  const text = readFileSync(filePath, "utf-8");
  for (const [index, line] of text.split(/\r?\n/).entries()) {
    if (line.trimEnd() !== line) {
      failures.push(
        new Failure(`${path.basename(filePath)}:${index + 1}`, "trailing whitespace"),
      );
    }
  }
}

export function validateAlternates(
  alternatePath: string,
  repoRoot: string,
  failures: Failure[],
  deletedInDiff: Set<string> = new Set(),
): void {
  if (!existsSync(alternatePath)) {
    return;
  }

  const seenKeys = new Map<string, number>();
  const text = readFileSync(alternatePath, "utf-8");
  for (const [index, rawLine] of text.split(/\r?\n/).entries()) {
    const line = rawLine.trim();
    const location = `.alternates:${index + 1}`;
    if (!line || line.startsWith("#")) {
      continue;
    }

    const parts = line.split("\t");
    if (parts.length !== 2) {
      failures.push(
        new Failure(location, `expected 2 tab-separated fields, got ${parts.length}`),
      );
      continue;
    }

    const [a, b] = parts.map((part) => part.trim());
    if (!a.endsWith(".md") || !b.endsWith(".md")) {
      failures.push(new Failure(location, "both sides must end with .md"));
      continue;
    }
    if (a === b) {
      failures.push(new Failure(location, `self-reference: ${a}`));
      continue;
    }
    if (a.includes("/") || b.includes("/")) {
      failures.push(new Failure(location, "paths must be root-level (no /)"));
      continue;
    }

    for (const side of [a, b]) {
      const prior = seenKeys.get(side);
      if (prior !== undefined) {
        failures.push(
          new Failure(
            location,
            `${side} already appears on line ${prior}; each file may appear in one pair only`,
          ),
        );
      } else {
        seenKeys.set(side, index + 1);
      }
    }

    const aPresent = existsSync(path.join(repoRoot, a));
    const bPresent = existsSync(path.join(repoRoot, b));
    if (aPresent && bPresent) {
      continue;
    }

    if (!aPresent && !bPresent) {
      if (deletedInDiff.has(a) && deletedInDiff.has(b)) {
        continue;
      }
      failures.push(
        new Failure(location, `both files missing from working tree: ${a}, ${b}`),
      );
      continue;
    }

    const missing = aPresent ? b : a;
    const present = aPresent ? a : b;
    if (deletedInDiff.has(missing)) {
      failures.push(
        new Failure(
          location,
          `${missing} is being removed but paired ${present} remains — delete this line or delete both`,
        ),
      );
    } else {
      failures.push(
        new Failure(
          location,
          `${missing} is referenced but does not exist; paired file ${present} is present`,
        ),
      );
    }
  }
}

export function gitChangedPaths(
  baseRef: string,
  repoRoot: string,
  gitRunner: GitRunner = defaultGitRunner,
): { mdChanged: string[]; mdDeleted: string[]; alternatesChanged: boolean } {
  const diff = (filter: string): string[] => {
    const output = gitRunner(
      ["diff", "--name-only", `--diff-filter=${filter}`, `${baseRef}...HEAD`],
      { cwd: repoRoot },
    );
    return output
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean);
  };

  const isRootMarkdown = (relativePath: string): boolean => {
    const parsed = path.parse(relativePath);
    return parsed.ext === ".md" && !relativePath.includes(path.sep) && !relativePath.includes("/");
  };

  const addedModified = diff("ACMR");
  const deleted = diff("D");
  return {
    mdChanged: addedModified.filter(isRootMarkdown),
    mdDeleted: deleted.filter(isRootMarkdown),
    alternatesChanged:
      addedModified.includes(".alternates") || deleted.includes(".alternates"),
  };
}

export function runValidate(
  repoRoot: string,
  mode: "all" | "changed",
  baseRef = "origin/master",
  options: ValidateRunOptions = {},
): number {
  const stdout = options.stdout ?? ((line: string) => console.log(line));
  const stderr = options.stderr ?? ((line: string) => console.error(line));
  const gitRunner = options.gitRunner ?? defaultGitRunner;
  const failures: Failure[] = [];

  if (mode === "all") {
    const markdownFiles = readdirSync(repoRoot)
      .filter((name) => name.endsWith(".md"))
      .sort();

    for (const fileName of markdownFiles) {
      const filePath = path.join(repoRoot, fileName);
      validateFilename(filePath, failures);
      validateMdEncoding(filePath, failures);
    }

    validateAlternates(path.join(repoRoot, ".alternates"), repoRoot, failures);
  } else {
    const { mdChanged, mdDeleted } = gitChangedPaths(baseRef, repoRoot, gitRunner);
    for (const relativePath of mdChanged) {
      const filePath = path.join(repoRoot, relativePath);
      if (!existsSync(filePath)) {
        continue;
      }
      validateFilename(filePath, failures);
      validateMdEncoding(filePath, failures);
      validateMdTrailingWhitespace(filePath, failures);
    }

    validateAlternates(
      path.join(repoRoot, ".alternates"),
      repoRoot,
      failures,
      new Set(mdDeleted),
    );
  }

  if (failures.length > 0) {
    for (const failure of failures) {
      stderr(failure.toString());
    }
    stderr(`\n${failures.length} validation failure(s)`);
    return 1;
  }

  stdout(`validate(${mode}): OK`);
  return 0;
}

export interface ParsedValidateArgs {
  mode: "all" | "changed";
  baseRef: string;
  repoRoot: string;
}

export function parseArgs(argv: string[]): ParsedValidateArgs {
  let mode: "all" | "changed" | null = null;
  let baseRef = "origin/master";
  let repoRoot = ".";

  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index];
    if (arg === "--all") {
      mode = "all";
    } else if (arg === "--changed") {
      mode = "changed";
    } else if (arg === "--base") {
      index += 1;
      if (!argv[index]) {
        throw new Error("--base requires a value");
      }
      baseRef = argv[index];
    } else if (arg === "--repo-root") {
      index += 1;
      if (!argv[index]) {
        throw new Error("--repo-root requires a value");
      }
      repoRoot = argv[index];
    } else {
      throw new Error(`unknown argument: ${arg}`);
    }
  }

  if (!mode) {
    throw new Error("expected one of --all or --changed");
  }

  return { mode, baseRef, repoRoot };
}

export function usage(): string {
  return [
    "Usage:",
    "  bun scripts/validate.ts --all",
    "  bun scripts/validate.ts --changed",
    "  bun scripts/validate.ts --changed --base REF",
  ].join("\n");
}

export function main(argv: string[] = Bun.argv.slice(2)): number {
  try {
    const parsed = parseArgs(argv);
    return runValidate(path.resolve(parsed.repoRoot), parsed.mode, parsed.baseRef);
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error(message);
    console.error(usage());
    return 1;
  }
}

if (import.meta.main) {
  process.exit(main());
}
