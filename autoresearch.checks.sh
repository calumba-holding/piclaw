#!/bin/bash
set -euo pipefail

cd "$(dirname "$0")"

run_check() {
  local name="$1"
  shift
  local log_file
  log_file="$(mktemp -t autoresearch-check-${name}.XXXXXX.log)"
  if "$@" >"${log_file}" 2>&1; then
    rm -f "${log_file}"
    return 0
  fi
  echo "[${name}] failed"
  tail -n 80 "${log_file}"
  rm -f "${log_file}"
  exit 1
}

run_check build-web bun run build:web
run_check lint bun run lint
run_check typecheck bun run typecheck
run_check stale-dist bun run check:stale-dist
