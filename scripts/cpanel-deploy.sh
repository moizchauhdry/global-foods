#!/usr/bin/env sh
set -eu

branch="$(git rev-parse --abbrev-ref HEAD)"
case "$branch" in
  main|master) ;;
  *)
    echo "ERROR: deploy:cpanel must run on main/master (currently on $branch)"
    exit 1
    ;;
esac

echo "cpanel-deploy: pulling origin/$branch"
git pull --ff-only origin "$branch"

if [ ! -d dist/.next ]; then
  echo "ERROR: dist/.next is missing after pull. Push a main build first."
  exit 1
fi

if [ -d dist/.next/dev ] || [ -d dist/.next/cache ]; then
  echo "ERROR: dist/.next contains dev/ or cache/. Refusing to apply."
  exit 1
fi

echo "cpanel-deploy: applying dist/ to application root"
rm -rf .next
cp -R dist/.next .next

if [ -d dist/public ]; then
  mkdir -p public
  cp -R dist/public/. public/
fi

if [ ! -f dist/server.js ]; then
  echo "ERROR: dist/server.js is missing"
  exit 1
fi
cp dist/server.js server.js

mkdir -p tmp
touch tmp/restart.txt

echo "cpanel-deploy: applied dist/ and touched tmp/restart.txt"
