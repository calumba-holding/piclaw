---
id: extract-webchannel-endpoint-facade-and-handler-contexts
title: Extract WebChannel endpoint facade and handler contexts seam
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
  - endpoints
  - handlers
owner: pi
blocked-by: []
---

# Extract WebChannel endpoint facade and handler contexts seam

## Summary

Carve the remaining endpoint-wrapper and handler-context wiring out of
`runtime/src/channels/web.ts` into a focused service/module without changing
HTTP route behavior, request/response payload shapes, identity/avatar refresh
semantics, UI/content endpoint behavior, or the public methods used by the
existing request router.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, and message-write seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
endpoint-facade orchestration for:
- handler-context construction reuse
- lightweight endpoint wrapper methods that mostly delegate to handler modules
- identity/avatar/manifest wrapper logic that still lives on `WebChannel`
- adjacent UI/content endpoint facade glue

behind a narrower, testable seam.

## Scope

Target only the endpoint-wrapper and handler-context responsibilities currently
owned by `WebChannel`, including logic around:

- `handleAgents()` / `handleManifest()` / `handleAvatar()`
- UI/content wrapper methods like timeline/search/thread/thought/workspace
  delegations where they are mostly facade glue
- any small helper/context surface required to preserve current endpoint
  behavior and live identity/avatar refresh semantics

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/src/channels/web/channel-endpoint-context-factory.ts`
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No server bootstrap/TLS extraction in this slice
- No websocket upgrade extraction in this slice
- No SSE fanout/session-binding extraction in this slice
- No recovery/runtime-state extraction in this slice
- No message-write/follow-up extraction in this slice
- No request-router decomposition in this slice
- No payload or public API changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] Endpoint-wrapper/handler-context wiring moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] identity/avatar/manifest refresh semantics
  - [ ] UI/content endpoint payloads and status codes
  - [ ] request-router-facing public WebChannel methods
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of endpoint facade glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — endpoint facade extraction with focused seam tests (recommended)
1. Define a small endpoint facade boundary around the current lightweight handler wrappers and context builders.
2. Extract endpoint facade logic out of `WebChannel` while keeping request-router call sites unchanged.
3. Add or strengthen focused tests for facade delegation and identity/avatar refresh behavior.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- removes another cohesive non-transport cluster from `WebChannel`
- aligns with existing handler modules and endpoint-context factory boundaries
- keeps request-router behavior stable while shrinking the coordinator

**Cons:**
- still leaves larger request-router decomposition for later work

### Path B — helper extraction only
1. Move only shared handler-context building into a helper/service.
2. Keep the endpoint wrapper methods on `WebChannel` for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much facade glue on `WebChannel`

## Recommended Path

Path A — extract a dedicated endpoint facade / handler-context seam with
focused validation while keeping behavior and public surfaces unchanged.

## Test Plan

- [x] Add or strengthen focused tests for:
  - endpoint facade delegation
  - identity/avatar refresh behavior
  - handler-context reuse where practical
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - endpoint/context-focused tests under `runtime/test/channels/web/`
- [x] Run validation in repair-first order:
  1. focused endpoint-facade tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted endpoint-facade seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Landed `runtime/src/channels/web/channel-endpoint-facade-service.ts` and delegated the lightweight endpoint wrappers through it, while updating `channel-endpoint-context-factory.ts` to centralize live identity snapshot normalization and preserve avatar/manifest refresh behavior.
- Added focused seam coverage in:
  - `runtime/test/channels/web/channel-endpoint-facade-service.test.ts`
  - `runtime/test/channels/web/web-channel-endpoint-facade-delegation.test.ts`
  - `runtime/test/channels/web/channel-endpoint-context-factory.test.ts`
- Updated deterministic audit grouping for the new endpoint facade tests in:
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/channel-endpoint-context-factory.test.ts runtime/test/channels/web/channel-endpoint-facade-service.test.ts runtime/test/channels/web/web-channel-endpoint-facade-delegation.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
  - `bun run test`
  - `bun run lint`
  - `bun run typecheck`
- Result: `runtime/src/channels/web.ts` dropped from 1602 to 1546 lines while preserving endpoint payloads, status codes, and live identity/avatar refresh semantics.
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `kanban/20-doing/extract-webchannel-agent-control-plane-wrappers.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the message-write/follow-up seam landed.
- Chosen because endpoint-wrapper and handler-context glue remain one of the larger cohesive non-transport clusters still living on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/20-doing/extract-webchannel-agent-control-plane-wrappers.md`
- `kanban/40-review/extract-webchannel-queued-followup-service.md`
- `kanban/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `kanban/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `kanban/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `kanban/40-review/extract-webchannel-message-write-and-followup-coordination.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
