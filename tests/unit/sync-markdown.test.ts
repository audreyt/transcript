import { describe, expect, test } from "bun:test";
import path from "node:path";
import {
  applyAlternatesImpact,
  BASE_DELAY_MS,
  diffCommand,
  main,
  MAX_DELAY_MS,
  MAX_RETRIES,
  parseAlternatesText,
  parseNameStatusDiff,
  readCommittedWrite,
  readFileAtRef,
  requestWithRetry,
  runSync,
} from "../../scripts/sync_markdown";
import { commitAll, createTempDir, initGitRepo, runBun, writeFile } from "./test-helpers";

const REPO_ROOT = path.resolve(import.meta.dirname, "../..");
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
      "AGENTS.md",
      "M",
      "README.md",
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

  test("rides out a prolonged 503 lock across the full retry budget", async () => {
    // Regression: a concurrent D1 "long-running import" made archive.tw return
    // 503 for ~90s. With MAX_RETRIES=3 the sync gave up; the wider budget must
    // keep retrying until the lock clears.
    const output: string[] = [];
    let attempts = 0;
    const response = await requestWithRetry(
      { url: "https://example.com", method: "POST" },
      "POST test.md",
      {
        fetchImpl: async () => {
          attempts += 1;
          // Fail every attempt but the last one the budget allows.
          if (attempts < MAX_RETRIES) {
            return new Response(
              JSON.stringify({ error: "Service temporarily unavailable" }),
              { status: 503 },
            );
          }
          return new Response("ok", { status: 200 });
        },
        sleep: async () => {},
        stdout: (line) => output.push(line),
      },
    );

    expect(response).toEqual({ status: 200, body: "ok" });
    expect(attempts).toBe(MAX_RETRIES);
    expect(MAX_RETRIES).toBeGreaterThan(3);
  });

  test("caps exponential backoff at MAX_DELAY_MS", async () => {
    const delays: number[] = [];
    await expect(
      requestWithRetry(
        { url: "https://example.com", method: "POST" },
        "POST test.md",
        {
          fetchImpl: async () => new Response("busy", { status: 503 }),
          sleep: async (ms) => {
            delays.push(ms);
          },
          stdout: () => {},
        },
      ),
    ).rejects.toThrow("HTTP 503");

    // One sleep per failed attempt except the last (which throws).
    expect(delays.length).toBe(MAX_RETRIES - 1);
    // Growth is exponential from BASE_DELAY_MS, never exceeding the cap.
    expect(delays[0]).toBe(BASE_DELAY_MS);
    for (const delay of delays) {
      expect(delay).toBeLessThanOrEqual(MAX_DELAY_MS);
    }
    expect(delays[delays.length - 1]).toBe(MAX_DELAY_MS);
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

  test("accepts a 503 whose body reports the write committed", async () => {
    // archive.tw returns 503 when D1 committed but the Cloudflare purge was
    // rate-limited. Retrying re-runs the write into the same limit, so the
    // request must be accepted on the first attempt.
    const output: string[] = [];
    let attempts = 0;
    const committedBody = JSON.stringify({
      success: true,
      filename: "changed",
      updatedCount: 190,
      insertedCount: 0,
      cachePurge: false,
      searchSync: false,
    });

    const response = await requestWithRetry(
      { url: "https://example.com", method: "PATCH" },
      "PATCH changed.md",
      {
        fetchImpl: async () => {
          attempts += 1;
          return new Response(committedBody, { status: 503 });
        },
        sleep: async () => {
          throw new Error("must not back off on a committed write");
        },
        stdout: (line) => output.push(line),
      },
    );

    expect(attempts).toBe(1);
    expect(response.status).toBe(503);
    expect(output.join("\n")).toContain("write committed; invalidation incomplete");
    expect(output.join("\n")).toContain("::warning::");
  });

  test("still retries a 503 that does not report a committed write", async () => {
    // The genuine outage shape has no `success`, so the retry budget must
    // still apply — this is the D1 long-running-import case.
    const output: string[] = [];
    let attempts = 0;
    const response = await requestWithRetry(
      { url: "https://example.com", method: "POST" },
      "POST test.md",
      {
        fetchImpl: async () => {
          attempts += 1;
          if (attempts < 3) {
            return new Response(
              JSON.stringify({ error: "Service temporarily unavailable" }),
              { status: 503 },
            );
          }
          return new Response("ok", { status: 200 });
        },
        sleep: async () => {},
        stdout: (line) => output.push(line),
      },
    );

    expect(attempts).toBe(3);
    expect(response).toEqual({ status: 200, body: "ok" });
  });
});

describe("readCommittedWrite", () => {
  test("reports the invalidation flags for a committed write", () => {
    expect(
      readCommittedWrite(JSON.stringify({ success: true, cachePurge: false, searchSync: false })),
    ).toEqual({ cachePurge: false, searchSync: false });
    expect(
      readCommittedWrite(JSON.stringify({ success: true, cachePurge: true, searchSync: true })),
    ).toEqual({ cachePurge: true, searchSync: true });
  });

  test("returns null for bodies that do not report a committed write", () => {
    expect(readCommittedWrite("missing")).toBeNull();
    expect(readCommittedWrite("null")).toBeNull();
    expect(readCommittedWrite('"a string"')).toBeNull();
    expect(readCommittedWrite(JSON.stringify({ error: "Service temporarily unavailable" }))).toBeNull();
    expect(readCommittedWrite(JSON.stringify({ success: false }))).toBeNull();
    expect(readCommittedWrite(JSON.stringify({ success: "true" }))).toBeNull();
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

  test("succeeds when archive.tw commits the write but reports incomplete invalidation", async () => {
    // The whole point of the fix: a rate-limited cache purge must not fail the
    // job, because a failed sync job skips rebuild-search-index — the only
    // step that repairs the stale search index the 503 is complaining about.
    const root = createTempDir();
    writeFile(root, "changed.md", "# changed\n");
    const diffOutput = ["M", "changed.md", ""].join("\0");
    const output: string[] = [];
    let attempts = 0;

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
        fetchImpl: async () => {
          attempts += 1;
          return new Response(
            JSON.stringify({
              success: true,
              filename: "changed",
              updatedCount: 190,
              cachePurge: false,
              searchSync: false,
            }),
            { status: 503 },
          );
        },
        sleep: async () => {
          throw new Error("must not back off on a committed write");
        },
        stdout: (line) => output.push(line),
      },
    );

    expect(code).toBe(0);
    expect(attempts).toBe(1);
    expect(output.join("\n")).not.toContain("Failed to sync");
    expect(output.join("\n")).toContain("::warning::");
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

  test("captures previous_title from before_sha on modified files and sends it in PATCH", async () => {
    const root = createTempDir();
    writeFile(root, "2026-03-05-Long-Title.md", "# 2026-03-05 New Title\n\nBody content\n");
    const diffOutput = ["M", "2026-03-05-Long-Title.md", ""].join("\0");
    const capturedPayloads: Array<Record<string, unknown>> = [];

    const code = await runSync(
      {
        API_ENDPOINT: "https://archive.tw/api/upload_markdown",
        TOKEN: "secret",
        GITHUB_WORKSPACE: root,
        BEFORE_SHA: "before123",
        AFTER_SHA: "after123",
      },
      [],
      {
        git: (args) => {
          if (args[0] === "diff") return diffOutput;
          if (args[0] === "show" && args[1] === "before123:2026-03-05-Long-Title.md") {
            return "# 2026-03-04 Old Title\n\nOld body\n";
          }
          return "";
        },
        fetchImpl: async (req, init) => {
          if (init?.body) {
            capturedPayloads.push(JSON.parse(String(init.body)));
          }
          return new Response(JSON.stringify({ success: true }), { status: 200 });
        },
        sleep: async () => {},
        stdout: () => {},
      },
    );

    expect(code).toBe(0);
    expect(capturedPayloads).toHaveLength(1);
    expect(capturedPayloads[0].filename).toBe("2026-03-05-Long-Title.md");
    expect(capturedPayloads[0].previous_title).toBe("2026-03-04 Old Title");
    expect(capturedPayloads[0].markdown).toContain("# 2026-03-05 New Title");
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
