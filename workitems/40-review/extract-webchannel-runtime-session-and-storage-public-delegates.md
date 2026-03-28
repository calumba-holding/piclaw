---
id: extract-webchannel-runtime-session-and-storage-public-delegates
title: Extract WebChannel runtime/session/storage public delegates
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
  - runtime
  - delegation
owner: pi
blocked-by: []
---

# Extract WebChannel runtime/session/storage public delegates

## Summary

Carve the remaining public runtime/session/storage delegate surface out of
`runtime/src/channels/web.ts` into a focused module/service without changing
runtime behavior, queued follow-up semantics, session-broadcast behavior,
message-processing behavior, or the public `WebChannel` API used by the rest of
the runtime and tests.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the request-router / HTTP wrapper seam landed.

The goal is to keep `WebChannel` as a thinner coordinator while moving the
remaining pure delegation cluster for methods/getters like:
- `sendMessage()` / `postDashboardWidget()`
- queued follow-up and runtime-state facade methods
- `processChat()` / `storeMessage()`
- public session-broadcast compatibility surfaces like `sse`, `uiBridge`, and `broadcastEvent()`

behind a narrower, testable surface.

## Scope

Target only the remaining public delegate/wrapper responsibilities currently
owned directly by `WebChannel`, especially delegates into:
- `runtimeFollowupFacade`
- `messageProcessingStorageService`
- `sessionBroadcast`
- possibly adjacent lifecycle getters if needed for a clean boundary

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused helper/service file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No behavior changes in queued follow-up, runtime-state, session-broadcast, or message persistence semantics
- No deeper rewrites of already-extracted services
- No request-router rewrite
- No UI bundle work

## Acceptance Criteria

- [x] Remaining public runtime/session/storage delegates move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] queued follow-up/runtime facade behavior
  - [x] session-broadcast public compatibility surfaces
  - [x] message-processing/storage delegation
  - [x] public `WebChannel` signatures relied on by handlers/tests
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of delegate glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated public runtime/delegation seam while keeping the public
`WebChannel` methods/getters as thin compatibility delegates.

## Test Plan

- [x] Add or strengthen focused tests for service behavior and bare-stub delegation compatibility.
- [x] Re-run affected focused coverage from:
  - `runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-message-processing-storage-delegation.test.ts`
  - `runtime/test/channels/web/web-session-broadcast-surface.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
- [x] Run validation in repair-first order:
  1. focused runtime/session/storage delegate tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
  5. `bun run check:stale-dist` if relevant

## Definition of Done

- [x] Extracted public runtime/session/storage seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded child slice after `extract-webchannel-request-router-and-http-surface-wrappers` landed.
- Chosen because `runtime/src/channels/web.ts` now mostly consists of public-compatibility delegates into already-extracted collaborators, with the runtime-followup/session/storage cluster still representing the largest remaining pure wrapper surface.
- Intended execution loop: strengthen focused delegation tests first, then extract a narrow service boundary, then rerun targeted `web-channel` coverage, then lint/typecheck/stale-dist.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Landed on branch `autoresearch/exp-mnadojwr-yrg9` in commit `ab1333ef`.
- Extracted the remaining runtime/session/storage delegate glue behind `runtime/src/channels/web/web-channel-runtime-public-surface-service.ts` and rewired `runtime/src/channels/web.ts` through a local `getRuntimePublicSurfaceService(...)` compatibility helper so `WebChannel.prototype` calls and getters on bare stubs still work.
- Added focused seam coverage in:
  - `runtime/test/channels/web/web-channel-runtime-public-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-runtime-public-surface-delegation.test.ts`
- Evidence of glue removal from `runtime/src/channels/web.ts`: direct references to `runtimeFollowupFacade`, `messageProcessingStorageService`, and `sessionBroadcast` dropped from 32 matches before the slice to 0 after it.
- Validation (repair-first order) is green via `./autoresearch.sh`, which covers:
  - `runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-message-processing-storage-delegation.test.ts`
  - `runtime/test/channels/web/web-session-broadcast-surface.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-channel-runtime-public-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-runtime-public-surface-delegation.test.ts`
- `autoresearch.checks.sh` also passed:
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Result: mergeable slice ready for review; queued follow-up/runtime-state behavior, session-broadcast compatibility behavior, and message-processing/storage semantics remained unchanged across the focused coverage above.

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/40-review/extract-webchannel-runtime-and-followup-facades.md`
- `workitems/40-review/extract-webchannel-message-processing-and-storage-adapters.md`
- `workitems/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
