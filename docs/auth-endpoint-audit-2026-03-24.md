# HTTP Endpoint Authentication Audit

**Date:** 2026-03-24  
**Scope:** All HTTP endpoints in `runtime/src/channels/web/`  
**Auth system:** TOTP / WebAuthn session cookies, with optional internal-secret header for IPC

---

## Architecture Summary

The auth pipeline executes in `request-router-service.ts → route()`:

```
1. /api/remote/* → short-circuit to RemoteInteropService (own Ed25519 auth)
2. getRouteFlags() → classify request
3. enforceRequestGuards() → auth check, rate limiting, CSRF
4. Route to handler chain (auth → shell → content → workspace → agent → media → extensions → 404)
```

WebSocket upgrades (`/terminal/ws`, `/vnc/ws`) are intercepted **before** the router in `handleFetch()` and perform their own auth checks inline.

---

## Endpoint Inventory

### ✅ Unauthenticated by design (auth bypass list in `shouldSkipAuthCheck`)

| Path | Method | Purpose | Rationale |
|---|---|---|---|
| `/login` | GET | Login page | Must be accessible to log in |
| `/auth/verify` | POST | TOTP verification | Login flow (rate-limited) |
| `/auth/webauthn/login/start` | POST | Passkey login start | Login flow (rate-limited) |
| `/auth/webauthn/login/finish` | POST | Passkey login finish | Login flow (rate-limited) |
| `/auth/webauthn/register/start` | POST | Passkey registration | Enrollment flow (rate-limited) |
| `/auth/webauthn/register/finish` | POST | Passkey registration | Enrollment flow (rate-limited) |
| `/auth/webauthn/enrol` | GET | Enrollment page | Enrollment flow (rate-limited) |
| `/manifest.json` | GET | PWA manifest | Needed for Add to Home Screen |
| `/favicon.ico` | GET | Favicon | Browser auto-request |
| `/apple-touch-icon*.png` | GET | iOS icons | Browser auto-request |
| `/avatar/agent` | GET | Agent avatar | Shown on login page |
| `/static/fonts/*` | GET | Web fonts | Needed for login page styling |
| `/static/dist/login.bundle.*` | GET | Login page JS/CSS | Login page assets |
| `/static/**/*.{png,ico,svg,jpg,...}` | GET | Static images | Icons/branding on login page |
| `/internal/post` | POST | IPC message injection | Internal-secret gated (separate check) |
| `/post/:id` | PATCH | IPC post update | Internal-secret gated (separate check) |

### ✅ Authenticated — standard session auth required

All of these run **after** `enforceRequestGuards()` which returns 401 for unauthenticated requests:

| Path | Method | Purpose |
|---|---|---|
| `/` | GET | Main app shell (index.html) |
| `/timeline` | GET | Chat timeline |
| `/search` | GET | Full-text search |
| `/hashtag/:tag` | GET | Hashtag search |
| `/post` | POST | Submit user message |
| `/post/reply` | POST | Submit reply |
| `/post/:id` | PATCH | Edit post (also internal-secret) |
| `/post/:id` | DELETE | Delete post |
| `/thread/:id` | GET | Thread view |
| `/sse/stream` | GET | Server-sent events |
| `/terminal/session` | GET | Terminal session info |
| `/vnc/session` | GET | VNC session info |
| `/ghostty-vt.wasm` | GET | Terminal WASM binary |
| `/static/*` (non-public) | GET | App bundle, CSS, JS |
| `/docs/*` | GET | Documentation assets |
| `/avatar/user` | GET | User avatar |
| `/workspace/tree` | GET | File tree |
| `/workspace/file` | GET | File content |
| `/workspace/branch` | GET | Git branch |
| `/workspace/raw` | GET | Raw file download |
| `/workspace/download` | GET | File download |
| `/workspace/file` | PUT | Update file |
| `/workspace/file` | DELETE | Delete file |
| `/workspace/file` | POST | Create file |
| `/workspace/attach` | POST | Attach file |
| `/workspace/upload` | POST | Upload file |
| `/workspace/rename` | POST | Rename file |
| `/workspace/move` | POST | Move file |
| `/workspace/visibility` | POST | Toggle visibility |
| `/agent/thought` | GET | Thought panel content |
| `/agent/thought/visibility` | POST | Toggle thought visibility |
| `/agent/:id/message` | POST | Send agent message |
| `/agent/roster` | GET | Agent list |
| `/agent/status` | GET | Agent status |
| `/agent/context` | GET | Agent context |
| `/agent/queue-state` | GET | Queue state |
| `/agent/queue-remove` | POST | Remove from queue |
| `/agent/queue-steer` | POST | Steer agent |
| `/agent/models` | GET | Available models |
| `/agent/active-chats` | GET | Active chats |
| `/agent/branches` | GET | Chat branches |
| `/agent/branch-fork` | POST | Fork branch |
| `/agent/branch-rename` | POST | Rename branch |
| `/agent/branch-prune` | POST | Prune branch |
| `/agent/branch-restore` | POST | Restore branch |
| `/agent/peer-message` | POST | Remote peer message |
| `/agent/respond` | POST | Respond to card/prompt |
| `/agent/card-action` | POST | Adaptive card action |
| `/agent/side-prompt` | POST | Side prompt |
| `/agent/side-prompt/stream` | POST | Streaming side prompt |
| `/media/upload` | POST | Media upload |
| `/media/:id` | GET | Media download |
| `/media/:id/thumbnail` | GET | Media thumbnail |
| `/media/:id/info` | GET | Media info |
| `/api/extension-routes` | GET | List extension routes |
| `/office-viewer/*` | GET | Office document viewer |
| `/drawio-editor/*` | GET | Draw.io editor |
| `/editor/*` | GET | Code editor |
| `/csv-viewer/*` | GET | CSV viewer |
| `/image-viewer/*` | GET | Image viewer |
| `/video-viewer/*` | GET | Video viewer |
| `/pdf-viewer/*` | GET | PDF viewer |

### ✅ WebSocket — auth checked inline before upgrade

| Path | Auth check | CSRF check | Notes |
|---|---|---|---|
| `/terminal/ws` | ✅ `isAuthenticated(req)` | ✅ `checkCsrfOrigin(req)` | Also requires `WEB_TERMINAL_ENABLED` |
| `/vnc/ws` | ✅ `isAuthenticated(req)` | ✅ `checkCsrfOrigin(req)` | Also validates target ID |

### ✅ Remote interop — own auth scheme (bypasses web session auth)

| Path | Method | Auth |
|---|---|---|
| `/api/remote/pair-request` | POST | Pairing flow (challenge/response) |
| `/api/remote/pair-confirm` | POST | Pairing flow (signature verified) |
| `/api/remote/revoke` | POST | Ed25519 signed request |
| `/api/remote/ping` | GET | Ed25519 signed request |
| `/api/remote/proposal` | POST | Ed25519 signed request |
| `/api/remote/execute` | POST | Ed25519 signed request |

Disabled entirely when `REMOTE_INTEROP_ENABLED` is false (returns 404).

---

## Additional Security Controls

| Control | Status |
|---|---|
| **CSRF origin check** | ✅ All POST/PUT/DELETE/PATCH (except auth + internal-secret endpoints) |
| **Rate limiting — auth** | ✅ `/auth/verify`, WebAuthn login, WebAuthn enrol |
| **Rate limiting — data** | ✅ POST/PUT/DELETE on data endpoints (posts, uploads, deletes, workspace writes) |
| **Security headers** | ✅ CSP, X-Frame-Options, X-Content-Type-Options on all responses |
| **Internal secret** | ✅ `/internal/post` and `PATCH /post/:id` require `X-Internal-Secret` header |
| **Path traversal** | ✅ Extension routes sanitize paths; workspace handlers validate against workspace root |

---

## Findings

### ✅ No issues found

All endpoints are properly gated:

1. **Auth pipeline is centralized** — `enforceRequestGuards()` runs before any handler dispatch. There is no way to reach a handler without passing through the auth check (unless explicitly listed in `shouldSkipAuthCheck`).

2. **WebSocket upgrades perform their own auth** — Both `/terminal/ws` and `/vnc/ws` check `isAuthenticated()` and `checkCsrfOrigin()` before upgrading.

3. **Remote interop bypasses web auth correctly** — It has its own Ed25519 signature-based authentication and is disabled by default.

4. **Public static paths are minimal** — Only fonts, login bundle, and static images. The main `app.bundle.js` is NOT public.

5. **Extension routes run after auth** — All extension-registered routes (`/office-viewer/*`, `/drawio-editor/*`, etc.) are dispatched after `enforceRequestGuards()`.

6. **Internal-secret endpoints have their own guard** — `/internal/post` and `PATCH /post/:id` check `X-Internal-Secret` independently of session auth.

### ⚠️ Observations (not vulnerabilities, but worth noting)

1. **`/avatar/agent` is public** — Intentional (shown on login page), but means the agent avatar is visible to unauthenticated users. Low risk.

2. **`/manifest.json` is public** — Exposes the app name and icon URLs. Standard PWA behavior. Low risk.

3. **Static images under `/static/` are public** — Any `.png/.ico/.svg/.jpg` etc. under `/static/` is served without auth. This is for login page branding. Ensure no sensitive images are placed there.

4. **Remote interop is a separate trust domain** — `/api/remote/*` bypasses web auth entirely. This is by design (peer-to-peer signed requests), but misconfigured peer keys could allow unauthorized access to the remote API. Mitigated by `REMOTE_INTEROP_ENABLED` defaulting to false.

---

## Verdict: **PASS** ✅

All HTTP endpoints are correctly gated behind authentication when enabled. The auth bypass list is minimal and justified. No unprotected data or mutation endpoints were found.
