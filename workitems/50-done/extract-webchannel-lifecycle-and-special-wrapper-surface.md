---
id: extract-webchannel-lifecycle-and-special-wrapper-surface
title: Extract WebChannel lifecycle and special wrapper surface
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
  - lifecycle
  - wrappers
owner: pi
blocked-by: []
---

# Extract WebChannel lifecycle and special wrapper surface

## Summary

Carve the remaining lifecycle and special-case wrapper surface out of
`runtime/src/channels/web.ts` into a focused module/service without changing
server lifecycle behavior, adaptive-card/side-prompt behavior, peer-message
relay behavior, agent-message entry behavior, or the public `WebChannel` API.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the runtime/session/storage public-delegate seam landed.

The goal is to keep `WebChannel` as a minimal coordinator while moving the last
small wrapper cluster for methods/getters like:
- `server`
- `start()` / `stop()`
- `handleAdaptiveCardAction()` / `handleAgentSidePrompt()` / `handleAgentSidePromptStream()`
- `handleAgentPeerMessage()`
- `handleAgentMessage()`

behind a narrower, testable surface.

## Scope

Target only the remaining lifecycle and special-case wrapper responsibilities
currently owned directly by `WebChannel`, especially delegates into:
- `serverLifecycleGateway`
- `adaptiveCardSidePromptService`
- `peerMessageRelayService`
- `agent-message-entry-service`

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused helper/service file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No request-router/auth/runtime-followup rewrites
- No deeper rewrites of already-extracted services
- No UI bundle work
- No payload or status-code changes

## Acceptance Criteria

- [x] Remaining lifecycle and special-case wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] `server` / `start()` / `stop()` lifecycle delegation
  - [x] adaptive-card / side-prompt wrapper behavior
  - [x] peer-message relay wrapper behavior
  - [x] agent-message entry wrapper behavior
  - [x] public `WebChannel` signatures relied on by handlers/tests
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a final small lifecycle/helper wrapper seam while keeping the public
`WebChannel` methods/getters as thin compatibility delegates.

## Test Plan

- [x] Add or strengthen focused tests for service behavior and bare-stub delegation compatibility.
- [x] Re-run affected focused coverage from:
  - `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts`
  - `runtime/test/channels/web/web-channel-adaptive-card-side-prompt-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-peer-message-relay-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-agent-message-entry-delegation.test.ts`
- [x] Run validation in repair-first order:
  1. focused lifecycle/special-wrapper tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
  5. `bun run check:stale-dist`

## Definition of Done

- [x] Extracted lifecycle/special-wrapper seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Created as the next bounded child slice after `extract-webchannel-runtime-session-and-storage-public-delegates` landed.
- Chosen because `runtime/src/channels/web.ts` is now largely down to lifecycle bootstrap plus a handful of special-case wrapper methods/getters into already-extracted collaborators.
- Intended execution loop: strengthen focused delegation tests first, then extract a narrow service boundary, then rerun targeted coverage, then lint/typecheck/stale-dist.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Landed on branch `autoresearch/exp-mnadojwr-yrg9` in commit `951bd7fd` and prepared here for local landing merge after rerunning validation from the canonical `/workspace/piclaw` repo.
- Extracted the remaining lifecycle/special-case wrapper glue behind `runtime/src/channels/web/web-channel-lifecycle-special-surface-service.ts` and rewired `runtime/src/channels/web.ts` through `getLifecycleSpecialSurfaceService(...)` so `WebChannel.prototype` calls on bare stubs still work.
- Added focused seam coverage in:
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-delegation.test.ts`
- Validation (repair-first order) is green via focused lifecycle/special-wrapper coverage plus repo checks:
  - `runtime/test/channels/web/server-lifecycle-gateway-service.test.ts`
  - `runtime/test/channels/web/web-channel-adaptive-card-side-prompt-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-peer-message-relay-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-agent-message-entry-delegation.test.ts`
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-delegation.test.ts`
  - `runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the lifecycle/special-wrapper extraction slice is complete.
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/web-channel-lifecycle-special-surface-service.ts`
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-service.test.ts`
  - `runtime/test/channels/web/web-channel-lifecycle-special-surface-delegation.test.ts`
  - `workitems/50-done/extract-webchannel-lifecycle-and-special-wrapper-surface.md`
  - `workitems/20-doing/split-webchannel-god-class.md`

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `workitems/50-done/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- `workitems/50-done/extract-webchannel-peer-message-relay-wrapper.md`
- `workitems/50-done/extract-webchannel-agent-message-entry-wrapper.md`
