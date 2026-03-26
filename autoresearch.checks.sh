#!/bin/bash
set -euo pipefail

run_check() {
  local name="$1"
  shift
  local log_file
  log_file=$(mktemp)
  if "$@" >"$log_file" 2>&1; then
    rm -f "$log_file"
    return 0
  fi
  echo "[checks] ${name} failed"
  tail -80 "$log_file"
  rm -f "$log_file"
  exit 1
}

run_check typecheck bun run typecheck
run_check silent-swallows bun run check:silent-swallows
run_check targeted-tests bash -lc 'cd runtime && PICLAW_DB_IN_MEMORY=1 bun test --max-concurrency=1 test/agent-pool/agent-pool.test.ts test/agent-pool/agent-pool-slash-command.test.ts test/channels/web/terminal-session-service.test.ts test/channels/web/vnc-session-service.test.ts test/channels/web/remote-display-websocket-tcp-bridge.test.ts test/channels/web/workspace-file-service.test.ts test/tools/tool-output.test.ts test/web/adaptive-card-renderer.test.ts test/web/chat-window.test.ts test/web/generated-widget.test.ts test/web/mobile-viewport.test.ts test/web/tab-store.test.ts test/web/terminal-pane.test.ts test/scripts/silent-swallow-metrics.test.ts'
