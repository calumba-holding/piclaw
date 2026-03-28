---
id: terminal-hyperlink-and-clipboard-improvements
title: Terminal hyperlink detection and clipboard improvements
status: inbox
priority: medium
created: 2026-03-18
updated: 2026-03-18
target_release: next
tags:
  - work-item
  - kanban
  - terminal
  - ux
owner: pi
---

# Terminal hyperlink detection and clipboard improvements

## Summary

Improve the web terminal experience by adding clickable hyperlink detection (OSC 8 and plain URL regex) and better clipboard integration (copy-on-select, paste via Ctrl+Shift+V or right-click).

## Acceptance Criteria

- [ ] Detect and render clickable hyperlinks in terminal output (OSC 8 escape sequences).
- [ ] Fall back to regex-based URL detection for programs that don't emit OSC 8.
- [ ] Clicking a detected link opens it in a new tab (`target="_blank", rel="noopener"`).
- [ ] Copy-on-select: selecting text in the terminal copies it to the clipboard automatically (or via a small floating copy button).
- [ ] Paste support: Ctrl+Shift+V or right-click paste sends clipboard contents as terminal input.
- [ ] No regressions in existing terminal input/output or resize behavior.

## Implementation Paths

### Path A — Ghostty web terminal addon hooks (recommended)
1. Check if the vendored ghostty-web terminal already supports OSC 8 / link detection natively.
2. If so, wire up the link handler callback to open URLs.
3. If not, add a post-render pass that scans visible lines for URL patterns.
4. Add clipboard integration via the terminal's selection API.

### Path B — Custom overlay layer
1. Add a transparent overlay that tracks terminal text positions.
2. Run URL regex on rendered text and create clickable spans.
3. Handle clipboard via browser Clipboard API.

**Recommended:** Path A — leverage the terminal library's built-in capabilities first.

## Test Plan

- [ ] Manual: verify OSC 8 links render and open correctly (`printf '\e]8;;https://example.com\e\\click me\e]8;;\e\\'`)
- [ ] Manual: verify plain URLs in `curl`, `git`, `ls` output are clickable
- [ ] Manual: verify copy-on-select works across browsers (Chrome, Firefox, Safari)
- [ ] Manual: verify paste via Ctrl+Shift+V
- [ ] Unit: no regressions in terminal session service tests

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Test evidence recorded in Updates
- [ ] Quality score ≥ 7 recorded
- [ ] Ticket moved to `50-done/`

## Updates

### 2026-03-18
- Created ticket for terminal hyperlink and clipboard UX improvements.

## Notes

## Links

- `piclaw/src/channels/web/terminal/terminal-session-service.ts`
- `piclaw/web/src/panes/terminal-pane.ts`
- `piclaw/web/static/js/vendor/ghostty-web.js`
