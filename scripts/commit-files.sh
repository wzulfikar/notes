#!/bin/sh

function list_untracked_problem_files() {
  git status --porcelain | awk '/^\?\?/ { print $2; }' | grep 'gists/problem-based/'
}

function get_commit_message() {
  local file=$1
  line=$(grep -E 'Problem:|TIL:' $file)
  message=$(echo $line | awk -F '|' '{print $3}' | xargs)

  if $(echo $line | grep -q Problem); then
    echo "🧶 $message"
  else
    echo "💡 $message"
  fi
}

list_untracked_problem_files | while read file; do
  commit_message=$(get_commit_message $file)
  git add $file
  git commit -m "$commit_message"
done
