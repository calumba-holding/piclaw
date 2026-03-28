---
id: extract-webchannel-recovery-and-runtime-state-wiring
title: Extract WebChannel recovery and runtime-state wiring seam
status: done
priority: high
created: 2026-03-27
updated: 2026-03-27
completed: 2026-03-27
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web
  - modularity
  - recovery
  - state
owner: pi
blocked-by: []
---

# Extract WebChannel recovery and runtime-state wiring seam

## Summary

Carve the remaining recovery orchestration and runtime-state wiring out of
`runtime/src/channels/web.ts` into a focused service/module without changing
resume behavior, inflight-run recovery semantics, queued steering behavior,
agent-status persistence, panel-buffer behavior, or public API surfaces used by
existing handlers/services.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway, and
SSE/session-broadcast seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
runtime-state/recovery orchestration for:
- resume/recovery context building
- inflight run recovery and pending-chat resume wiring
- state load/save hooks
- agent-status / pending-steering / panel-buffer access glue

behind a narrower, testable seam.

## Scope

Target only the recovery/runtime-state responsibilities currently owned by
`WebChannel`, including logic around:

- `getResumeChatContext()` and `resumeChat()`
- `getRecoveryContext()`, `recoverInflightRuns()`, and `resumePendingChats()`
- `loadState()` / `saveState()`
- pending steering, agent-status store, and panel-buffer delegation surfaces
- any small helper/context surface required to preserve existing state behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/recovery.ts`
- any new focused service/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No server bootstrap/TLS extraction in this slice
- No websocket upgrade extraction in this slice
- No SSE fanout/session-binding extraction in this slice
- No queued follow-up lifecycle changes
- No request-router decomposition in this slice
- No payload or public API changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] Recovery/runtime-state wiring moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] inflight-run recovery and pending-chat resume
  - [ ] queued steering state behavior
  - [ ] agent-status load/save behavior
  - [ ] panel expansion/buffer delegation behavior
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of recovery/state orchestration.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — service extraction with focused seam tests (recommended)
1. Define a small recovery/runtime-state service boundary around the existing stores and recovery helpers.
2. Extract resume/recovery and state-delegation orchestration out of `WebChannel`.
3. Add or strengthen focused tests for recovery-context and runtime-state delegation behavior.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- cohesive stateful seam already concentrated in `WebChannel`
- directly reduces non-HTTP orchestration still living on the class
- good fit for deterministic repair-first loops

**Cons:**
- leaves later endpoint-facade decomposition for follow-up work

### Path B — helper extraction only
1. Move only recovery context builders out of `WebChannel`.
2. Keep state/buffer/store delegation on the class for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much runtime-state glue on `WebChannel`

## Recommended Path

Path A — extract a dedicated recovery/runtime-state seam with focused
validation while keeping behavior and public surfaces unchanged.

## Test Plan

- [x] Add or strengthen focused tests for:
  - recovery/resume context wiring
  - agent-status / pending-steering delegation
  - panel-buffer delegation and state load/save behavior where practical
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - existing recovery/state web tests if touched
- [x] Run validation in repair-first order:
  1. focused recovery/state tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted recovery/runtime-state seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Lane change: `40-review` → `50-done` after board review confirmed the slice landed on `main`, the recorded validation evidence was sufficient, and no additional rework was required beyond the documented review pass.
- Completion rationale: bounded seam extraction accepted as complete with focused tests, targeted integration coverage, and lint/typecheck evidence already recorded below.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-27
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Landed `runtime/src/channels/web/runtime-state-service.ts` and delegated WebChannel's recovery/runtime-state methods through it without changing resume behavior, inflight-run recovery semantics, queued steering behavior, agent-status persistence, or panel-buffer behavior.
- Added focused seam coverage in:
  - `runtime/test/channels/web/runtime-state-service.test.ts`
  - `runtime/test/channels/web/web-channel-recovery-state.test.ts`
- Tightened existing recovery coverage by replacing fixed sleeps with `waitFor(...)` polling in:
  - `runtime/test/channels/web/recovery.test.ts`
  - `runtime/test/channels/web/web-channel-recovery-state.test.ts`
- Moved the targeted load-state and inflight-recovery integration scenarios out of the giant `runtime/test/channels/web/web-channel.test.ts` file into the focused `web-channel-recovery-state.test.ts` slice.
- Validation evidence:
  - `bun test runtime/test/channels/web/runtime-state-service.test.ts runtime/test/channels/web/recovery.test.ts runtime/test/channels/web/web-channel-recovery-state.test.ts runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Result: `runtime/src/channels/web.ts` dropped from 1651 to 1628 lines while preserving the public WebChannel API.
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `workitems/20-doing/extract-webchannel-message-write-and-followup-coordination.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the SSE/session-broadcast seam landed.
- Chosen because recovery orchestration, runtime stores, and panel/buffer delegation remain one of the larger non-HTTP responsibility clusters still living on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/20-doing/extract-webchannel-message-write-and-followup-coordination.md`
- `workitems/40-review/extract-webchannel-queued-followup-service.md`
- `workitems/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `workitems/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
