#!/usr/bin/env sh
set -eu

branch="$(git rev-parse --abbrev-ref HEAD)"
case "$branch" in
  main|master) ;;
  *) exit 0 ;;
esac

echo "pre-push: building production dist/ for $branch"

npm run build:dist

if [ -d dist/.next/dev ] || [ -d dist/.next/cache ]; then
  echo "ERROR: dist/.next contains dev/ or cache/. Refusing to commit."
  exit 1
fi

large_files="$(find dist -type f -size +50M 2>/dev/null || true)"
if [ -n "$large_files" ]; then
  echo "ERROR: dist/ contains files larger than 50MB:"
  echo "$large_files"
  exit 1
fi

git add dist

if git diff --cached --quiet -- dist; then
  echo "pre-push: dist/ unchanged"
  exit 0
fi

git commit --no-verify -m "chore: update production dist"
git push --no-verify

echo
echo "SUCCESS: production dist committed and pushed on $branch"
echo "The outer husky push is expected to fail after this SUCCESS banner."
echo

exit 1
