---
id: extract-webchannel-constructor-wiring-factory
title: Extract WebChannel constructor wiring factory
status: review
priority: high
created: 2026-03-28
updated: 2026-03-28
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web
  - modularity
  - constructor
  - wiring
owner: pi
blocked-by: []
---

# Extract WebChannel constructor wiring factory

## Summary

Carve the remaining constructor-owned service wiring out of
`runtime/src/channels/web.ts` into a focused factory/module without changing
which collaborators are created, initialization order, runtime behavior,
auth/session setup, endpoint wiring, or the public `WebChannel` surface.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, terminal/VNC HTTP, adaptive-card/side-prompt,
peer-message relay, agent-message entry, message-processing/storage, and
runtime/follow-up facade seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the large
constructor wiring cluster for collaborators like:
- `interactionBroadcaster`
- `authGateway`
- `messageWriteService`
- `runtimeFollowupFacade`
- endpoint/control-plane/server lifecycle wiring
- adjacent identity-snapshot setup

behind a narrower, testable construction seam.

## Scope

Target only the constructor/service-wiring responsibilities currently owned by
`WebChannel`, especially the large dependency assembly block in the constructor.

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused factory/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No behavioral changes in request handling or runtime semantics
- No request-router changes
- No UI bundle work
- No deep rewrites of already-extracted services

## Acceptance Criteria

- [x] Constructor-owned service wiring moves behind a focused factory/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] auth/session setup
  - [x] endpoint/control-plane/runtime collaborator wiring
  - [x] startup/runtime behavior and public WebChannel surface
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of coordinator glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated constructor-wiring factory that assembles the existing
collaborators while keeping `WebChannel` responsible only for storing the result
and exposing the public runtime API.

## Test Plan

- [x] Add or strengthen focused tests for constructor wiring / service assembly.
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - existing delegation/facade tests touched by the wiring seam
- [x] Run validation in repair-first order:
  1. focused constructor-wiring tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
  5. `bun run check:stale-dist`

## Definition of Done

- [x] Extracted constructor-wiring seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the runtime/follow-up facade seam landed.
- Chosen because the constructor still owns a large collaborator-assembly block even after most request/runtime seams have been extracted.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-28 (implementation)
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Extracted the constructor-owned collaborator assembly into `runtime/src/channels/web/web-channel-constructor-factory.ts` and reduced the `WebChannel` constructor in `runtime/src/channels/web.ts` from 106 lines to 29 lines, then down to 7 lines by delegating the remaining bootstrapping through `initializeWebChannelConstructor(...)`, without changing the public surface.
- Added focused seam coverage in `runtime/test/channels/web/web-channel-constructor-wiring-factory.test.ts` to lock down creation order, live identity snapshot wiring, auth/session setup, message-write callbacks, endpoint facade inputs, and dependent service assembly.
- Preserved runtime behavior by wiring server lifecycle, terminal/VNC HTTP, and adaptive-card side-prompt services from already-created local collaborators inside the factory rather than depending on partially-assigned `WebChannel` fields.
- Updated deterministic audit grouping for the new constructor seam test in:
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Validation commands run:
  - `bun test runtime/test/channels/web/web-channel-constructor-wiring-factory.test.ts runtime/test/channels/web/channel-endpoint-context-factory.test.ts runtime/test/channels/web/server-lifecycle-gateway-service.test.ts runtime/test/channels/web/web-channel-endpoint-facade-delegation.test.ts runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/web-channel-constructor-factory.ts`
  - `runtime/test/channels/web/web-channel-constructor-wiring-factory.test.ts`
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
  - `kanban/40-review/extract-webchannel-constructor-wiring-factory.md`
  - `kanban/20-doing/split-webchannel-god-class.md`
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `kanban/20-doing/extract-webchannel-request-router-and-http-surface-wrappers.md`

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-runtime-and-followup-facades.md`
- `kanban/40-review/extract-webchannel-message-processing-and-storage-adapters.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
