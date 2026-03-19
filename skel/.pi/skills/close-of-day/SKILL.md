---
name: close-of-day
description: Run a daily end-of-day sweep: refresh situation notes, back up state, clean low-value timeline traffic, and run the daily-notes summarisation flow before declaring the day closed.
distribution: private
---

# Close of Day

A one-shot maintenance skill to:

1. Run `situate` and refresh daily notes for the selected chat scope.
   - for `web:*`, this now means all web session trees (roots plus branches), not just the currently visible tab
2. Run a restic backup before cleanup.
3. Clean up low-value timeline messages using the unified `messages` tool actions.
4. **Immediately read and follow** `/workspace/.pi/skills/situate-daily-notes/SKILL.md` as a required sub-step.
5. Finish the daily-note summaries before reporting completion.

It is intended to be run once per day after work.

**Important:** close-of-day is **not complete** when the report is generated or the cleanup finishes. You must continue straight into the daily-notes workflow in the same task.

## What it does

- Runs:
  - `/workspace/scripts/situate.ts` with `--update-notes`
    - for `web:*`, transcript previews in the generated report are linearised per session tree rather than globally interleaved
  - optional restic backup (`/workspace/.piclaw/restic/backup.sh`) **before cleanup starts**
  - `timeline` cleanup groups: reloads, compaction, greetings, slash command chatter, command responses, one-word acks, transitions, version/build/git noise and related noise
  - then the `situate-daily-notes` workflow immediately afterwards
- Uses the `messages` tool actions internally:
  - `search` + `delete` for cleanup candidate discovery/removal
  - `search` + `get` for the daily-notes summarisation work
- Defaults to **dry-run for cleanup** so you can review counts before deleting.
- Supports a final live-delete pass with attachment guard disabled via `--include-media`.

## Required chaining

After cleanup, explicitly read and follow:

- `/workspace/.pi/skills/situate-daily-notes/SKILL.md`

Do not stop at the report. The close-of-day workflow only ends after the relevant daily note files have been updated.

## Usage

```bash
bun run /workspace/.pi/skills/close-of-day/close-of-day.ts \
  --days 1 \
  --chat-jid web:default \
  --report /workspace/exports/close-of-day.md \
  --cleanup
```

Optional flags:

- `--dry-run` — only report what would be deleted (default: `true`).
- `--apply` — perform deletions (instead of dry-run).
- `--days <n>` — how many days to include in the situation report and cleanup search window.
- `--since <iso8601>` — override window start for cleanup.
- `--chat-jid <jid>` — target chat context (default `web:default`).
- `--report <path>` — path for the generated situation report (default `/workspace/exports/close-of-day-<DATE>.md`).
- `--include-media` — allow delete operations to remove messages that still have attachments.
- `--skip-backup` — skip restic backup.
- `--backup-cmd <command>` — override backup command (default `/workspace/.piclaw/restic/backup.sh`).
- `--situate-only` — skip cleanup.
- `--cleanup-only` — skip the situate step.

## Example

```bash
# Preview cleanup impact only
bun run /workspace/.pi/skills/close-of-day/close-of-day.ts --days 1

# Do the cleanup, including attachment-bearing messages
bun run /workspace/.pi/skills/close-of-day/close-of-day.ts --days 1 --cleanup --include-media --report /workspace/exports/close-of-day-2026-03-12.md
```

## Completion criteria

Do **not** report "day closed" until all of the following are done:

1. situation report generated
2. backup run (unless explicitly skipped)
3. cleanup run
4. relevant daily notes updated in the same session

For the daily-notes phase:

- follow the `situate-daily-notes` skill immediately after cleanup
- use the unified `messages` tool to gather message ranges and context
- when `web:*` session trees diverged, preserve that separation in the summary instead of blending branches together
- update `notes/daily/YYYY-MM-DD.md`
- set `summarised_until` to the last covered message timestamp

## Notes

- Cleanup deletes in batches with `messages` tool semantics:
  - default run is dry-run
  - attachment-bearing threads are skipped unless `--include-media` is set
  - cleanup resolves the full session scope (all web session trees) so branch chats are cleaned alongside the anchor chat
- The generated close-of-day report is an intermediate artifact for the daily-notes step, not the final deliverable.
- For ad-hoc one-off cleanup groups, use `timeline-cleanup` directly.
