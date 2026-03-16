---
id: drawio-pdf-export
title: Enable local PDF export from the draw.io editor
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - drawio
  - export
  - pdf
owner: pi
---

# Enable local PDF export from the draw.io editor

## Summary

The vendored draw.io build currently routes PDF export through `EXPORT_URL`
(an external draw.io server endpoint), which means File → Export as PDF
either silently fails or attempts an external network call.

SVG, PNG, and XML exports already work locally via the `workspace-export`
postMessage interception and `POST /drawio/save`. PDF needs the same
local save path.

## Problem

Draw.io's client-side PDF generation depends on a server-side export
service (`EXPORT_URL`). The self-hosted vendored build has no such
service running, so PDF export is effectively broken.

## Acceptance Criteria

- [ ] File → Export as PDF saves the PDF to the workspace, same as SVG/PNG/XML.
- [ ] No external network call to draw.io servers.
- [ ] The export uses client-side PDF generation (e.g. jsPDF or the draw.io
      built-in PDF path if available without EXPORT_URL).
- [ ] The saved PDF is a valid, openable PDF document.
- [ ] If client-side PDF is not feasible, document why and propose an
      alternative (e.g. server-side SVG→PDF conversion).

## Investigation Notes

- Draw.io's built-in PDF export path appears to require the external
  `EXPORT_URL` endpoint for rendering.
- Possible alternatives:
  - Intercept the SVG output and convert to PDF client-side via jsPDF + svg2pdf.js
  - Convert server-side using a headless renderer if one is available in the container
  - Patch the draw.io export dialog to disable the PDF option with a clear message
- The `workspace-export` interception already handles `saveData` and
  `exportFile` — PDF may need a different hook if draw.io routes it
  through a separate code path.

## Links

- `kanban/40-review/drawio-editor-extension.md`
- `piclaw/extensions/drawio-editor/index.ts`
- `piclaw/web/src/panes/drawio-pane.ts`
