#!/bin/bash
# Restart piclaw: kill old process, exec into new one.
#
# Usage: restart-piclaw.sh [OLD_PID] [-- CMD...]
#   OLD_PID  PID to kill first (default: read from /tmp/piclaw.pid)
#   CMD      command to run (default: piclaw --port 3000)
#
# Launch detached:
#   nohup setsid /path/to/restart-piclaw.sh </dev/null >>/tmp/restart-piclaw-force.log 2>&1 &
#
# Uses exec to replace itself with piclaw, so this script's PID
# becomes piclaw's PID. Only one process, no wrapper zombies.

export PATH="/home/agent/.bun/bin:/home/linuxbrew/.linuxbrew/bin:$PATH"
export BUN_INSTALL="/home/agent/.bun"

PIDFILE=/tmp/piclaw.pid
LOCKFILE=/tmp/piclaw-restart.lock
LOCK_HELD=0

if command -v flock >/dev/null 2>&1; then
  exec 9>"$LOCKFILE"
  if ! flock -n 9; then
    echo "[reload] Another restart is in progress. Exiting."
    exit 1
  fi
  LOCK_HELD=1
else
  echo "[reload] flock not available; continuing without lock"
fi

# Parse args
OLD_PID=""
if [ $# -ge 1 ] && [ "$1" != "--" ]; then
  OLD_PID="$1"
  shift
fi
[ "${1:-}" = "--" ] && shift

if [ $# -eq 0 ]; then
  set -- piclaw --port 3000
fi

# Fall back to pidfile
if [ -z "$OLD_PID" ] && [ -f "$PIDFILE" ]; then
  OLD_PID=$(cat "$PIDFILE" 2>/dev/null || true)
fi

PORT=3000
for ((i=1;i<=$#;i++)); do
  arg="${!i}"
  if [ "$arg" = "--port" ]; then
    next_index=$((i+1))
    PORT="${!next_index:-3000}"
  elif [[ "$arg" == --port=* ]]; then
    PORT="${arg#--port=}"
  fi
done

COMMAND="$1"
if ! command -v "$COMMAND" >/dev/null 2>&1; then
  echo "[reload] Command not found: $COMMAND"
  exit 1
fi

echo ""
echo "[reload] === $(date -Iseconds) ==="

wait_for_exit() {
  local pid="$1"
  local label="$2"
  for _ in $(seq 1 20); do
    if ! kill -0 "$pid" 2>/dev/null; then
      return 0
    fi
    sleep 0.5
  done
  echo "[reload] ${label} still running after timeout"
  return 1
}

is_zombie() {
  local pid="$1"
  local stat
  stat=$(ps -o stat= -p "$pid" 2>/dev/null | tr -d ' ')
  [[ "$stat" == *Z* ]]
}

find_port_pid() {
  if ! command -v ss >/dev/null 2>&1; then
    return 0
  fi
  ss -ltnp "sport = :$PORT" 2>/dev/null | awk -F 'pid=' 'NR>1 {split($2,a,","); print a[1]}' | head -1
}

kill_pid() {
  local pid="$1"
  local label="$2"
  if [ -n "$pid" ] && kill -0 "$pid" 2>/dev/null; then
    if is_zombie "$pid"; then
      echo "[reload] ${label} ($pid) is a zombie; skipping kill"
      return 0
    fi
    echo "[reload] Stopping ${label} ($pid)..."
    kill "$pid" 2>/dev/null || true
    wait_for_exit "$pid" "$label" || true
    if kill -0 "$pid" 2>/dev/null; then
      echo "[reload] Force-killing ${label} ($pid)"
      kill -9 "$pid" 2>/dev/null || true
      sleep 1
    fi
  fi
}

# Kill old piclaw
kill_pid "$OLD_PID" "old piclaw"

# Ensure port is free (kill stray piclaw if needed)
PORT_PID=$(find_port_pid)
if [ -n "$PORT_PID" ]; then
  CMDLINE=$(ps -p "$PORT_PID" -o cmd= 2>/dev/null || true)
  if echo "$CMDLINE" | grep -qi "piclaw"; then
    kill_pid "$PORT_PID" "piclaw on port $PORT"
  else
    echo "[reload] Port $PORT is in use by PID $PORT_PID ($CMDLINE). Aborting."
    exit 1
  fi
fi

SUPERVISOR_PIDFILE=/tmp/piclaw-supervisor.pid
CHILD_PID=""

tidy_lock() {
  if [ "$LOCK_HELD" -eq 1 ]; then
    flock -u 9 || true
    exec 9>&- || true
  fi
}

handle_signal() {
  echo "[reload] Signal received, shutting down..."
  if [ -n "$CHILD_PID" ] && kill -0 "$CHILD_PID" 2>/dev/null; then
    kill "$CHILD_PID" 2>/dev/null || true
    wait "$CHILD_PID" 2>/dev/null || true
  fi
  tidy_lock
  exit 0
}
trap handle_signal SIGTERM SIGINT

# Kill old supervisor if present
if [ -f "$SUPERVISOR_PIDFILE" ]; then
  OLD_SUPERVISOR=$(cat "$SUPERVISOR_PIDFILE" 2>/dev/null || true)
  if [ -n "$OLD_SUPERVISOR" ] && [ "$OLD_SUPERVISOR" != "$$" ]; then
    kill_pid "$OLD_SUPERVISOR" "old supervisor"
  fi
fi

echo $$ > "$SUPERVISOR_PIDFILE"

tidy_lock

echo "[reload] Starting: $* (supervisor PID $$)"
ATTEMPT=0
while true; do
  ATTEMPT=$((ATTEMPT + 1))
  "$@" &
  CHILD_PID=$!
  echo "$CHILD_PID" > "$PIDFILE"
  wait "$CHILD_PID"
  STATUS=$?
  CHILD_PID=""
  if [ $STATUS -eq 0 ]; then
    echo "[reload] piclaw exited cleanly"
    exit 0
  fi
  if [ $ATTEMPT -ge 5 ]; then
    echo "[reload] piclaw exited with status $STATUS; giving up"
    exit $STATUS
  fi
  echo "[reload] piclaw exited with status $STATUS; restarting in 2s"
  sleep 2

done
