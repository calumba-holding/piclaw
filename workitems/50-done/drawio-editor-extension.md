---
id: drawio-editor-extension
title: Self-hosted draw.io editor extension
status: done
created: 2026-03-16
updated: 2026-03-17
completed: 2026-03-17
tags:
  - work-item
  - kanban
  - extensions
  - web
  - editor
owner: pi
---

# Self-hosted draw.io editor extension

## Summary

Integrate draw.io as a self-hosted diagram editor extension using the extension route system. The draw.io webapp is vendored from the official GitHub release (WAR file), served via `registerRoute("/drawio", ...)`, and integrated into the web UI pane system for `.drawio` files.

## Architecture

- **Vendor script**: `scripts/vendor-drawio.ts` downloads draw.io WAR from GitHub releases, extracts minimal webapp files (~35MB) to `extensions/drawio-editor/vendor/`
- **Extension**: `extensions/drawio-editor/index.ts` registers `/drawio/*` HTTP route, serves the wrapper page and vendored assets
- **Wrapper page**: `/drawio/edit?path=...` embeds draw.io in an iframe using the [embed mode postMessage protocol](https://www.drawio.com/doc/faq/embed-mode)
- **Load/Save**: Wrapper fetches diagram XML from `GET /workspace/raw?path=...`, saves via `PUT /workspace/file` with `{ path, content }`
- **Web UI pane**: `web/src/panes/drawio-pane.ts` handles `.drawio` files in the workspace browser with preview card + tab embedding
- **LLM tool**: `open_drawio_editor` tool registered for the agent to open diagrams

## Security

- Global COOP/COEP headers removed from `security.ts` (scoped to extensions that need SharedArrayBuffer like office-viewer)
- CSP `frame-src 'self'` allows same-origin iframe embedding
- Extension sets `X-Frame-Options: SAMEORIGIN` (overrides global `DENY`)
- Draw.io can't phone home (HTTP CSP `connect-src: 'self'` is stricter than draw.io's meta CSP)
- Google Fonts blocked — falls back to system fonts

## Acceptance Criteria

- [x] Draw.io vendored from official release (~35MB extracted)
- [x] Extension route registered at `/drawio/*`
- [x] Wrapper page loads and embeds draw.io in embed mode
- [x] Load/save via workspace file API
- [x] Web UI pane handles `.drawio` files
- [x] LLM tool `open_drawio_editor` available
- [x] Security headers properly scoped
- [ ] End-to-end test: create diagram, save, reload, verify persistence
- [ ] Verify draw.io editor loads correctly in browser

## Updates

### 2026-03-17
- Lane change: `review` → `done` via triage submission (`action: triage_radio_apply`, `drawio_editor_extension_decision: done`).
- File moved from `workitems/40-review/` to `workitems/50-done/`.
- Noted remaining unchecked acceptance items (end-to-end persistence verification) as follow-up validation work outside this closure.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

## Notes

- Draw.io version: v29.6.1
- Vendor files are gitignored (~35MB); reproduced via `bun run build:vendor:drawio`
- The draw.io WAR is cached in `generated/cache/vendor/drawio/v29.6.1/`

## Links

- draw.io embed mode: https://www.drawio.com/doc/faq/embed-mode
- postMessage protocol: https://github.com/jgraph/drawio-integration
