---
id: extract-webchannel-server-lifecycle-and-websocket-gateway
title: Extract WebChannel server lifecycle and websocket gateway seam
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
  - websocket
  - server
owner: pi
blocked-by: []
---

# Extract WebChannel server lifecycle and websocket gateway seam

## Summary

Carve the Bun server lifecycle and websocket-upgrade gateway logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
HTTP routes, upgrade behavior, auth checks, CSRF enforcement, or payload shapes.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up lifecycle extraction landed.

The goal is to keep `WebChannel` acting as a thin coordinator while moving the
transport/bootstrap wiring for:
- startup / shutdown
- TLS option loading
- websocket upgrade dispatch
- terminal/VNC upgrade auth + CSRF checks

behind a narrower, testable seam.

## Scope

Target only the server/bootstrap + websocket gateway lifecycle currently owned
by `WebChannel`, including logic around:

- `start()` Bun server bootstrap wiring
- `stop()` shutdown wiring for server / timers / watchers / bridge services
- `loadTlsOptions()`
- `handleFetch()` websocket-vs-request dispatch
- terminal websocket upgrade validation
- VNC websocket upgrade validation and handoff token threading
- any small context/helper surface needed to preserve current behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No request-router decomposition beyond dispatch needed to preserve fetch behavior
- No auth flow redesign
- No terminal session-service internal refactor
- No VNC session-service internal refactor
- No SSE client/service extraction in this slice
- No endpoint payload or status-code changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] Bun server lifecycle and websocket gateway logic moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] TLS loading fallback behavior
  - [ ] terminal websocket auth + CSRF enforcement
  - [ ] VNC websocket auth + CSRF enforcement
  - [ ] websocket upgrade failure responses
  - [ ] request-vs-upgrade dispatch from `handleFetch()`
  - [ ] startup/shutdown side effects (watcher/timer/bridge cleanup)
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of transport/bootstrap wiring.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — service extraction with focused seam tests (recommended)
1. Define a small server-lifecycle/websocket-gateway service boundary around existing `authGateway`, `terminalService`, `vncService`, and request routing.
2. Extract startup/shutdown and websocket-upgrade orchestration out of `WebChannel`.
3. Add or strengthen focused tests for upgrade/auth/dispatch behavior.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- cohesive orchestration seam already present in `WebChannel`
- directly reduces transport/bootstrap responsibility
- good fit for deterministic autoresearch/test-fix loops

**Cons:**
- still leaves later SSE/request-context seams for follow-up work

### Path B — helper extraction only
1. Move only TLS + upgrade helper methods out of `WebChannel`.
2. Keep `start()` / `stop()` orchestration on the class for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much lifecycle wiring in `WebChannel`

## Recommended Path

Path A — extract a dedicated server lifecycle / websocket gateway seam with
focused validation while keeping endpoint and transport behavior unchanged.

## Test Plan

- [x] Add or strengthen focused tests for:
  - websocket upgrade auth / CSRF behavior
  - fetch dispatch between websocket upgrades and normal request handling
  - startup/shutdown lifecycle side effects where practical
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - existing terminal/VNC/auth web tests if touched
- [x] Run validation in repair-first order:
  1. focused lifecycle/gateway tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted server lifecycle/websocket seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the queued follow-up lifecycle extraction landed on `main`.
- Chosen because `start()` / `stop()` / websocket upgrade handling remain a cohesive orchestration seam already layered over `authGateway`, `terminalService`, `vncService`, and request routing.
- Intended for the same repair-first loop used on the previous seam: focused tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Landed `runtime/src/channels/web/server-lifecycle-gateway-service.ts` and delegated `WebChannel.start()`, `stop()`, and `handleFetch()` through it without changing public API, HTTP status codes, auth/CSRF checks, or websocket payload threading.
- Added focused seam coverage in `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts` for fetch dispatch, terminal/VNC upgrade auth + CSRF enforcement, TLS fallback, bind retry, and stop-side-effect cleanup.
- Validation evidence:
  - `bun test runtime/test/channels/web/server-lifecycle-gateway-service.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/channels/web/terminal-session-service.test.ts runtime/test/channels/web/vnc-session-service.test.ts runtime/test/channels/web/security-hardening.test.ts runtime/test/channels/web/auth.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Follow-up refinement from the final kept autoresearch run: moved the remaining theme-init, workspace-watcher startup, and link-preview purge wiring behind `createWebServerLifecycleGateway(...)` so the extracted seam owns the real runtime lifecycle orchestration instead of only the first pass of upgrade handling.
- Result: `runtime/src/channels/web.ts` shrank from 1824 to 1649 lines in this slice while staying mergeable.
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `kanban/20-doing/extract-webchannel-sse-broadcast-and-session-wiring.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/20-doing/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `kanban/40-review/extract-webchannel-queued-followup-service.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
