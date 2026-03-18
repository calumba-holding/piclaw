---
id: pop-out-terminal-or-tab-into-new-window
title: Allow opening the terminal or a given tab in a pop-out window
status: next
priority: medium
created: 2026-03-15
updated: 2026-03-18
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web-ui
  - terminal
  - tabs
  - windows
owner: pi
---

# Allow opening the terminal or a given tab in a pop-out window

## Summary

The web UI should support opening the terminal, or a chosen tab, in a separate
pop-out window.

This would make it easier to keep a terminal visible alongside the main app, or
to temporarily give a specific editor/preview tab its own window without
forcing a full multi-window session model up front.

## Acceptance Criteria

- [ ] V1 supports an explicit way to open the terminal in a separate window.
- [ ] Terminal pop-out preserves enough session/context to be useful immediately after opening.
- [ ] Opening the terminal pop-out does not break the original in-app terminal surface.
- [ ] Closing the pop-out window fails safely and leaves the main app usable.
- [ ] The design works within browser popup restrictions and degraded cases are handled cleanly.
- [ ] Tab pop-out remains tracked as a follow-on extension of the same ticket or a linked follow-up, but is not required for the first implementation slice.

## Implementation Paths

### Path A — terminal-first dedicated pop-out route/window (recommended)
- Add an explicit terminal “open in new window” action first.
- Open a lightweight route/window that mounts only the terminal surface.
- Reuse existing backend/session state where possible rather than forking new runtime state.
- Treat arbitrary tab pop-out as a second slice after the terminal path is proven.

Why this is preferred:
- clear and bounded scope
- gives the highest-value pop-out first
- avoids bundling this immediately with the larger multi-window chat/session design

### Path B — general pane detachment model
- Introduce a general pane/window detachment system where any eligible pane can move to a new window.
- Let terminal/editor/preview panes all share one detach/reattach contract.

Why this may be useful later:
- cleaner long-term abstraction if more panes need windowing
- avoids separate special-case flows

Why it is not preferred for v1:
- much broader architectural change
- likely overlaps with existing session/windowing planning work

## Test Plan

- [ ] Add focused web tests for pop-out action visibility and action dispatch.
- [ ] Validate terminal pop-out open/close behavior.
- [ ] Validate tab pop-out open/close behavior for at least one supported pane type.
- [ ] Validate safe fallback when `window.open(...)` is blocked or unavailable.
- [ ] Run `bun run build:web`.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Terminal pop-out is implemented or explicitly scoped out behind documented non-goals.
- [ ] Tab pop-out path is implemented for the chosen supported tab type(s).
- [ ] Popup-blocked behavior is user-safe and understandable.
- [ ] Regression coverage exists for the chosen flow.
- [ ] Update history records implementation and validation evidence.

## Updates

### 2026-03-15
- Refined with user direction: **terminal first** is the preferred v1 slice.
- Acceptance criteria and implementation path now treat terminal pop-out as the required first implementation, with tab pop-out deferred to a follow-on slice.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

### 2026-03-15
- Created from user request for opening the terminal or a given tab in a separate pop-out window.
- Kept separate from the broader multi-window chat/session ticket so this can be evaluated as a narrower pane/window affordance.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

- This should likely integrate with the existing pane/tab system rather than invent a second UI model for the same content.
- First refinement question: which tab types are in scope for v1?
  - editor only
  - preview panes
  - terminal only plus one tab type
  - arbitrary pane instances
- Browser popup rules mean the open action should be directly user-triggered.
- If terminal pop-out is implemented first, it may be a useful stepping stone toward broader detachable panes later.

## Links

- `piclaw/web/src/app.ts`
- `piclaw/web/src/panes/terminal-pane.ts`
- `piclaw/web/src/panes/pane-registry.ts`
- `piclaw/web/src/panes/tab-store.ts`
- `piclaw/web/src/components/tab-strip.ts`
- `piclaw/kanban/00-inbox/parallel-web-chat-windows-with-session-forks.md`
