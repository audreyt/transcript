import { describe, expect, test } from "bun:test";
import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import {
  extractDiffRange,
  listChangedMarkdownFiles,
  main,
  parseCurrentBranch,
  parseRemoteGitHubSlug,
  runPullAndCheck,
  waitUntilAvailable,
} from "../../pull-and-check";
import { createTempDir, writeFile } from "./test-helpers";

describe("pull-and-check helpers", () => {
  test("parses the current branch", () => {
    expect(parseCurrentBranch("ref: refs/heads/master\n")).toBe("master");
    expect(() => parseCurrentBranch("detached")).toThrow("Cannot parse current branch");
  });

  test("parses GitHub remotes", () => {
    expect(
      parseRemoteGitHubSlug(
        "origin\tgit@github.com:audreyt/transcript.git (fetch)\norigin\tgit@github.com:audreyt/transcript.git (push)\n",
      ),
    ).toBe("audreyt/transcript");
    expect(() => parseRemoteGitHubSlug("origin\tfile:///tmp/repo (fetch)")).toThrow(
      "Cannot parse remote",
    );
  });

  test("extracts pull ranges", () => {
    expect(extractDiffRange("Updating abcdef0..1234567")).toBe("abcdef0..1234567");
    expect(extractDiffRange("Already up to date.")).toBeNull();
  });

  test("lists changed markdown files that still exist", () => {
    const root = createTempDir();
    writeFile(root, "a.md", "hello\n");
    writeFile(root, "empty.md", "");
    writeFile(root, "note.txt", "skip\n");
    expect(listChangedMarkdownFiles("a.md\nempty.md\nnote.txt\n", root)).toEqual(["a.md"]);
  });

  test("waits until a URL returns HTTP 200", async () => {
    const seen: number[] = [];
    let attempts = 0;
    await waitUntilAvailable(
      "https://example.com",
      async () => {
        attempts += 1;
        seen.push(attempts);
        return attempts < 3 ? 404 : 200;
      },
      async () => {},
    );
    expect(seen).toEqual([1, 2, 3]);
  });
});

describe("runPullAndCheck", () => {
  test("requires upload.ts in the cwd", async () => {
    await expect(runPullAndCheck({ cwd: createTempDir() }, { maxCycles: 1 })).rejects.toThrow(
      "upload.ts needs to be present",
    );
  });

  test("sleeps when nothing new arrives", async () => {
    const root = createTempDir();
    mkdirSync(path.join(root, ".git"));
    writeFileSync(path.join(root, ".git/HEAD"), "ref: refs/heads/master\n", "utf-8");
    writeFile(root, "upload.ts", "");
    const sleeps: number[] = [];

    const code = await runPullAndCheck(
      {
        cwd: root,
        git: (args) => {
          if (args[0] === "remote") {
            return "origin\tgit@github.com:audreyt/transcript.git (fetch)\n";
          }
          if (args[0] === "pull") {
            return "Already up to date.";
          }
          return "";
        },
        sleep: async (ms) => {
          sleeps.push(ms);
        },
      },
      { maxCycles: 1 },
    );

    expect(code).toBe(0);
    expect(sleeps).toEqual([60_000]);
  });

  test("waits for raw github files and invokes upload", async () => {
    const root = createTempDir();
    mkdirSync(path.join(root, ".git"));
    writeFileSync(path.join(root, ".git/HEAD"), "ref: refs/heads/master\n", "utf-8");
    writeFile(root, "upload.ts", "");
    writeFile(root, "speech.md", "hello\n");
    const uploads: string[] = [];
    const sleeps: number[] = [];
    let headCalls = 0;

    const code = await runPullAndCheck(
      {
        cwd: root,
        git: (args) => {
          if (args[0] === "remote") {
            return "origin\tgit@github.com:audreyt/transcript.git (fetch)\n";
          }
          if (args[0] === "pull") {
            return "Updating abcdef0..1234567";
          }
          if (args[0] === "diff") {
            return "speech.md\n";
          }
          return "";
        },
        headRequest: async () => {
          headCalls += 1;
          return headCalls < 2 ? 404 : 200;
        },
        invokeUpload: (url) => {
          uploads.push(url);
          return 0;
        },
        sleep: async (ms) => {
          sleeps.push(ms);
        },
      },
      { maxCycles: 1 },
    );

    expect(code).toBe(0);
    expect(sleeps).toEqual([5_000]);
    expect(uploads).toEqual([
      "https://raw.githubusercontent.com/audreyt/transcript/master/speech.md",
    ]);
  });

  test("fails when upload returns a non-zero status", async () => {
    const root = createTempDir();
    mkdirSync(path.join(root, ".git"));
    writeFileSync(path.join(root, ".git/HEAD"), "ref: refs/heads/master\n", "utf-8");
    writeFile(root, "upload.ts", "");
    writeFile(root, "speech.md", "hello\n");

    await expect(
      runPullAndCheck(
        {
          cwd: root,
          git: (args) => {
            if (args[0] === "remote") {
              return "origin\tgit@github.com:audreyt/transcript.git (fetch)\n";
            }
            if (args[0] === "pull") {
              return "Updating abcdef0..1234567";
            }
            if (args[0] === "diff") {
              return "speech.md\n";
            }
            return "";
          },
          headRequest: async () => 200,
          invokeUpload: () => 1,
          sleep: async () => {},
        },
        { maxCycles: 1 },
      ),
    ).rejects.toThrow("upload failed");
  });
});

describe("main", () => {
  test("delegates to runPullAndCheck", async () => {
    const root = createTempDir();
    mkdirSync(path.join(root, ".git"));
    writeFileSync(path.join(root, ".git/HEAD"), "ref: refs/heads/master\n", "utf-8");
    writeFile(root, "upload.ts", "");

    const code = await main(
      {
        cwd: root,
        git: (args) => {
          if (args[0] === "remote") {
            return "origin\tgit@github.com:audreyt/transcript.git (fetch)\n";
          }
          if (args[0] === "pull") {
            return "Already up to date.";
          }
          return "";
        },
        sleep: async () => {},
      },
      { maxCycles: 1 },
    );

    expect(code).toBe(0);
  });
});
