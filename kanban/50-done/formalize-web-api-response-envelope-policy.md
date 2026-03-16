---
id: formalize-web-api-response-envelope-policy
title: Formalize web API response envelope policy
status: done
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

- [x] Define the target response policy per endpoint family.
- [x] Identify which remaining routes should change versus stay as-is.
- [x] Document the policy in the API docs.
- [x] Land any additional compatibility-safe conversions that are still worth doing.

## Updates

### 2026-03-16
- Created as a follow-up from the API/SSE audit consolidation pass.
- Shared helpers (`okJson`, `errorJson`) and several representative conversions are already landed.
- Extended the shared JSON response helpers so they can carry response headers while preserving the standard JSON content-type default.
- Used that helper extension to normalize auth completion success responses without losing `Set-Cookie` support:
  - `/auth/verify`
  - `/auth/webauthn/login/finish`
  - `/auth/webauthn/register/finish`
- Standardized those auth completion successes on the compatibility envelope:
  - `{ status: "ok", ok: true }`
- Documented endpoint-family policy in `piclaw/piclaw/docs/web-api-endpoint-inventory.md`, including:
  - auth completion endpoints → compatibility success envelope
  - auth bootstrap endpoints → direct `{ token, options }` payloads
  - read endpoints → direct resources
  - simple UI/control mutations → `{ status: "ok", ... }`
  - richer resource-creating mutations → richer payloads, not forced envelopes
- Added regression coverage for header-carrying JSON helpers and the TOTP success envelope.
- `bun run quality` passed.

## Links

- `piclaw/kanban/50-done/api-sse-naming-consistency-security-audit.md`
- `piclaw/piclaw/docs/web-api-endpoint-inventory.md`
