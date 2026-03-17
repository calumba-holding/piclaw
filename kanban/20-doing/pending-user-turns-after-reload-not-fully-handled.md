---
id: pending-user-turns-after-reload-not-fully-handled
title: Pending user turns after reload are still not fully handled
status: doing
priority: high
created: 2026-03-14
updated: 2026-03-17
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - recovery
  - restart
  - reload
  - queue
  - threading
owner: pi
---

# Pending user turns after reload are still not fully handled

## Summary

Follow-up ticket for the web chat reload/restart path.

Although several related tickets are already closed, there is still active user
concern that already-submitted user turns are not always handled correctly after
reload/restart. This should be treated as a fresh verification/fix ticket, not
as proof that the earlier recovery work was invalid.

The goal is to verify whether any remaining gap exists in how the system
recovers, resumes, surfaces, or correctly parents pending user turns after a
reload/restart — and to fix it if confirmed.

## Problem Statement

The project already closed substantial recovery/restart work under:

- `kanban/50-done/restart-recovery-and-terminal-publication-hardening.md`
- `kanban/50-done/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `kanban/50-done/queue-inflight-turn-parenting-regression.md`
- `kanban/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `kanban/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`

However, the user explicitly requested a new ticket because they still suspect
that pending user turns after reload are not fully handled in practice.

Potential remaining failure modes include:

- a submitted user turn exists before reload but is not resumed/processed after restart
- a pending turn is resumed but the UI does not show the resulting terminal post reliably
- a recovered turn is processed under the wrong thread root after ordering/retry drift
- queue/deferred follow-up state survives restart, but materialized persisted turns do not drain correctly afterward
- frontend reconnect logic makes a recovered turn appear lost even when backend state eventually recovers

## Acceptance Criteria

- [ ] A user turn submitted before reload/restart is either:
  - resumed and completed exactly once, or
  - surfaced as an explicit failed terminal outcome,
  but is never silently lost.
- [ ] A recovered turn cannot be attached to the wrong user thread after restart/retry ordering changes.
- [ ] If the backend completes a recovered turn, the web UI surfaces the resulting terminal post without requiring a manual nudge beyond normal reconnect behavior.
- [ ] Deferred queued follow-ups and persisted pending turns remain distinguishable and are drained in the intended order after restart.
- [ ] No pending user turn can disappear from both:
  - the queue/deferred state, and
  - the persisted timeline / terminal outcome path.
- [ ] Regression coverage exists for the confirmed failure mode.

## Investigation Plan

- [ ] Re-audit restart-time handling of:
  - inflight persisted user turns
  - deferred queued follow-ups
  - `resume_pending` startup IPC
  - reconnect-time timeline/status refresh
- [ ] Verify whether the bug is primarily:
  - backend recovery,
  - queue drain ordering,
  - thread-root derivation,
  - frontend visibility/reconciliation,
  - or a combination of the above.
- [ ] Reproduce with fixture/in-memory DB tests rather than injecting live probe messages into the real chat.
- [ ] Confirm whether this is a new regression, an uncovered edge case, or a UI-only visibility bug.

## Test Plan

- [ ] Add/extend recovery tests around persisted user turns that exist before restart but have not yet reached a terminal assistant outcome.
- [ ] Add/extend queue/retry tests for restart-time ordering where multiple pending items exist.
- [ ] Add/extend frontend/web tests if the failure is visibility-only after reconnect.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw`.

## Definition of Done

- [ ] Root cause confirmed with code/test evidence or DB-backed runtime evidence
- [ ] Remaining reload/pending-turn gap fixed or explicitly disproven
- [ ] Regression coverage added for the confirmed scenario
- [ ] Related older tickets linked and differentiated clearly
- [ ] `bun run quality` passes

## Updates

### 2026-03-17 (implementation tranche)
- Implemented restart/recovery fixes for the three confirmed active gaps:
  1. `resumePendingChats(...)` now scans known chats beyond `chat_cursors` rows, so chats with persisted turns but no cursor row are no longer skipped.
  2. `resumePendingChats(...)` now enqueues chats that have deferred queued follow-ups even when persisted backlog is empty.
  3. `handleAgentMessage(...)` now defers new `auto/queue` submissions when either `(isActive || hasQueuedBacklog)` so post-restart submissions cannot jump ahead of existing deferred backlog.
- Added/updated regression coverage:
  - `test/channels/web/recovery.test.ts`
    - `resumePendingChats scans known chats even when a cursor row is missing`
    - `resumePendingChats enqueues deferred-only queued followups`
  - `test/channels/web/web-channel.test.ts`
    - `web channel keeps new auto submissions deferred when deferred backlog exists after restart`
  - Updated `test/channels/web/agent-message-handler.test.ts` mocks to cover the new queue-backlog branch cleanly.
- Validation evidence:
  - `bun test test/channels/web/recovery.test.ts`
  - `bun test test/channels/web/web-channel.test.ts`
  - `bun test test/channels/web/agent-message-handler.test.ts`
  - `bun run quality` → `1022 pass, 2 skip, 0 fail`
- Files changed:
  - `piclaw/src/channels/web/recovery.ts`
  - `piclaw/src/channels/web/handlers/agent.ts`
  - `piclaw/test/channels/web/recovery.test.ts`
  - `piclaw/test/channels/web/web-channel.test.ts`
  - `piclaw/test/channels/web/agent-message-handler.test.ts`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-17
- Lane change: `40-review` → `20-doing` to continue active investigation after user request for a deeper root-cause audit.
- Completed deep code review of restart/reload turn-recovery paths (`src/channels/web/recovery.ts`, `src/channels/web/handlers/agent.ts`, `src/channels/web.ts`, `src/runtime/startup.ts`, `web/src/app.ts`).
- Confirmed concrete backend ordering/recovery gaps that can still make pending turns look lost or out-of-order after reload:
  1. `resumePendingChats(...)` only scans chats present in `chat_cursors` and skips chats with no cursor row (`recovery.ts`: `if (since === undefined) continue`).
     - If a first-ever user turn is persisted but the process restarts before `processChat()` begins, there may be no cursor row yet.
     - Startup resume can miss that chat entirely, leaving the turn undrained until another message arrives.
  2. Startup resume only keys off persisted messages (`getMessagesSince(...)`) and does not trigger drain for deferred queued follow-ups alone.
     - Deferred queue survives restart in `chat_cursors.queued_followups_json`, but no `processChat()` run is enqueued when persisted backlog is empty.
     - Result: queued user turns can stall indefinitely after restart unless another event nudges processing.
  3. New post-restart submissions can bypass older deferred queued turns because defer gating uses only `isActive` (`agent.ts`: `shouldDeferQueuedFollowup ... && isActive ...`).
     - After restart, `isActive` is false even when deferred queue backlog exists.
     - A newly submitted normal turn can be persisted and processed before older deferred queued turns.
  4. `processChat()` prioritizes persisted backlog and only materializes deferred queue when `messages.length === 0`.
     - This reinforces the skip-ahead behavior above (new persisted turns can run before older deferred items).
- Secondary reliability gap found:
  - Stale inflight markers older than `MAX_INFLIGHT_AGE_MS` are cleared without rollback and without explicit terminal failure publication (`recovery.ts`).
  - That path avoids retry loops but can still violate “never silently lost” semantics for long-downtime restarts.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-16
- Kept open intentionally after the first concrete fix landed.
- The same-millisecond cursor / monotonic timestamp bug is now fixed, but this ticket still represents the broader “is any real reload/pending-turn gap still reproducible in practice?” question.
- In other words: one real root cause is closed, but the umbrella stays in `doing` until either the remaining concern is disproven or another concrete failure mode is confirmed and fixed.

### 2026-03-15
- Lane change: `00-inbox` → `20-doing` after the user confirmed the out-of-turn/off-by-one behaviour is still happening in practice.
- Active investigation identified a concrete likely gap in the persistence layer: pending-turn drain is cursor-based on `timestamp > cursor_ts`, while web/user messages could still land with equal millisecond timestamps.
- Implemented a monotonic per-chat message timestamp fix in `piclaw/src/db/messages.ts` so later turns cannot be skipped or appear off-by-one simply because they were persisted in the same nominal millisecond.
- Updated the web message write path in `piclaw/src/channels/web/message-store.ts` so returned interaction timestamps and chat metadata use the final persisted timestamp.
- Added regression coverage in `piclaw/test/db/db.test.ts` for the exact cursor case: first turn advances the cursor, second turn arrives with the same requested timestamp, and `getMessagesSince(...)` must still surface the later turn.
- Validation evidence:
  - `bun test test/db/db.test.ts`
  - `bun run build:web`
  - `bun run quality` → `911 pass, 0 fail`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 1, test: 2, deps: 1, risk: 2)

### 2026-03-14
- Created from explicit user request after reviewing closed reload/recovery/turn tickets and concluding the topic still needs a fresh follow-up investigation.
- This ticket intentionally assumes prior work may be largely correct while still allowing for a real remaining gap in pending-turn handling after reload.

## Notes

- Do not assume that a previously closed recovery ticket means no new regression exists.
- Prefer evidence from fixture coverage, DB state, and restart/reconnect behavior over intuition.
- Keep Supervisor/container assumptions aligned with the live runtime model documented elsewhere in the repo.

## Links

- `kanban/50-done/restart-recovery-and-terminal-publication-hardening.md`
- `kanban/50-done/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `kanban/50-done/queue-inflight-turn-parenting-regression.md`
- `kanban/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `kanban/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`
- `kanban/20-doing/queued-followup-stack-does-not-refresh-after-removal.md`
- `piclaw/src/channels/web/recovery.ts`
- `piclaw/src/channels/web/chat-run-control.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/runtime/startup.ts`
- `piclaw/web/src/app.ts`

### 2026-03-16 (reconnect fix)
- Found and fixed a concrete frontend gap: the SSE reconnect handler did not call `refreshQueueState()`.
- After an SSE connection drop and reconnect (including page reload scenarios), queued follow-ups submitted before the gap were invisible in the compose stack until the next 60s poll.
- Fix: added `refreshQueueState()` to the reconnect branch of `handleConnectionStatusChange` in `web/src/app.ts`.
- Combined with the earlier generation-counter fix and the backend monotonic timestamp fix, the three known concrete failure modes for pending turns after reload are now addressed.
- Committed and pushed as `0fc58a3`.
- `bun run quality` → 1019 pass, 0 fail.
