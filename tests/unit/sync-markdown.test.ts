import { describe, expect, test } from "bun:test";
import path from "node:path";
import {
  applyAlternatesImpact,
  diffCommand,
  main,
  parseAlternatesText,
  parseNameStatusDiff,
  readFileAtRef,
  requestWithRetry,
  runSync,
} from "../../scripts/sync_markdown";
import { commitAll, createTempDir, initGitRepo, runBun, writeFile } from "./test-helpers";

const REPO_ROOT = path.resolve(import.meta.dir, "../..");
const SYNC_SCRIPT = path.join(REPO_ROOT, "scripts/sync_markdown.ts");

describe("parseAlternatesText", () => {
  test("builds filename and slug maps", () => {
    expect(
      parseAlternatesText("# comment\none.md\ttwo.md\nbroken line\nthree.md\tfour.txt\n"),
    ).toEqual({
      filenamePairs: {
        "one.md": "two.md",
        "two.md": "one.md",
      },
      slugPairs: {
        "one.md": "two",
        "two.md": "one",
      },
    });
  });
});

describe("readFileAtRef", () => {
  test("returns null for empty refs", () => {
    expect(readFileAtRef("", ".alternates", "/tmp")).toBeNull();
    expect(readFileAtRef("0".repeat(40), ".alternates", "/tmp")).toBeNull();
  });

  test("returns file contents from git", () => {
    const repo = createTempDir();
    initGitRepo(repo);
    writeFile(repo, ".alternates", "a.md\tb.md\n");
    const sha = commitAll(repo, "init");
    expect(readFileAtRef(sha, ".alternates", repo)?.trim()).toBe("a.md\tb.md");
  });

  test("returns null on missing paths", () => {
    const repo = createTempDir();
    initGitRepo(repo);
    writeFile(repo, "a.md", "hello\n");
    const sha = commitAll(repo, "init");
    expect(readFileAtRef(sha, ".alternates", repo)).toBeNull();
  });
});

describe("parseNameStatusDiff", () => {
  test("parses nul-delimited git diff output", () => {
    const diff = [
      "A",
      "added.md",
      "M",
      ".alternates",
      "M",
      "nested/skip.md",
      "D",
      '"gone.md"',
      "",
    ].join("\0");

    expect(parseNameStatusDiff(diff)).toEqual({
      addedFiles: ["added.md"],
      modifiedFiles: [],
      removedFiles: ["gone.md"],
      alternatesChanged: true,
    });
  });
});

describe("applyAlternatesImpact", () => {
  test("re-syncs present files and removes stale targets", () => {
    const root = createTempDir();
    writeFile(root, "fresh.md", "fresh\n");
    const result = applyAlternatesImpact(
      {
        addedFiles: [],
        modifiedFiles: ["already.md"],
        removedFiles: [],
        alternatesChanged: true,
      },
      { "fresh.md": "old.md", "stale.md": "gone.md" },
      { "fresh.md": "new.md" },
      root,
    );

    expect(result).toEqual({
      addedFiles: [],
      modifiedFiles: ["already.md", "fresh.md"],
      removedFiles: ["stale.md"],
      alternatesChanged: true,
    });
  });
});

describe("requestWithRetry", () => {
  test("prints dry-run requests", async () => {
    const output: string[] = [];
    const response = await requestWithRetry(
      {
        url: "https://example.com",
        method: "POST",
        body: JSON.stringify({ hello: "world" }),
      },
      "POST test.md",
      {
        dryRun: true,
        stdout: (line) => output.push(line),
      },
    );

    expect(response).toEqual({ status: 200, body: "[dry-run]" });
    expect(output.join("\n")).toContain("[dry-run] POST https://example.com");
    expect(output.join("\n")).toContain("POST test.md -> HTTP 200 (dry-run)");
  });

  test("retries 5xx responses", async () => {
    const output: string[] = [];
    let attempts = 0;
    const response = await requestWithRetry(
      { url: "https://example.com", method: "PATCH" },
      "PATCH test.md",
      {
        fetchImpl: async () => {
          attempts += 1;
          if (attempts < 3) {
            return new Response("bad", { status: 500 });
          }
          return new Response("ok", { status: 200 });
        },
        sleep: async () => {},
        stdout: (line) => output.push(line),
      },
    );

    expect(response).toEqual({ status: 200, body: "ok" });
    expect(attempts).toBe(3);
    expect(output.join("\n")).toContain("retrying in 2s");
  });

  test("throws on non-retriable errors", async () => {
    await expect(
      requestWithRetry(
        { url: "https://example.com", method: "DELETE" },
        "DELETE gone.md",
        {
          fetchImpl: async () => new Response("missing", { status: 404 }),
          stdout: () => {},
        },
      ),
    ).rejects.toThrow("HTTP 404");
  });
});

describe("diffCommand", () => {
  test("uses git diff when there is a real before sha", () => {
    expect(diffCommand("abc", "def")).toEqual([
      "diff",
      "--name-status",
      "--no-renames",
      "-z",
      "abc",
      "def",
    ]);
  });

  test("uses git show for first pushes", () => {
    expect(diffCommand("0".repeat(40), "def")).toEqual([
      "show",
      "--name-status",
      "--pretty=format:",
      "--no-renames",
      "-z",
      "def",
    ]);
  });
});

describe("runSync", () => {
  test("prints no-op runs", async () => {
    const root = createTempDir();
    const output: string[] = [];
    const code = await runSync(
      {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: root,
        BEFORE_SHA: "abc",
        AFTER_SHA: "def",
      },
      ["--dry-run"],
      {
        git: () => "",
        stdout: (line) => output.push(line),
      },
    );

    expect(code).toBe(0);
    expect(output).toContain("No root-level markdown or .alternates changes requiring sync.");
  });

  test("handles added modified removed and alternates-driven resync in dry-run mode", async () => {
    const root = createTempDir();
    writeFile(root, "added.md", "# added\n");
    writeFile(root, "changed.md", "# changed\n");
    writeFile(root, "fresh.md", "# fresh\n");
    writeFile(root, ".alternates", "changed.md\tfresh.md\n");
    const diffOutput = ["A", "added.md", "M", "changed.md", "D", "gone.md", "M", ".alternates", ""].join("\0");
    const output: string[] = [];

    const code = await runSync(
      {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: root,
        BEFORE_SHA: "abc",
        AFTER_SHA: "def",
        GITHUB_EVENT_NAME: "push",
        GITHUB_REF_NAME: "master",
      },
      ["--dry-run"],
      {
        git: (args) => {
          if (args[0] === "diff") {
            return diffOutput;
          }
          if (args[0] === "show") {
            return "changed.md\tstale.md\nstale.md\tghost.md\n";
          }
          return "";
        },
        stdout: (line) => output.push(line),
      },
    );

    const joined = output.join("\n");
    expect(code).toBe(0);
    expect(joined).toContain("POST added.md");
    expect(joined).toContain("PATCH changed.md");
    expect(joined).toContain("PATCH fresh.md");
    expect(joined).toContain("DELETE gone.md");
    expect(joined).toContain("DELETE stale.md");
  });

  test("falls back from patch to post and tolerates missing deletes", async () => {
    const root = createTempDir();
    writeFile(root, "changed.md", "# changed\n");
    const diffOutput = ["M", "changed.md", "D", "gone.md", ""].join("\0");
    const output: string[] = [];
    const responses = [
      new Response("missing", { status: 404 }),
      new Response("created", { status: 200 }),
      new Response("gone", { status: 404 }),
    ];

    const code = await runSync(
      {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: root,
        BEFORE_SHA: "abc",
        AFTER_SHA: "def",
      },
      [],
      {
        git: (args) => (args[0] === "diff" ? diffOutput : ""),
        fetchImpl: async () => responses.shift() ?? new Response("ok", { status: 200 }),
        sleep: async () => {},
        stdout: (line) => output.push(line),
      },
    );

    expect(code).toBe(0);
    expect(output.join("\n")).toContain("PATCH changed.md got 404, falling back to POST");
    expect(output.join("\n")).toContain("DELETE gone.md: already absent (HTTP 404), skipping");
  });

  test("reports failed syncs", async () => {
    const root = createTempDir();
    writeFile(root, "added.md", "# added\n");
    const diffOutput = ["A", "added.md", ""].join("\0");
    const output: string[] = [];

    const code = await runSync(
      {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: root,
        BEFORE_SHA: "abc",
        AFTER_SHA: "def",
      },
      [],
      {
        git: (args) => (args[0] === "diff" ? diffOutput : ""),
        fetchImpl: async () => new Response("bad", { status: 500 }),
        sleep: async () => {},
        stdout: (line) => output.push(line),
      },
    );

    expect(code).toBe(1);
    expect(output.join("\n")).toContain("Failed to sync 1 file(s)");
  });

  test("requires endpoint and token", async () => {
    await expect(
      runSync(
        {
          API_ENDPOINT: "",
          TOKEN: "",
          GITHUB_WORKSPACE: createTempDir(),
        },
        [],
        { git: () => "" },
      ),
    ).rejects.toThrow("API_ENDPOINT is required");

    await expect(
      runSync(
        {
          API_ENDPOINT: "https://archive.tw/api/upload_markdown",
          TOKEN: "",
          GITHUB_WORKSPACE: createTempDir(),
        },
        [],
        { git: () => "" },
      ),
    ).rejects.toThrow("TOKEN is required");
  });
});

describe("main and cli", () => {
  test("main reads process-like env", async () => {
    const root = createTempDir();
    initGitRepo(root);
    writeFile(root, "2025-01-01-Hello.md", "hello\n");
    const sha = commitAll(root, "init");
    const code = await main(["--dry-run"], {
      API_ENDPOINT: "https://archive.tw/api/upload_markdown",
      TOKEN: "secret",
      GITHUB_WORKSPACE: root,
      BEFORE_SHA: sha,
      AFTER_SHA: sha,
    });
    expect(code).toBe(0);
  });

  test("runs as a CLI against a temp repo", () => {
    const repo = createTempDir();
    initGitRepo(repo);
    writeFile(repo, "2025-01-01-Hello.md", "hello\n");
    const sha = commitAll(repo, "init");
    const result = runBun(repo, SYNC_SCRIPT, ["--dry-run"], {
      env: {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: repo,
        BEFORE_SHA: sha,
        AFTER_SHA: sha,
      },
    });
    expect(result.status).toBe(0);
    expect(result.stdout).toContain("No root-level markdown or .alternates changes requiring sync.");
  });
});
