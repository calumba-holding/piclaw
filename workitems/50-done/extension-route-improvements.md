---
id: extension-route-improvements
title: Use extension route system to improve existing extensions
status: done
created: 2026-03-16
updated: 2026-03-16
tags:
  - work-item
  - kanban
  - extensions
  - web
owner: pi
---

# Use extension route system to improve existing extensions

## Summary

The new `registerRoute()` capability (shipped in `f2bed40`) lets workspace extensions register HTTP routes served by the piclaw process. Currently only `office-viewer` uses it. Several existing extensions and built-in components could benefit from this pattern.

## Candidates

### 1. Editor extension → dynamic vendor serving
**Current**: `extensions/editor/vendor/codemirror.js` (868KB) is bundled at build time into `static/dist/editor.bundle.js`. Changes to CodeMirror require a full rebuild.
**Improvement**: Editor vendor assets are served from `/editor-vendor/*`, and the browser editor bundle imports `codemirror.js` from that route instead of baking it into `static/dist/editor.bundle.js`. Benefits:
- Hot-swap CodeMirror versions without rebuilding the editor bundle
- Extension is more self-contained (vendor + logic + pane)
- Much smaller `static/dist/editor.bundle.js` footprint

### 2. Workspace extensions → custom API endpoints
**Current**: Workspace extensions (`.pi/extensions/`) can only register tools and hook events.
**Improvement**: Extensions that need HTTP APIs (dashboards, webhooks, data endpoints) can now register routes. Example use cases:
- Scheduled task dashboard (`/ext/tasks/`) with HTML UI
- Token usage API (`/ext/token-stats/`) returning JSON
- Health/status endpoint (`/ext/health/`)

### 3. Azure OpenAI extension → proxy route
**Current**: Azure OpenAI extension configures provider endpoints but routing goes through the main API.
**Improvement**: Could register a `/ext/azure-proxy/*` route for direct API pass-through, useful for testing and debugging Azure endpoint connectivity without going through the agent loop.

### 4. File preview extensions → format-specific renderers
**Current**: File previews use the workspace preview pane with basic text/markdown rendering.
**Improvement**: Format-specific preview extensions could register routes to serve custom renderers:
- `/ext/csv-viewer/` — interactive CSV/TSV table viewer
- `/ext/image-viewer/` — gallery view with zoom/pan
- `/ext/pdf-viewer/` — PDF.js based viewer

### 5. Skill web UIs
**Current**: Skills are CLI-only (bash/bun scripts).
**Improvement**: Skills that generate visual output (charts, diagrams) could register routes to serve interactive versions instead of static images.

## Implementation Notes

- Route registration uses `globalThis.__piclaw_registerRoute(prefix, handler, extensionDir)`
- Routes are dispatched after auth but before 404 — all routes are auth-gated
- Extension route handler signature: `(req: Request, pathname: string) => Response | null`
- `clearExtensionRoutes()` available for reload scenarios
- `getRegisteredRoutes()` for debugging/introspection
- COOP/COEP headers scoped per-extension (not global) — office-viewer sets its own, draw.io editor doesn't need them

## Acceptance Criteria

- [x] At least one existing extension migrated to use route system (draw.io editor)
- [x] Document the route registration API for extension authors
- [x] Add route introspection to `/debug` or similar admin endpoint (`GET /api/extension-routes`)

## Progress

- **office-viewer**: Already uses `registerRoute()` — reference implementation ✓
- **drawio-editor**: New extension using `registerRoute("/drawio", ...)` ✓
- **editor vendor route**: `/editor-vendor/*` now serves CodeMirror directly from `extensions/editor/vendor`, and `editor.bundle.js` imports it externally ✓
- **CSV viewer route**: `/csv-viewer/*` now serves a same-origin CSV/TSV table viewer, and the web pane registry routes `.csv`/`.tsv` files to it ✓
- **Route introspection**: `GET /api/extension-routes` returns JSON array of registered routes ✓
- **Route docs**: `docs/extension-routes.md` documents the author-facing API and security expectations ✓
- **Security scoping**: Global COOP/COEP removed, scoped to office-viewer extension. `frame-src 'self'` added to global CSP ✓

## Notes

## Links
- Commit: `f2bed40` (extension route system + office viewer)
- File: `src/channels/web/http/extension-routes.ts`
- Office viewer reference impl: `.pi/extensions/office-viewer/index.ts`
