---
id: extract-webchannel-agent-message-entry-wrapper
title: Extract WebChannel agent message entry wrapper
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
- `workitems/10-next/split-webchannel-god-class.md`

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

- [x] Agent-message entry wrapper moves behind a focused service/module with a narrower interface than `WebChannel`.
- [x] Existing behavior remains unchanged for:
  - [x] `chat_jid` query parsing/defaulting
  - [x] forwarding into the normal agent message handler path
  - [x] request-router-facing public WebChannel method and status codes
- [x] `runtime/src/channels/web.ts` loses another meaningful chunk of wrapper glue.
- [x] Focused tests exist or are strengthened for the extracted seam.
- [x] Existing relevant `web-channel` integration tests still pass.
- [x] No new `any` usage is introduced.

## Recommended Path

Extract a dedicated agent-message entry seam with focused validation and keep the
public `WebChannel.handleAgentMessage()` method as a thin delegate.

## Test Plan

- [x] Add or strengthen focused tests for:
  - chat-jid parsing/default behavior
  - delegation into the shared agent message handler
  - router-facing method stability
- [x] Re-run affected integration coverage from:
  - `runtime/test/channels/web/web-channel.test.ts`
  - `runtime/test/channels/web/http-dispatch-agent.test.ts`
- [x] Run validation in repair-first order:
  1. focused entry-wrapper tests
  2. targeted `web-channel` tests
  3. `bun run lint`
  4. `bun run typecheck`

## Definition of Done

- [x] Extracted agent-message entry seam is mergeable back to `main`.
- [x] Focused and integration validation are green.
- [x] Ticket `## Updates` records commands, evidence, and files touched.
- [x] Parent WebChannel split ticket is updated to reflect the next chosen seam.

## Updates

### 2026-03-28
- Lane change: `40-review` → `50-done` via web review-card decision.
- Review outcome recorded from the adaptive-card submission: **Close to Done**.
- No new implementation work was added in this pass; this move records review acceptance of the already-landed slice.

### 2026-03-28
- Lane change: `20-doing` → `40-review` after landing the slice on `main`.
- Card submission accepted: close-to-done review resolved with decision `done`.
- Lane change: `40-review` → `50-done` because the agent-message entry extraction slice is complete.
- Extracted the wrapper into `runtime/src/channels/web/agent-message-entry-service.ts` and switched `WebChannel.handleAgentMessage()` to a thin delegate without changing the public router-facing method.
- Added focused seam coverage in `runtime/test/channels/web/agent-message-entry-service.test.ts` and `runtime/test/channels/web/web-channel-agent-message-entry-delegation.test.ts`, and strengthened `runtime/test/channels/web/http-dispatch-agent.test.ts` so the dynamic `/agent/:id/message` route also proves the routed request preserves `chat_jid`.
- Validation evidence:
  - `bun test runtime/test/channels/web/agent-message-entry-service.test.ts runtime/test/channels/web/web-channel-agent-message-entry-delegation.test.ts runtime/test/channels/web/http-dispatch-agent.test.ts runtime/test/channels/web/web-channel.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run check:stale-dist`
- Follow-up cleanup removed direct constructor-owned wiring for the extracted seam: `WebChannel.handleAgentMessage()` now resolves the entry service through a module helper instead of keeping a dedicated field/init pair on the coordinator.
- Final tidy-up removed redundant `async`/`await` from the thin delegates in both `runtime/src/channels/web.ts` and `runtime/src/channels/web/agent-message-entry-service.ts`, keeping the Promise-returning wrapper path minimal without changing behavior.
- Files touched: `runtime/src/channels/web.ts`, `runtime/src/channels/web/agent-message-entry-service.ts`, `runtime/test/channels/web/agent-message-entry-service.test.ts`, `runtime/test/channels/web/web-channel-agent-message-entry-delegation.test.ts`, `runtime/test/channels/web/http-dispatch-agent.test.ts`.
- Next bounded seam split out explicitly instead of widening scope in-place:
  - `workitems/50-done/extract-webchannel-message-processing-and-storage-adapters.md`
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

## Links

- `workitems/10-next/split-webchannel-god-class.md`
- `workitems/50-done/extract-webchannel-peer-message-relay-wrapper.md`
- `workitems/50-done/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
- `/workspace/notes/piclaw-autoresearch-audit-checklist.md`
