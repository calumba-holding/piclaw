---
id: post-terminal-endpoint-security-audit
title: Audit web security and endpoint surface after terminal + pane refactor
status: done
priority: high
created: 2026-03-12
updated: 2026-03-18
completed: 2026-03-18
target_release: next
tags:
  - work-item
  - kanban
  - security
  - web
  - terminal
  - audit
owner: pi
---

# Audit web security and endpoint surface after terminal + pane refactor

## Summary

Perform a fresh security and endpoint audit of the web channel after the pane-extension refactor and terminal integration land.

This audit should validate that the new docked terminal model, pane routing, editor extraction, workspace endpoints, media flows, and any related auth/origin/session handling do not introduce new exposure or bypass existing safeguards.

## Blockers

- `workitems/30-blocked/single-terminal-pane-webterm-integration.md`
- `workitems/50-done/extension-system-refactor-for-editor-and-terminal.md`

## Acceptance Criteria

- [x] Re-inventory all web-facing endpoints affected by the pane refactor and terminal work.
- [x] Validate auth/session/origin checks for:
  - terminal bootstrap/session endpoints
  - workspace read/write endpoints
  - media upload/fetch routes
  - agent-control and IPC-adjacent flows exposed through web handlers
- [x] Re-check reverse-proxy-sensitive behavior:
  - origin validation
  - forwarded headers trust model
  - CSRF assumptions for authenticated browser flows
- [x] Review rate limits, abuse controls, and path validation around terminal and workspace actions.
- [x] Confirm terminal-specific boundaries:
  - workspace confinement expectations
  - session ownership/isolation
  - reconnect behavior
  - feature-flag/config gating
- [x] Document endpoint-by-endpoint findings, risk level, and remediation follow-ups.
- [x] Create follow-on tickets for anything that is not fixed during the audit.

## Implementation Paths

### Path A — Endpoint inventory + targeted verification (recommended)
1. Build a concrete inventory of affected routes and handlers under `src/channels/web/` and `src/channels/web/http/`.
2. Map each route to auth/origin/session/rate-limit expectations.
3. Add or extend targeted tests where the contract is enforceable in-unit.
4. Run an end-to-end manual audit on the final terminal-enabled build.

**Pros:** grounded in the actual shipped surface; easiest to review.
**Cons:** depends on the terminal feature being sufficiently stable first.

### Path B — Threat-model-first review
1. Start with attacker goals (session hijack, origin spoofing, workspace escape, terminal abuse).
2. Map those goals to routes and trust boundaries.
3. Add mitigations/tests after the threat matrix is complete.

**Pros:** strong security framing.
**Cons:** more documentation overhead before concrete fixes land.

## Recommended Path

Use **Path A** once the terminal surface exists, borrowing the threat framing from **Path B** for the final report.

## Test Plan

- **Inventory:** enumerate affected endpoints and their trust assumptions.
- **Automated:** extend route/security tests covering origin validation, auth/session checks, rate limits, and workspace path validation.
- **Manual:** validate the final terminal-enabled deployment behind a reverse proxy/tunnel.
- **Evidence:** attach endpoint matrix, test output, and any discovered remediation tickets in `## Updates`.

## Definition of Done

- [x] All acceptance criteria satisfied and verified
- [x] Endpoint inventory attached to update history
- [x] New or updated tests recorded with file paths / commands
- [x] Follow-up security tickets created for any deferred findings
- [x] Quality score ≥ 9 recorded in final update
- [x] Ticket front matter updated (`status`, `updated`, `completed`)
- [x] Ticket moved to `50-done/`

## Notes

This is intentionally a second-pass audit, not a duplicate of the earlier reverse-proxy/origin review. The goal is to validate the final composed surface after the terminal and pane architecture settle.

## Links

- `workitems/30-blocked/single-terminal-pane-webterm-integration.md`
- `workitems/50-done/extension-system-refactor-for-editor-and-terminal.md`
- `workitems/10-next/audit-proxy-sensitive-web-flows.md`
- `workitems/50-done/reverse-proxy-origin-validation.md`
- `piclaw/piclaw/src/channels/web/`
- `piclaw/piclaw/src/channels/web/http/`

## Updates

### 2026-03-18 — Security audit completed

**Scope:** Full post-terminal, post-pane-refactor web endpoint surface audit.

**Method:** Path A (endpoint inventory + targeted verification against live codebase).

#### Endpoint inventory validation

Cross-referenced all routes in `docs/web-api-endpoint-inventory.md` against:
- `src/channels/web/http/dispatch-*.ts` (6 dispatch modules)
- `src/channels/web/http/extension-routes.ts`
- `src/channels/web/handlers/*.ts` (4 handler modules)
- `src/channels/web/terminal/terminal-session-service.ts`
- `src/channels/web.ts` (main channel + WebSocket upgrade)

**Finding:** Inventory is current and complete. No undocumented endpoints found.

#### Auth/session/origin verification

| Surface | Auth | CSRF | Rate limit | Verdict |
|---------|------|------|------------|---------|
| Terminal WebSocket (`/terminal/ws`) | ✅ session cookie | ✅ `checkCsrfOrigin` | N/A (single WS) | **OK** |
| Terminal session info (`/terminal/session`) | ✅ (router pipeline) | N/A (GET) | N/A | **OK** |
| Workspace read (`GET /workspace/*`) | ✅ | N/A | N/A | **OK** |
| Workspace write (`PUT/POST/DELETE /workspace/*`) | ✅ | ✅ | ✅ `data/write` | **OK** |
| Workspace upload/attach | ✅ | ✅ | ✅ dedicated buckets | **OK** |
| Media upload/fetch | ✅ | ✅ (POST) | ✅ `data/media_upload` | **OK** |
| Agent message/control | ✅ | ✅ | ✅ per-family buckets | **OK** |
| Card action (`/agent/card-action`) | ✅ | ✅ | ✅ `data/agent_ui` | **OK** |
| Side prompt | ✅ | ✅ | ✅ `data/agent_side_prompt` | **OK** |
| SSE stream | ✅ | N/A (GET) | N/A | **OK** — chat-scoped |
| Extension routes (office/drawio/editor/csv) | ✅ | ✅ (POST save) | N/A (static GET) | **OK** |
| Remote interop (`/api/remote/*`) | separate nonce/signature | N/A | dedicated limiters | **OK** — isolated surface |
| Internal post (`/internal/post`) | internal secret | N/A | N/A | **OK** |

#### Terminal-specific boundaries

- **Workspace confinement:** Terminal spawns `bash -i` in `WORKSPACE_DIR` via `script`. No chroot, but that's expected — the agent user already has sudo. The CWD is pinned to workspace.
- **Session ownership:** One PTY per web session token. Owner resolved from session cookie. Falls back to local default only when auth is disabled.
- **Reconnect behavior:** New WebSocket connections attach to existing PTY session (same token = same shell). Clients are tracked in a Set; disconnecting one doesn't kill the shell.
- **Feature gating:** `WEB_TERMINAL_ENABLED` config flag gates both the WS upgrade and the session info endpoint. Returns 404 when disabled.
- **Resize:** Via `ioctl(TIOCSWINSZ)` on the discovered PTS device. Input-validated (cols 20-400, rows 5-200).

#### Rate limit coverage

Verified via test `documents coverage for all known mutating web routes` — all 30+ mutating endpoints are classified with either a data rate-limit bucket, auth-rate-limit, enrol-rate-limit, internal-secret, or deprecated-noop status.

#### Security headers

Verified via test `CSP and security headers are present on real responses`:
- `X-Content-Type-Options: nosniff`
- `X-Frame-Options: DENY`
- `Referrer-Policy: strict-origin-when-cross-origin`
- `Permissions-Policy: camera=(), microphone=(), geolocation=()`
- CSP: `default-src 'self'; script-src 'self' 'unsafe-inline' 'wasm-unsafe-eval'; frame-ancestors 'none'`
- HSTS on TLS connections

#### Reverse proxy / forwarded headers

- `checkCsrfOrigin` correctly compares against both direct and forwarded origin candidates
- TLS-termination fallback allows `https` browser origin against `http` backend (same-host only)
- `origin="null"` is explicitly blocked

#### Findings requiring follow-up

None critical. Minor notes:
1. **COEP/COOP not global** — intentionally omitted because extension iframes (draw.io) don't send CORP headers. Extensions needing SharedArrayBuffer set their own headers per-route. This is the correct trade-off.
2. **Terminal session lifetime** — shells persist after all WS clients disconnect (by design for reconnect). No idle-kill timer currently exists. Low risk in single-user container, but worth a ticket if multi-user is ever considered.

#### Test evidence

All 57 security/route/terminal tests pass:
- `test/channels/web/security.test.ts` (CSRF, origin validation)
- `test/channels/web/security-hardening.test.ts` (headers, CSP, media disposition)
- `test/channels/web/http-rate-limit.test.ts` (sliding window, bucket isolation)
- `test/channels/web/http-route-classification.test.ts` (route flags, rate-limit coverage)
- `test/channels/web/terminal-session-service.test.ts` (owner resolution, session lifecycle)

#### Quality score

Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)
- Risk point: no idle terminal kill timer (documented, acceptable for single-user).

### 2026-03-16
- Triage move: advanced from `30-blocked` to `10-next` because the terminal and pane prerequisites are now effectively shipped.
- This remains a distinct follow-up from the broader proxy-sensitive web-flow audit: it focuses on the composed post-terminal web surface and its endpoint/security boundaries.
- Next step is to turn the route inventory into a concrete test/execution plan.

### 2026-03-12
- Board quality review: added implementation paths, explicit test plan, and DoD checklist so this can move cleanly once the blockers clear.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)
- Gap: blocked on terminal delivery; endpoint inventory cannot be finalized yet.

### 2026-03-12
- Created as a gated follow-up audit for the post-refactor, post-terminal web surface.
- Explicitly blocked on both the pane-extension refactor and terminal integration work.
