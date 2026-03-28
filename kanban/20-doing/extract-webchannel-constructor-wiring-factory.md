---
id: extract-webchannel-constructor-wiring-factory
title: Extract WebChannel constructor wiring factory
status: doing
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

- [ ] Constructor-owned service wiring moves behind a focused factory/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] auth/session setup
  - [ ] endpoint/control-plane/runtime collaborator wiring
  - [ ] startup/runtime behavior and public WebChannel surface
- [ ] `runtime/src/channels/web.ts` loses another meaningful chunk of coordinator glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` tests still pass.
- [ ] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated constructor-wiring factory that assembles the existing
collaborators while keeping `WebChannel` responsible only for storing the result
and exposing the public runtime API.

## Test Plan

- [ ] Add or strengthen focused tests for constructor wiring / service assembly.
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - existing delegation/facade tests touched by the wiring seam
- [ ] Run validation in repair-first order:
  1. focused constructor-wiring tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [ ] Extracted constructor-wiring seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the runtime/follow-up facade seam landed.
- Chosen because the constructor still owns a large collaborator-assembly block even after most request/runtime seams have been extracted.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-runtime-and-followup-facades.md`
- `kanban/40-review/extract-webchannel-message-processing-and-storage-adapters.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
