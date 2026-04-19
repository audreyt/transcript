#!/usr/bin/env python3
"""Validate transcript content: filenames, encoding, and .alternates integrity.

Usage:
  scripts/validate.py --all                # validate whole repo
  scripts/validate.py --changed            # validate PR-changed files vs origin/master
  scripts/validate.py --changed --base REF # ...or custom base ref

Exits 0 on success, 1 on any failure. Uses only the standard library.
"""

from __future__ import annotations

import argparse
import datetime
import pathlib
import re
import subprocess
import sys
import unicodedata

FILENAME_RE = re.compile(r"^(\d{4})-(\d{2})-(\d{2})-.+\.md$")

# Root-level files that predate this CI and don't match the filename rules.
# Do NOT add to this set — fix new files to comply instead. These can be
# cleaned up (renamed) in a follow-up PR; doing so now would needlessly
# complicate this change.
_GRANDFATHERED_FILENAME: frozenset[str] = frozenset({
    "README.md",
    "1999年全國司法改革會議.md",
    # Uses Unicode non-breaking hyphens (U+2011) between date components.
    "2019\u201112\u201124-Interview-with-Leen-Vervaeke.md",
    # No dash after date; uses Chinese quotes.
    "2024-03-29「2024 總統盃黑客松」第一次工作小組會議逐字稿.md",
})

# Filenames stored on disk in NFD form. Same caveat as above: do not add new
# entries. Each key is the NFC-normalized form (what the filename *should* be).
_GRANDFATHERED_NFC_DRIFT: frozenset[str] = frozenset({
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
})


class Failure:
    __slots__ = ("location", "message")

    def __init__(self, location: str, message: str) -> None:
        self.location = location
        self.message = message

    def __str__(self) -> str:
        return f"{self.location}: {self.message}"


def validate_filename(path: pathlib.Path, failures: list[Failure]) -> None:
    name = path.name
    nfc = unicodedata.normalize("NFC", name)
    if nfc in _GRANDFATHERED_FILENAME:
        return
    m = FILENAME_RE.match(name)
    if not m:
        failures.append(Failure(name, "filename does not match YYYY-MM-DD-<slug>.md"))
        return
    y, mo, d = m.groups()
    try:
        datetime.date.fromisoformat(f"{y}-{mo}-{d}")
    except ValueError as e:
        failures.append(Failure(name, f"filename has invalid ISO date: {e}"))
    if nfc != name and nfc not in _GRANDFATHERED_NFC_DRIFT:
        failures.append(Failure(name, "filename is not NFC-normalized (macOS NFD drift?)"))


def validate_md_encoding(path: pathlib.Path, failures: list[Failure]) -> None:
    raw = path.read_bytes()
    if raw.startswith(b"\xef\xbb\xbf"):
        failures.append(Failure(path.name, "file has UTF-8 BOM; strip it"))
    try:
        raw.decode("utf-8")
    except UnicodeDecodeError as e:
        failures.append(Failure(path.name, f"file is not valid UTF-8: {e}"))


def validate_md_trailing_whitespace(path: pathlib.Path, failures: list[Failure]) -> None:
    text = path.read_text(encoding="utf-8", errors="replace")
    for i, line in enumerate(text.splitlines(), start=1):
        if line.rstrip() != line:
            failures.append(Failure(f"{path.name}:{i}", "trailing whitespace"))


def validate_alternates(
    alt_path: pathlib.Path,
    repo_root: pathlib.Path,
    failures: list[Failure],
    deleted_in_diff: set[str] | None = None,
) -> None:
    """Validate .alternates file structure and referential integrity.

    deleted_in_diff is the set of .md filenames known to be deleted in the
    current diff; a pair whose members are all in that set is allowed to be
    absent from the working tree.
    """
    deleted_in_diff = deleted_in_diff or set()
    if not alt_path.exists():
        return
    seen_keys: dict[str, int] = {}
    text = alt_path.read_text(encoding="utf-8")
    for i, raw_line in enumerate(text.splitlines(), start=1):
        line = raw_line.strip()
        if not line or line.startswith("#"):
            continue
        parts = line.split("\t")
        if len(parts) != 2:
            failures.append(
                Failure(f".alternates:{i}", f"expected 2 tab-separated fields, got {len(parts)}")
            )
            continue
        a, b = parts[0].strip(), parts[1].strip()
        if not a.endswith(".md") or not b.endswith(".md"):
            failures.append(Failure(f".alternates:{i}", "both sides must end with .md"))
            continue
        if a == b:
            failures.append(Failure(f".alternates:{i}", f"self-reference: {a}"))
            continue
        if "/" in a or "/" in b:
            failures.append(Failure(f".alternates:{i}", "paths must be root-level (no /)"))
            continue
        for side in (a, b):
            prior = seen_keys.get(side)
            if prior is not None:
                failures.append(
                    Failure(
                        f".alternates:{i}",
                        f"{side} already appears on line {prior}; each file may appear in one pair only",
                    )
                )
            else:
                seen_keys[side] = i

        a_present = (repo_root / a).exists()
        b_present = (repo_root / b).exists()
        if a_present and b_present:
            continue
        if not a_present and not b_present:
            if a in deleted_in_diff and b in deleted_in_diff:
                continue  # pair removed together in this diff
            failures.append(
                Failure(f".alternates:{i}", f"both files missing from working tree: {a}, {b}")
            )
            continue
        missing = a if not a_present else b
        present = b if not a_present else a
        if missing in deleted_in_diff:
            failures.append(
                Failure(
                    f".alternates:{i}",
                    f"{missing} is being removed but paired {present} remains — delete this line or delete both",
                )
            )
        else:
            failures.append(
                Failure(
                    f".alternates:{i}",
                    f"{missing} is referenced but does not exist; paired file {present} is present",
                )
            )


def git_changed_paths(base_ref: str, repo_root: pathlib.Path) -> tuple[list[str], list[str], bool]:
    """Return (added_or_modified_root_md, deleted_root_md, alternates_changed)."""
    def diff(filter_: str) -> list[str]:
        out = subprocess.check_output(
            ["git", "diff", "--name-only", f"--diff-filter={filter_}", f"{base_ref}...HEAD"],
            cwd=str(repo_root),
            text=True,
        )
        return [line for line in out.splitlines() if line]

    added_modified = diff("ACMR")
    deleted = diff("D")

    def is_root_md(p: str) -> bool:
        pp = pathlib.Path(p)
        return pp.suffix == ".md" and len(pp.parts) == 1

    md_changed = [p for p in added_modified if is_root_md(p)]
    md_deleted = [p for p in deleted if is_root_md(p)]
    alternates_changed = ".alternates" in added_modified or ".alternates" in deleted
    return md_changed, md_deleted, alternates_changed


def run(repo_root: pathlib.Path, mode: str, base_ref: str) -> int:
    failures: list[Failure] = []

    if mode == "all":
        for md_path in sorted(repo_root.glob("*.md")):
            validate_filename(md_path, failures)
            validate_md_encoding(md_path, failures)
        # --all does NOT flag trailing whitespace (that's a changed-files rule).
        validate_alternates(repo_root / ".alternates", repo_root, failures)
    else:  # changed
        md_changed, md_deleted, _ = git_changed_paths(base_ref, repo_root)
        for rel in md_changed:
            md_path = repo_root / rel
            if not md_path.exists():
                continue
            validate_filename(md_path, failures)
            validate_md_encoding(md_path, failures)
            validate_md_trailing_whitespace(md_path, failures)
        validate_alternates(
            repo_root / ".alternates",
            repo_root,
            failures,
            deleted_in_diff=set(md_deleted),
        )

    if failures:
        for f in failures:
            print(str(f), file=sys.stderr)
        print(f"\n{len(failures)} validation failure(s)", file=sys.stderr)
        return 1
    print(f"validate({mode}): OK")
    return 0


def main(argv: list[str] | None = None) -> int:
    parser = argparse.ArgumentParser(description="Validate transcript repo content.")
    group = parser.add_mutually_exclusive_group(required=True)
    group.add_argument("--all", action="store_true", help="Validate the entire repository")
    group.add_argument("--changed", action="store_true", help="Validate only git-changed files")
    parser.add_argument("--base", default="origin/master", help="Base ref for --changed (default: origin/master)")
    parser.add_argument("--repo-root", default=".", help="Repository root (default: cwd)")
    args = parser.parse_args(argv)

    repo_root = pathlib.Path(args.repo_root).resolve()
    mode = "all" if args.all else "changed"
    return run(repo_root, mode, args.base)


if __name__ == "__main__":
    sys.exit(main())
