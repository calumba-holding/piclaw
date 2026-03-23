---
id: split-webchannel-god-class
title: "Refactor: split WebChannel god-class into composable services"
status: next
priority: critical
created: 2026-03-23
updated: 2026-03-23
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

`src/channels/web.ts` is 1,595 lines with ~60 methods in a single `WebChannel` class. It owns HTTP server setup, TLS, auth, WebSocket upgrades (terminal + VNC), SSE, request routing, queued follow-ups, and recovery — all in one monolith.

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

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocked by: nothing
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
