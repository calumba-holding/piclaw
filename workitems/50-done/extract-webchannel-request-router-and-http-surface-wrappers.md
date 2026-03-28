---
id: extract-webchannel-request-router-and-http-surface-wrappers
title: Extract WebChannel request-router and HTTP surface wrappers
status: done
priority: high
created: 2026-03-28
updated: 2026-03-28
completed: 2026-03-28
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web
  - modularity
  - routing
  - http
owner: pi
blocked-by: []
---

# Extract WebChannel request-router and HTTP surface wrappers

## Summary

Carve the remaining request-router and thin HTTP surface wrapper methods out of
`runtime/src/channels/web.ts` into a focused service/module without changing
routing behavior, status codes, JSON/static response semantics, or the public
`WebChannel` surface used by the runtime.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the constructor wiring factory seam landed.

The goal is to keep `WebChannel` as a minimal coordinator while moving the
remaining HTTP/routing wrapper cluster for methods like:
- `handleFetch()`
- `handleRequest()`
- `handleAgents()` / `handleManifest()` / `handleAvatar()` / `handleWorkspaceVisibility()`
- `handleTimeline()` / `handleHashtag()` / `handleSearch()` / `handleThread()` / `handleThought()`
- `handleDeletePost()` / `handleUpdatePost()` / `handleInternalPost()` / `handlePost()`
- `serveStatic()` / `serveDocsStatic()` / `json()` / `clampInt()` / `parseOptionalInt()`

behind a narrower, testable surface.

## Scope

Target only the remaining thin HTTP/routing wrapper responsibilities currently
owned directly by `WebChannel`, especially delegates into request-router,
endpoint-facade, session-broadcast, and response-service helpers.

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused factory/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No behavior changes in routing or response semantics
- No deeper request-router rewrite in this slice
- No UI bundle work
- No deep rewrites of already-extracted services

## Acceptance Criteria

- [x] Remaining request-router / HTTP surface wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] request dispatch and fetch handling
  - [x] endpoint-facade HTTP wrapper behavior
  - [x] static/docs/json helper behavior
  - [x] public `WebChannel` signatures relied on by handlers/tests
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated HTTP/routing wrapper seam while keeping the public
`WebChannel` methods as thin delegates.

## Test Plan

- [x] Add or strengthen focused tests for wrapper delegation and helper behavior.
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/http-dispatch-*.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-response-service.test.ts`
- [x] Run validation in repair-first order:
  1. focused HTTP/routing wrapper tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
  5. `bun run check:stale-dist` if relevant

## Definition of Done

- [x] Extracted request-router / HTTP surface seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the constructor wiring seam landed.
- Chosen because the remaining request-router and HTTP wrapper methods still make up most of the residual `WebChannel` surface once constructor assembly is extracted.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Landed on branch `autoresearch/exp-mnadojwr-yrg9` in commit `76edacdc`.
- Extracted the remaining request-router/HTTP wrapper glue behind `runtime/src/channels/web/web-channel-http-surface-service.ts` and rewired `runtime/src/channels/web.ts` through a local `getHttpSurfaceService(...)` compatibility helper so `WebChannel.prototype` calls on bare stubs still work.
- Added focused seam coverage in:
  - `runtime/test/channels/web/web-channel-http-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-http-surface-delegation.test.ts`
- Evidence of glue removal from `runtime/src/channels/web.ts`: direct wrapper references to `requestRouter`, `endpointFacade`, `controlPlaneService`, `responses`, `remoteInterop`, `terminalVncHttpService`, and `serverLifecycleGateway` dropped from 44 matches before the slice to 3 after it (`git show HEAD^:runtime/src/channels/web.ts | rg ... -c` vs `rg ... runtime/src/channels/web.ts -c`).
- Validation (repair-first order) is green via `./autoresearch.sh`, which covers:
  - `runtime/test/channels/web/http-dispatch-agent.test.ts`
  - `runtime/test/channels/web/http-dispatch-auth.test.ts`
  - `runtime/test/channels/web/http-dispatch-content.test.ts`
  - `runtime/test/channels/web/http-dispatch-media.test.ts`
  - `runtime/test/channels/web/http-dispatch-shell.test.ts`
  - `runtime/test/channels/web/http-dispatch-workspace.test.ts`
  - `runtime/test/channels/web/web-response-service.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts`
  - `runtime/test/channels/web/security-hardening.test.ts`
  - `runtime/test/channels/web/web-channel-http-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-http-surface-delegation.test.ts`
- `autoresearch.checks.sh` also passed:
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Result: mergeable slice ready for review; routing behavior, status codes, auth/CSRF behavior, and JSON/static/docs semantics remained unchanged across the focused coverage above.

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/50-done/extract-webchannel-constructor-wiring-factory.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
