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
- Execution strategy narrowed from the umbrella refactor to bounded child slices suitable for autoresearch/test-fix loops.
- Chose the first extraction seam as the queued follow-up lifecycle and split it into:
  - `kanban/20-doing/extract-webchannel-queued-followup-service.md`
- Rationale:
  - cohesive lifecycle already concentrated in `runtime/src/channels/web.ts`
  - deterministic queue semantics already covered by targeted `web-channel` tests
  - materially reduces `WebChannel` responsibility without mixing in Bun server/TLS/SSE/websocket concerns
- Planned autoresearch loop for this slice:
  1. create/strengthen focused seam tests
  2. extract the smallest viable service boundary
  3. run targeted tests
  4. run `bun run lint`
  5. run `bun run typecheck`
  6. only then widen scope if still justified
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
- Child slice: `kanban/20-doing/extract-webchannel-queued-followup-service.md`
