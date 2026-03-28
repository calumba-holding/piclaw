---
id: decide-legacy-web-api-compatibility-route-retirement
title: Decide retirement policy for legacy web API compatibility routes
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
  - api
  - compatibility
  - cleanup
owner: pi
---

# Decide retirement policy for legacy web API compatibility routes

## Summary

The API/SSE audit introduced preferred replacement routes for the clearest naming
outliers while keeping the legacy paths working:

- preferred `GET /agent/roster`, legacy `GET /agents`
- preferred `POST /post/reply`, legacy `POST /reply`

This follow-up decides whether those legacy compatibility routes should remain
indefinitely, gain deprecation signalling, or be removed after an explicit
compatibility window.

## Why

The main audit already delivered the safe product-facing cleanup by adding
preferred aliases and switching the web client.

What remains is a product and maintenance policy decision:

- keep compatibility forever
- mark as deprecated but supported
- remove after a documented transition

## Acceptance Criteria

- [x] Decide whether `/agents` and `/reply` are permanent compatibility routes or temporary aliases.
- [x] If temporary, define the deprecation/removal plan.
- [x] Document the policy in API docs/release notes if needed.
- [x] Add warnings/telemetry only if the extra complexity is justified.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- The preferred replacement routes are already landed; this ticket is only about the retirement policy for the legacy paths.
- Decision: remove the legacy compatibility routes instead of keeping aliases.
- Removed legacy routes:
  - `GET /agents`
  - `POST /reply`
- Kept the canonical routes only:
  - `GET /agent/roster`
  - `POST /post/reply`
- Updated dispatch, rate-limit classification, tests, and API docs to match.
- Chose not to add deprecation warnings/telemetry because the aliases were already internal project cleanup paths and the extra churn was not justified.

## Links

- `piclaw/workitems/50-done/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-api-endpoint-inventory.md`
