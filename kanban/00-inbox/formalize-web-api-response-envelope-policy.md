---
id: formalize-web-api-response-envelope-policy
title: Formalize web API response envelope policy
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: later
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - web
  - api
  - response-format
  - consistency
owner: pi
---

# Formalize web API response envelope policy

## Summary

The API/SSE audit established an emerging response-shape policy and landed
shared helpers plus several compatibility-safe conversions.

This follow-up turns that emerging practice into a deliberate policy for the
remaining endpoint families.

## Current state

The current direction is now:

- simple UI/control mutations → `{ status: "ok", ... }`
- compatibility mutations with older callers → `{ status: "ok", ok: true, ... }`
- richer workflow/resource-creating mutations → richer payloads, ideally also
  carrying `status: "ok"` when compatibility allows
- read endpoints → direct JSON resources, not wrapped success envelopes

## Why

The main audit has already gone far enough to prove the direction, but not far
enough to claim every endpoint family is fully standardised.

This is now a bounded design/cleanup task rather than a broad exploratory audit.

## Acceptance Criteria

- [ ] Define the target response policy per endpoint family.
- [ ] Identify which remaining routes should change versus stay as-is.
- [ ] Document the policy in the API docs.
- [ ] Land any additional compatibility-safe conversions that are still worth doing.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- Shared helpers (`okJson`, `errorJson`) and several representative conversions are already landed.

## Links

- `piclaw/kanban/40-review/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-api-endpoint-inventory.md`
