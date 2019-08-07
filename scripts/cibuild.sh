#!/usr/bin/env sh
set -e # halt script on error

bundle exec jekyll build
bundle exec htmlproofer ./_site\
    --http-status-ignore "999"\
    --url-ignore "https://codepen.io/anon/pen/vrewpa"
