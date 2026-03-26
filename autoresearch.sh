#!/bin/bash
set -euo pipefail

# Fast sanity check so obviously broken repo state fails early.
[ -d runtime/src ]
[ -d runtime/web/src ]

EMPTY_CATCH_PATTERN='catch\s*(\([^)]*\))?\s*\{\s*\}'
PROMISE_SWALLOW_PATTERN='\.catch\(\s*\(\)\s*=>\s*\{\s*\}\s*\)'
SRC_GLOBS=(runtime/src runtime/web/src)
EXCLUDES=(--glob '!**/*.min.js' --glob '!**/vendor/**' --glob '!**/static/**')
CRITICAL_FILES=(
  runtime/src/agent-pool.ts
  runtime/src/channels/web.ts
  runtime/src/channels/web/terminal/terminal-session-service.ts
  runtime/src/channels/web/vnc/vnc-session-service.ts
  runtime/src/channels/web/remote-display/websocket-tcp-bridge.ts
  runtime/src/channels/web/workspace/file-service.ts
  runtime/src/channels/whatsapp.ts
  runtime/src/tool-output.ts
)

silent_catch_blocks=$(rg -nU "$EMPTY_CATCH_PATTERN" "${SRC_GLOBS[@]}" "${EXCLUDES[@]}" | wc -l | tr -d ' ')
critical_silent_catches=$(rg -nU "$EMPTY_CATCH_PATTERN" "${CRITICAL_FILES[@]}" | wc -l | tr -d ' ')
files_with_silent_catches=$(rg -lU "$EMPTY_CATCH_PATTERN" "${SRC_GLOBS[@]}" "${EXCLUDES[@]}" | wc -l | tr -d ' ')
silent_promise_catches=$(rg -n "$PROMISE_SWALLOW_PATTERN" "${SRC_GLOBS[@]}" "${EXCLUDES[@]}" | wc -l | tr -d ' ')

echo "METRIC silent_catch_blocks=${silent_catch_blocks}"
echo "METRIC critical_silent_catches=${critical_silent_catches}"
echo "METRIC files_with_silent_catches=${files_with_silent_catches}"
echo "METRIC silent_promise_catches=${silent_promise_catches}"
