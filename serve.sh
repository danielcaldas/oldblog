#!/bin/env sh

if [ "$1" == "-p" ]; then
    JEKYLL_ENV=production jekyll serve
else
    bundle exec jekyll serve
fi