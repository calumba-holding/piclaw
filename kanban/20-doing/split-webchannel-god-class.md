---
id: split-webchannel-god-class
title: "Refactor: split WebChannel god-class into composable services"
status: doing
priority: critical
created: 2026-03-23
updated: 2026-03-27
tags:
  - refactor
  - modularity
  - P0
  - quality-assessment
owner: pi
blocked-by: []
---

# Refactor: split WebChannel god-class into composable services

## Summary

`runtime/src/channels/web.ts` is 1,905 lines in a single `WebChannel` class. It owns HTTP server setup, TLS, auth, WebSocket upgrades (terminal + VNC), SSE, request routing, queued follow-ups, and recovery — all in one monolith.

This is the single biggest obstacle to maintainability in the codebase.

## Scope

Extract `WebChannel` into a composition of focused services:

- **`HttpServerService`** — `Bun.serve` setup, TLS loading, port binding
- **`AuthGateway`** — session/TOTP/passkey validation (partially exists in `auth-runtime.ts`)
- **`WebSocketService`** — terminal + VNC upgrade handling
- **`SseService`** — SSE client management (partially exists in `sse.ts`)
- **`QueuedFollowupService`** — deferred follow-up lifecycle
- **`WebChannel`** — thin coordinator that composes the above

## Acceptance criteria

- [ ] No method in `WebChannel` exceeds 50 lines
- [ ] `WebChannel` class is under 300 lines
- [ ] Extracted services have their own test files
- [ ] All existing web channel tests still pass
- [ ] No new `any` usage introduced

## Risks

- SSE client management and queued follow-ups are tightly coupled to WebChannel state
- Request routing already delegates to `request-router-service.ts` but the wiring is in `WebChannel`

## Notes

- The class already delegates to many services but owns the wiring and lifecycle glue
- 31 imports at the top of the file confirm the coupling surface
- This unblocks all future web-layer work

## Updates

### 2026-03-27
- The first bounded child slice (`kanban/20-doing/extract-webchannel-queued-followup-service.md`) landed on `main` via `d55e920` (`Extract queued followup lifecycle service`) and moved to review.
- Chose the next extraction seam as server lifecycle + websocket gateway wiring and split it into:
  - `kanban/20-doing/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- Rationale:
  - `start()` / `stop()` / websocket upgrade dispatch remain a cohesive orchestration seam inside `runtime/src/channels/web.ts`
  - existing `authGateway`, `terminalService`, `vncService`, and request-router boundaries already provide natural collaborators for extraction
  - this reduces `WebChannel` transport/bootstrap responsibility without mixing in later SSE or endpoint decomposition work
- Planned repair-first loop for this slice:
  1. create/strengthen focused lifecycle/gateway tests
  2. extract the smallest viable service boundary
  3. run targeted tests
  4. run `bun run lint`
  5. run `bun run typecheck`
  6. only then widen scope if still justified
- Result: the server lifecycle + websocket gateway seam landed behind `runtime/src/channels/web/server-lifecycle-gateway-service.ts`, then was tightened further with `createWebServerLifecycleGateway(...)`, shrinking `runtime/src/channels/web.ts` from 1824 to 1649 lines while preserving existing auth/CSRF/upgrade behavior.
- The SSE/session-broadcast seam then landed behind `runtime/src/channels/web/session-broadcast-service.ts`, removing the direct SSE hub / UI bridge wiring from `WebChannel` while preserving request routing and fanout semantics.
- Split the next bounded seam into:
  - `kanban/20-doing/extract-webchannel-recovery-and-runtime-state-wiring.md`
- Rationale: recovery orchestration and runtime-state glue remain one of the larger non-HTTP responsibility clusters still living on `WebChannel` after the first three extractions.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Lane change: `10-next` → `20-doing`.
- Selected as the next active refactor because it is the highest-leverage open structural cleanup ticket, is unblocked, and directly unblocks follow-up web-layer cleanup work.
- Current repo reality at pickup time: `runtime/src/channels/web.ts` is 1,905 lines and continues to be the largest maintainability hotspot in the runtime.
- Immediate execution focus: choose the first extractable seam (`SseService`, `QueuedFollowupService`, or HTTP/bootstrap wiring) and land the split in bounded slices rather than attempting a one-shot rewrite.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 1)

### 2026-03-27
- Repo-status audit refreshed the size callout to match the current file: `runtime/src/channels/web.ts` is now 1,905 lines.
- Ticket remains fully valid and is arguably more urgent than when first written because the monolith has grown rather than shrunk.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 1)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocked by: nothing
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
- Child slices:
  - `kanban/40-review/extract-webchannel-queued-followup-service.md`
  - `kanban/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
  - `kanban/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
  - `kanban/20-doing/extract-webchannel-recovery-and-runtime-state-wiring.md`
