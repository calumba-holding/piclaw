---
id: pop-out-terminal-or-tab-into-new-window
title: Allow opening the terminal or a given tab in a pop-out window
status: done
priority: medium
created: 2026-03-15
updated: 2026-03-23
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

- [ ] V1 supports a general way to open an eligible tab pane in a separate window.
- [ ] Terminal can be opened in a separate window through that general pane pop-out path.
- [ ] VNC can be opened in a separate window through that general pane pop-out path.
- [ ] The pop-out preserves enough session/context to be useful immediately after opening.
- [ ] Opening a pop-out window does not break the original in-app pane surface.
- [ ] Closing the pop-out window fails safely and leaves the main app usable.
- [ ] The design works within browser popup restrictions and degraded cases are handled cleanly.

## Implementation Paths

### Path A — general tab-pane pop-out route/window (recommended)
- Introduce a lightweight same-origin pop-out route/window mode that mounts one pane path as the primary surface.
- Reuse the existing pane registry and synthetic tab-path model (`piclaw://terminal`, `piclaw://vnc/<target>`, file paths, etc.) instead of building per-pane popup logic.
- Start by enabling terminal and VNC through that path.
- Treat this as a reopen-in-standalone-shell model, not full live pane detachment/migration.

Why this is preferred:
- one host abstraction immediately serves both terminal and VNC
- keeps pop-out behavior aligned with the existing pane/tab model
- avoids duplicating popup lifecycle code across pane types
- leaves true pane detachment/reattachment as an optional later refinement

### Path B — terminal-first dedicated pop-out route/window
- Keep a terminal-only pop-out first, then generalize later.

Why this is no longer preferred:
- terminal is no longer the only strong consumer
- VNC now needs the same standalone/resizable-window behavior
- this would duplicate logic that should live at the pane/windowing layer

### Path C — general live pane detachment model
- Introduce a full detach/reattach system where a mounted pane instance migrates between windows.

Why this may be useful later:
- cleaner long-term abstraction if truly live pane migration becomes important

Why it is not preferred for v1:
- much broader architectural change than needed
- state transfer and ownership handoff are significantly more complex than reopening a pane in a dedicated shell

## Test Plan

- [ ] Add focused web tests for pop-out action visibility and action dispatch.
- [ ] Validate terminal pop-out open/close behavior.
- [ ] Validate tab pop-out open/close behavior for at least one supported pane type.
- [x] Validate safe fallback when `window.open(...)` is blocked or unavailable.
- [x] Run `bun run build:web`.
- [ ] Run `bun run quality` from `/workspace/piclaw/piclaw` if implementation proceeds.

## Definition of Done

- [ ] Terminal pop-out is implemented or explicitly scoped out behind documented non-goals.
- [ ] Tab pop-out path is implemented for the chosen supported tab type(s).
- [ ] Popup-blocked behavior is user-safe and understandable.
- [ ] Regression coverage exists for the chosen flow.
- [ ] Update history records implementation and validation evidence.

## Updates

### 2026-03-22
- Lane change: `10-next` → `20-doing`.
- Architecture direction changed: this should no longer be treated as a terminal-only popup feature.
- With both terminal and VNC now needing standalone resizable windows, the preferred v1 host model is a **general tab-pane pop-out mode** rather than per-pane popup special cases.
- Began implementation of that direction:
  - added popup-safe pane-window helpers in `runtime/web/src/ui/chat-window.ts`
  - added a `pane_popout` route/window mode in `runtime/web/src/app.ts`
  - added an `Open in Window` action to the tab strip context menu
  - added a terminal dock-header pop-out action that opens the terminal through the same pane pop-out path
- Continued the first slice:
  - hardened URL helpers so chat/branch routes clear stale pane-popout params and pane pop-outs clear stale inherited labels
  - added a generic app-side `pane:popout` event bridge so panes can request standalone windows without bespoke popup logic
  - added explicit VNC `Open in Window` actions in the VNC chooser and target session UI, both routed through the shared pane pop-out path
  - kept pane-popout behavior suppressed in standalone/PWA mode and inside already-popped-out pane shells
  - corrected the remote-display architecture so the browser-side live transport is no longer modeled as a VNC-specific socket layer:
    - added `runtime/web/src/panes/remote-display-socket.ts` as a generic socket/control boundary
    - added `runtime/web/src/panes/remote-display-protocol.ts` as a generic display-protocol event contract
    - moved the RFB implementation into `runtime/web/src/panes/remote-display-vnc.ts` as the first protocol adapter behind that boundary
- Validation completed for this slice:
  - `bun test runtime/test/web/chat-window.test.ts runtime/test/channels/web/vnc-session-service.test.ts`
  - `bun run build`
  - `bun run build:web`
  - `bun run check:hook-tdz`
- Current v1 intent: reopen a pane in a standalone shell/window by path; do **not** attempt full live pane migration/detachment yet.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)

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
- `piclaw/workitems/00-inbox/parallel-web-chat-windows-with-session-forks.md`
