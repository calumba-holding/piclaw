---
id: smaller-reconnecting-pill-aligned-with-compose-box-buttons
title: Make reconnecting status pill smaller and aligned with compose buttons
status: doing
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

The SSE connection pill (`Reconnecting...` / error text) currently appears oversized relative to compose-box controls. Adjust its size, spacing, and placement so it looks like a compact button-sized status pill and aligns with compose action buttons (preferably on the same visual row/axis).

## Updates

### 2026-03-17
- User request: move ticket to `doing` and start implementation.
- Updated connection status rendering to show inline, compact pill inside compose footer row (replaces previous fixed-bottom placement).
- Implemented status plumbing:
  - moved `connectionStatus` prop into `ComposeBox` (`web/src/components/compose-box.ts`)
  - passed state from app state (`web/src/app.ts`)
  - added compact inline status style in compose controls (`web/src/static/css/styles.css`)
- Status text now uses `Reconnecting...` for disconnected state while keeping reconnect semantics.
- Notes: `ConnectionStatus` component remains in `status.ts`; current change renders status inline directly in compose-footer to satisfy alignment scope.

## Acceptance Criteria

- [ ] Reduce the pill height/width to visually match compose action icon buttons.
- [ ] Align the pill horizontally with compose box controls (same baseline/row area), not floating visually oversized.
- [ ] Preserve status semantics and colors (`connected` / `disconnected` states).
- [ ] Keep text readable while remaining compact.
- [ ] Preserve non-blocking behavior (no input interruption).
- [ ] Validate across desktop + mobile widths.

## Relevant Files

- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/status.ts`
- `piclaw/web/static/css/styles.css`
- `piclaw/web/src/components/compose-box.ts`

## Notes

Current connection label rendering comes from `ConnectionStatus` in `components/status.ts`, while styles are in `.connection-status` in `styles.css`.
