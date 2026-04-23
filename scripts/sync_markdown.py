#!/usr/bin/env python3
"""Sync changed markdown files and .alternates mappings to archive.tw.

Invoked by .github/workflows/upload-markdown-on-change.yml. All state comes from
environment variables (API_ENDPOINT, TOKEN, BEFORE_SHA, AFTER_SHA, and the
GitHub-provided GITHUB_WORKSPACE / GITHUB_EVENT_NAME / GITHUB_REF_NAME).

Pass --dry-run to print every intended HTTP request without actually sending it.
"""

import json
import os
import pathlib
import subprocess
import sys
import time
import urllib.error
import urllib.parse
import urllib.request

DRY_RUN = "--dry-run" in sys.argv

endpoint = os.environ["API_ENDPOINT"]
token = os.environ["TOKEN"]
workspace = pathlib.Path(os.environ["GITHUB_WORKSPACE"])
before_sha = os.environ.get("BEFORE_SHA", "")
after_sha = os.environ.get("AFTER_SHA", "")
event_name = os.environ.get("GITHUB_EVENT_NAME", "")
ref_name = os.environ.get("GITHUB_REF_NAME", "")

def parse_alternates_text(raw_text):
  filename_pairs = {}
  slug_pairs = {}
  if not raw_text:
    return filename_pairs, slug_pairs

  for line in raw_text.splitlines():
    line = line.strip()
    if not line or line.startswith("#"):
      continue
    parts = line.split("\t")
    if len(parts) == 2:
      a = pathlib.Path(parts[0].strip()).name
      b = pathlib.Path(parts[1].strip()).name
      if pathlib.Path(a).suffix != ".md" or pathlib.Path(b).suffix != ".md":
        continue
      filename_pairs[a] = b
      filename_pairs[b] = a
      slug_pairs[a] = pathlib.Path(b).stem.lower()
      slug_pairs[b] = pathlib.Path(a).stem.lower()
  return filename_pairs, slug_pairs

def read_file_at_ref(ref, rel_path):
  if not ref or ref == ("0" * 40):
    return None
  try:
    return subprocess.check_output(
      ["git", "show", f"{ref}:{rel_path}"],
      encoding="utf-8",
      errors="replace",
    )
  except subprocess.CalledProcessError:
    return None

# Parse current .alternates file: bidirectional map of filename → alternate slug
alternates = {}
current_alt_pairs = {}
alt_path = workspace / ".alternates"
if alt_path.exists():
  current_alt_pairs, alternates = parse_alternates_text(
    alt_path.read_text(encoding="utf-8")
  )
  print(f"[debug] loaded {len(alternates)} alternate mappings")

MAX_RETRIES = 3
BASE_DELAY = 2  # seconds

def request_with_retry(req, label, max_retries=MAX_RETRIES):
  """Send an HTTP request with exponential backoff retry on 5xx errors."""
  if DRY_RUN:
    payload_preview = ""
    if req.data:
      try:
        payload_preview = json.dumps(json.loads(req.data), ensure_ascii=False, indent=2)
      except (ValueError, TypeError):
        payload_preview = repr(req.data)[:500]
    print(f"[dry-run] {req.get_method()} {req.full_url}")
    if payload_preview:
      print(f"[dry-run]   payload: {payload_preview}")
    print(f"{label} -> HTTP 200 (dry-run)")
    return 200, "[dry-run]"
  for attempt in range(1, max_retries + 1):
    try:
      with urllib.request.urlopen(req) as resp:
        body = resp.read().decode("utf-8", errors="replace")
        print(f"{label} -> HTTP {resp.status}")
        print(body)
        return resp.status, body
    except urllib.error.HTTPError as e:
      body = e.read().decode("utf-8", errors="replace")
      if e.code >= 500 and attempt < max_retries:
        delay = BASE_DELAY * (2 ** (attempt - 1))
        print(f"{label} failed -> HTTP {e.code} (attempt {attempt}/{max_retries}, retrying in {delay}s)")
        print(body)
        time.sleep(delay)
        # Re-create the request (the previous one's data stream is consumed)
        new_req = urllib.request.Request(
          req.full_url,
          data=req.data,
          method=req.get_method(),
        )
        for header, value in req.headers.items():
          new_req.add_header(header, value)
        req = new_req
        continue
      print(f"{label} failed -> HTTP {e.code}")
      print(body)
      raise

print(f"[debug] event={event_name} ref={ref_name}")
print(f"[debug] before={before_sha}")
print(f"[debug] after={after_sha}")
if DRY_RUN:
  print("[debug] DRY-RUN mode: no HTTP requests will be sent")

if before_sha and before_sha != ("0" * 40):
  cmd = ["git", "diff", "--name-status", "--no-renames", "-z", before_sha, after_sha]
else:
  # Fallback for the first push where "before" can be all zeros.
  cmd = ["git", "show", "--name-status", "--pretty=format:", "--no-renames", "-z", after_sha]

print(f"[debug] cmd={' '.join(cmd)}")
diff_output = subprocess.check_output(cmd, encoding="utf-8")
print("[debug] raw diff output:")
print(repr(diff_output) if diff_output else "(empty)")

added_files = []
modified_files = []
removed_files = []
alternates_changed = False

# Parse NUL-delimited output: format is <status> NUL <path> NUL [ <status> NUL <path> NUL ... ]
tokens = [t.strip() for t in diff_output.split("\0") if t.strip()]
i = 0
while i + 1 < len(tokens):
  status = tokens[i]
  rel_path = tokens[i + 1]
  i += 2
  # Defensive: unquote if needed
  if rel_path.startswith('"') and rel_path.endswith('"') and len(rel_path) >= 2:
    rel_path = rel_path[1:-1]
  p = pathlib.Path(rel_path)

  if rel_path == ".alternates":
    alternates_changed = True
    print(f"[debug] detect .alternates change: status={status!r}")
    continue

  # 只處理根目錄 markdown 檔
  if p.suffix != ".md" or len(p.parts) != 1:
    print(f"[debug] skip by path filter: status={status!r} path={rel_path!r}")
    continue

  if status.startswith("A"):
    added_files.append(rel_path)
    print(f"[debug] detect added: {rel_path!r}")
  elif status.startswith("M"):
    modified_files.append(rel_path)
    print(f"[debug] detect modified: {rel_path!r}")
  elif status.startswith("D"):
    removed_files.append(rel_path)
    print(f"[debug] detect removed: {rel_path!r}")

# Keep order while removing duplicates.
unique_added_files = list(dict.fromkeys(added_files))
unique_modified_files = list(dict.fromkeys(modified_files))
unique_removed_files = list(dict.fromkeys(removed_files))
print(f"[debug] added root md files={unique_added_files}")
print(f"[debug] modified root md files={unique_modified_files}")
print(f"[debug] removed root md files={unique_removed_files}")

if alternates_changed:
  before_alt_pairs, _ = parse_alternates_text(
    read_file_at_ref(before_sha, ".alternates")
  )
  affected_alt_files = sorted(
    rel_path
    for rel_path in (set(before_alt_pairs) | set(current_alt_pairs))
    if before_alt_pairs.get(rel_path) != current_alt_pairs.get(rel_path)
  )
  print(f"[debug] .alternates affected root md files={affected_alt_files}")

  for rel_path in affected_alt_files:
    if rel_path in unique_added_files or rel_path in unique_modified_files or rel_path in unique_removed_files:
      continue

    p = pathlib.Path(rel_path)
    if p.suffix != ".md" or len(p.parts) != 1:
      print(f"[debug] skip non-root alternate target: {rel_path!r}")
      continue

    abs_path = workspace / rel_path
    if abs_path.exists():
      unique_modified_files.append(rel_path)
      print(f"[debug] re-sync due to .alternates change: {rel_path!r}")
    else:
      unique_removed_files.append(rel_path)
      print(f"[debug] delete stale alternate target: {rel_path!r}")

if not unique_added_files and not unique_modified_files and not unique_removed_files:
  print("No root-level markdown or .alternates changes requiring sync.")
  sys.exit(0)

failures = []

for rel_path in unique_added_files:
  abs_path = workspace / rel_path
  if not abs_path.exists():
    print(f"Skip missing file: {rel_path}")
    continue

  try:
    markdown = abs_path.read_text(encoding="utf-8")
    payload = {
      "filename": rel_path,
      "markdown": markdown,
    }
    if rel_path in alternates:
      payload["alternate_filename"] = alternates[rel_path]
      print(f"[debug] alternate for {rel_path}: {alternates[rel_path]}")
    data = json.dumps(payload).encode("utf-8")
    req = urllib.request.Request(
      endpoint,
      data=data,
      method="POST",
      headers={
        "Authorization": f"Bearer {token}",
        "Content-Type": "application/json; charset=utf-8",
        "User-Agent": "github-actions/1.0",
        "X-GitHub-Repository": "audreyt/transcript",
      },
    )

    request_with_retry(req, f"POST {rel_path}")
  except Exception as e:
    print(f"ERROR posting {rel_path}: {e}")
    failures.append(rel_path)

for rel_path in unique_modified_files:
  abs_path = workspace / rel_path
  if not abs_path.exists():
    print(f"Skip missing file: {rel_path}")
    continue

  try:
    markdown = abs_path.read_text(encoding="utf-8")
    payload = {
      "filename": rel_path,
      "markdown": markdown,
      "alternate_filename": alternates.get(rel_path),
    }
    print(f"[debug] alternate for {rel_path}: {payload['alternate_filename']}")
    data = json.dumps(payload).encode("utf-8")
    headers = {
      "Authorization": f"Bearer {token}",
      "Content-Type": "application/json; charset=utf-8",
      "User-Agent": "github-actions/1.0",
      "X-GitHub-Repository": "audreyt/transcript",
    }
    req = urllib.request.Request(endpoint, data=data, method="PATCH", headers=headers)
    try:
      request_with_retry(req, f"PATCH {rel_path}")
    except urllib.error.HTTPError as patch_err:
      if patch_err.code == 404:
        print(f"PATCH {rel_path} got 404, falling back to POST")
        post_data = json.dumps(payload).encode("utf-8")
        post_req = urllib.request.Request(endpoint, data=post_data, method="POST", headers=headers)
        request_with_retry(post_req, f"POST (fallback) {rel_path}")
      else:
        raise
  except Exception as e:
    print(f"ERROR syncing {rel_path}: {e}")
    failures.append(rel_path)

for rel_path in unique_removed_files:
  # filename を query param で送る（CF が DELETE body を剥ぎ取るため）
  delete_url = endpoint + "?filename=" + urllib.parse.quote(rel_path, safe="")
  req = urllib.request.Request(
    delete_url,
    method="DELETE",
    headers={
      "Authorization": f"Bearer {token}",
      "User-Agent": "github-actions/1.0",
      "X-GitHub-Repository": "audreyt/transcript",
    },
  )

  try:
    request_with_retry(req, f"DELETE {rel_path}")
  except urllib.error.HTTPError as e:
    if e.code == 404:
      print(f"DELETE {rel_path}: already absent (HTTP 404), skipping")
    else:
      print(f"ERROR deleting {rel_path}: {e}")
      failures.append(rel_path)
  except Exception as e:
    print(f"ERROR deleting {rel_path}: {e}")
    failures.append(rel_path)

if failures:
  print(f"\nFailed to sync {len(failures)} file(s): {failures}")
  sys.exit(1)
