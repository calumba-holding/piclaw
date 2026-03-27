---
id: extract-webchannel-sse-broadcast-and-session-wiring
title: Extract WebChannel SSE broadcast and session wiring seam
status: review
priority: high
created: 2026-03-27
updated: 2026-03-27
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web
  - modularity
  - sse
  - events
owner: pi
blocked-by: []
---

# Extract WebChannel SSE broadcast and session wiring seam

## Summary

Carve the remaining SSE client lifecycle and event-broadcast/session wiring out
of `runtime/src/channels/web.ts` into a focused service/module without changing
SSE payload shapes, event names, connection behavior, session binding, or
timeline/update fanout semantics.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up lifecycle and server lifecycle/websocket gateway
seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the SSE and
broadcast orchestration for:
- SSE request handling
- event fanout helpers
- session/event bridge wiring
- related `UiBridge` / interaction broadcast glue

behind a narrower, testable seam.

## Scope

Target only the SSE/broadcast/session-wiring responsibilities currently owned by
`WebChannel`, including logic around:

- `handleSse()` delegation surface
- `broadcastEvent()` and adjacent event fanout helpers
- any session binding / broadcaster context glue still living on `WebChannel`
- small helper/context surfaces required to preserve existing event behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/sse.ts`
- `runtime/src/channels/web/agent-events.ts`
- any new focused service/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No server bootstrap/TLS extraction in this slice
- No terminal/VNC websocket extraction in this slice
- No queued follow-up lifecycle changes
- No request-router decomposition beyond preserving existing SSE/event behavior
- No payload/event-name changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] SSE lifecycle and event/session wiring move behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] SSE connection handling
  - [ ] event names and payload shapes
  - [ ] UI/session binding side effects
  - [ ] interaction/timeline broadcast behavior
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of SSE/event orchestration.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — service extraction with focused seam tests (recommended)
1. Define a small SSE/broadcast gateway boundary around existing `sse`, `UiBridge`, and interaction broadcast helpers.
2. Extract fanout/session-binding orchestration out of `WebChannel`.
3. Add or strengthen focused tests for connection handling and event fanout behavior.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- cohesive orchestration seam still concentrated in `WebChannel`
- directly reduces event-fanout coupling on the class
- good fit for deterministic repair-first loops

**Cons:**
- leaves later endpoint/request-context cleanup for follow-up work

### Path B — helper extraction only
1. Move only broadcast helper methods out of `WebChannel`.
2. Keep SSE/session-binding lifecycle on the class for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much fanout/session glue on `WebChannel`

## Recommended Path

Path A — extract a dedicated SSE/broadcast/session wiring seam with focused
validation while keeping event semantics unchanged.

## Test Plan

- [x] Add or strengthen focused tests for:
  - SSE request handling / connection lifecycle
  - event broadcast payloads and fanout behavior
  - session binding / interaction broadcast glue where practical
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - any targeted SSE/event tests already covering broadcast behavior
- [x] Run validation in repair-first order:
  1. focused SSE/event tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted SSE/broadcast seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Lane change: `20-doing` → `40-review` after the slice landed on `main` via `landing/sse-session-broadcast`.
- Landed `runtime/src/channels/web/session-broadcast-service.ts` and delegated the public `sse`, `uiBridge`, `handleSse()`, and `broadcastEvent()` surfaces through it without changing SSE payload shapes, event names, request routing behavior, or session binding semantics.
- Added focused seam coverage in:
  - `runtime/test/channels/web/session-broadcast-service.test.ts`
  - `runtime/test/channels/web/web-session-broadcast-surface.test.ts`
  - `runtime/test/channels/web/web-session-broadcast-routing.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/session-broadcast-service.test.ts runtime/test/channels/web/web-session-broadcast-surface.test.ts runtime/test/channels/web/web-session-broadcast-routing.test.ts runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Result: `runtime/src/channels/web.ts` lost the direct SSE hub / UI bridge wiring while preserving current request routing and fanout semantics.
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `kanban/20-doing/extract-webchannel-recovery-and-runtime-state-wiring.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the queued follow-up and server lifecycle/websocket gateway seams landed.
- Chosen because SSE/event/session fanout remains one of the larger orchestration responsibilities still living on `WebChannel` after the first two extractions.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/20-doing/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `kanban/40-review/extract-webchannel-queued-followup-service.md`
- `kanban/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
