#!/usr/bin/env sh

npx nuxi cleanup

set -e
rm -rf dist

git add -A
git commit -m 'jira-clone'

git push -u origin master