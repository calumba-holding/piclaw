---
id: fuzz-web-control-plane-and-extension-hooks
title: Fuzz web control-plane payloads and extension hook behavior
status: next
priority: medium
created: 2026-03-26
updated: 2026-03-26
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - testing
  - fuzzing
  - web
  - extensions
owner: pi
---

# Fuzz web control-plane payloads and extension hook behavior

## Summary

Add focused fuzz/robustness coverage around malformed web control-plane payloads
and extension hook integration so regressions surface before they reach the web
runtime.

This is a split follow-up from the older XL umbrella ticket
`test-suite-audit-with-fuzzing-logic-validation.md`.

## Scope

Primary targets:

- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/src/channels/web/http-dispatch-agent.ts`
- extension registration / hook ordering paths

## Acceptance Criteria

- [ ] Malformed `/agent/*` payloads are covered by focused tests.
- [ ] Extension hook order and side effects remain deterministic under test.
- [ ] Fuzzed/invalid control-plane inputs do not produce unhandled exceptions.
- [ ] Any newly discovered integration failures are fixed or split into follow-ups.

## Test Plan

- [ ] Extend `runtime/test/channels/web/http-dispatch-agent.test.ts`
- [ ] Extend `runtime/test/channels/web/agent-message-handler.test.ts`
- [ ] Add or extend targeted extension integration tests under `runtime/test/extensions/` or equivalent
- [ ] Record the payload classes/seed strategy used during the pass

## Definition of Done

- [ ] Web control-plane robustness coverage exists for malformed payloads.
- [ ] Extension hook determinism is validated in tests.
- [ ] Evidence is recorded in `## Updates`.

## Updates

### 2026-03-26
- Created by splitting the XL umbrella ticket `test-suite-audit-with-fuzzing-logic-validation` into smaller execution units.
- This ticket owns the web control-plane / extension-hook fuzzing slice.

## Links

- `kanban/50-done/test-suite-audit-with-fuzzing-logic-validation.md`
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/handlers/agent.ts`
- `runtime/src/channels/web/http-dispatch-agent.ts`
- `runtime/test/channels/web/http-dispatch-agent.test.ts`
- `runtime/test/channels/web/agent-message-handler.test.ts`
