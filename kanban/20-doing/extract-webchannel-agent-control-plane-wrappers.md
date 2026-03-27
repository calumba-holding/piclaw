---
id: extract-webchannel-agent-control-plane-wrappers
title: Extract WebChannel agent control-plane wrappers
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
  - control-plane
  - agents
owner: pi
blocked-by: []
---

# Extract WebChannel agent control-plane wrappers

## Summary

Carve the remaining agent control-plane endpoint wrappers out of
`runtime/src/channels/web.ts` into a focused service/module without changing
branch lifecycle behavior, queue-state semantics, autoresearch control/status
behavior, HTTP payload shapes, status codes, or the public WebChannel methods
used by the request router.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, and endpoint
facade seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
control-plane wrapper/orchestration for:
- queue state / queue remove / queue steer endpoints
- branch fork / rename / prune / restore endpoints
- autoresearch status / stop / dismiss endpoint wrappers
- adjacent lightweight JSON parsing / response shaping that still lives on
  `WebChannel`

behind a narrower, testable seam.

## Scope

Target only the agent control-plane responsibilities currently owned by
`WebChannel`, including logic around:

- `handleAutoresearchStatus()` / `handleAutoresearchStop()` / `handleAutoresearchDismiss()`
- `handleAgentQueueState()` / `handleAgentQueueRemove()` / `handleAgentQueueSteer()`
- `handleAgentBranchFork()` / `handleAgentBranchRename()` / `handleAgentBranchPrune()` / `handleAgentBranchRestore()`
- any small helper/context surface required to preserve current queue/branch/autoresearch behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No server bootstrap/TLS extraction in this slice
- No websocket upgrade extraction in this slice
- No SSE fanout/session-binding extraction in this slice
- No recovery/runtime-state extraction in this slice
- No message-write/follow-up extraction in this slice
- No endpoint-facade extraction in this slice
- No request-router decomposition in this slice
- No payload or public API changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [ ] Agent control-plane wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] branch lifecycle request/response behavior
  - [ ] queue state / remove / steer semantics
  - [ ] autoresearch status/stop/dismiss behavior
  - [ ] request-router-facing public WebChannel methods and status codes
- [ ] `runtime/src/channels/web.ts` loses a meaningful chunk of control-plane wrapper glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.
- [ ] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — control-plane facade extraction with focused seam tests (recommended)
1. Define a small control-plane facade boundary around queue, branch, and autoresearch wrappers.
2. Extract the control-plane wrapper logic out of `WebChannel` while keeping request-router call sites unchanged.
3. Add or strengthen focused tests for queue/branch/autoresearch delegation and response shaping.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- removes another cohesive non-transport cluster from `WebChannel`
- fits the already-extracted endpoint/message-write/runtime seams
- keeps router behavior stable while shrinking the coordinator further

**Cons:**
- still leaves transport/session-specific endpoint wrappers for later slices

### Path B — branch-only extraction
1. Extract branch lifecycle wrappers first.
2. Leave queue/autoresearch wrappers on `WebChannel` for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- leaves too much adjacent control-plane glue behind

## Recommended Path

Path A — extract a dedicated agent control-plane seam with focused validation
while keeping behavior and public surfaces unchanged.

## Test Plan

- [ ] Add or strengthen focused tests for:
  - queue state/remove/steer delegation and payload shaping
  - branch lifecycle wrapper behavior
  - autoresearch status/stop/dismiss delegation where practical
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - other focused queue/branch/autoresearch tests under `runtime/test/channels/web/`
- [ ] Run validation in repair-first order:
  1. focused control-plane tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [ ] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [ ] Extracted control-plane seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [ ] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the endpoint facade/handler-context seam landed.
- Chosen because queue, branch-lifecycle, and autoresearch control wrappers remain one of the larger cohesive request-side clusters still living on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-queued-followup-service.md`
- `kanban/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `kanban/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `kanban/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `kanban/40-review/extract-webchannel-message-write-and-followup-coordination.md`
- `kanban/40-review/extract-webchannel-endpoint-facade-and-handler-contexts.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
