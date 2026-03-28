---
id: extract-webchannel-peer-message-relay-wrapper
title: Extract WebChannel peer-message relay wrapper
status: doing
priority: high
created: 2026-03-28
updated: 2026-03-28
target_release: next
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - refactor
  - web
  - modularity
  - relay
  - peer-message
owner: pi
blocked-by: []
---

# Extract WebChannel peer-message relay wrapper

## Summary

Carve the remaining peer-message relay wrapper logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
payload validation, active-chat/branch target resolution, forwarded content
wording, queue/defer semantics, response payloads, or the public `WebChannel`
method used by the request router.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, terminal/VNC HTTP, and adaptive-card/side-prompt seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving:
- `handleAgentPeerMessage()`
- adjacent target resolution / forward-request shaping glue

behind a narrower, testable seam.

## Scope

Target only the peer-message relay wrapper responsibilities currently owned by
`WebChannel`, including logic around:

- request payload parsing and validation
- target chat / target agent resolution
- self-target prevention
- forwarded content shaping (`Peer message from @...`)
- forwarding through the normal agent message path while preserving queue/defer behavior

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/test/channels/web/`

## Non-goals

- No adaptive-card extraction in this slice
- No side-prompt extraction in this slice
- No endpoint-facade/control-plane extraction in this slice
- No payload or public API changes
- No UI bundle work in this slice

## Acceptance Criteria

- [ ] Peer-message relay wrapper moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] payload validation and 4xx responses
  - [ ] target resolution by chat id and agent name
  - [ ] forwarded content wording and relay metadata payloads
  - [ ] queue/defer semantics via the normal agent message path
  - [ ] request-router-facing public WebChannel method and status codes
- [ ] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated peer-message relay seam with focused validation and keep the
public `WebChannel.handleAgentPeerMessage()` method as a thin delegate.

## Test Plan

- [ ] Add or strengthen focused tests for:
  - payload validation and missing-field handling
  - target resolution by chat id / agent name
  - forwarded request shaping and relay metadata
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/web-control-plane-payloads.test.ts`
- [ ] Run validation in repair-first order:
  1. focused peer-message tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [ ] Extracted peer-message seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the adaptive-card/side-prompt seam landed.
- Chosen because peer-message relay remains one of the last cohesive request-wrapper clusters still living directly on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- `kanban/40-review/extract-webchannel-terminal-and-vnc-http-wrappers.md`
- `kanban/40-review/extract-webchannel-agent-control-plane-wrappers.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
