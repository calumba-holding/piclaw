#!/usr/bin/env bash

set -euo pipefail

ROOT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
PROJECT_DIR="$ROOT_DIR/runtime"
CHECKLIST_PATH="$ROOT_DIR/kanban/20-doing/audit-session-turn-management-regression-checklist.md"
LOG_DIR="${PICLAW_AUDIT_LOG_DIR:-/workspace/logs}"
TIMESTAMP="$(date -u +%Y-%m-%dT%H-%M-%SZ)"
LOG_FILE="$LOG_DIR/audit-session-turn-management-regression-${TIMESTAMP}.log"
FILTER_RAW="${PICLAW_AUDIT_ONLY:-}"

mkdir -p "$LOG_DIR"
: > "$LOG_FILE"

exec > >(tee -a "$LOG_FILE") 2>&1

echo "# session-turn-management regression audit"
echo "# timestamp: $TIMESTAMP"
echo "# project: $PROJECT_DIR"
echo "# checklist: $CHECKLIST_PATH"
echo "# log: $LOG_FILE"
if [[ -n "$FILTER_RAW" ]]; then
  echo "# category_filter: $FILTER_RAW"
fi

declare -a CHECKS=(
  "queue_and_threading|queue decisioning, reparenting, queue lifecycle|bun test test/channels/web/web-channel.test.ts"
  "request_handling|active/inactive defer paths and command handling|bun test test/channels/web/agent-message-handler.test.ts"
  "http_routes|agent route dispatch coverage|bun test test/channels/web/http-dispatch-agent.test.ts"
  "recovery|restart recovery, resume_pending, deferred hydration|bun test test/channels/web/recovery.test.ts"
  "message_writes|placeholder/threading message-write flows|bun test test/channels/web/message-write-flows.test.ts"
  "control_commands|parser + control handler regressions|bun test test/agent-control/parser.test.ts test/agent-control/agent-control-handlers.test.ts"
  "manual_rotation|manual /session-rotate archive + pending-queue safety|bun test test/agent-control/session-rotate-integration.test.ts"
  "auto_rotation|automatic session rotation integration|bun test test/agent-pool/session-auto-rotation.test.ts"
  "agent_pool_branches|fork/prune/session branch lifecycle|bun test test/agent-pool/branch-lifecycle-audit.test.ts"
  "web_branch_ui|branch picker/open-window UI helper coverage|bun test test/web/branch-lifecycle.test.ts test/web/chat-window.test.ts"
  "browser_branch_isolation|real multi-window branch isolation via Playwright|bash ../scripts/ensure-playwright-browser-isolation.sh && PICLAW_DB_IN_MEMORY=1 PICLAW_RUN_OPTIONAL_BROWSER_TESTS=1 bun test --max-concurrency=1 --timeout=30000 test/channels/web/browser-chat-isolation.optional.test.ts"
  "web_queue_state|branch-aware queue UI state helpers|bun test test/web/queue-state.test.ts test/channels/web/agent-message-handler.test.ts"
)

declare -A REQUESTED_CATEGORY=()
if [[ -n "$FILTER_RAW" ]]; then
  IFS=',' read -r -a FILTER_ITEMS <<< "$FILTER_RAW"
  for item in "${FILTER_ITEMS[@]}"; do
    trimmed="${item//[[:space:]]/}"
    if [[ -n "$trimmed" ]]; then
      REQUESTED_CATEGORY["$trimmed"]=1
    fi
  done
fi

should_run_category() {
  local category="$1"
  if (( ${#REQUESTED_CATEGORY[@]} == 0 )); then
    return 0
  fi
  [[ -n "${REQUESTED_CATEGORY[$category]:-}" ]]
}

PASS=0
FAIL=0
SELECTED=0

declare -A CATEGORY_PASS=()
declare -A CATEGORY_FAIL=()
declare -A CATEGORY_LABEL=()
declare -a CATEGORY_ORDER=()

for entry in "${CHECKS[@]}"; do
  IFS='|' read -r category label cmd <<< "$entry"
  if ! should_run_category "$category"; then
    continue
  fi

  SELECTED=$((SELECTED + 1))
  if [[ -z "${CATEGORY_LABEL[$category]:-}" ]]; then
    CATEGORY_LABEL[$category]="$label"
    CATEGORY_ORDER+=("$category")
  fi

  echo
  echo "[AUDIT][$category] $label"
  echo "[AUDIT][$category] Running: $cmd"
  if (cd "$PROJECT_DIR" && eval "$cmd"); then
    PASS=$((PASS + 1))
    CATEGORY_PASS[$category]=$(( ${CATEGORY_PASS[$category]:-0} + 1 ))
    echo "[RESULT][$category] PASS"
  else
    FAIL=$((FAIL + 1))
    CATEGORY_FAIL[$category]=$(( ${CATEGORY_FAIL[$category]:-0} + 1 ))
    echo "[RESULT][$category] FAIL"
  fi
done

if (( ${#REQUESTED_CATEGORY[@]} > 0 )) && (( SELECTED == 0 )); then
  echo
  echo "[AUDIT RESULT] FAILED"
  echo "No audit categories matched PICLAW_AUDIT_ONLY=$FILTER_RAW" >&2
  exit 2
fi

MANUAL_REMAINDER_COUNT="unknown"
if [[ -f "$CHECKLIST_PATH" ]]; then
  MANUAL_REMAINDER_COUNT="$(bun -e '
    const fs = require("fs");
    const text = fs.readFileSync(process.argv[1], "utf8");
    const unchecked = text.match(/^- \[ \]/gm) || [];
    process.stdout.write(String(unchecked.length));
  ' "$CHECKLIST_PATH")"
fi

echo
echo "===================================================="
echo "[SUMMARY] Selected: $SELECTED"
echo "[SUMMARY] Passed: $PASS"
echo "[SUMMARY] Failed: $FAIL"
echo "[SUMMARY] Log: $LOG_FILE"

echo
echo "[CATEGORY SUMMARY]"
for category in "${CATEGORY_ORDER[@]}"; do
  echo "- $category: ${CATEGORY_PASS[$category]:-0} passed / ${CATEGORY_FAIL[$category]:-0} failed — ${CATEGORY_LABEL[$category]}"
done

echo
echo "[MANUAL REMAINDER] Unchecked checklist items: $MANUAL_REMAINDER_COUNT"

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
echo "[MANUAL HIGH-SIGNAL CHECKS (remaining only)]"
echo "- No standing manual regression checks remain in the default audit."
echo "- Capture a DB evidence slice only when a failure/regression is suspected or reproduction depends on persisted state inspection"
echo "- Visually confirm queue stack refresh behavior only if a browser timing/rendering issue is suspected despite the green event-order checks"

if ((FAIL > 0)); then
  echo
  echo "[AUDIT RESULT] FAILED"
  exit 1
fi

echo
echo "[AUDIT RESULT] PASSED"
exit 0
