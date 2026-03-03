---
name: schedule
description: Schedule a task to run later or on a recurring basis. Creates an IPC file that piclaw picks up to register the scheduled task.
---

# Schedule a Task

Create a JSON file in the piclaw IPC directory to schedule work.

## Usage

Write a JSON file to `$PICLAW_DATA/ipc/tasks/`:

```bash
cat > "$PICLAW_DATA/ipc/tasks/schedule_$(date +%s).json" <<EOF
{
  "type": "schedule_task",
  "chatJid": "$PICLAW_CHAT_JID",
  "prompt": "Describe what should happen when this task fires",
  "model": "gpt-5.1-codex-mini",
  "schedule_type": "TYPE",
  "schedule_value": "VALUE"
}
EOF
```

`model` is optional. When provided, the scheduler validates the model before creating the task and switches the session model before running the prompt. After the task completes, the original model is restored. If the model name is ambiguous, use `provider/modelId`.

## Session Isolation

Scheduled tasks are isolated from the user's conversation using the **session tree**. Before a task executes, the scheduler saves the current tree position (leaf ID). The task's prompt and response are appended to the session normally, then the scheduler navigates the tree back to the saved position. This means:

- The task's output lives in a **side branch** — it won't appear in the user's next conversation turn.
- The full task history is preserved and can be inspected via the `/tree` command.
- If the task used a different model, it is restored after navigation.

## Schedule Types

### Cron (recurring on a schedule)
Use standard cron expressions. Example — every weekday at 9am:
```json
{ "schedule_type": "cron", "schedule_value": "0 9 * * 1-5" }
```

### Interval (recurring, in milliseconds)
Example — every hour:
```json
{ "schedule_type": "interval", "schedule_value": "3600000" }
```

### Once (one-time at a specific time)
Use an ISO 8601 timestamp:
```json
{ "schedule_type": "once", "schedule_value": "2025-02-01T09:00:00Z" }
```

## Managing Existing Tasks

Write to the same IPC directory:

• Pause:    `{ "type": "pause_task", "taskId": "task-xxx" }`
• Resume:   `{ "type": "resume_task", "taskId": "task-xxx" }`
• Cancel:   `{ "type": "cancel_task", "taskId": "task-xxx" }`
• Update:   `{ "type": "update_task", "taskId": "task-xxx", "prompt": "...", "model": "...", "schedule_value": "..." }`
• Cleanup:  `{ "type": "cleanup_tasks", "chatJid": "web:default" }`

Update accepts any combination of `prompt`, `model`, `schedule_type`, `schedule_value`. Only the fields you include are changed; the rest stay as-is. Set `"model": ""` to clear the model override. If the schedule is changed, `next_run` is recomputed automatically.

Cleanup deletes all completed tasks and their run logs, then posts a confirmation message.

## Environment

The following environment variables are set by piclaw when it invokes you:
- `PICLAW_DATA` — piclaw data directory (contains `ipc/`, `sessions/`)
- `PICLAW_CHAT_JID` — JID of the chat that triggered this invocation
