#!/bin/sh

[ -z "$1" ] && echo "Usage: $(basename $0) some-file.md" && exit 1

file=$1
echo "<0001f9f6>$(grep 'Problem:' $file | awk -F '|' '{print $3}')"
