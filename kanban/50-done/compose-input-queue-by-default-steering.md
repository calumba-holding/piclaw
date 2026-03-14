---
id: compose-input-queue-by-default-steering
title: Default web compose to queue, add explicit steering action
status: done
priority: medium
created: 2026-03-13
updated: 2026-03-13
completed: 2026-03-13
estimate: L
risk: medium
target_release: next
tags:
  - work-item
  - kanban
  - web
  - web-ui
  - agent
  - compose
  - steering
owner: pi
---

# Default web compose to queue, add explicit steering action

## Summary

The web compose input currently sends normal messages directly unless the session is
streaming, in which case non-command input is queued as steering (`/queue`-like
steering behavior). We want the opposite default interaction:

- typed input is queued by default (follow-up queue behavior),
- an explicit arrow action sends as immediate steering, and
- a `/steer` command exists as a parity alias for that immediate-steering action.

Also add a compact queue indicator above the compose box so users can see when
input is currently queued.

## Current Behavior

- `ComposeBox` currently sends user text through `sendAgentMessage`.
- `web` handler routes non-command text to:
  - control commands when `/...`, or
  - command extension handling for `/`-prefixed unknowns, or
  - `queueStreamingMessage(..., "steer")` when the session is streaming,
  - otherwise normal direct process.
- `compose-box.ts` slash autocomplete does not include `/steer` today.
- There is a status-dot signal for one queued steer turn (`steerQueued`), but no
  dedicated compose-level queue indicator.

## Desired Behavior

### 1) Queue as default when submitting compose input
- Normal Enter/send in compose queues the message as **follow-up** when an agent
  run is already streaming/in-flight.
- If no in-flight stream exists, behavior can remain as today (direct send), so
  queue mode only changes interactive behavior when there is something to queue
  against.
- Queue path should reuse the existing follow-up queue machinery rather than
  introducing a new queue model.

### 2) Visual queue indicator above compose
- Add a small visual indicator directly above/inside compose area, for example:
  - `Queued: N` with minimal width and subtle styling, or a compact stacked dots
    style.
- Indicator should reflect pending follow-up queue state for the active chat.
- Indicator should update when:
  - a follow-up message is queued,
  - a queued follow-up is consumed (response emitted),
  - or app reconnects/syncs state.
- Keep it unobtrusive and only related to composition context.

### 3) Arrow button for immediate steering
- Add a compose button (arrow icon) that submits current compose text as
  immediate steering (non-default path).
- Clicking this should follow the same backend path/semantics as the new `/steer`
  command.
- Behavior note: if no stream is active, the backend may degrade to normal submit
  behavior or return a friendly no-active-steer error depending on implementation
  simplicity.

### 4) `/steer` command support
- If not already present, add command parser/runtime support for `/steer`.
- `/steer` should perform the same immediate-steering action as the arrow button.
- Add `/steer` to slash command discovery/autocomplete.

## Acceptance Criteria

- [x] Non-command compose submit defaults to queue-followup behavior when applicable
  and does **not** preempt streaming runs.
- [x] Compose includes a compact queue indicator above the input box reflecting
  queued follow-up state.
- [x] Arrow action exists and immediately submits in steering mode (same path as
  `/steer`).
- [x] `/steer` command is parsed and dispatched.
- [x] `/steer` appears in `/commands` output and compose slash autocomplete.
- [x] Existing `/queue` semantics remain unchanged.
- [x] Existing extension `/...` slash command behavior remains unchanged.
- [x] Manual test flow:
  - send while agent streaming → queued follow-up indicator updates,
  - use arrow → immediate steer event/behavior,
  - message appears/threads correctly after queued item resolves,
  - `/steer` performs same path as arrow.

## Relevant Files

### Backend
- `piclaw/src/agent-control/agent-control-types.ts`
- `piclaw/src/agent-control/command-parsers.ts`
- `piclaw/src/agent-control/command-registry.ts`
- `piclaw/src/agent-control/agent-control-handlers.ts`
- `piclaw/src/agent-control/handlers/queue.ts` (or new handler for steer)
- `piclaw/src/channels/web/agent-message-service.ts`
- `piclaw/src/channels/web/handlers/agent.ts`
- `piclaw/src/channels/web.ts` (if queue state needs to be exposed for indicator)
- `piclaw/src/channels/web/followup-placeholders.ts` (if count/inspection helper
  needed)
- `piclaw/web/src/api.ts` (request payload + optional mode)

### Frontend
- `piclaw/web/src/components/compose-box.ts` (default submit mode + steering button
  + `/steer` in autocomplete list)
- `piclaw/web/src/app.ts` (prop-drill compose queue state + SSE reconciliation)
- `piclaw/web/static/css/styles.css` (queue indicator + action button styling)

## Test Plan

- `test/agent-control/parser.test.ts`
  - add parse test for `/steer`.
- `test/agent-control/agent-control-handlers.test.ts`
  - add test for `/steer` command dispatch and queued/immediate behavior.
- `test/channels/web/web-channel.test.ts`
  - extend non-command queue-path test for queue default behavior,
  - add `/steer` path result and/or response metadata assertion.
- Add/adjust a targeted UI test if/when composition component test harness is
  available (not currently in scope unless already present).
- Run `bun run quality` and record output.

## Definition of Done

- [x] Behavior passes acceptance criteria in manual and automated tests.
- [x] No unrelated UI/style churn.
- [x] No duplicate semantics regressions for existing `/queue`/commands/extensions.
- [x] ticket `status` updated to `done` after completion and move accordingly.

## Updates

### 2026-03-13
- Ticket created for follow-up steering/queue compose mode refactor.
- Scope includes UI queue indicator, explicit steering action, and `/steer` command parity.


### 2026-03-13 (update)
- Frontend + backend work completed: request mode/queue-by-default + explicit /steer steering path are in place.
- Added compose queue indicator, `/steer` autocomplete/command parser/runtime wiring, and queue-state refresh/events in app state.
- `bun run quality` and target control/web tests now pass.
### 2026-03-13 (steering lifecycle closure)
- Closed the remaining steering lifecycle scope by making queued-item steering backend-authoritative and atomic.
- Added `POST /agent/queue-steer` so the server removes a queued item and converts it into steering (or immediate send if the active stream already ended) in one action.
- Removed the old client-side "remove queued item, then separately submit steer" race from the queue-stack Steer button.
- Added explicit auth/CSRF/rate-limit coverage for steering-adjacent routes:
  - `/agent/queue-steer` is routed through the normal request-guard pipeline,
  - unauthenticated requests are blocked before dispatch when auth is enabled,
  - `/agent/queue-steer` and `/agent/queue-remove` now share explicit data-rate-limit coverage.
- Evidence: `piclaw/src/channels/web.ts`, `piclaw/src/channels/web/http/dispatch-agent.ts`, `piclaw/src/channels/web/http/rate-limit-rules.ts`, `piclaw/web/src/api.ts`, `piclaw/web/src/app.ts`, `piclaw/web/src/components/compose-box.ts`.
- Test evidence: `test/channels/web/web-channel.test.ts`, `test/channels/web/http-dispatch-agent.test.ts`, `test/channels/web/http-route-classification.test.ts`, `test/channels/web/security-hardening.test.ts`.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-14 (post-closure fix)

A critical bug was discovered in the queue stack UI: both the "Steer" button and
the "Cancel" (×) button called `onInjectQueuedFollowup`, meaning clicking cancel
actually sent the message to the agent as steering. Fixed in commit `bd64f7a`:
- Added `onRemoveQueuedFollowup` prop (calls `removeAgentQueueItem`)
- Wired × button to the new remove handler
- Full UI audit documented in `docs/turn-mechanism-audit.md`

This fix also resolved the two companion bugs tracked in:
- `kanban/50-done/fix-queued-message-loss-after-mid-queue-removal.md`
- `kanban/50-done/fix-active-inactive-streaming-state-mismatch-for-queue-submit.md`
