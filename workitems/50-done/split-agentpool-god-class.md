---
id: split-agentpool-god-class
title: "Refactor: split AgentPool into session, tools, and turn modules"
status: done
priority: critical
created: 2026-03-23
updated: 2026-03-29
completed: 2026-03-29
tags:
  - refactor
  - modularity
  - P0
  - quality-assessment
owner: pi
blocked-by: []
---

# Refactor: split AgentPool into session, tools, and turn modules

## Summary

`runtime/src/agent-pool.ts` is 1,632 lines with a large `AgentPool` class, multiple exported contracts, and standalone helper functions. It handles session lifecycle, tool creation, turn tracking, branch registration, forking, prompt timeouts, and provider usage — all in one file.

The `runtime/src/agent-pool/` sub-directory already exists with several helper modules, but the main class still holds most of the logic.

## Scope

Split into:

- **`AgentSessionManager`** — session creation, naming, directory management, forking, branch registration
- **`AgentToolFactory`** — tool creation, extension wiring, default tool set
- **`AgentTurnCoordinator`** — turn tracking, prompt timeout, abort handling, streaming
- **`AgentPool`** — thin coordinator composing the above, plus the public `runAgent()` / `sidePrompt()` API

## Acceptance criteria

- [x] `agent-pool.ts` is under 400 lines
- [x] Each extracted module has focused tests
- [x] All existing agent-pool tests still pass
- [x] No new `any` usage introduced
- [x] Helper functions move to their natural modules

## Risks

- Session state and turn state are interleaved in the current run loop
- `subscribeToSession` callback wiring touches all three concerns

## Notes

- 18 import lines confirm the coupling surface
- 17 `catch(e)` + 15 `catch {}` blocks — error handling needs attention during extraction

## Updates

### 2026-03-29
- Lane change: `40-review` → `50-done` after the follow-up contract/wiring extraction held up under broader validation and the full runtime suite is now green again.
- Completion evidence:
  - `runtime/src/agent-pool.ts` remains at 322 lines
  - the extracted contract and service-wiring seams stayed stable after `cd runtime && bun test` returned `1307 pass`, `1 skip`, `0 fail`
  - prior focused validation for the refactor remains in place: agent-pool seam tests, `bun run lint`, `bun run typecheck`, `bun run build`, `bun run check:stale-dist`
- Outcome: the public `AgentPool` façade is preserved, the god-class split is landed on `main`, and this ticket no longer needs review-lane tracking.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-29
- Follow-up refinement on branch `feature/agentpool-contracts-and-wiring`: extracted the remaining public contracts into `runtime/src/agent-pool/contracts.ts` and constructor/service assembly into `runtime/src/agent-pool/service-factory.ts`.
- This reduced `runtime/src/agent-pool.ts` further from 391 lines to 322 lines without changing the public `AgentPool` façade.
- Added focused coverage for the new constructor wiring seam in `runtime/test/agent-pool/service-factory.test.ts`.
- Validation:
  - `bun test test/agent-pool/agent-pool.test.ts test/agent-pool/tool-factory.test.ts test/agent-pool/turn-coordinator.test.ts test/agent-pool/session-manager.test.ts test/agent-pool/branch-manager.test.ts test/agent-pool/runtime-facade.test.ts test/agent-pool/prompt-utils.test.ts test/agent-pool/run-agent-orchestrator.test.ts test/agent-pool/side-prompt-runner.test.ts test/agent-pool/session-binder.test.ts test/agent-pool/service-factory.test.ts`
  - `bun run lint`
  - `bun run typecheck`
  - `bun run build`
  - `bun run check:stale-dist`
- Review-readiness remains good: the public entry point stayed stable while the remaining constructor and contract density moved into dedicated modules.

### 2026-03-29
- Lane change: `20-doing` → `40-review` after the refactor reduced `runtime/src/agent-pool.ts` to 391 lines, landed focused seam tests, and passed lint/typecheck plus the focused agent-pool regression suite.
- Dist regeneration check completed: `bun run build` and `bun run check:stale-dist`.
- Review ask: verify the extracted module boundaries feel stable enough to keep, and confirm no hidden behavior drift in broader integration surfaces beyond the focused agent-pool suite.

### 2026-03-29
- Began the split on branch `feature/split-agentpool-god-class`.
- Extracted nine helper modules out of `runtime/src/agent-pool.ts`:
  - `runtime/src/agent-pool/tool-factory.ts`
  - `runtime/src/agent-pool/turn-coordinator.ts`
  - `runtime/src/agent-pool/session-manager.ts`
  - `runtime/src/agent-pool/branch-manager.ts`
  - `runtime/src/agent-pool/runtime-facade.ts`
  - `runtime/src/agent-pool/prompt-utils.ts`
  - `runtime/src/agent-pool/run-agent-orchestrator.ts`
  - `runtime/src/agent-pool/side-prompt-runner.ts`
  - `runtime/src/agent-pool/session-binder.ts`
- Rewired `AgentPool` to delegate default tool creation, turn tracking / prompt-timeout subscription wiring, main/side session lifecycle management, chat-branch registration/fork/listing flows, model/status/control/queue/slash-command helpers, and the core `runAgent()` / `runSidePrompt()` orchestration paths through those modules.
- Added focused tests for the extracted seams:
  - `runtime/test/agent-pool/tool-factory.test.ts`
  - `runtime/test/agent-pool/turn-coordinator.test.ts`
  - `runtime/test/agent-pool/session-manager.test.ts`
  - `runtime/test/agent-pool/branch-manager.test.ts`
  - `runtime/test/agent-pool/runtime-facade.test.ts`
  - `runtime/test/agent-pool/prompt-utils.test.ts`
  - `runtime/test/agent-pool/run-agent-orchestrator.test.ts`
  - `runtime/test/agent-pool/side-prompt-runner.test.ts`
  - `runtime/test/agent-pool/session-binder.test.ts`
- Validation:
  - `bun test test/agent-pool/agent-pool.test.ts test/agent-pool/tool-factory.test.ts test/agent-pool/turn-coordinator.test.ts test/agent-pool/session-manager.test.ts test/agent-pool/branch-manager.test.ts test/agent-pool/runtime-facade.test.ts test/agent-pool/prompt-utils.test.ts test/agent-pool/run-agent-orchestrator.test.ts test/agent-pool/side-prompt-runner.test.ts test/agent-pool/session-binder.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Size reduction so far: `runtime/src/agent-pool.ts` `1632 → 391` lines, satisfying the ticket’s main file-size target.
- Review-readiness note: the original acceptance criteria are now satisfied; a follow-up `any` audit shows the remaining `runtime/src/agent-pool/` `any` usage is confined to pre-existing `provider-usage.ts` compatibility code rather than the newly extracted seams.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 1, test: 2, deps: 2, risk: 1)

### 2026-03-28
- Lane change: `10-next` → `20-doing` via web next-card decision.
- Next-lane outcome recorded from the adaptive-card submission: **Move to Doing**.
- This makes AgentPool the newly reactivated structural refactor in active WIP.

### 2026-03-27
- Repo-status audit refreshed the size callout to match the current file: `runtime/src/agent-pool.ts` is now 1,632 lines.
- Ticket remains valid; the existing helper-module subdirectory is not enough because the central orchestration class still owns too much lifecycle and turn-state logic.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 1, test: 1, deps: 2, risk: 1)

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
