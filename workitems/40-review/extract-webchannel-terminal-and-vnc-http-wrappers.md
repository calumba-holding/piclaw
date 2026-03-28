---
id: extract-webchannel-terminal-and-vnc-http-wrappers
title: Extract WebChannel terminal and VNC HTTP wrappers
status: review
priority: high
created: 2026-03-27
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
  - terminal
  - vnc
owner: pi
blocked-by: []
---

# Extract WebChannel terminal and VNC HTTP wrappers

## Summary

Carve the remaining terminal/VNC HTTP endpoint wrapper logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
terminal availability/auth behavior, VNC target validation, CSRF/origin checks,
handoff semantics, JSON payload shapes, or the public WebChannel methods used by
the request router.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
and agent control-plane seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
terminal/VNC HTTP orchestration for:
- `handleTerminalSession()`
- `handleVncSession()`
- `handleVncHandoff()`
- adjacent auth/CSRF/target-validation glue

behind a narrower, testable seam.

## Scope

Target only the terminal/VNC HTTP-wrapper responsibilities currently owned by
`WebChannel`, including logic around:

- terminal session info endpoint auth/owner resolution
- VNC session endpoint auth + target validation behavior
- VNC handoff endpoint auth + CSRF + target validation behavior
- any small helper/context surface required to preserve current payloads and
  session-transfer semantics

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/src/channels/web/vnc/vnc-session-service.ts`
- `runtime/src/channels/web/terminal-session-service.ts`
- targeted tests under `runtime/test/channels/web/`

## Non-goals

- No websocket upgrade extraction in this slice
- No server bootstrap/TLS extraction in this slice
- No SSE fanout/session-binding extraction in this slice
- No recovery/runtime-state extraction in this slice
- No message-write/follow-up extraction in this slice
- No endpoint-facade extraction in this slice
- No control-plane extraction in this slice
- No request-router decomposition in this slice
- No payload or public API changes
- No flat-file regrouping in this slice

## Acceptance Criteria

- [x] Terminal/VNC HTTP wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] terminal auth/owner/session-info responses
  - [x] VNC session target validation and response payloads
  - [x] VNC handoff auth/CSRF/transfer behavior
  - [x] request-router-facing public WebChannel methods and status codes
- [x] `runtime/src/channels/web.ts` loses a meaningful chunk of transport/session HTTP wrapper glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` integration tests still pass.
- [x] No new `any` usage is introduced.
- [x] A stable repo validation command/script for this slice is left behind or updated.

## Implementation Paths

### Path A — terminal/VNC HTTP facade extraction with focused seam tests (recommended)
1. Define a small service boundary around terminal/VNC HTTP wrappers.
2. Extract the wrapper logic out of `WebChannel` while keeping request-router call sites unchanged.
3. Add or strengthen focused tests for auth, target validation, and handoff delegation.
4. Re-run targeted `web-channel` tests plus lint/typecheck.

**Pros:**
- removes another cohesive non-router cluster from `WebChannel`
- aligns with existing terminal/VNC services and the already-extracted websocket gateway
- preserves existing transport/session behavior while shrinking the coordinator

**Cons:**
- still leaves larger adaptive-card/agent-message action flows for later slices

### Path B — VNC-only extraction
1. Extract only VNC session + handoff wrappers.
2. Leave terminal wrapper on `WebChannel` for now.

**Pros:**
- lower short-term risk

**Cons:**
- less structural payoff
- leaves closely related session HTTP glue split across seams

## Recommended Path

Path A — extract a dedicated terminal/VNC HTTP seam with focused validation
while keeping behavior and public surfaces unchanged.

## Test Plan

- [x] Add or strengthen focused tests for:
  - terminal session auth/owner resolution delegation
  - VNC session target validation and response shaping
  - VNC handoff auth/CSRF/transfer behavior
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - existing VNC/terminal-focused tests under `runtime/test/channels/web/`
- [x] Run validation in repair-first order:
  1. focused terminal/VNC HTTP tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted terminal/VNC HTTP seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-28
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Landed `runtime/src/channels/web/terminal-vnc-http-service.ts` so terminal session, VNC session, and VNC handoff HTTP wrappers now delegate through a dedicated seam instead of living directly on `WebChannel`.
- Kept the router-facing public methods intact while reducing `runtime/src/channels/web.ts` from 1280 lines on the prior control-plane baseline to 1235 lines after the seam cleanup.
- Added focused seam coverage in:
  - `runtime/test/channels/web/terminal-vnc-http-service.test.ts`
  - `runtime/test/channels/web/web-channel-terminal-vnc-http-delegation.test.ts`
- Strengthened shell routing coverage in:
  - `runtime/test/channels/web/http-dispatch-shell.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/terminal-vnc-http-service.test.ts runtime/test/channels/web/web-channel-terminal-vnc-http-delegation.test.ts runtime/test/channels/web/http-dispatch-shell.test.ts runtime/test/channels/web/vnc-session-service.test.ts runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/terminal-vnc-http-service.ts`
  - `runtime/test/channels/web/http-dispatch-shell.test.ts`
  - `runtime/test/channels/web/terminal-vnc-http-service.test.ts`
  - `runtime/test/channels/web/web-channel-terminal-vnc-http-delegation.test.ts`
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `workitems/20-doing/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-27
- Created as the next bounded execution slice under `split-webchannel-god-class` after the agent control-plane seam landed.
- Chosen because terminal/VNC HTTP wrapper glue remains one of the more cohesive transport/session clusters still living on `WebChannel` after the request-side control-plane extraction.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/20-doing/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- `workitems/40-review/extract-webchannel-queued-followup-service.md`
- `workitems/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `workitems/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `workitems/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `workitems/40-review/extract-webchannel-message-write-and-followup-coordination.md`
- `workitems/40-review/extract-webchannel-endpoint-facade-and-handler-contexts.md`
- `workitems/40-review/extract-webchannel-agent-control-plane-wrappers.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
