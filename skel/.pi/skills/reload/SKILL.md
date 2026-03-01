---
name: reload
description: Reinstall piclaw from workspace source and force-restart the running process. Use after making code changes to piclaw.
---

# Reload Piclaw (force)

Reinstall the piclaw package from workspace source and restart the running process
immediately (no waiting for the current pi invocation). This is a force hot-reload —
the new process takes over on the same port.

## Steps

1. Build piclaw, pack a tarball, and install it globally as real files (not symlinks). Bun's `add -g file:` always creates symlinks, so we manually extract and install dependencies:
   ```bash
   cd /workspace/piclaw && make build-piclaw
   cd /workspace/piclaw/piclaw && bun pm pack --destination /tmp
   TARBALL=$(ls -t /tmp/piclaw-*.tgz | head -1)
   DEST=/home/agent/.bun/install/global/node_modules/piclaw
   rm -rf "$DEST"
   mkdir -p "$DEST"
   tar -xzf "$TARBALL" -C "$DEST" --strip-components=1
   rm -f "$TARBALL"
   cd "$DEST" && bun install --production
   ```

2. Find the running piclaw PID and its command line:
   ```bash
   PICLAW_PID=$(pgrep -f 'bun.*piclaw.*--port' | head -1)
   PICLAW_CMD=$(cat /proc/$PICLAW_PID/cmdline | tr '\0' ' ')
   ```

3. Launch the restart script (ships alongside this SKILL.md):
   ```bash
   SKILL_DIR="$(cd "$(dirname "$0")" && pwd)"
   nohup setsid "$SKILL_DIR/restart-piclaw.sh" "$PICLAW_PID" $PICLAW_CMD \
     </dev/null >/tmp/restart-piclaw-force.log 2>&1 &
   disown
   ```

   Since pi cannot run the above `$SKILL_DIR` expansion directly, use the absolute path:
   ```bash
   nohup setsid /workspace/.pi/skills/reload/restart-piclaw.sh "$PICLAW_PID" $PICLAW_CMD \
     </dev/null >/tmp/restart-piclaw-force.log 2>&1 &
   disown
   ```

4. Confirm the restart script is running:
   ```bash
   echo "Force restart scheduled. Piclaw will restart immediately."
   ```

## Important Notes

- This force restart does NOT wait for the current pi invocation; the current response may be cut off.
- There will be a brief gap where piclaw is down during the restart.
- The new piclaw inherits the same command-line flags as the old one.
- WhatsApp session state persists across restarts (stored in SQLite + auth dir).
- If something goes wrong, check `/tmp/restart-piclaw-force.log`.
- `bun add -g file:` creates symlinks; the pack+extract approach ensures real file copies.
- The restart script `wait`s for piclaw so it won't become a zombie process.
- A PID file is written to `/tmp/piclaw.pid` for future restarts.
