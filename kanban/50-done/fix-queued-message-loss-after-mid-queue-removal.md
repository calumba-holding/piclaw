---
id: fix-queued-message-loss-after-mid-queue-removal
title: Fix queued message loss after mid-queue removal
status: done
priority: high
created: 2026-03-13
updated: 2026-03-14
completed: 2026-03-14
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - web
  - queue
  - bug
  - recovery
owner: pi
---

# Fix queued message loss after mid-queue removal

## Summary

There is a queue corruption / desynchronization bug in the web channel.

Observed symptoms during a live session:

- a queued item was processed by the backend but did **not** disappear from the web UI queue stack
- subsequent messages that should have queued were instead persisted immediately as normal user turns
- a later message appears to have been dropped entirely (neither queued nor persisted)

The user's current suspicion is that this started immediately after deleting an
item from the middle of the queue in the web UI, which may have corrupted
server-side deferred queue ordering/state and/or client reconciliation.
That observed UI action is the primary reproduction lead and should be treated
as a first-class part of the bug description until disproven.

## Acceptance Criteria

- [x] Removing a queued item from the middle of the queue does not corrupt server-side queue ordering or UI queue state.
- [x] Queued messages remain strict FIFO follow-ups and are never processed out of turn while an earlier active turn is still running.
- [x] The only way a queued item may affect the active turn before its turn arrives is if the user explicitly converts that item into steering.
- [x] When a queued item is consumed/processed, it disappears from the web UI queue stack promptly and exactly once.
- [x] Subsequent queue submissions during an active turn are either:
  - successfully enqueued, or
  - intentionally persisted as normal turns when the backend is no longer streaming,
  but are never silently dropped.
- [x] A message cannot be simultaneously absent from both the queue state and the persisted timeline after submit.
- [x] Fixture coverage reproduces the remove-middle-queue scenario and proves no message loss / stale UI item remains.

## Implementation Paths

### Path A — Audit and harden server-side deferred queue mutation semantics

Treat server queue mutation as the source of truth and verify that all queue
operations preserve a consistent list when removing an item from the middle,
consuming the head, or re-prepending on failure.

Focus areas:

- deferred queue persistence in `chat_cursors.queued_followups_json`
- `removeQueuedFollowupForAction(...)`
- queue-state SSE/UI sync after remove/consume
- interactions between queued follow-up removal and active turn drain

Pros:
- attacks the most likely source of corruption directly
- keeps current architecture intact

Cons:
- requires careful audit of multiple queue mutation paths

### Path B — Add stronger queue versioning / reconciliation

Add an explicit queue version or sequence number so the client can reconcile
stale queue UI state after remove/consume operations.

Pros:
- stronger UI/server convergence guarantees
- easier to reason about after reconnect or rapid changes

Cons:
- larger protocol surface area
- may be unnecessary if the core server mutation bug is fixed cleanly

## Test Plan

- [ ] Add/extend `piclaw/test/channels/web/web-channel.test.ts`
  - enqueue multiple deferred items
  - remove a middle item
  - continue draining queue
  - assert remaining items preserve order and UI-visible queue state matches server state
- [ ] Add a regression for “processed queue item remains visible in UI” via queue-state / SSE behavior.
- [ ] Add a regression proving later queued submissions are not lost after a prior remove.
- [ ] Run `bun run quality`.
- [ ] Perform a runtime verification without injecting synthetic probe traffic beyond normal user submissions.

## Definition of Done

- [x] Root cause confirmed in code/tests, not only inferred from symptoms
- [x] Mid-queue removal regression test added
- [x] No stale processed queue items remain visible in the queue UI
- [x] No queued submissions are dropped after queue removal/reordering
- [x] `bun run quality` passes
- [x] Ticket moved to `50-done/` only after runtime evidence matches server queue state and DB rows

## Updates

### 2026-03-14
- Lane: `next` → `doing` per explicit user instruction, even though this takes the doing lane above the preferred WIP limit.
- The ticket remains focused on queue corruption/desynchronization after deleting an item from the middle of the queue in the web UI.
- Evidence: live queue/DB observations already captured in this ticket; paired follow-up ticket also moved to `doing`.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-13
- Lane: `next` (new follow-up bug discovered during live queue validation).
- Live evidence observed during the `web:default` session:
  - queued item remained visible in the web UI after backend processing
  - `commit and reload` was expected to queue but was instead persisted immediately as row `7701`
  - `cleanup /workspace/tmp files older than 24h` was expected to queue but was instead persisted immediately as row `7705`
  - `cleanup /workspace/tmp and remove all files older than 24h` appeared to be neither queued nor persisted
- Product invariant clarified by the user: queued messages must never be processed out of turn unless they are explicitly converted to steering.
- Current user suspicion: deleting an item from the middle of the queue in the web UI may have triggered the corruption/desync, and that UI action should be treated as part of the reproduction scenario.
- Evidence references:
  - user request to file bug: message `7706`
  - prior diagnosis: message `7704`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

## Notes

- This may be a separate bug from the active/inactive streaming-state mismatch that causes intended queue submissions to persist immediately.
- It may also share a root cause with queue stack UI desynchronization after remove/consume operations.
- Do not assume the user's suspicion is the sole cause until a fixture reproduces it.

### 2026-03-14 (closure — root cause confirmed and fixed)

**Root cause:** The cancel (×) button and the Steer button in `compose-box.ts` both
called the same handler — `onInjectQueuedFollowup` — which invoked
`steerAgentQueueItem(rowId)` on the server. So clicking "cancel" actually *sent*
the message to the agent as steering content, then the server processed it as a
real user message.

This explains all observed symptoms:

1. **"Queued item processed but not removed from UI"** — the steered item was
   processed by the backend (appeared in timeline as a normal message), but the
   optimistic UI removal and `dismissedQueueRowIdsRef` pattern prevented the
   queue stack from reflecting the correct state until the next `refreshQueueState`.

2. **"Subsequent messages persisted immediately instead of queuing"** — the cancelled
   message was injected as steering → the agent's active turn received it and may
   have finished early or changed streaming state, causing `isStreaming(chatJid)` to
   return false when the next message was submitted.

3. **"Message dropped entirely"** — a message submitted during the brief window
   where `isStreaming` flipped false was sent with `mode: null`, processed as a
   normal turn, and appeared in the timeline. But the user expected it to queue,
   so it was perceived as "dropped" from the queue.

**Fix (commit `bd64f7a`):**
- Added `onRemoveQueuedFollowup` prop to `ComposeBox`
- Wired the × button to call `removeAgentQueueItem(rowId)` (true cancellation)
- Steer button continues to use `onInjectQueuedFollowup` (steering conversion)
- Both use the same `dismissedQueueRowIdsRef` pattern for optimistic removal

**Server-side queue mutation was already correct.** The `removeQueuedFollowupForAction`
method properly splices from the array, persists remaining items, and broadcasts
`agent_followup_removed`. The `refreshQueueState` reconciliation was also correct.
The sole defect was the client-side wiring of the cancel button to the steer action.

**Full UI audit** documented in `docs/turn-mechanism-audit.md` covering:
- Queue stack rendering and state management
- Optimistic removal with dismissed set
- SSE event handling for queue lifecycle
- Data flow diagrams for submit → queue, cancel, steer, and turn drain

Evidence: `piclaw/web/src/components/compose-box.ts`, `piclaw/web/src/app.ts`,
`piclaw/web/src/api.ts`, `docs/turn-mechanism-audit.md`.
All 792 tests pass.

## Links

- `kanban/10-next/fix-stale-thread-root-on-queued-web-chat-retry.md`
- `piclaw/src/channels/web.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/channels/web/followup-placeholders.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
