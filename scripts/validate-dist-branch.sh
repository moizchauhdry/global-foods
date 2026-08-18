#!/usr/bin/env sh
set -eu

git_dir="$(git rev-parse --git-dir)"
branch="$(git rev-parse --abbrev-ref HEAD 2>/dev/null || echo HEAD)"

is_main=0
case "$branch" in
  main|master) is_main=1 ;;
esac

in_rewrite=0
if git rev-parse -q --verify MERGE_HEAD >/dev/null 2>&1; then
  in_rewrite=1
fi
if git rev-parse -q --verify CHERRY_PICK_HEAD >/dev/null 2>&1; then
  in_rewrite=1
fi
if git rev-parse -q --verify REBASE_HEAD >/dev/null 2>&1; then
  in_rewrite=1
fi
if [ -d "$git_dir/rebase-merge" ] || [ -d "$git_dir/rebase-apply" ]; then
  in_rewrite=1
fi

has_staged_dist=0
if git diff --cached --name-only -- dist | grep -q .; then
  has_staged_dist=1
fi

has_tracked_dist=0
if git ls-files dist | grep -q .; then
  has_tracked_dist=1
fi

strip_dist() {
  git rm -r --cached --ignore-unmatch dist >/dev/null 2>&1 || true
  echo "validate-dist-branch: stripped dist/ from the index on $branch"
}

if [ "$is_main" -eq 1 ]; then
  exit 0
fi

if [ "$in_rewrite" -eq 1 ]; then
  if [ "$has_staged_dist" -eq 1 ] || [ "$has_tracked_dist" -eq 1 ]; then
    strip_dist
  fi
  exit 0
fi

if [ "$has_staged_dist" -eq 1 ]; then
  echo "ERROR: dist/ can only be committed on main/master."
  echo "Unstage it with: git restore --staged dist"
  exit 1
fi

if [ "$has_tracked_dist" -eq 1 ]; then
  echo "ERROR: dist/ is tracked on $branch. Only main/master may keep dist/."
  echo "Remove it with: git rm -r --cached dist"
  exit 1
fi
