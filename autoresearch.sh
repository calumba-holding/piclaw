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
guard_check_present=0
if [[ "$check_script" == *"silent-swallow-metrics.ts --check"* && "$quality_script" == *"check:silent-swallows"* ]]; then
  guard_check_present=1
fi

test_file="runtime/test/scripts/silent-swallow-metrics.test.ts"
silent_swallow_test_gaps=0

if ! grep -q "ignores comment-only silent swallow strings" "$test_file" 2>/dev/null; then
  silent_swallow_test_gaps=$((silent_swallow_test_gaps + 1))
fi
if ! grep -q "detects empty catch blocks and empty promise catches" "$test_file" 2>/dev/null; then
  silent_swallow_test_gaps=$((silent_swallow_test_gaps + 1))
fi
if ! grep -q "fails in --check mode when silent swallows are present" "$test_file" 2>/dev/null; then
  silent_swallow_test_gaps=$((silent_swallow_test_gaps + 1))
fi
if ! grep -q "silent-swallow-metrics.test.ts" autoresearch.checks.sh 2>/dev/null; then
  silent_swallow_test_gaps=$((silent_swallow_test_gaps + 1))
fi

echo "METRIC silent_swallow_test_gaps=${silent_swallow_test_gaps}"
echo "METRIC repo_silent_catch_blocks=${repo_silent_catch_blocks:-0}"
echo "METRIC repo_silent_promise_catches=${repo_silent_promise_catches:-0}"
echo "METRIC guard_check_present=${guard_check_present}"
