---
id: webapp-title-bar-color-does-not-update-on-ios
title: Web app title bar color does not update on iOS
status: done
priority: medium
created: 2026-03-17
updated: 2026-03-22
completed: 2026-03-22
tags:
  - work-item
  - kanban
  - web
  - ios
  - pwa
  - theming
owner: pi
---

# Web app title bar color does not update on iOS

## Summary

On iOS Safari / standalone PWA, the web app title/status bar color does not reliably update when the theme changes.

Likely root cause is platform behavior/limitation: iOS only partially honors dynamic `theme-color` updates, especially in standalone mode.

## Acceptance Criteria

- [ ] Ensure both light and dark `theme-color` meta tags exist.
- [ ] Ensure `apple-mobile-web-app-status-bar-style` is set for installed mode.
- [ ] Ensure runtime updates of `meta[name="theme-color"]` occur on theme switch.
- [ ] Document iOS behavior as best-effort (may require reload/relaunch to repaint).
- [ ] Verify behavior on iOS Safari tab mode and iOS standalone PWA mode.

## Implementation Paths Considered (historical)

- The most realistic path here is compatibility hardening plus documentation of iOS limits, not perfect cross-mode runtime parity.
- If this regresses in a measurable new way, reopen with device/version evidence rather than continuing this ticket speculatively.

## Updates

### 2026-03-22
- Lane change: `40-review` → `50-done` by user direction.
- Closed as accepted best-effort/platform-limited behavior for now rather than continuing speculative churn around iOS browser chrome repaint behavior.
- Remaining expectation is explicitly best-effort: preserve the relevant meta tags/runtime updates where possible, but do not block release work on imperfect standalone/tab repaint behavior on iOS.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-17
- Captured from BTW side-conversation outcome.
- Assessment: ticket is valid, but expected fix is primarily a compatibility hardening pass and documentation of iOS limitations.

## Notes

- iOS support for dynamic browser chrome coloring is inconsistent across versions and mode (tab vs standalone).
- Success criteria should be “best available behavior” rather than strict parity with desktop/Android.

## Links

- `piclaw/web/static/index.html`
- `piclaw/web/src/ui/theme.ts`
- Apple meta tags: `theme-color`, `apple-mobile-web-app-status-bar-style`
