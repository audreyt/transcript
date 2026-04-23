"""Unit tests for scripts/validate.py.

Tests import the module directly rather than shelling out, so each failure mode
can be asserted in isolation. The final test runs `--all` against the real
corpus as a regression lock.
"""

from __future__ import annotations

import pathlib
import sys
import unicodedata

REPO_ROOT = pathlib.Path(__file__).resolve().parents[2]
sys.path.insert(0, str(REPO_ROOT / "scripts"))

import validate  # noqa: E402


# ---------------------- filename ----------------------

def test_filename_valid(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "2025-01-01-Hello-World.md"
    p.write_text("", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_filename(p, failures)
    assert failures == []


def test_filename_missing_date_prefix(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "Just-A-Title.md"
    p.write_text("", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_filename(p, failures)
    assert any("does not match" in f.message for f in failures)


def test_filename_invalid_date(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "2025-13-01-Bad-Month.md"
    p.write_text("", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_filename(p, failures)
    assert any("invalid ISO date" in f.message for f in failures)


def test_filename_nfd_fails(tmp_path: pathlib.Path) -> None:
    nfd = unicodedata.normalize("NFD", "2025-01-01-café.md")
    assert nfd != "2025-01-01-café.md"  # sanity: we constructed a decomposed form
    p = tmp_path / nfd
    p.write_text("", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_filename(p, failures)
    assert any("NFC" in f.message for f in failures)


def test_filename_readme_grandfathered(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "README.md"
    p.write_text("", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_filename(p, failures)
    assert failures == []


# ---------------------- encoding ----------------------

def test_encoding_utf8_ok(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "a.md"
    p.write_text("hello 世界\n", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_md_encoding(p, failures)
    assert failures == []


def test_encoding_bom_fails(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "a.md"
    p.write_bytes(b"\xef\xbb\xbfhello")
    failures: list[validate.Failure] = []
    validate.validate_md_encoding(p, failures)
    assert any("BOM" in f.message for f in failures)


def test_encoding_invalid_bytes(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "a.md"
    p.write_bytes(b"\x80\x81\x82")
    failures: list[validate.Failure] = []
    validate.validate_md_encoding(p, failures)
    assert any("not valid UTF-8" in f.message for f in failures)


# ---------------------- trailing whitespace ----------------------

def test_trailing_whitespace_flagged(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "a.md"
    p.write_text("clean\ndirty \nalso clean\n", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_md_trailing_whitespace(p, failures)
    assert len(failures) == 1
    assert failures[0].location.endswith(":2")


def test_trailing_whitespace_clean(tmp_path: pathlib.Path) -> None:
    p = tmp_path / "a.md"
    p.write_text("# title\n\ntext\n", encoding="utf-8")
    failures: list[validate.Failure] = []
    validate.validate_md_trailing_whitespace(p, failures)
    assert failures == []


# ---------------------- .alternates ----------------------

def _write_alt(root: pathlib.Path, body: str) -> pathlib.Path:
    p = root / ".alternates"
    p.write_text(body, encoding="utf-8")
    return p


def test_alternates_happy_path(tmp_path: pathlib.Path) -> None:
    (tmp_path / "a.md").write_text("", encoding="utf-8")
    (tmp_path / "b.md").write_text("", encoding="utf-8")
    alt = _write_alt(tmp_path, "a.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert failures == []


def test_alternates_comments_and_blank_lines(tmp_path: pathlib.Path) -> None:
    (tmp_path / "a.md").write_text("", encoding="utf-8")
    (tmp_path / "b.md").write_text("", encoding="utf-8")
    alt = _write_alt(tmp_path, "# comment\n\na.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert failures == []


def test_alternates_wrong_separator(tmp_path: pathlib.Path) -> None:
    alt = _write_alt(tmp_path, "a.md b.md\n")  # space, not tab
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("2 tab-separated" in f.message for f in failures)


def test_alternates_self_reference(tmp_path: pathlib.Path) -> None:
    (tmp_path / "a.md").write_text("", encoding="utf-8")
    alt = _write_alt(tmp_path, "a.md\ta.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("self-reference" in f.message for f in failures)


def test_alternates_duplicate_key(tmp_path: pathlib.Path) -> None:
    for n in ("a.md", "b.md", "c.md"):
        (tmp_path / n).write_text("", encoding="utf-8")
    alt = _write_alt(tmp_path, "a.md\tb.md\na.md\tc.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("already appears" in f.message for f in failures)


def test_alternates_orphan_side(tmp_path: pathlib.Path) -> None:
    (tmp_path / "a.md").write_text("", encoding="utf-8")
    # b.md is referenced but absent
    alt = _write_alt(tmp_path, "a.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("does not exist" in f.message for f in failures)


def test_alternates_both_absent_not_deleted(tmp_path: pathlib.Path) -> None:
    alt = _write_alt(tmp_path, "a.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("both files missing" in f.message for f in failures)


def test_alternates_both_absent_both_deleted_ok(tmp_path: pathlib.Path) -> None:
    alt = _write_alt(tmp_path, "a.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(
        alt, tmp_path, failures, deleted_in_diff={"a.md", "b.md"}
    )
    assert failures == []


def test_alternates_half_deleted_half_present(tmp_path: pathlib.Path) -> None:
    (tmp_path / "a.md").write_text("", encoding="utf-8")
    alt = _write_alt(tmp_path, "a.md\tb.md\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(
        alt, tmp_path, failures, deleted_in_diff={"b.md"}
    )
    assert any("delete this line or delete both" in f.message for f in failures)


def test_alternates_non_md_suffix(tmp_path: pathlib.Path) -> None:
    alt = _write_alt(tmp_path, "a.md\tb.txt\n")
    failures: list[validate.Failure] = []
    validate.validate_alternates(alt, tmp_path, failures)
    assert any("must end with .md" in f.message for f in failures)


# ---------------------- corpus regression ----------------------

def test_corpus_baseline_passes() -> None:
    """The real repo must pass `--all`. This is the lock against new drift."""
    rc = validate.run(REPO_ROOT, "all", "origin/master")
    assert rc == 0, "validate --all must pass on the current corpus"
