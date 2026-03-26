#!/bin/bash
set -euo pipefail

# Fast sanity check so obviously broken repo state fails early.
[ -d runtime/src ]
[ -d runtime/web/src ]

EMPTY_CATCH_PATTERN='catch\s*(\([^)]*\))?\s*\{\s*\}'
PROMISE_SWALLOW_PATTERN='\.catch\(\s*(\(\)\s*=>|function\s*\()\s*\{\s*\}\s*\)'
REPO_CODE_DIRS=(runtime/src runtime/web/src runtime/scripts runtime/extensions runtime/test skel/scripts)
RUNTIME_CORE_DIRS=(runtime/src runtime/web/src)
EXCLUDES=(--glob '!**/*.min.js' --glob '!**/vendor/**' --glob '!**/static/**')

repo_silent_catch_blocks=$(( $({ rg -nU "$EMPTY_CATCH_PATTERN" "${REPO_CODE_DIRS[@]}" "${EXCLUDES[@]}" || true; } | wc -l | tr -d ' ') ))
repo_files_with_silent_catches=$(( $({ rg -lU "$EMPTY_CATCH_PATTERN" "${REPO_CODE_DIRS[@]}" "${EXCLUDES[@]}" || true; } | wc -l | tr -d ' ') ))
repo_silent_promise_catches=$(( $({ rg -n "$PROMISE_SWALLOW_PATTERN" "${REPO_CODE_DIRS[@]}" "${EXCLUDES[@]}" || true; } | wc -l | tr -d ' ') ))
runtime_core_silent_catches=$(( $({ rg -nU "$EMPTY_CATCH_PATTERN" "${RUNTIME_CORE_DIRS[@]}" "${EXCLUDES[@]}" || true; } | wc -l | tr -d ' ') ))

echo "METRIC repo_silent_catch_blocks=${repo_silent_catch_blocks}"
echo "METRIC repo_files_with_silent_catches=${repo_files_with_silent_catches}"
echo "METRIC repo_silent_promise_catches=${repo_silent_promise_catches}"
echo "METRIC runtime_core_silent_catches=${runtime_core_silent_catches}"
