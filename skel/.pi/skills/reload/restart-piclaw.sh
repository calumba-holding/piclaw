#!/bin/bash
set -e

PICLAW_PID=${1:-}
shift 1 2>/dev/null || true
PICLAW_CMD="${@:-piclaw --port 3000}"
PIDFILE=/tmp/piclaw.pid

if [ -n "$PICLAW_PID" ] && kill -0 "$PICLAW_PID" 2>/dev/null; then
  echo "[reload] Stopping old piclaw ($PICLAW_PID)..."
  kill "$PICLAW_PID" 2>/dev/null || true
  for i in $(seq 1 10); do
    kill -0 "$PICLAW_PID" 2>/dev/null || break
    sleep 0.5
  done
  kill -9 "$PICLAW_PID" 2>/dev/null || true
  sleep 1
fi

echo "[reload] Starting new piclaw: $PICLAW_CMD"
$PICLAW_CMD &
NEW_PID=$!
echo "$NEW_PID" > "$PIDFILE"
echo "[reload] New piclaw PID: $NEW_PID (pidfile: $PIDFILE)"

# Wait so it doesn't become a zombie
wait $NEW_PID 2>/dev/null || true
echo "[reload] Piclaw exited"
