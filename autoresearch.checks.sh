#!/bin/bash
set -euo pipefail

run_check() {
  local name="$1"
  shift
  local log_file
  log_file="$(mktemp)"
  if "$@" >"$log_file" 2>&1; then
    rm -f "$log_file"
    return 0
  fi
  echo "[${name}] failed"
  tail -80 "$log_file"
  rm -f "$log_file"
  exit 1
}

needs_web_bundle_validation() {
  git diff --name-only -- \
    runtime/web/src \
    runtime/extensions/editor \
    runtime/web/static/js/vendor \
    runtime/web/src/vendor \
    runtime/web/src/styles \
    runtime/web/static/css \
    runtime/web/static/js/components \
    runtime/web/static/js/utils \
    runtime/web/static/js/ui | grep -q .
}

run_check lint bun run lint
run_check typecheck bun run typecheck
run_check test bun run test
run_check pack-hygiene bun run check:pack-hygiene
run_check stale-dist bun run check:stale-dist
run_check import-boundaries bun run check:import-boundaries
run_check unused-exports bun run check:unused-exports
run_check hook-tdz bun run check:hook-tdz
run_check silent-swallows bun run check:silent-swallows
run_check structured-logging-scope bun run runtime/scripts/structured-logging-scope-metrics.ts --check

if needs_web_bundle_validation; then
  run_check build-web bun run build:web
fi
