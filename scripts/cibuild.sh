#!/usr/bin/env sh
set -e # halt script on error

bundle exec jekyll build -d _site/blog
bundle exec htmlproofer ./_site --disable-external
