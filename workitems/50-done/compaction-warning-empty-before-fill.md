---
id: compaction-warning-empty-before-fill
title: Fix compaction warning blank state before warning text is populated
status: done
priority: high
created: 2026-03-16
updated: 2026-03-16
completed: 2026-03-16
target_release: v1.4.0
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - ui
  - compaction
  - status
owner: pi
---

# Fix compaction warning blank state before warning text is populated

## Summary

A user-visible warning in the web status panel can render as an empty line for a few seconds during compaction before becoming populated with the intended compaction message.

This ticket tracks the UI-visible regression and ties it to compaction-status emission/restoration behavior across restart/reconnect and auto-compaction transitions.

## Problem Statement

When context compaction is triggered (typically during `auto_compaction_*` flow), the status panel may briefly render with no warning text, then shortly after update to the expected string.

This is likely one of:

- an empty/undefined `title` in a transient `intent` payload,
- stale/restored compaction status state without `title`,
- or an SSE ordering/timing gap between persisted status and updated stream event.

Because compaction progress is already user-visible and timer-sensitive (elapsed indicator), blank intermediate states are confusing and look like a broken warning state.

## Hypothesis

Restore and stream paths should guarantee a non-empty user-facing title for compaction intent states at all times, even if a status object arrives first with minimal fields.

## Immediate Scope

- Prevent blank compaction intent rendering in web UI while preserving existing intent/pending behavior.
- Keep timer behavior and intent color/semantics intact.
- Add evidence to confirm root cause in backend emission vs restore vs SSE timing.
- Keep this ticket independent from broader compaction-architecture work (`pi-agentic-compaction`), which is being investigated in parallel.

## Acceptance Criteria

- [ ] During compaction, the status panel never displays an empty compaction warning text (including on reconnect after restart).
- [ ] Compaction status remains visually consistent with existing warning/timer styling.
- [ ] Regression coverage for the observed behavior is added (component-level or contract-level) and passes.
- [ ] Evidence collected for whether blank states are due backend payload shape vs restore/state ordering.

## Investigation Plan

1. Trace `auto_compaction_*` payloads from origin (`src/channels/web/agent-events.ts`) to SSE and `/agent/status`.
2. Confirm whether persisted/restored compaction status entries ever arrive without `title`.
3. Add a targeted fallback path that is scoped to compaction intent status, while preserving explicit title semantics when available.
4. Validate with focused tests and local reproduction via logs/UI refresh.

### Parallel investigation: `pi-agentic-compaction`

- `npm` discovery confirmed package exists at `pi-agentic-compaction@0.3.0`.
- It is an extension with hook `session_before_compact` and primarily emits `ctx.ui.notify(...)` progress/warning messages.
- Current PiClaw integration point likely needs an adapter if we want these notifications to map into web `agent_status` intent/timing UX instead of generic client notifications.
- Full source unpack reviewed and archived under `/tmp/pi-agentic-compaction-0.3.0/package/index.ts` for follow-up design decisions.



## Updates

### 2026-03-16
- Ticket created from user report: compaction warning can render empty briefly.
- Began active work by prioritizing frontend fallback safety and status-shape traceability.
- `piclaw/web/src/components/status.ts` now uses `resolveStatusPanelTitle(...)` from `web/src/ui/status-duration.ts`, which guarantees non-empty intent labels.
- Added regression tests:
  - `piclaw/test/web/status-duration.test.ts` validates title fallback behavior (`compaction` intent and generic intent/status fallbacks).
  - `piclaw/test/channels/web/web-agent-streaming.test.ts` validates that `auto_compaction_start` always emits an intent payload with non-empty title (`Compacting context`).
- Executed targeted test run: `bun test --max-concurrency=1 test/web/status-duration.test.ts test/channels/web/web-agent-streaming.test.ts` (all passing).

## Links

- `piclaw/src/channels/web/agent-events.ts`
- `piclaw/src/channels/web/agent-status-store.ts`
- `piclaw/src/channels/web/agent-status.ts`
- `piclaw/web/src/components/status.ts`
- `piclaw/web/src/ui/status-duration.js`
- `piclaw/test/web/status-duration.test.ts`
- `piclaw/test/channels/web/web-agent-streaming.test.ts`
- `workitems/00-inbox/incorporate-pi-agentic-compaction.md`
