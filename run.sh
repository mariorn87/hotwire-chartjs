#!/bin/bash
set -e

function print_help {
  cat <<HELP
$0 <command> <arguments>

commands:
  - build
  - dev
HELP
}

function launch_command {
  cmd=$1
  shift
  bin/run/$cmd $@
}

if [ "$#" -eq 0 ]; then
  print_help
  exit 1
fi

case "$1" in
  build|dev) launch_command $@;;
  *) print_help; exit 1;;
esac