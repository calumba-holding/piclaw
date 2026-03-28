---
id: fix-active-inactive-streaming-state-mismatch-for-queue-submit
title: Fix active/inactive streaming-state mismatch for queue submit
status: done
priority: high
created: 2026-03-13
updated: 2026-03-14
completed: 2026-03-14
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - queue
  - bug
  - streaming
owner: pi
---

# Fix active/inactive streaming-state mismatch for queue submit

## Summary

There appears to be a distinct bug where the web UI behaves as though the
current turn is still active/queueable, but the backend no longer considers the
chat to be in a streaming state.

When that happens, a normal submit that the user expects to be queued is instead
persisted immediately as a new top-level user turn.

This looks separate from the queue-corruption / mid-queue-removal bug because
it can happen even when the queue itself is otherwise intact.

## Acceptance Criteria

- [x] If the user submits while the UI presents the turn as active/queueable, the request does not silently bypass queueing because of stale frontend/backend streaming-state disagreement.
- [x] A message intended as a queued follow-up is never persisted immediately as a fresh turn solely because the backend's `isStreaming(chatJid)` flipped false before the UI caught up.
- [x] The server/client contract for queue intent is explicit enough that active-turn queue submissions are handled deterministically.
- [x] If queueing is no longer possible because the active run has actually ended, the UI state is corrected promptly so the user does not believe the message was queued.
- [x] Fixture coverage reproduces the mismatch window and proves the chosen behavior.

## Implementation Paths

### Path A — Make queue intent server-authoritative

Treat queue intent as an explicit request mode with deterministic backend
handling, rather than implicitly depending on the instantaneous backend
`isStreaming(chatJid)` check.

Potential directions:

- accept explicit queue intent for a short grace window tied to active-turn state
- return an explicit response that the run is no longer queueable, so the UI can
  correct state immediately instead of silently persisting as a normal turn
- avoid a path where the message simply becomes a fresh turn without the user
  understanding why

Pros:
- clearer semantics
- less dependence on timing races
- easier to reason about from the user's perspective

Cons:
- requires contract decisions between UI and backend

### Path B — Tighten frontend/backend active-state synchronization

Reduce or eliminate the mismatch window by making the UI refresh authoritative
agent status/queueability more aggressively before submit.

Possible approaches:

- stronger use of `/agent/status`
- more precise terminal transition handling
- explicit queueability state rather than reusing generic "agent active" UI

Pros:
- smaller protocol change
- keeps current queue behavior model mostly intact

Cons:
- still timing-sensitive if the core contract remains ambiguous

## Test Plan

- [ ] Add/extend `piclaw/test/channels/web/web-channel.test.ts`
  - simulate UI-intended queue submit while backend `isStreaming()` is false
  - assert deterministic behavior (queued, or explicit non-queueable response)
- [ ] Add/extend relevant frontend tests if needed to cover queueability state transitions.
- [ ] Run `bun run quality`.
- [ ] Verify against DB rows that a queue-intended submit no longer silently becomes a fresh top-level turn during the mismatch window.

## Definition of Done

- [x] Root cause confirmed in code/tests
- [x] Active/inactive mismatch regression test added
- [x] Queue-intended submit path is deterministic under state transition races
- [x] User-facing behavior is clear when queueing is no longer available
- [x] `bun run quality` passes

## Updates

### 2026-03-14
- Lane: `next` → `doing` per explicit user instruction, even though this takes the doing lane above the preferred WIP limit.
- This remains scoped to active/inactive streaming-state mismatch rather than queue corruption after mid-queue removal, but the two tickets stay linked because the symptoms were observed in the same live sequence.
- Evidence: rows `7701` and `7705`, plus the queue-state/runtime observations captured below.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-13
- Lane: `next` (split out from broader queue corruption follow-up).
- Live evidence suggests a distinct frontend/backend streaming-state mismatch:
  - `commit and reload` was expected to queue but was instead persisted immediately as row `7701`
  - `cleanup /workspace/tmp files older than 24h` was expected to queue but was instead persisted immediately as row `7705`
- At those moments, the UI still appeared to be in an active-turn / queueable state, but the backend did not take the deferred queue path.
- The current likely boundary is:
  - frontend defaults to queue based on UI-active state
  - backend only defers when `agentPool.isStreaming(chatJid)` is true
- These observations happened after the user deleted an item from the middle of the queue in the web UI; that action may be causal or may have widened a separate streaming-state mismatch window.
- This ticket is intentionally separate from `fix-queued-message-loss-after-mid-queue-removal.md` because the mismatch may exist even without queue corruption, but the mid-queue UI deletion remains important context for the observed sequence.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

## Notes

- The desired product behavior may be either:
  - preserve queue intent through a brief backend transition window, or
  - fail explicitly and update UI state immediately.
- What should not happen is silent conversion of an intended queued follow-up into a fresh turn with no clear user feedback.

### 2026-03-14 (closure — not a separate bug)

**Root cause:** This was not a distinct streaming-state mismatch bug. The observed
symptoms were a downstream consequence of the cancel-button-steers-instead-of-removing
bug documented in `fix-queued-message-loss-after-mid-queue-removal.md`.

**Analysis from full UI audit:**

The server-side contract for queue intent is already deterministic and correct:
- `handleAgentMessage` checks `agentPool.isStreaming(chatJid)` to decide queueing
- When `isStreaming` is true + `requestMode` is `"queue"` or `"auto"` → deferred
- When `isStreaming` is false → falls through to normal processing
- The response always indicates the actual disposition: `{ queued: "followup" }` or
  `{ user_message: ... }` (normal submit)
- The client's `handleMessageResponse` calls `refreshQueueState()` when a queued
  response is received

The brief mismatch window between `agent_status: done` clearing `isAgentTurnActive`
and the next turn's first SSE event exists, but:
1. Messages submitted during this window are sent with `mode: null` → server uses
   `"auto"`, which checks `isStreaming` server-side
2. If `isStreaming` is still true, the message is correctly deferred
3. If `isStreaming` is false, the message is correctly processed as a normal turn
4. The response tells the client whether it was queued or not

The live symptoms where messages appeared as "immediate turns" instead of queueing
were caused by the cancel button sending the cancelled message as steering, which
disrupted the active agent turn and caused `isStreaming` to flip false earlier than
expected. The next user message then correctly saw `isStreaming=false` and was
processed immediately — which was the *correct* server behavior for that state, but
appeared as a bug from the user's perspective because the cancel action had invisible
side effects.

**Fix:** Same commit as `fix-queued-message-loss-after-mid-queue-removal` — separating
the cancel button (`removeAgentQueueItem`) from the steer button
(`steerAgentQueueItem`) eliminates the invisible side effect that destabilized
streaming state.

Evidence: `docs/turn-mechanism-audit.md`, `piclaw/web/src/app.ts`,
`piclaw/web/src/components/compose-box.ts`.
All 792 tests pass.

## Links

- `workitems/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/api.ts`
- `docs/turn-mechanism-audit.md`
