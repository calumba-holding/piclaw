---
id: split-agentpool-god-class
title: "Refactor: split AgentPool into session, tools, and turn modules"
status: doing
priority: critical
created: 2026-03-23
updated: 2026-03-29
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

- [ ] `agent-pool.ts` is under 400 lines
- [ ] Each extracted module has focused tests
- [ ] All existing agent-pool tests still pass
- [ ] No new `any` usage introduced
- [ ] Helper functions move to their natural modules

## Risks

- Session state and turn state are interleaved in the current run loop
- `subscribeToSession` callback wiring touches all three concerns

## Notes

- 18 import lines confirm the coupling surface
- 17 `catch(e)` + 15 `catch {}` blocks — error handling needs attention during extraction

## Updates

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
- Validation:
  - `bun test test/agent-pool/agent-pool.test.ts test/agent-pool/tool-factory.test.ts test/agent-pool/turn-coordinator.test.ts test/agent-pool/session-manager.test.ts test/agent-pool/branch-manager.test.ts test/agent-pool/runtime-facade.test.ts test/agent-pool/prompt-utils.test.ts test/agent-pool/run-agent-orchestrator.test.ts test/agent-pool/side-prompt-runner.test.ts`
  - `bun run lint`
  - `bun run typecheck`
- Size reduction so far: `runtime/src/agent-pool.ts` `1632 → 391` lines, satisfying the ticket’s main file-size target.
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
