#!/bin/sh

function list_changed_files() {
  git status --porcelain | awk '{ print $2; }' | grep 'gists/'
}

function create_commit_message() {
  local file=$1
  line=$(grep -E 'Problem:|TIL:' $file)
  message=$(echo $line | awk -F '|' '{print $3}' | xargs)

  if $(echo $line | grep -q Problem); then
    echo "🧶 $message"
  else
    echo "💡 $message"
  fi
}

list_changed_files | while read file; do
  commit_message=$(create_commit_message $file)
  git add $file
  git commit -m "$commit_message"
done
