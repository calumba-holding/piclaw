---
id: decide-legacy-web-api-compatibility-route-retirement
title: Decide retirement policy for legacy web API compatibility routes
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

- [ ] Decide whether `/agents` and `/reply` are permanent compatibility routes or temporary aliases.
- [ ] If temporary, define the deprecation/removal plan.
- [ ] Document the policy in API docs/release notes if needed.
- [ ] Add warnings/telemetry only if the extra complexity is justified.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- The preferred replacement routes are already landed; this ticket is only about the retirement policy for the legacy paths.

## Links

- `piclaw/kanban/40-review/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-api-endpoint-inventory.md`
