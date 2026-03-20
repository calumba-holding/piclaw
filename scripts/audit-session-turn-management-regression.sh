#!/usr/bin/env bash

set -o nounset
set -o pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_DIR="$ROOT_DIR/runtime"
LOG_DIR="${PICLAW_AUDIT_LOG_DIR:-/workspace/logs}"
TIMESTAMP="$(date -u +%Y-%m-%dT%H-%M-%SZ)"
LOG_FILE="$LOG_DIR/audit-session-turn-management-regression-${TIMESTAMP}.log"

mkdir -p "$LOG_DIR"
: > "$LOG_FILE"

# tee output to both stdout and log
exec > >(tee -a "$LOG_FILE") 2>&1

echo "# session-turn-management regression audit"
echo "# timestamp: $TIMESTAMP"
echo "# project: $PROJECT_DIR"
echo "# log: $LOG_FILE"

declare -a TEST_COMMANDS=(
  "bun test test/channels/web/web-channel.test.ts"
  "bun test test/channels/web/agent-message-handler.test.ts"
  "bun test test/channels/web/http-dispatch-agent.test.ts"
  "bun test test/channels/web/recovery.test.ts"
  "bun test test/channels/web/message-write-flows.test.ts"
  "bun test test/agent-control/parser.test.ts test/agent-control/agent-control-handlers.test.ts"
  "bun test test/agent-pool/session-auto-rotation.test.ts"
  "bun test test/agent-pool/agent-pool.test.ts"
  "bun test test/web/queue-state.test.ts test/channels/web/agent-message-handler.test.ts"
)

PASS=0
FAIL=0

for cmd in "${TEST_COMMANDS[@]}"; do
  echo
  echo "[AUDIT] Running: $cmd"
  if (cd "$PROJECT_DIR" && $cmd); then
    PASS=$((PASS + 1))
    echo "[RESULT] PASS"
  else
    FAIL=$((FAIL + 1))
    echo "[RESULT] FAIL"
  fi
done

echo

echo "===================================================="
echo "[SUMMARY] Passed: $PASS"
echo "[SUMMARY] Failed: $FAIL"
echo "[SUMMARY] Log: $LOG_FILE"

echo

echo "[MANUAL SQL CHECKS (optional)]"
echo "sqlite3 '$ROOT_DIR/.piclaw/store/messages.db' <<'SQL'"
echo "SELECT rowid, chat_jid, role, thread_id, json_extract(data, '$.content') AS content"
echo "FROM messages"
echo "WHERE chat_jid = 'web:default'"
echo "ORDER BY rowid DESC"
echo "LIMIT 80;"
echo "SQL"

echo

echo "[SESSION ROTATION CHECKS (manual)]"
echo "- Verify /session-rotate blocked under active/compacting/retrying/queued conditions"
echo "- Verify archived files in .piclaw/data/sessions/<chat>/archive/"

echo

echo "[BRANCH ISOLATION CHECKS (manual)]"
echo "- Create branch and send queued messages on web:default and web:default:<branch>"
echo "- Confirm queue, timeline, and thread_id remain branch-local"
echo "- Confirm /agent/branches returns expected rows for both chats"

if ((FAIL > 0)); then
  echo
  echo "[AUDIT RESULT] FAILED"
  exit 1
fi

echo

echo "[AUDIT RESULT] PASSED"
exit 0
