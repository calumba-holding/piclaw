---
id: extract-webchannel-agent-message-entry-wrapper
title: Extract WebChannel agent message entry wrapper
status: doing
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
  - agent-message
owner: pi
blocked-by: []
---

# Extract WebChannel agent message entry wrapper

## Summary

Carve the remaining `/agent/:agentId/message` entry wrapper logic out of
`runtime/src/channels/web.ts` into a focused service/module without changing
chat selection, `chat_jid` query handling, queue/defer semantics, slash-command
entry behavior, or the public `WebChannel` method used by the request router.

This is the next bounded execution slice under:
- `kanban/20-doing/split-webchannel-god-class.md`

after the queued follow-up, server lifecycle/websocket gateway,
SSE/session-broadcast, recovery/runtime-state, message-write, endpoint facade,
agent control-plane, terminal/VNC HTTP, adaptive-card/side-prompt, and
peer-message relay seams landed.

The goal is to keep `WebChannel` as a thin coordinator while moving:
- `handleAgentMessage()`
- adjacent chat-jid/default-agent request-entry glue

behind a narrower, testable seam.

## Scope

Target only the agent-message entry wrapper responsibilities currently owned by
`WebChannel`, including logic around:

- `chat_jid` query parsing and defaulting
- forwarding the request into the normal `handleAgentMessageRequest(...)` path
- preserving existing path/agent-id semantics
- any small helper/context surface needed to keep the request-router-facing method stable

Expected source surfaces:
- `runtime/src/channels/web.ts`
- any new focused service/helper file(s) created for this slice
- `runtime/test/channels/web/`

## Non-goals

- No deeper `web/handlers/agent.ts` decomposition in this slice
- No queue/follow-up behavior changes
- No peer-message behavior changes
- No payload or public API changes
- No UI bundle work in this slice

## Acceptance Criteria

- [ ] Agent-message entry wrapper moves behind a focused service/module with a narrower interface than `WebChannel`.
- [ ] Existing behavior remains unchanged for:
  - [ ] `chat_jid` query parsing/defaulting
  - [ ] forwarding into the normal agent message handler path
  - [ ] request-router-facing public WebChannel method and status codes
- [ ] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [ ] Focused tests exist or are strengthened for the extracted seam.
- [ ] Existing relevant `web-channel` integration tests still pass.
- [ ] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated agent-message entry seam with focused validation and keep the
public `WebChannel.handleAgentMessage()` method as a thin delegate.

## Test Plan

- [ ] Add or strengthen focused tests for:
  - chat-jid parsing/default behavior
  - delegation into the shared agent message handler
  - router-facing method stability
- [ ] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/http-dispatch-agent.test.ts`
- [ ] Run validation in repair-first order:
  1. focused entry-wrapper tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [ ] Extracted agent-message entry seam is mergeable back to `main`.
- [ ] Focused and integration validation are green.
- [ ] Ticket `## Updates` records commands, evidence, and files touched.
- [ ] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Created as the next bounded execution slice under `split-webchannel-god-class` after the peer-message relay seam landed.
- Chosen because the `/agent/:agentId/message` entry wrapper remains one of the last cohesive request-entry seams still living directly on `WebChannel`.
- Intended for the same repair-first loop: focused seam tests first, then extraction, then targeted `web-channel` validation, then lint/typecheck.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `kanban/20-doing/split-webchannel-god-class.md`
- `kanban/40-review/extract-webchannel-peer-message-relay-wrapper.md`
- `kanban/40-review/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
