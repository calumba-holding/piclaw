---
id: clarify-agent-response-sse-contract
title: Clarify or split the broad agent_response SSE contract
status: done
priority: low
created: 2026-03-16
updated: 2026-03-16
target_release: later
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - sse
  - api
  - consistency
owner: pi
---

# Clarify or split the broad agent_response SSE contract

## Summary

The SSE audit documented that `agent_response` currently does slightly broader
duty than its name suggests.

It is not a bug, but it is one of the remaining contract-shape questions that
was intentionally left out of the main audit closure path.

## Why

The current event works, but it may eventually be worth deciding whether to:

- keep `agent_response` broad and document it as such, or
- split it into narrower event names if that improves clarity enough to justify
  the migration cost.

## Acceptance Criteria

- [x] Confirm whether the current broad `agent_response` contract is acceptable.
- [x] If not, define a compatibility-preserving split/migration path.
- [x] Update docs/tests to match the chosen direction.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- The main audit documented the issue but deliberately did not force a rename-only churn pass.
- Follow-up conclusion: keep `agent_response` as-is.
- Code audit outcome:
  - multiple server paths emit `agent_response`
  - those paths converge on the same practical payload contract: a persisted assistant interaction row inserted into the timeline
  - the event is broader in origin than in payload shape
- Chosen direction:
  - do not split or rename the event
  - document it more precisely in `piclaw/piclaw/docs/web-sse-inventory.md`
  - extend tests to assert the emitted payloads are interaction-style rows rather than streaming deltas
- No compatibility split/migration path was needed because the audit concluded the current event contract is already coherent enough.

## Links

- `piclaw/kanban/50-done/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-sse-inventory.md`
