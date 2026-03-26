#!/bin/bash
set -euo pipefail

[ -f package.json ]
[ -f runtime/scripts/silent-swallow-metrics.ts ]

metrics_output=$(bun run runtime/scripts/silent-swallow-metrics.ts)

repo_silent_catch_blocks=$(printf '%s
' "$metrics_output" | awk -F= '/repo_silent_catch_blocks=/{print $2}')
repo_silent_promise_catches=$(printf '%s
' "$metrics_output" | awk -F= '/repo_silent_promise_catches=/{print $2}')

check_script=$(jq -r '.scripts["check:silent-swallows"] // ""' package.json)
quality_script=$(jq -r '.scripts.quality // ""' package.json)
quality_hook_present=0
silent_swallow_guard_gaps=0

if [[ "$check_script" == *"silent-swallow-metrics.ts --check"* ]]; then
  :
else
  silent_swallow_guard_gaps=$((silent_swallow_guard_gaps + 1))
fi

if [[ "$quality_script" == *"check:silent-swallows"* ]]; then
  quality_hook_present=1
else
  silent_swallow_guard_gaps=$((silent_swallow_guard_gaps + 1))
fi

if grep -q "check:silent-swallows" autoresearch.checks.sh; then
  :
else
  silent_swallow_guard_gaps=$((silent_swallow_guard_gaps + 1))
fi

echo "METRIC silent_swallow_guard_gaps=${silent_swallow_guard_gaps}"
echo "METRIC repo_silent_catch_blocks=${repo_silent_catch_blocks:-0}"
echo "METRIC repo_silent_promise_catches=${repo_silent_promise_catches:-0}"
echo "METRIC quality_hook_present=${quality_hook_present}"
