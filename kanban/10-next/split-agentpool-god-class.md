---
id: split-agentpool-god-class
title: "Refactor: split AgentPool into session, tools, and turn modules"
status: next
priority: critical
created: 2026-03-23
updated: 2026-03-23
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

`src/agent-pool.ts` is 1,438 lines with 8 exported interfaces, a large `AgentPool` class, and 9 standalone helper functions. It handles session lifecycle, tool creation, turn tracking, branch registration, forking, prompt timeouts, and provider usage — all in one file.

The `agent-pool/` sub-directory already exists with 7 helper modules (attachments, logging, orphan-tool-results, provider-usage, session, slash-command, usage), but the main class still holds most of the logic.

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

## Links

- [Quality assessment](../docs/quality-assessment-2026-03-23.md)
- Blocks: `codebase-quality-cleanup-2026` (master ticket)
