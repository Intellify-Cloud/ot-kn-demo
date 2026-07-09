#!/usr/bin/env sh

# Abort on errors.
set -e

REPO_URL="https://github.com/Intellify-Cloud/demo.git"
PAGES_BRANCH="gh-pages"

# Build the production bundle. Vite uses base: "/demo/" for GitHub Pages.
npm run build

# GitHub Pages should serve Vite assets exactly as built.
touch dist/.nojekyll

DIST_DIR="$(pwd)/dist"

cd dist

# If you deploy to a custom domain later, uncomment and update:
# echo 'www.example.com' > CNAME

git -c safe.directory="$DIST_DIR" init
git -c safe.directory="$DIST_DIR" checkout -B "$PAGES_BRANCH"
git -c safe.directory="$DIST_DIR" add -A
git -c safe.directory="$DIST_DIR" diff --cached --quiet || git -c safe.directory="$DIST_DIR" commit -m "deploy"
git -c safe.directory="$DIST_DIR" push -f "$REPO_URL" "$PAGES_BRANCH:$PAGES_BRANCH"

cd -
