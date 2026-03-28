---
id: extract-webchannel-adaptive-card-actions-and-side-prompts
title: Extract WebChannel adaptive-card actions and side prompts
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
  - adaptive-cards
  - side-prompts
owner: pi
blocked-by: []
---

# Extract WebChannel adaptive-card actions and side prompts

## Summary

Carve the remaining adaptive-card action and side-prompt HTTP wrapper logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
adaptive-card payload validation, login/TOTP card flows, autoresearch card
launch/stop behavior, side-prompt SSE framing, error/status codes, or the public
`WebChannel` methods used by the request router.

This is the next bounded execution slice under:
- `workitems/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, and terminal/VNC HTTP seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving the
interactive wrapper/orchestration for:
- `handleAdaptiveCardAction()`
- `handleAgentSidePrompt()`
- `handleAgentSidePromptStream()`

behind a narrower, testable seam.

## Scope

Target only the adaptive-card action and side-prompt wrapper responsibilities
currently owned by `WebChannel`, including logic around:

- adaptive-card action payload validation and response shaping
- login/TOTP adaptive-card submit flows handled without a normal agent turn
- autoresearch launch/stop card actions
- side-prompt request parsing, agent invocation, and SSE event framing
- any small helper/context surface required to preserve current payloads,
  card-state transitions, and streaming behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/test/channels/web/`

## Non-goals

- No peer-message extraction in this slice
- No terminal/VNC extraction in this slice
- No websocket upgrade extraction in this slice
- No server bootstrap/TLS extraction in this slice
- No SSE/session-broadcast extraction in this slice
- No recovery/runtime-state extraction in this slice
- No message-write/follow-up extraction in this slice
- No endpoint-facade extraction in this slice
- No control-plane extraction in this slice
- No payload or public API changes
- No UI bundle work in this slice

## Acceptance Criteria

- [x] Adaptive-card action + side-prompt wrappers move behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] adaptive-card action validation, card-state transitions, and response payloads
  - [x] login/TOTP same-card flows and auth side effects
  - [x] autoresearch launch/stop card actions
  - [x] side-prompt JSON/SSE behavior and status codes
  - [x] request-router-facing public WebChannel methods and status codes
- [x] `runtime/src/channels/web.ts` loses a meaningful chunk of interactive wrapper glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` integration tests still pass.
- [x] No new `any` usage is introduced.
- [x] A stable repo validation command/script for this slice is left behind or updated.

## Recommended Path

Extract a dedicated interactive-action seam that keeps `WebChannel` public
methods as thin delegates while moving adaptive-card and side-prompt
orchestration into a focused service with targeted seam tests.

## Test Plan

- [x] Add or strengthen focused tests for:
  - adaptive-card action validation and delegation
  - login/TOTP/autoresearch card-flow preservation
  - side-prompt request parsing and SSE event framing
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - relevant adaptive-card / side-prompt tests under `runtime/test/channels/web/`
- [x] Run validation in repair-first order:
  1. focused adaptive-card/side-prompt tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`
- [x] Leave behind a stable validation command/script if a canonical slice entrypoint emerges.

## Definition of Done

- [x] Extracted adaptive-card/side-prompt seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.
- [x] Any larger adjacent follow-up seams discovered are split explicitly instead of bundled.

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the adaptive-card/side-prompt extraction slice is complete.
- Landed `runtime/src/channels/web/adaptive-card-side-prompt-service.ts`, moving adaptive-card action orchestration plus side-prompt request/stream handling behind a dedicated seam.
- Kept router-facing `WebChannel` methods intact while reducing `runtime/src/channels/web.ts` from 1235 lines on the prior terminal/VNC baseline to 720 lines after this extraction.
- Added focused seam coverage in:
  - `runtime/test/channels/web/adaptive-card-side-prompt-service.test.ts`
  - `runtime/test/channels/web/web-channel-adaptive-card-side-prompt-delegation.test.ts`
- Preserved payload-guard coverage for bare-stub prototype calls in:
  - `runtime/test/channels/web/web-control-plane-payloads.test.ts`
- Updated deterministic audit grouping in:
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Validation evidence:
  - `bun test runtime/test/channels/web/adaptive-card-side-prompt-service.test.ts runtime/test/channels/web/web-channel-adaptive-card-side-prompt-delegation.test.ts runtime/test/channels/web/web-control-plane-payloads.test.ts runtime/test/channels/web/http-dispatch-agent.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Files touched:
  - `runtime/src/channels/web.ts`
  - `runtime/src/channels/web/adaptive-card-side-prompt-service.ts`
  - `runtime/test/channels/web/adaptive-card-side-prompt-service.test.ts`
  - `runtime/test/channels/web/web-channel-adaptive-card-side-prompt-delegation.test.ts`
  - `scripts/audit-baseline-quality-deterministic.ts`
  - `runtime/test/scripts/audit-baseline-quality-deterministic.test.ts`
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `workitems/50-done/extract-webchannel-peer-message-relay-wrapper.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the terminal/VNC HTTP seam landed.
- Chosen because adaptive-card action handling and side-prompt streaming remain one of the largest cohesive interactive wrapper clusters still living on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/20-doing/split-webchannel-god-class.md`
- `workitems/50-done/extract-webchannel-peer-message-relay-wrapper.md`
- `workitems/40-review/extract-webchannel-queued-followup-service.md`
- `workitems/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- `workitems/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
- `workitems/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
- `workitems/40-review/extract-webchannel-message-write-and-followup-coordination.md`
- `workitems/50-done/extract-webchannel-endpoint-facade-and-handler-contexts.md`
- `workitems/50-done/extract-webchannel-agent-control-plane-wrappers.md`
- `workitems/50-done/extract-webchannel-terminal-and-vnc-http-wrappers.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
