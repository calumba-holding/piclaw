---
id: restart-recovery-and-terminal-publication-hardening
title: Restart recovery and terminal publication hardening
status: done
priority: high
created: 2026-03-13
updated: 2026-03-13
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - web
  - agent
  - recovery
  - restart
  - finalization
  - queue
owner: pi
---

# Restart recovery and terminal publication hardening

## Summary

The web chat loop now has end-to-end recovery/finalization hardening for the
remaining restart-sensitive paths that were still open after the steering work
closed. The completed scope includes:

- exactly-once terminal publication rules
- inflight replay keyed to the run's own `startedAt`
- non-terminal partial row rollback
- stable replay dedupe via `resume:<chat>`
- reconnect-time timeline/status catch-up behavior
- restart-persistent deferred queued follow-ups that stay out of the timeline
- documented recovery behavior for Supervisor and `systemd --user`

This ticket is complete and ready to merge back to main.

## Problem Statement

We had already fixed several real bugs in this area, but restart/reconnect
behavior still needed dedicated hardening so a turn could not disappear between:

- draft/thought visibility,
- persisted assistant posts,
- inflight recovery rollback/replay,
- SSE reconnects, and
- timeline refresh timing.

The remaining risk was not one single bug; it was the combination of backend
run-state transitions, deferred queue behavior, and frontend visibility after
reconnect/restart.

## Acceptance Criteria

- [x] Restarting during an active turn yields exactly one terminal outcome for that turn:
  - final assistant post, or
  - persisted fallback post, or
  - explicit failed-run marker with recoverable follow-up path.
- [x] A recovered turn cannot be suppressed by older terminal replies from previous turns.
- [x] Non-terminal partial assistant rows from interrupted runs never leak into the timeline after replay.
- [x] If the backend persists the terminal assistant post during/after recovery, the UI surfaces it without requiring a manual user nudge.
- [x] If SSE reconnect misses a terminal post, timeline/status refresh closes the gap within a bounded time.
- [x] Recovery behavior is documented for Supervisor and `systemd --user` installs.
- [x] Fixture coverage exists for the major recovery/restart timing windows.

## Completed Work

### Backend

- [x] Audited success/error/fallback branches so inflight state is never cleared before a persisted terminal outcome or explicit failed-run record exists.
- [x] Standardized `resumeChat()` onto the same stable `resume:<chat>` dedupe key used by startup recovery.
- [x] Confirmed fallback publication semantics across:
  - timeout
  - model/provider init retry paths
  - empty final result
  - terminal store/persistence failure
- [x] Re-checked `failed_run` semantics now that persisted fallback counts as terminal completion.
- [x] Persisted deferred queued follow-ups in `chat_cursors.queued_followups_json` so active-turn queued items survive restarts without leaking into the timeline.
- [x] Preserved queued follow-up ordering when drain materialization fails by re-prepending the item.

### Frontend / visibility

- [x] Validated reconnect-time timeline refresh plus active-turn polling as the default recovery visibility path.
- [x] Avoided adding a new explicit recovery-complete protocol because the existing architecture plus timeline/status refresh hardening proved sufficient.
- [x] Audited draft/status clearing so terminal transitions re-sync queue state from the server instead of blindly clearing local queue UI.
- [x] Confirmed stale local stall/fallback UI is displaced when the real persisted post lands.

### Runtime / service-manager integration

- [x] Validated startup `resume_pending` behavior through the same recovery path used after reload.
- [x] Verified restart flow still recovers web work even when WhatsApp connect is slow/flaky.
- [x] Confirmed writable/persistent `PICLAW_DATA/ipc/tasks` assumptions in docs match the intended Supervisor / `systemd --user` install model.

## Implementation Outcome

### Path A — Keep current architecture, close remaining races

Completed successfully.

The final design keeps the current architecture:

- inflight state in `chat_cursors`
- terminal/non-terminal assistant reply tagging in `messages`
- startup recovery + `resume_pending` IPC
- frontend reconnect/timeline refresh safety nets
- deferred queued follow-ups persisted in `chat_cursors` instead of timeline rows

### Path B — Add explicit recovery-complete / terminal-post sync protocol

Not needed.

After the queue-state re-sync fix, reconnect-time timeline refresh hardening,
and restart-persistent deferred queue storage were added, the remaining observed
recovery gaps were closed without adding another protocol surface.

## Test Plan

- [x] `test/channels/web/recovery.test.ts`
  - `startedAt`-based replay decision remains covered
  - inflight + `resume_pending` dedupe remains covered
- [x] `test/channels/web/web-channel.test.ts`
  - recovered turn with older terminal replies before inflight start
  - recovered turn with non-terminal partial rows
  - explicit failed-run when terminal persistence/fallback persistence fails
  - persisted timeout/error fallback treated as terminal completion
  - deferred queued follow-up persistence across a fresh `WebChannel` instance
  - idle deferred-queue drain materialization
  - failure-preserving requeue on drain materialization failure
- [x] `test/db/chat-cursors.test.ts`
  - terminal vs non-terminal reply detection
  - rollback cleanup of partial bot rows
  - deferred queued follow-up persistence in `chat_cursors`
- [x] Manual/runtime validation
  - restart during active turn
  - confirm recovered work is resumed
  - confirm terminal assistant post appears after recovery
  - confirm no duplicate replay after startup + IPC recovery both fire

## Definition of Done

- [x] Acceptance criteria all pass
- [x] Relevant backend + frontend fixture coverage added/updated
- [x] Runtime restart validation performed at least twice without losing the active turn
- [x] Docs remain accurate for Supervisor and `systemd --user`
- [x] `bun run quality` passes

## Updates

### 2026-03-13
- Created this ticket to separate the remaining restart/recovery/finalization scope from the already-closing steering lifecycle work.

### 2026-03-13 (progress)
- Standardized `resumeChat()` onto the same stable `resume:<chat>` queue key used by startup recovery, closing one duplicate-replay gap.
- Evidence: `piclaw/src/channels/web/chat-run-control.ts`, `piclaw/test/channels/web/chat-run-control.test.ts`, `piclaw/test/channels/web/recovery.test.ts`.

### 2026-03-13 (progress, deferred queue persistence)
- Moved deferred queued follow-ups out of in-memory-only storage into `chat_cursors.queued_followups_json`, so active-turn queued items now survive backend restarts without leaking into the timeline.
- Preserved queue order on drain failures by re-prepending consumed items when materializing the backing user message fails.
- Added fixture coverage for restart persistence, idle drain materialization, timeout-fallback drain, and failure-preserving requeue behavior.
- Evidence: `piclaw/src/db/chat-cursors.ts`, `piclaw/src/db/connection.ts`, `piclaw/src/channels/web.ts`, `piclaw/src/channels/web/handlers/agent.ts`, `piclaw/test/db/chat-cursors.test.ts`, `piclaw/test/channels/web/web-channel.test.ts`.

### 2026-03-13 (closure)
- Full quality gate passed after the final recovery changes: `790 pass, 0 fail`.
- Live restart validation now includes multiple active-turn recoveries with successful completion, including:
  - `22:46:15` startup `resume_pending` processing followed by `22:46:40` agent completion
  - `23:25:48` recovery after restart followed by `23:27:19` agent completion
- Verified the live DB migration for `chat_cursors.queued_followups_json` and confirmed `/agent/queue-state` still returns the expected shape.
- This closes the remaining restart/recovery/finalization scope that had stayed open after the steering ticket was moved to done.

## Notes

- Steering lifecycle work is already tracked separately in `kanban/50-done/compose-input-queue-by-default-steering.md`.
- This closure intentionally relies on both fixture evidence and real restart observations from the live runtime.

## Links

- `kanban/50-done/compose-input-queue-by-default-steering.md`
- `piclaw/src/channels/web/recovery.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/channels/web/chat-run-control.ts`
- `piclaw/src/channels/web.ts`
- `piclaw/src/runtime/startup.ts`
- `piclaw/src/runtime/bootstrap.ts`
- `piclaw/src/db/chat-cursors.ts`
- `piclaw/web/src/app.ts`
