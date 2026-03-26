#!/bin/bash
set -euo pipefail

lint_log=$(mktemp)
typecheck_log=$(mktemp)
trap 'rm -f "$lint_log" "$typecheck_log"' EXIT

if ! bun run lint >"$lint_log" 2>&1; then
  tail -80 "$lint_log"
  exit 1
fi

if ! bun run typecheck >"$typecheck_log" 2>&1; then
  tail -80 "$typecheck_log"
  exit 1
fi
