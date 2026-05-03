import { describe, expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  Failure,
  gitChangedPaths,
  main,
  parseArgs,
  runValidate,
  validateAlternates,
  validateFilename,
  validateMdEncoding,
  validateMdTrailingWhitespace,
} from "../../scripts/validate";
import { commitAll, createTempDir, initGitRepo, runBun, writeFile } from "./test-helpers";

const REPO_ROOT = path.resolve(import.meta.dir, "../..");
const VALIDATE_SCRIPT = path.join(REPO_ROOT, "scripts/validate.ts");

function failures(): Failure[] {
  return [];
}

describe("validateFilename", () => {
  test("accepts valid filenames", () => {
    const root = createTempDir();
    const filePath = path.join(root, "2025-01-01-Hello-World.md");
    writeFileSync(filePath, "", "utf-8");
    const result = failures();
    validateFilename(filePath, result);
    expect(result).toEqual([]);
  });

  test("rejects missing date prefix", () => {
    const root = createTempDir();
    const filePath = path.join(root, "Just-A-Title.md");
    writeFileSync(filePath, "", "utf-8");
    const result = failures();
    validateFilename(filePath, result);
    expect(result[0]?.message).toContain("does not match");
  });

  test("rejects invalid dates", () => {
    const root = createTempDir();
    const filePath = path.join(root, "2025-13-01-Bad-Month.md");
    writeFileSync(filePath, "", "utf-8");
    const result = failures();
    validateFilename(filePath, result);
    expect(result[0]?.message).toContain("invalid ISO date");
  });

  test("rejects unexpected NFD names", () => {
    const root = createTempDir();
    const nfdName = "2025-01-01-café.md".normalize("NFD");
    const filePath = path.join(root, nfdName);
    writeFileSync(filePath, "", "utf-8");
    const result = failures();
    validateFilename(filePath, result);
    expect(result[0]?.message).toContain("NFC");
  });

  test("allows grandfathered names", () => {
    const root = createTempDir();
    const filePath = path.join(root, "README.md");
    writeFileSync(filePath, "", "utf-8");
    const result = failures();
    validateFilename(filePath, result);
    expect(result).toEqual([]);
  });
});

describe("validateMdEncoding", () => {
  test("accepts valid utf-8", () => {
    const root = createTempDir();
    const filePath = path.join(root, "a.md");
    writeFileSync(filePath, "hello 世界\n", "utf-8");
    const result = failures();
    validateMdEncoding(filePath, result);
    expect(result).toEqual([]);
  });

  test("flags a BOM", () => {
    const root = createTempDir();
    const filePath = path.join(root, "a.md");
    writeFileSync(filePath, Buffer.from([0xef, 0xbb, 0xbf, 0x68, 0x69]));
    const result = failures();
    validateMdEncoding(filePath, result);
    expect(result[0]?.message).toContain("BOM");
  });

  test("flags invalid bytes", () => {
    const root = createTempDir();
    const filePath = path.join(root, "a.md");
    writeFileSync(filePath, Buffer.from([0x80, 0x81, 0x82]));
    const result = failures();
    validateMdEncoding(filePath, result);
    expect(result[0]?.message).toContain("not valid UTF-8");
  });
});

describe("validateMdTrailingWhitespace", () => {
  test("flags trailing whitespace", () => {
    const root = createTempDir();
    const filePath = path.join(root, "a.md");
    writeFileSync(filePath, "clean\ndirty \nalso clean\n", "utf-8");
    const result = failures();
    validateMdTrailingWhitespace(filePath, result);
    expect(result).toHaveLength(1);
    expect(result[0]?.location).toBe("a.md:2");
  });

  test("accepts clean files", () => {
    const root = createTempDir();
    const filePath = path.join(root, "a.md");
    writeFileSync(filePath, "# title\n\ntext\n", "utf-8");
    const result = failures();
    validateMdTrailingWhitespace(filePath, result);
    expect(result).toEqual([]);
  });
});

describe("validateAlternates", () => {
  function writeAlt(root: string, body: string): string {
    const filePath = path.join(root, ".alternates");
    writeFileSync(filePath, body, "utf-8");
    return filePath;
  }

  test("accepts a happy path", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "");
    writeFile(root, "b.md", "");
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\n"), root, result);
    expect(result).toEqual([]);
  });

  test("skips comments and blank lines", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "");
    writeFile(root, "b.md", "");
    const result = failures();
    validateAlternates(writeAlt(root, "# comment\n\na.md\tb.md\n"), root, result);
    expect(result).toEqual([]);
  });

  test("ignores missing alternates files", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(path.join(root, ".alternates"), root, result);
    expect(result).toEqual([]);
  });

  test("requires a tab separator", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(writeAlt(root, "a.md b.md\n"), root, result);
    expect(result[0]?.message).toContain("tab-separated");
  });

  test("requires markdown suffixes", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.txt\n"), root, result);
    expect(result[0]?.message).toContain("must end with .md");
  });

  test("rejects self references", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "");
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\ta.md\n"), root, result);
    expect(result[0]?.message).toContain("self-reference");
  });

  test("requires root-level paths", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(writeAlt(root, "nested/a.md\tb.md\n"), root, result);
    expect(result[0]?.message).toContain("root-level");
  });

  test("rejects duplicate keys", () => {
    const root = createTempDir();
    for (const fileName of ["a.md", "b.md", "c.md"]) {
      writeFile(root, fileName, "");
    }
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\na.md\tc.md\n"), root, result);
    expect(result[0]?.message).toContain("already appears");
  });

  test("flags missing partner files", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "");
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\n"), root, result);
    expect(result[0]?.message).toContain("does not exist");
  });

  test("flags missing pairs unless both were deleted", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\n"), root, result);
    expect(result[0]?.message).toContain("both files missing");
  });

  test("allows both sides absent when both are deleted", () => {
    const root = createTempDir();
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\n"), root, result, new Set(["a.md", "b.md"]));
    expect(result).toEqual([]);
  });

  test("requires paired deletion", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "");
    const result = failures();
    validateAlternates(writeAlt(root, "a.md\tb.md\n"), root, result, new Set(["b.md"]));
    expect(result[0]?.message).toContain("delete this line or delete both");
  });
});

describe("gitChangedPaths", () => {
  test("filters to root markdown and alternates", () => {
    const calls: string[][] = [];
    const gitRunner = (args: string[]) => {
      calls.push(args);
      if (args.includes("--diff-filter=ACMR")) {
        return "a.md\nnested/b.md\n.alternates\n";
      }
      return "gone.md\nnested/c.md\n";
    };

    const result = gitChangedPaths("origin/master", "/tmp/repo", gitRunner);
    expect(calls).toHaveLength(2);
    expect(result).toEqual({
      mdChanged: ["a.md"],
      mdDeleted: ["gone.md"],
      alternatesChanged: true,
    });
  });
});

describe("parseArgs", () => {
  test("parses all mode", () => {
    expect(parseArgs(["--all", "--repo-root", "repo"])).toEqual({
      mode: "all",
      baseRef: "origin/master",
      repoRoot: "repo",
    });
  });

  test("parses changed mode with base", () => {
    expect(parseArgs(["--changed", "--base", "main"])).toEqual({
      mode: "changed",
      baseRef: "main",
      repoRoot: ".",
    });
  });

  test("rejects missing mode", () => {
    expect(() => parseArgs([])).toThrow("expected one of --all or --changed");
  });

  test("rejects unknown flags", () => {
    expect(() => parseArgs(["--wat"])).toThrow("unknown argument");
  });

  test("rejects missing option values", () => {
    expect(() => parseArgs(["--all", "--base"])).toThrow("--base requires a value");
    expect(() => parseArgs(["--all", "--repo-root"])).toThrow("--repo-root requires a value");
  });
});

describe("runValidate", () => {
  test("validates all files in a repository", () => {
    const root = createTempDir();
    writeFile(root, "2025-01-01-Hello.md", "hello\n");
    writeFile(root, ".alternates", "");
    const output: string[] = [];
    const code = runValidate(root, "all", "origin/master", {
      stdout: (line) => output.push(line),
      stderr: (line) => output.push(`ERR:${line}`),
    });
    expect(code).toBe(0);
    expect(output).toContain("validate(all): OK");
  });

  test("validates changed files with git output", () => {
    const root = createTempDir();
    writeFile(root, "2025-01-01-Hello.md", "hello \n");
    writeFile(root, ".alternates", "2025-01-01-Hello.md\tmissing.md\n");
    const errors: string[] = [];
    const code = runValidate(root, "changed", "origin/master", {
      gitRunner: (args) => {
        if (args.includes("--diff-filter=ACMR")) {
          return "2025-01-01-Hello.md\n";
        }
        return "missing.md\n";
      },
      stderr: (line) => errors.push(line),
      stdout: () => {},
    });
    expect(code).toBe(1);
    expect(errors.join("\n")).toContain("trailing whitespace");
    expect(errors.join("\n")).toContain("delete this line or delete both");
  });

  test("skips changed files that no longer exist", () => {
    const root = createTempDir();
    writeFile(root, ".alternates", "");
    const output: string[] = [];
    const code = runValidate(root, "changed", "origin/master", {
      gitRunner: (args) => {
        if (args.includes("--diff-filter=ACMR")) {
          return "missing.md\n";
        }
        return "";
      },
      stdout: (line) => output.push(line),
      stderr: () => {},
    });
    expect(code).toBe(0);
    expect(output).toContain("validate(changed): OK");
  });
});

describe("main", () => {
  test("returns an error for invalid arguments", () => {
    expect(main(["--wat"])).toBe(1);
  });

  test("validates the live corpus", () => {
    expect(runValidate(REPO_ROOT, "all")).toBe(0);
  });

  test("runs as a CLI", () => {
    const root = createTempDir();
    initGitRepo(root);
    writeFile(root, "2025-01-01-Hello.md", "hello\n");
    commitAll(root, "init");
    const result = runBun(root, VALIDATE_SCRIPT, ["--all", "--repo-root", root]);
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("validate(all): OK");
  });
});
