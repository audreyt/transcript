import { describe, expect, test } from "bun:test";
import {
  cookieHeader,
  extractCsrfToken,
  fetchWithCookies,
  main,
  mergeCookies,
  parseSetCookies,
  runUpload,
} from "../../upload";

describe("upload helpers", () => {
  test("extracts csrf tokens", () => {
    expect(
      extractCsrfToken("<input type='hidden' name='csrfmiddlewaretoken' value='abc' />"),
    ).toBe("abc");
  });

  test("fails when csrf tokens are absent", () => {
    expect(() => extractCsrfToken("<html />")).toThrow("cannot find CSRF token");
  });

  test("parses set-cookie headers via fallback", () => {
    const headers = {
      get: (name: string) => (name === "set-cookie" ? "session=abc; Path=/" : null),
    } as unknown as Headers;
    expect(parseSetCookies(headers)).toEqual(["session=abc; Path=/"]);
  });

  test("merges cookies into a header", () => {
    const jar = mergeCookies(new Map(), ["session=abc; Path=/", "csrftoken=def; HttpOnly"]);
    expect(cookieHeader(jar)).toBe("session=abc; csrftoken=def");
  });

  test("attaches cookies to follow-up requests", async () => {
    const seenCookies: string[] = [];
    const jar = new Map<string, string>();
    const fetchImpl: typeof fetch = async (_url, init) => {
      seenCookies.push(String(new Headers(init?.headers).get("cookie")));
      return new Response("ok", {
        status: 200,
        headers: {
          "set-cookie": "session=abc; Path=/",
        },
      });
    };

    await fetchWithCookies("https://example.com", { method: "GET" }, jar, fetchImpl);
    await fetchWithCookies("https://example.com", { method: "GET" }, jar, fetchImpl);
    expect(seenCookies).toEqual(["null", "session=abc"]);
  });
});

describe("runUpload", () => {
  test("submits login and import forms", async () => {
    const requests: Array<{ url: string; method: string; body: string | null; cookie: string | null }> = [];
    const fetchImpl: typeof fetch = async (url, init) => {
      const headers = new Headers(init?.headers);
      requests.push({
        url: String(url),
        method: init?.method ?? "GET",
        body: typeof init?.body === "string" ? init.body : null,
        cookie: headers.get("cookie"),
      });

      if (requests.length === 1) {
        return new Response(
          "<input type='hidden' name='csrfmiddlewaretoken' value='login-token' />",
          {
            status: 200,
            headers: { "set-cookie": "session=abc; Path=/" },
          },
        );
      }
      if (requests.length === 2) {
        return new Response("logged in", { status: 200 });
      }
      if (requests.length === 3) {
        return new Response(
          "<input type='hidden' name='csrfmiddlewaretoken' value='import-token' />",
          { status: 200 },
        );
      }
      return new Response("imported", { status: 200 });
    };

    const output: string[] = [];
    const code = await runUpload("https://raw.example.com/file.xml", {
      SAYIT_URL: "https://sayit.example.com",
      SAYIT_USERNAME: "root",
      SAYIT_PASSWORD: "secret",
    }, {
      fetchImpl,
      random: () => 0.5,
      stdout: (line) => output.push(line),
    });

    expect(code).toBe(0);
    expect(requests).toHaveLength(4);
    expect(requests[1]?.body).toContain("username=root");
    expect(requests[1]?.body).toContain("csrfmiddlewaretoken=login-token");
    expect(requests[1]?.cookie).toBe("session=abc");
    expect(requests[3]?.body).toContain("location=https%3A%2F%2Fraw.example.com%2Ffile.xml");
    expect(output).toContain("Imported https://raw.example.com/file.xml");
  });

  test("requires a password", async () => {
    await expect(runUpload("https://raw.example.com/file.xml", {})).rejects.toThrow(
      "SAYIT_PASSWORD environment variable not set",
    );
  });

  test("rejects failing responses", async () => {
    const fetchImpl: typeof fetch = async () => new Response("bad", { status: 500 });
    await expect(
      runUpload(
        "https://raw.example.com/file.xml",
        { SAYIT_PASSWORD: "secret" },
        { fetchImpl },
      ),
    ).rejects.toThrow("login page failed");
  });
});

describe("main and cli", () => {
  test("requires a url", async () => {
    await expect(main([], { SAYIT_PASSWORD: "secret" })).rejects.toThrow("Usage: upload.ts <url>");
  });

  test("main delegates to runUpload", async () => {
    const responses = [
      new Response("<input type='hidden' name='csrfmiddlewaretoken' value='login-token' />", {
        status: 200,
        headers: { "set-cookie": "session=abc; Path=/" },
      }),
      new Response("logged in", { status: 200 }),
      new Response("<input type='hidden' name='csrfmiddlewaretoken' value='import-token' />", {
        status: 200,
      }),
      new Response("imported", { status: 200 }),
    ];

    const code = await main(
      ["https://raw.example.com/file.xml"],
      {
        SAYIT_URL: "https://sayit.example.com",
        SAYIT_PASSWORD: "secret",
        SAYIT_USERNAME: "root",
      },
      {
        fetchImpl: async () => responses.shift() ?? new Response("ok", { status: 200 }),
      },
    );

    expect(code).toBe(0);
  });
});
