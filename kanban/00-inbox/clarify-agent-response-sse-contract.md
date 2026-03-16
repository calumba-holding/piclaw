---
id: clarify-agent-response-sse-contract
title: Clarify or split the broad agent_response SSE contract
status: inbox
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

- [ ] Confirm whether the current broad `agent_response` contract is acceptable.
- [ ] If not, define a compatibility-preserving split/migration path.
- [ ] Update docs/tests to match the chosen direction.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- The main audit documented the issue but deliberately did not force a rename-only churn pass.

## Links

- `piclaw/kanban/40-review/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-sse-inventory.md`
