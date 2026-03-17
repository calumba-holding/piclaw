---
id: smaller-reconnecting-pill-aligned-with-compose-box-buttons
title: Make reconnecting status pill smaller and aligned with compose buttons
status: done
created: 2026-03-17
updated: 2026-03-17
target_release: next
estimate: S
risk: low
priority: medium
tags:
  - work-item
  - kanban
  - web-ui
  - connection
  - compose
owner: pi
---

# Make reconnecting status pill smaller and aligned with compose buttons

## Summary

The reconnect/status pill in compose was moved inline earlier and now needs final visual alignment work. This pass reduces its size and adds rounded-pill, button-aligned styling so it visually matches the compose action controls while preserving state semantics.

## Updates

### 2026-03-17
- Adjusted compose inline status styles in `web/src/components/compose-box.ts` by retaining inline placement and status content semantics:
  - `Reconnecting...` for disconnected state
  - compact display only when not connected
- Tuned `.compose-connection-status` in `web/static/css/styles.css` for button-like sizing/alignment:
  - reduced fixed height and horizontal padding
  - smaller border radius/text size
  - pill border treatment to visually match compose action row
- Kept behavior non-blocking and status-only (no input lockout).

## Acceptance Criteria

- [x] Reduce the pill height/width to visually match compose action icon buttons.
- [x] Align the pill horizontally with compose box controls on the same action row.
- [x] Preserve status semantics and colors (`disconnected` semantics and reconnect state text).
- [x] Keep text readable while remaining compact.
- [x] Preserve non-blocking behavior (no compose input interruption).
- [x] Validate across desktop + mobile widths.

## Relevant Files

- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/status.ts`
- `piclaw/web/static/css/styles.css`
- `piclaw/web/src/components/compose-box.ts`
