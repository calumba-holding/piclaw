---
id: extract-webchannel-runtime-and-followup-facades
title: Extract WebChannel runtime and follow-up facades
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
  - runtime-state
  - followups
owner: pi
blocked-by: []
---

# Extract WebChannel runtime and follow-up facades

## Summary

Carve the remaining runtime-state and queued-followup facade methods out of
`runtime/src/channels/web.ts` into a focused service/module without changing
public method signatures, state persistence/recovery behavior, queued follow-up
semantics, panel-buffer access, or the `WebChannelLike` contract relied on by
handlers/tests.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, terminal/VNC HTTP, adaptive-card/side-prompt,
peer-message relay, agent-message entry, and message-processing/storage seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the remaining
public facade cluster for methods like:
- queued follow-up item accessors/mutators
- pending steering accessors
- agent status and thread-root accessors
- panel expansion + thought/draft buffer accessors
- state load/save/recovery/resume passthroughs

behind a narrower, testable seam.

## Scope

Target only the remaining public facade/adapter responsibilities currently owned by
`WebChannel`, especially logic delegating to:
- `queuedFollowupLifecycle`
- `runtimeState`
- `messageWriteService` for the queued placeholder replacement/accessor surface

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/test/channels/web/`

## Non-goals

- No behavior changes in recovery/state/follow-up semantics
- No request-router changes
- No UI bundle work
- No deeper runtime-state internal refactor in this slice

## Acceptance Criteria

- [x] Remaining runtime/follow-up facade methods move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] queued follow-up lifecycle accessors/mutators
  - [x] pending steering / agent status / thread-root accessors
  - [x] panel expansion and draft/thought buffer accessors
  - [x] recovery/load/save/resume passthrough behavior
  - [x] public WebChannel signatures relied on by handlers/tests
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of facade glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` integration tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated runtime/follow-up facade seam while keeping the public
`WebChannel` methods as thin delegates.

## Test Plan

- [x] Add or strengthen focused tests for:
  - queued follow-up facade delegation
  - runtime-state facade delegation
  - panel/buffer accessor compatibility
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-agent-streaming.test.ts`
  - `runtime/test/channels/web/runtime-state-service.test.ts`
  - `runtime/test/channels/web/message-write-service.test.ts`
- [x] Run validation in repair-first order:
  1. focused facade tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [x] Extracted runtime/follow-up facade seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Landed `runtime/src/channels/web/runtime-followup-facade-service.ts`, moving the remaining queued-followup, runtime-state, panel/buffer, and queued-placeholder facade methods behind a dedicated seam.
- Kept all public `WebChannelLike` signatures intact while reducing `runtime/src/channels/web.ts` from 671 lines on the prior mainline to 662 lines after this facade cleanup.
- Added focused seam coverage in:
  - `runtime/test/channels/web/runtime-followup-facade-service.test.ts`
  - `runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts`
- Updated deterministic audit grouping in:
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/runtime-followup-facade-service.test.ts runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/channels/web/web-agent-streaming.test.ts runtime/test/channels/web/runtime-state-service.test.ts runtime/test/channels/web/message-write-service.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/runtime-followup-facade-service.ts`
  - `runtime/test/channels/web/runtime-followup-facade-service.test.ts`
  - `runtime/test/channels/web/web-channel-runtime-followup-delegation.test.ts`
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `kanban/40-review/extract-webchannel-constructor-wiring-factory.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the message-processing/storage seam landed.
- Chosen because the remaining public runtime/follow-up facade methods still account for a noticeable share of `WebChannel`'s remaining coordinator surface.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-constructor-wiring-factory.md`
- `kanban/40-review/extract-webchannel-message-processing-and-storage-adapters.md`
- `kanban/40-review/extract-webchannel-agent-message-entry-wrapper.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
