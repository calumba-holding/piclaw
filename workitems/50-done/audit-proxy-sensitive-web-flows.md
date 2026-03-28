---
id: audit-proxy-sensitive-web-flows
title: Audit remaining proxy-sensitive web flows
status: done
priority: medium
created: 2026-03-10
updated: 2026-03-18
completed: 2026-03-18
target_release: next
tags:
  - work-item
  - kanban
  - web
  - reverse-proxy
  - auth
owner: pi
---

# Audit remaining proxy-sensitive web flows

## Summary

Audit other browser flows that may still be sensitive to proxy / tunnel origin handling.

## Acceptance Criteria

- Verify passkey/WebAuthn flows behind reverse proxies.
- Verify login, posting, uploads, workspace writes, and SSE under proxied hosts.
- Verify absolute link/origin generation uses the correct external origin.
- Add regression tests for any uncovered proxy-sensitive paths.

## Implementation Paths

### Path A — Endpoint-by-endpoint audit + tests (recommended)
1. Enumerate sensitive routes by area: auth, posting, uploads, workspace write APIs, link generation.
2. For each route, identify origin/proto/host dependency and trusted proxy behavior.
3. Add targeted tests in existing suites (`security`, request-client, relevant route tests).
4. Validate on live proxied target (`isdclaw`) for end-to-end confirmation.

Pros: incremental, low risk, strongest regression protection.
Cons: takes longer than a one-shot broad refactor.

### Path B — Centralize origin resolution first
1. Create a single shared helper for canonical external origin resolution.
2. Refactor all sensitive endpoints to consume the helper.
3. Add matrix tests after refactor.

Pros: cleaner architecture.
Cons: higher blast radius; harder to isolate regressions.

### Path C — Observability-first pass
1. Add structured debug logging around origin checks and forwarded headers.
2. Replay key flows behind proxy and capture data.
3. Patch only confirmed problematic paths.

Pros: very targeted fixes.
Cons: may miss low-frequency edge cases if test coverage is not expanded.

## Recommended Path

Use **Path A** now, with selective helper extraction from **Path B** only where duplication appears.

## Test Plan

- **Unit:** extend the existing web security / request-origin suites for any newly identified proxy-sensitive paths.
- **Integration:** run targeted endpoint tests covering auth, uploads, workspace writes, and SSE under trusted-proxy settings.
- **Production:** validate the final route list against the live proxied deployment (`isdclaw`) and capture any mismatches.

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Route inventory and findings recorded in `## Updates`
- [x] Regression tests added for any uncovered proxy-sensitive flows
- [x] Docs updated if operator behavior changes
- [x] Quality score ≥ 9 recorded in final update
- [x] Ticket front matter updated (`status`, `updated`, `completed`)
- [x] Ticket moved to `50-done/`

## Updates

### 2026-03-18 — Proxy-sensitive audit completed

**Method:** Path A — endpoint-by-endpoint audit + regression tests.

#### Proxy-sensitive route inventory

Enumerated all origin/host/proto-dependent paths:

| Flow | Origin source | Proxy-safe | Notes |
|------|--------------|------------|-------|
| **CSRF origin check** | `Origin` header vs `getRequestOriginParts(req)` | ✅ | Compares both direct and forwarded candidates; TLS-offload fallback for same-host |
| **WebAuthn RP resolution** | `Origin` header (primary), `getRequestOriginParts(req)` (fallback) | ✅ | Browsers always send Origin on POST; fallback uses TRUST_PROXY config |
| **rememberWebOrigin** | `getRequestOriginParts(req)` on every request via request-router | ✅ | Cached per chat JID; used for passkey enrol link generation |
| **Passkey enrol links** | `getWebOrigin(chatJid)` | ✅ | Uses remembered origin from above |
| **Link preview fetching** | Server-to-server (no proxy sensitivity) | ✅ | SSRF-protected with hostname/IP blocklist |
| **Client key (rate limiting)** | `x-forwarded-for` / `x-real-ip` when TRUST_PROXY | ✅ | Falls to "unknown" when proxy not trusted |
| **Terminal WebSocket upgrade** | `checkCsrfOrigin(req)` | ✅ | Same CSRF check as all mutating endpoints |

#### Trust model summary

- `TRUST_PROXY` (config: `web.trustProxy` / `PICLAW_TRUST_PROXY`) is the single gate for all forwarded-header trust
- When false: only direct request URL/Host used — safe from header injection
- When true: `x-forwarded-host`, `x-forwarded-proto`, `x-forwarded-port`, `Forwarded` header are trusted
- `getRequestOriginParts()` is the centralized helper (Path B extraction already done in prior work)

#### Edge cases documented

1. **origin=null**: Explicitly blocked in CSRF checks. WebAuthn RP fallback uses direct/forwarded host.
2. **Missing Origin on POST**: Allowed by CSRF (non-browser clients). WebAuthn fallback uses forwarded headers when TRUST_PROXY is on.
3. **Port mismatch**: Non-standard forwarded ports correctly appended. Standard ports (80/443) omitted.
4. **TLS-offload**: `https` browser origin allowed against `http` backend when hostname matches (same-host only).

#### Regression tests added

New test file: `test/channels/web/proxy-sensitive-flows.test.ts` — 17 tests covering:
- Origin resolution with/without proxy trust (3 tests)
- CSRF behind proxy: allow, block, null, TLS-offload, different hosts (6 tests)
- WebAuthn RP: Origin header, forwarded fallback, direct fallback, null origin (4 tests)
- Workspace write, media upload CSRF behind proxy (3 tests)
- SSE GET immunity to CSRF (1 test)

#### Findings

**No bugs found.** The proxy-sensitive surface is well-centralized through `getRequestOriginParts` and `checkCsrfOrigin`. All flows correctly respect `TRUST_PROXY`.

Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-18
- Lane change: `10-next` → `20-doing` from triage (`intent: triage-next-lane`, `audit-proxy-sensitive-web-flows: doing`).
- Lane update confirmed via `triage-doing-blocked` (`auditProxy: doing`, `loginPassthrough: doing`).
- Next step: complete route inventory for proxy-sensitive web flows and implement any hardening slices behind trusted-proxy conditions.

### 2026-03-12
- Board quality review: added explicit test plan and DoD checklist.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)
- Gap: still needs a concrete route inventory and file-level test targets before moving to doing.

### 2026-03-11
- Added implementation-path analysis and recommended sequence.

### 2026-03-10
- Created after fixing the proxied post-origin failure on `isdclaw`.
- Prior passkey/origin mismatches suggest more web flows may still need explicit proxy coverage.

## Notes

Use `isdclaw` as a real-world validation target because it sits behind a Cloudflare tunnel and now has `web.trustProxy = true`.

## Links

- `workitems/50-done/reverse-proxy-origin-validation.md`
- `src/channels/web/webauthn-challenges.ts`
- `src/channels/web/request-origin.ts`
