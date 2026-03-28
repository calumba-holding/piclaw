---
id: split-agentpool-god-class
title: "Refactor: split AgentPool into session, tools, and turn modules"
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
