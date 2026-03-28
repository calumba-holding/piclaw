---
id: extract-webchannel-message-processing-and-storage-adapters
title: Extract WebChannel message processing and storage adapters
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
  - message-processing
  - storage
owner: pi
blocked-by: []
---

# Extract WebChannel message processing and storage adapters

## Summary

Carve the remaining message-processing and storage adapter logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
`processChat()` behavior, `storeMessage()` persistence semantics, default-agent
identity shaping, thread/media/content-block handling, or the public
`WebChannel` methods used by the handler/runtime surfaces.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, terminal/VNC HTTP, adaptive-card/side-prompt,
peer-message relay, and agent-message entry seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving:
- `processChat()`
- `storeMessage()`
- any adjacent default-agent identity / persistence adapter glue

behind a narrower, testable seam.

## Scope

Target only the message-processing/storage adapter responsibilities currently
owned by `WebChannel`, including logic around:

- forwarding into `processAgentChat(...)`
- shaping the `storeWebMessage(...)` call context
- preserving default agent id/name identity behavior
- preserving thread/media/content-block and steering/terminal reply semantics

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/test/channels/web/`

## Non-goals

- No deeper `web/handlers/agent.ts` decomposition in this slice
- No message-write service behavior changes
- No queue/control-plane changes
- No payload or public API changes
- No UI bundle work in this slice

## Acceptance Criteria

- [x] Message-processing/storage adapters move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] `processChat()` delegation semantics
  - [x] `storeMessage()` persistence and identity shaping
  - [x] thread/media/content-block / steering / terminal-reply handling
  - [x] public WebChannel method signatures and status behavior relied on by handlers/tests
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of adapter glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` integration tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated message-processing/storage adapter seam while keeping
`WebChannel.processChat()` and `WebChannel.storeMessage()` as thin delegates.

## Test Plan

- [x] Add or strengthen focused tests for:
  - `processChat()` delegation
  - `storeMessage()` identity/persistence shaping
  - handler compatibility with the extracted seam
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-agent-streaming.test.ts`
  - `runtime/test/channels/web/message-write-service.test.ts`
- [x] Run validation in repair-first order:
  1. focused processing/storage tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [x] Extracted message-processing/storage seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Landed `runtime/src/channels/web/message-processing-storage-service.ts`, moving the public `processChat()` and `storeMessage()` adapter glue out of `WebChannel` while preserving handler/runtime-facing behavior.
- Added focused seam coverage in:
  - `runtime/test/channels/web/message-processing-storage-service.test.ts`
  - `runtime/test/channels/web/web-channel-message-processing-storage-delegation.test.ts`
- Updated deterministic audit grouping in:
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/message-processing-storage-service.test.ts runtime/test/channels/web/web-channel-message-processing-storage-delegation.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/channels/web/web-agent-streaming.test.ts runtime/test/channels/web/message-write-service.test.ts runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/message-processing-storage-service.ts`
  - `runtime/test/channels/web/message-processing-storage-service.test.ts`
  - `runtime/test/channels/web/web-channel-message-processing-storage-delegation.test.ts`
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `workitems/20-doing/extract-webchannel-runtime-and-followup-facades.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the agent-message entry seam landed.
- Chosen because `processChat()` and `storeMessage()` remain the last substantive message-processing/storage adapters still living directly on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/20-doing/extract-webchannel-runtime-and-followup-facades.md`
- `workitems/40-review/extract-webchannel-agent-message-entry-wrapper.md`
- `workitems/40-review/extract-webchannel-peer-message-relay-wrapper.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
