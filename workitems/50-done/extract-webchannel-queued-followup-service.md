---
id: extract-webchannel-queued-followup-service
title: Extract WebChannel queued follow-up lifecycle into a service
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
owner: pi
blocked-by: []
---

# Extract WebChannel queued follow-up lifecycle into a service

## Summary

Carve the queued follow-up lifecycle out of `runtime/src/channels/web.ts` into a
focused service/module without changing request behavior, payload shapes, or the
observable queue semantics used by the web UI.

This is the first bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

The goal is to reduce `WebChannel` size and coupling using a deterministic,
reviewable seam rather than attempting a one-shot class rewrite.

## Scope

Target only the queued follow-up lifecycle currently owned by `WebChannel`,
including the logic around:

- queued follow-up placeholder creation
- deferred queued follow-up storage/load helpers
- row-id allocation for deferred queued items
- enqueue / prepend / consume / remove operations
- queue count / list helpers
- related store wiring already living under `runtime/src/channels/web/`

Expected source surfaces:
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/followup-placeholders.ts`
- any new focused service/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No Bun server bootstrap/TLS extraction
- No SSE client/service extraction in this slice
- No terminal/VNC websocket extraction in this slice
- No request-router decomposition beyond what is required to preserve current queue behavior
- No UX/payload changes

## Acceptance Criteria

- [ ] Queued follow-up lifecycle moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing queue semantics remain unchanged:
  - [ ] placeholder creation still works
  - [ ] deferred queue ordering still works
  - [ ] dedupe-by-row-id behavior still works
  - [ ] remove / consume / prepend behavior still works
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of queued follow-up logic.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — service extraction with focused seam tests (recommended)
1. Define a small queued-followup service boundary around the existing stores/helpers.
2. Extract the lifecycle methods from `WebChannel` into the service.
3. Add or strengthen focused tests for queue operations.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- small, deterministic, and reviewable
- directly reduces `WebChannel` responsibility
- good fit for autoresearch repair-first loop

**Cons:**
- only addresses one monolith seam

### Path B — partial helper extraction only
1. Move only the internal helper methods out of `WebChannel`.
2. Keep orchestration methods on `WebChannel` for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- may leave too much lifecycle logic in the class

## Recommended Path

Path A — extract a dedicated queued-followup service with focused validation and
keep the rest of `WebChannel` untouched in this slice.

## Test Plan

- [ ] Add or strengthen a focused queued-followup test path, ideally under:
  - `runtime/test/channels/web/queued-followup-service.test.ts`
  - or a similarly narrow file if naming differs
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
- [ ] Run validation in repair-first order:
  1. focused queue/follow-up tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [ ] Leave behind a stable validation command/script such as:
  - `scripts/audit-webchannel-queued-followup-slice.sh`
  - or another canonical repo entrypoint if a better path emerges

## Definition of Done

- [ ] Extracted queued-followup seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the chosen first seam.
- [ ] Any larger or adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Lane change: `40-review` → `50-done` after board review confirmed the slice landed on `main`, the recorded validation evidence was sufficient, and no additional rework was required beyond the documented review pass.
- Completion rationale: bounded seam extraction accepted as complete with focused tests, targeted integration coverage, and lint/typecheck evidence already recorded below.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-27
- Lane change: `20-doing` → `40-review` after the slice landed on `main` via `d55e920` (`Extract queued followup lifecycle service`).
- Evidence recorded from the landing pass:
  - focused seam tests in `runtime/test/channels/web/queued-followup-lifecycle-service.test.ts`
  - targeted integration validation in `runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Landed source surfaces:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/queued-followup-lifecycle-service.ts`
  - `runtime/test/channels/web/queued-followup-lifecycle-service.test.ts`
- Follow-up seam split out explicitly instead of widening scope in-place:
  - `workitems/20-doing/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Created as the first bounded execution slice under `split-webchannel-god-class`.
- Chosen because queued follow-up lifecycle appears cohesive, deterministic, and already covered by meaningful queue-state integration tests.
- Intended as an autoresearch-friendly seam using the usual repair-first loop and a canonical validation path.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/20-doing/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
