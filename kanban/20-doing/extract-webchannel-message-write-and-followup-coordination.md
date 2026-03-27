---
id: extract-webchannel-message-write-and-followup-coordination
title: Extract WebChannel message-write and follow-up coordination seam
status: doing
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
  - messaging
  - followups
owner: pi
blocked-by: []
---

# Extract WebChannel message-write and follow-up coordination seam

## Summary

Carve the remaining message-write context wiring and follow-up placeholder
coordination out of `runtime/src/channels/web.ts` into a focused service/module
without changing message payload shapes, thread assignment behavior,
interaction-broadcast side effects, queued follow-up semantics, or the public
WebChannel methods used by existing handlers/services.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, and recovery/runtime-state seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
message-write/follow-up orchestration for:
- `getMessageWriteContext()` construction
- `sendMessage()` / `postDashboardWidget()` write-path wiring
- follow-up placeholder creation/replacement helpers
- adjacent queued follow-up coordination glue that still lives on `WebChannel`

behind a narrower, testable seam.

## Scope

Target only the message-write/follow-up responsibilities currently owned by
`WebChannel`, including logic around:

- `getMessageWriteContext()`
- `sendMessage()` and `postDashboardWidget()` write-path delegation
- `queueFollowupPlaceholder()` and `replaceQueuedFollowupPlaceholder()`
- any small helper/context surface required to preserve existing follow-up and
  interaction-broadcast behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/src/channels/web/agent-message-service.ts`
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No server bootstrap/TLS extraction in this slice
- No websocket upgrade extraction in this slice
- No SSE fanout/session-binding extraction in this slice
- No recovery/runtime-state extraction in this slice
- No request-router decomposition in this slice
- No payload or public API changes
- No queued follow-up lifecycle storage rewrite in this slice
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] Message-write/follow-up wiring moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] message writes and thread assignment behavior
  - [ ] interaction-broadcast side effects
  - [ ] queued follow-up placeholder create/replace behavior
  - [ ] dashboard widget posting semantics
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of message-write orchestration.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — service extraction with focused seam tests (recommended)
1. Define a small message-write/follow-up service boundary around the existing write context and follow-up helpers.
2. Extract write-path and placeholder orchestration out of `WebChannel`.
3. Add or strengthen focused tests for context wiring, broadcasts, and placeholder behavior.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- removes another cohesive non-routing cluster from `WebChannel`
- builds directly on the existing queued-followup and recovery extractions
- should leave endpoint behavior unchanged while shrinking the coordinator

**Cons:**
- still leaves larger endpoint/handler surface cleanup for later slices

### Path B — helper extraction only
1. Move only `getMessageWriteContext()` into a helper/service.
2. Keep the surrounding send/placeholder methods on `WebChannel` for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much write-path glue on `WebChannel`

## Recommended Path

Path A — extract a dedicated message-write/follow-up seam with focused
validation while keeping behavior and public surfaces unchanged.

## Test Plan

- [ ] Add or strengthen focused tests for:
  - write-context wiring and broadcaster callbacks
  - follow-up placeholder create/replace behavior
  - dashboard/widget write-path delegation where practical
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-channel-recovery-state.test.ts` if touched indirectly
- [ ] Run validation in repair-first order:
  1. focused message-write/follow-up tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [ ] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [ ] Extracted message-write/follow-up seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [ ] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the recovery/runtime-state seam landed.
- Chosen because message-write context construction and follow-up placeholder coordination remain one of the larger cohesive non-routing clusters still living near the top of `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-queued-followup-service.md`
- `kanban/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `kanban/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `kanban/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
