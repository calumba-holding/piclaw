---
id: multi-agent-ux-mobile-chat-switching
title: Design multi-agent chat switching UX that works on mobile webapp and desktop
status: done
priority: high
created: 2026-03-17
updated: 2026-03-18
completed: 2026-03-18
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - mobile
  - multi-agent
  - navigation
owner: pi
---

# Design multi-agent chat switching UX that works on mobile webapp and desktop

## Summary

Design and validate a chat-switching experience for multi-agent workflows that is fast, clear, and ergonomic on both small mobile screens and the desktop web UI.

The solution should preserve current timeline/compose performance, avoid accidental context switches, and make active-agent context obvious at all times.

## Acceptance Criteria

- [ ] Users can switch between chats/agents in <=2 taps on mobile and <=1 click on desktop from the main chat view.
- [ ] Active chat/agent identity is always visible in the header and compose context.
- [ ] Unread/activity indicators are visible in the switcher list.
- [ ] Search/filter is available when chat count grows.
- [ ] Switching does not block compose input or lose unsent draft text.
- [ ] Works across responsive breakpoints and safe-area insets (iOS/Android).
- [ ] Keyboard navigation works on desktop.

## Implementation Paths

### Path A — Unified chat switcher sheet/drawer (recommended)
- Mobile: slide-up bottom sheet with chat list + search.
- Desktop: left drawer/panel or popover using the same data model.
- Reuse existing chat metadata/events for status/unread counts.

### Path B — Header dropdown + optional full list page
- Compact header dropdown for recent chats.
- "View all chats" page for large histories.
- Lower initial complexity, but adds navigation hops on mobile.

## Test Plan

- [ ] Responsive Playwright checks for mobile + desktop switching flows.
- [ ] Verify draft preservation when switching chats.
- [ ] Verify unread badge/state updates in real-time.
- [ ] Verify no regressions in queue/recovery behavior when switching during active runs.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` once implementation starts.

## Updates

### 2026-03-17
- Created from request: "multi-agent UX for mobile (design a way to switch between multiple chats that works on mobile/webapp)".
- Kept in inbox pending refinement and interaction mockups.

## Notes

- Keep behavior consistent with existing workspace header/menu patterns.
- Avoid introducing full-screen blockers while preserving quick access.
- Consider future support for pinned chats and recents.

## Links

- `piclaw/web/src/app.ts`
- `piclaw/web/src/components/header.ts`
- `piclaw/web/src/components/workspace-explorer.ts`
- `piclaw/web/src/api.ts`
