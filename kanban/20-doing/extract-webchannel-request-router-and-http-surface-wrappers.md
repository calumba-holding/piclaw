---
id: extract-webchannel-request-router-and-http-surface-wrappers
title: Extract WebChannel request-router and HTTP surface wrappers
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
- `kanban/20-doing/split-webchannel-god-class.md`

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

- [ ] Remaining request-router / HTTP surface wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] request dispatch and fetch handling
  - [ ] endpoint-facade HTTP wrapper behavior
  - [ ] static/docs/json helper behavior
  - [ ] public `WebChannel` signatures relied on by handlers/tests
- [ ] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` tests still pass.
- [ ] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated HTTP/routing wrapper seam while keeping the public
`WebChannel` methods as thin delegates.

## Test Plan

- [ ] Add or strengthen focused tests for wrapper delegation and helper behavior.
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/http-dispatch-*.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-response-service.test.ts`
- [ ] Run validation in repair-first order:
  1. focused HTTP/routing wrapper tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
  5. `bun run check:stale-dist` if relevant

## Definition of Done

- [ ] Extracted request-router / HTTP surface seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the constructor wiring seam landed.
- Chosen because the remaining request-router and HTTP wrapper methods still make up most of the residual `WebChannel` surface once constructor assembly is extracted.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-constructor-wiring-factory.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
