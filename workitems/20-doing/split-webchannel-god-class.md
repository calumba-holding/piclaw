---
id: split-webchannel-god-class
title: "Refactor: split WebChannel god-class into composable services"
status: doing
priority: critical
created: 2026-03-23
updated: 2026-03-28
tags:
  - refactor
  - modularity
  - P0
  - quality-assessment
owner: pi
blocked-by: []
---

# Refactor: split WebChannel god-class into composable services

## Summary

`runtime/src/channels/web.ts` started at 1,905 lines in a single `WebChannel` class and is now down to 569 lines after the landed child slices, but it still owns HTTP server setup, auth/session coordination, request entrypoints, and a shrinking set of compatibility shims in one coordinator.

This is the single biggest obstacle to maintainability in the codebase.

## Scope

Extract `WebChannel` into a composition of focused services:

- **`HttpServerService`** — `Bun.serve` setup, TLS loading, port binding
- **`AuthGateway`** — session/TOTP/passkey validation (partially exists in `auth-runtime.ts`)
- **`WebSocketService`** — terminal + VNC upgrade handling
- **`SseService`** — SSE client management (partially exists in `sse.ts`)
- **`QueuedFollowupService`** — deferred follow-up lifecycle
- **`WebChannel`** — thin coordinator that composes the above

## Acceptance criteria

- [ ] No method in `WebChannel` exceeds 50 lines
- [ ] `WebChannel` class is under 300 lines
- [ ] Extracted services have their own test files
- [ ] All existing web channel tests still pass
- [ ] No new `any` usage introduced

## Risks

- SSE client management and queued follow-ups are tightly coupled to WebChannel state
- Request routing already delegates to `request-router-service.ts` but the wiring is in `WebChannel`

## Notes

- The class already delegates to many services but owns the wiring and lifecycle glue
- 31 imports at the top of the file confirm the coupling surface
- This unblocks all future web-layer work

## Updates

### 2026-03-28
- Stabilization review: after landing the HTTP surface, runtime/session/storage public-surface, and lifecycle/special-wrapper seams, `runtime/src/channels/web.ts` is now functioning primarily as a compatibility shell over extracted services rather than as a behavior-heavy god-class.
- Current measured shape at this stopping point:
  - `runtime/src/channels/web.ts`: 568 lines
  - delegate calls to extracted helpers: 42 HTTP-surface, 32 runtime-public-surface, 8 lifecycle-special-surface
  - remaining content is mostly field storage, constructor bootstrapping, and public API compatibility methods that intentionally remain on `WebChannel`
- Decision: treat the refactor as **effectively stabilized for now**. Do not force another extraction slice merely to chase line count; only reopen this umbrella if a new behavior-based seam appears or downstream cleanup like `workitems/10-next/group-web-channel-flat-files.md` becomes the clearer next move.
- Operational takeaway: the highest-value follow-up has shifted from more `WebChannel` seam-splitting to filesystem/module-layout cleanup and normal web UX/auth backlog work.
- The request-router / HTTP wrapper seam landed on branch `autoresearch/exp-mnadojwr-yrg9` via `76edacdc` (`Extracted a focused WebChannel HTTP surface service...`).
- Result:
  - added `runtime/src/channels/web/web-channel-http-surface-service.ts`
  - rewired the remaining request-router / endpoint-facade / control-plane / session-broadcast / terminal-VNC / response-service HTTP wrappers in `runtime/src/channels/web.ts` through a local compatibility helper
  - preserved `WebChannel.prototype` compatibility for bare-stub tests by resolving the extracted service through a cast helper instead of changing the public wrapper signatures
- Evidence:
  - direct wrapper references to `requestRouter`, `endpointFacade`, `controlPlaneService`, `responses`, `remoteInterop`, `terminalVncHttpService`, and `serverLifecycleGateway` in `runtime/src/channels/web.ts` dropped from 44 before the slice to 3 after it
  - added focused seam tests:
    - `runtime/test/channels/web/web-channel-http-surface-service.test.ts`
    - `runtime/test/channels/web/web-channel-http-surface-delegation.test.ts`
  - validation passed:
    - `./autoresearch.sh` (focused `http-dispatch-*`, `web-response-service`, `web-channel`, `server-lifecycle-gateway-service`, `security-hardening`, and new HTTP-surface tests)
    - `bun run lint`
    - `bun run typecheck`
    - `bun run check:stale-dist`
- Current shape after this seam: `runtime/src/channels/web.ts` is now mostly runtime/follow-up compatibility delegates plus a few special-case HTTP helper shims (`adaptive-card`, peer-message relay, and agent-message entry), rather than direct request-router/response glue.
- The runtime/session/storage public-delegate seam then landed on the same branch via `ab1333ef` (`Extracted a WebChannel runtime public surface service...`).
- Result:
  - added `runtime/src/channels/web/web-channel-runtime-public-surface-service.ts`
  - rewired the remaining `runtimeFollowupFacade`, `messageProcessingStorageService`, and `sessionBroadcast` public delegates in `runtime/src/channels/web.ts` through a second local compatibility helper
  - preserved `WebChannel.prototype` compatibility for bare-stub tests and existing post-construction collaborator monkeypatching by having the extracted service read collaborator properties dynamically from the channel object
- Evidence:
  - direct references to `runtimeFollowupFacade`, `messageProcessingStorageService`, and `sessionBroadcast` in `runtime/src/channels/web.ts` dropped from 32 before the slice to 0 after it
  - added focused seam tests:
    - `runtime/test/channels/web/web-channel-runtime-public-surface-service.test.ts`
    - `runtime/test/channels/web/web-channel-runtime-public-surface-delegation.test.ts`
  - validation passed:
    - `./autoresearch.sh` (focused runtime-followup/message-processing/session-broadcast/web-channel coverage plus new runtime-public-surface tests)
    - `bun run lint`
    - `bun run typecheck`
    - `bun run check:stale-dist`
- Current shape after these seams: `runtime/src/channels/web.ts` is now primarily constructor/identity/bootstrap glue plus a small set of special-case wrappers (`start`/`stop`/`server`, adaptive-card/side-prompt, peer-message relay, and agent-message entry) rather than large clusters of direct transport/runtime delegation.
- The lifecycle/special-wrapper seam then landed on the same branch via `951bd7fd` (`Extracted a lifecycle/special-wrapper surface service...`).
- Result:
  - added `runtime/src/channels/web/web-channel-lifecycle-special-surface-service.ts`
  - rewired the remaining lifecycle/server, adaptive-card/side-prompt, peer-message relay, and agent-message entry wrappers in `runtime/src/channels/web.ts` through a third local compatibility helper
  - preserved `WebChannel.prototype` compatibility for bare-stub tests by resolving the extracted service through a cast helper rather than changing the public wrapper signatures
- Evidence:
  - added focused seam tests:
    - `runtime/test/channels/web/web-channel-lifecycle-special-surface-service.test.ts`
    - `runtime/test/channels/web/web-channel-lifecycle-special-surface-delegation.test.ts`
  - validation passed:
    - focused lifecycle/special-wrapper delegation coverage
    - `bun run lint`
    - `bun run typecheck`
    - `bun run check:stale-dist`
- Current shape after these three seams: `runtime/src/channels/web.ts` is down to about 569 lines and is now mostly constructor/bootstrap wiring plus a thin compatibility shell.
- Next bounded seam to queue if we continue shrinking the class: re-audit the residual bootstrap/compatibility shell and decide whether one final coordinator-shell slice is worth landing, rather than forcing another extraction prematurely.

### 2026-03-27
- The first bounded child slice (`workitems/20-doing/extract-webchannel-queued-followup-service.md`) landed on `main` via `d55e920` (`Extract queued followup lifecycle service`) and moved to review.
- Chose the next extraction seam as server lifecycle + websocket gateway wiring and split it into:
  - `workitems/20-doing/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
- Rationale:
  - `start()` / `stop()` / websocket upgrade dispatch remain a cohesive orchestration seam inside `runtime/src/channels/web.ts`
  - existing `authGateway`, `terminalService`, `vncService`, and request-router boundaries already provide natural collaborators for extraction
  - this reduces `WebChannel` transport/bootstrap responsibility without mixing in later SSE or endpoint decomposition work
- Planned repair-first loop for this slice:
  1. create/strengthen focused lifecycle/gateway tests
  2. extract the smallest viable service boundary
  3. run targeted tests
  4. run `bun run lint`
  5. run `bun run typecheck`
  6. only then widen scope if still justified
- Result: the server lifecycle + websocket gateway seam landed behind `runtime/src/channels/web/server-lifecycle-gateway-service.ts`, then was tightened further with `createWebServerLifecycleGateway(...)`, shrinking `runtime/src/channels/web.ts` from 1824 to 1649 lines while preserving existing auth/CSRF/upgrade behavior.
- The SSE/session-broadcast seam then landed behind `runtime/src/channels/web/session-broadcast-service.ts`, removing the direct SSE hub / UI bridge wiring from `WebChannel` while preserving request routing and fanout semantics.
- The recovery/runtime-state seam then landed behind `runtime/src/channels/web/runtime-state-service.ts`, moving resume/recovery context construction, pending steering, agent-status persistence, and panel-buffer delegation out of `WebChannel` while preserving the public API and recovery behavior.
- The message-write/follow-up seam then landed behind `runtime/src/channels/web/message-write-service.ts`, moving write-context construction plus dashboard/follow-up placeholder coordination out of `WebChannel` while preserving payload shapes and interaction side effects.
- The endpoint facade / handler-context seam then landed behind `runtime/src/channels/web/channel-endpoint-facade-service.ts`, centralizing lightweight endpoint wrappers and live identity snapshot reuse while preserving endpoint payloads and refresh behavior.
- The agent control-plane seam then landed behind `runtime/src/channels/web/agent-control-plane-service.ts`, moving queue, branch-lifecycle, and autoresearch wrapper glue out of `WebChannel` while preserving payload shapes, status codes, and router-facing public methods.
- The terminal/VNC HTTP seam then landed behind `runtime/src/channels/web/terminal-vnc-http-service.ts`, moving terminal session, VNC session, and VNC handoff HTTP wrapper glue out of `WebChannel` while preserving auth/CSRF/target-validation behavior and router-facing public methods.
- The adaptive-card/side-prompt seam then landed behind `runtime/src/channels/web/adaptive-card-side-prompt-service.ts`, moving adaptive-card action orchestration and side-prompt request/stream wrappers out of `WebChannel` while preserving payload validation, login/TOTP flows, autoresearch card actions, and router-facing public methods.
- The peer-message relay seam then landed behind `runtime/src/channels/web/agent-peer-message-relay-service.ts`, moving payload validation, target resolution, forwarded request shaping, and normal-path delegation out of `WebChannel` while preserving router-facing `handleAgentPeerMessage()` behavior.
- The agent-message entry seam then landed behind `runtime/src/channels/web/agent-message-entry-service.ts`, moving `chat_jid` parsing/defaulting and `/agent/:agentId/message` forwarding out of `WebChannel` while preserving router-facing behavior.
- The message-processing/storage seam then landed behind `runtime/src/channels/web/message-processing-storage-service.ts`, moving `processChat()` and `storeMessage()` adapter glue out of `WebChannel` while preserving runtime/handler-facing behavior.
- The runtime/follow-up facade seam then landed behind `runtime/src/channels/web/runtime-followup-facade-service.ts`, moving the remaining queued-followup, runtime-state, panel/buffer, and queued-placeholder facade methods out of `WebChannel` while preserving public method signatures and runtime semantics.
- The constructor wiring seam then landed behind `runtime/src/channels/web/web-channel-constructor-factory.ts`, moving collaborator assembly and final constructor bootstrapping out of `WebChannel` while preserving initialization order, auth/session setup, endpoint/control-plane wiring, and runtime behavior.
- Split the next bounded seam into:
  - `workitems/40-review/extract-webchannel-request-router-and-http-surface-wrappers.md`
- Rationale: the remaining request-router and HTTP wrapper methods still make up most of the residual `WebChannel` surface once constructor assembly is extracted.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Result: the constructor wiring seam landed behind `runtime/src/channels/web/web-channel-constructor-factory.ts`, shrinking the live `WebChannel` constructor from 106 lines to 29 lines while preserving auth/session, endpoint/control-plane, server lifecycle, and adaptive side-prompt wiring behavior.
- Validation for this slice: focused constructor-wiring seam tests plus targeted `web-channel` coverage passed; `bun run check:stale-dist` passed; `bun run lint` / `bun run typecheck` could not complete in this worktree because the expected local ESLint/TypeScript toolchain is unavailable.
- Next bounded seam to queue after this slice: a request-router / HTTP wrapper cleanup ticket, kept separate so this constructor extraction stays mergeable and behavior-preserving.

### 2026-03-27
- Lane change: `10-next` → `20-doing`.
- Selected as the next active refactor because it is the highest-leverage open structural cleanup ticket, is unblocked, and directly unblocks follow-up web-layer cleanup work.
- Current repo reality at pickup time: `runtime/src/channels/web.ts` is 1,905 lines and continues to be the largest maintainability hotspot in the runtime.
- Immediate execution focus: choose the first extractable seam (`SseService`, `QueuedFollowupService`, or HTTP/bootstrap wiring) and land the split in bounded slices rather than attempting a one-shot rewrite.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 1)

### 2026-03-27
- Repo-status audit refreshed the size callout to match the current file: `runtime/src/channels/web.ts` is now 1,905 lines.
- Ticket remains fully valid and is arguably more urgent than when first written because the monolith has grown rather than shrunk.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 1)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocked by: nothing
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
- Child slices:
  - `workitems/40-review/extract-webchannel-queued-followup-service.md`
  - `workitems/40-review/extract-webchannel-server-lifecycle-and-websocket-gateway.md`
  - `workitems/40-review/extract-webchannel-sse-broadcast-and-session-wiring.md`
  - `workitems/40-review/extract-webchannel-recovery-and-runtime-state-wiring.md`
  - `workitems/40-review/extract-webchannel-message-write-and-followup-coordination.md`
  - `workitems/40-review/extract-webchannel-endpoint-facade-and-handler-contexts.md`
  - `workitems/40-review/extract-webchannel-agent-control-plane-wrappers.md`
  - `workitems/40-review/extract-webchannel-terminal-and-vnc-http-wrappers.md`
  - `workitems/40-review/extract-webchannel-adaptive-card-actions-and-side-prompts.md`
  - `workitems/40-review/extract-webchannel-peer-message-relay-wrapper.md`
  - `workitems/40-review/extract-webchannel-agent-message-entry-wrapper.md`
  - `workitems/40-review/extract-webchannel-message-processing-and-storage-adapters.md`
  - `workitems/40-review/extract-webchannel-runtime-and-followup-facades.md`
  - `workitems/40-review/extract-webchannel-constructor-wiring-factory.md`
  - `workitems/40-review/extract-webchannel-request-router-and-http-surface-wrappers.md`
  - `workitems/40-review/extract-webchannel-runtime-session-and-storage-public-delegates.md`
  - `workitems/40-review/extract-webchannel-lifecycle-and-special-wrapper-surface.md`
