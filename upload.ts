#!/usr/bin/env bun

export interface UploadEnvironment {
  SAYIT_URL?: string;
  SAYIT_USERNAME?: string;
  SAYIT_PASSWORD?: string;
}

export interface UploadDeps {
  fetchImpl?: typeof fetch;
  stdout?: (line: string) => void;
  random?: () => number;
}

export function extractCsrfToken(html: string): string {
  const match = html.match(
    /name=['"]csrfmiddlewaretoken['"] value=['"]([^'"]+)['"]/i,
  );
  if (!match) {
    throw new Error("cannot find CSRF token");
  }
  return match[1];
}

export function parseSetCookies(headers: Headers): string[] {
  const candidate = headers as Headers & { getSetCookie?: () => string[] };
  if (typeof candidate.getSetCookie === "function") {
    return candidate.getSetCookie();
  }

  const single = headers.get("set-cookie");
  return single ? [single] : [];
}

export function mergeCookies(
  jar: Map<string, string>,
  setCookies: string[],
): Map<string, string> {
  for (const cookie of setCookies) {
    const [pair] = cookie.split(";", 1);
    const separator = pair.indexOf("=");
    if (separator === -1) {
      continue;
    }
    const name = pair.slice(0, separator).trim();
    const value = pair.slice(separator + 1).trim();
    jar.set(name, value);
  }
  return jar;
}

export function cookieHeader(jar: Map<string, string>): string | undefined {
  if (jar.size === 0) {
    return undefined;
  }
  return [...jar.entries()]
    .map(([name, value]) => `${name}=${value}`)
    .join("; ");
}

export async function fetchWithCookies(
  url: string,
  init: RequestInit,
  jar: Map<string, string>,
  fetchImpl: typeof fetch,
): Promise<Response> {
  const headers = new Headers(init.headers);
  const cookies = cookieHeader(jar);
  if (cookies) {
    headers.set("cookie", cookies);
  }

  const response = await fetchImpl(url, { ...init, headers });
  mergeCookies(jar, parseSetCookies(response.headers));
  return response;
}

function ensureOk(response: Response, body: string, action: string): void {
  if (!response.ok) {
    throw new Error(`${action} failed with HTTP ${response.status}: ${body}`);
  }
}

export async function runUpload(
  akomaNtosoUrl: string,
  env: UploadEnvironment,
  deps: UploadDeps = {},
): Promise<number> {
  if (!akomaNtosoUrl) {
    throw new Error("Usage: upload.ts <url>");
  }

  const sayitUrl = env.SAYIT_URL ?? "https://sayit.pdis.nat.gov.tw";
  const username = env.SAYIT_USERNAME ?? "root";
  const password = env.SAYIT_PASSWORD;
  if (!password) {
    throw new Error("SAYIT_PASSWORD environment variable not set");
  }

  const stdout = deps.stdout ?? ((line: string) => console.log(line));
  const fetchImpl = deps.fetchImpl ?? fetch;
  const random = deps.random ?? Math.random;
  const jar = new Map<string, string>();
  const nonce = random();

  const loginPage = await fetchWithCookies(
    `${sayitUrl}/accounts/login/?${nonce}`,
    { method: "GET" },
    jar,
    fetchImpl,
  );
  const loginHtml = await loginPage.text();
  ensureOk(loginPage, loginHtml, "login page");
  const loginToken = extractCsrfToken(loginHtml);

  const loginBody = new URLSearchParams({
    username,
    password,
    csrfmiddlewaretoken: loginToken,
  });
  const loginResponse = await fetchWithCookies(
    `${sayitUrl}/accounts/login/`,
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: loginBody.toString(),
      redirect: "follow",
    },
    jar,
    fetchImpl,
  );
  const loginBodyText = await loginResponse.text();
  ensureOk(loginResponse, loginBodyText, "login submit");

  const importPage = await fetchWithCookies(
    `${sayitUrl}/import/akomantoso?${nonce}`,
    { method: "GET" },
    jar,
    fetchImpl,
  );
  const importHtml = await importPage.text();
  ensureOk(importPage, importHtml, "import page");
  const importToken = extractCsrfToken(importHtml);

  const importBody = new URLSearchParams({
    existing_sections: "replace",
    location: akomaNtosoUrl,
    csrfmiddlewaretoken: importToken,
  });
  const importResponse = await fetchWithCookies(
    `${sayitUrl}/import/akomantoso`,
    {
      method: "POST",
      headers: { "content-type": "application/x-www-form-urlencoded" },
      body: importBody.toString(),
      redirect: "follow",
    },
    jar,
    fetchImpl,
  );
  const importBodyText = await importResponse.text();
  ensureOk(importResponse, importBodyText, "import submit");
  stdout(`Imported ${akomaNtosoUrl}`);
  return 0;
}

export async function main(
  argv: string[] = Bun.argv.slice(2),
  env: UploadEnvironment = process.env,
  deps: UploadDeps = {},
): Promise<number> {
  return runUpload(argv[0] ?? "", env, deps);
}

if (import.meta.main) {
  try {
    process.exit(await main());
  } catch (error) {
    console.error(error instanceof Error ? error.message : String(error));
    process.exit(1);
  }
}
