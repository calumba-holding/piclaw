---
id: editor-zen-mode-and-focus-controls
title: Add editor zen mode and related focus controls
status: done
priority: medium
created: 2026-03-14
updated: 2026-03-18
completed: 2026-03-18
tags:
  - work-item
  - kanban
  - web
  - editor
  - ux
  - focus
owner: pi
---

# Add editor zen mode and related focus controls

## Summary

Add a distraction-reduced **editor zen mode** for the web UI, plus the adjacent
focus/layout controls that make it actually useful in day-to-day editing.

This should cover more than just one toggle: the goal is a coherent “focus on
the current file” experience for the tabbed editor and docked-pane layout.

## Why

The editor is now a first-class tabbed pane, but the surrounding UI still keeps
chat, dock, splitters, headers, and other affordances visually present. That is
useful most of the time, but not ideal when doing longer writing/editing tasks.

A zen/focus mode should let the user temporarily prioritize the active editor
without losing the surrounding PiClaw workflow.

## Candidate scope

### In scope
- Add a user-facing **zen mode** for the editor area.
- Define which surfaces hide/collapse in zen mode, likely including some subset of:
  - workspace sidebar
  - chat timeline width/visibility
  - editor tab chrome density
  - docked terminal visibility
  - non-essential status/header affordances
- Add explicit enter/exit affordances:
  - button and/or command
  - keyboard shortcut if appropriate
- Preserve a reversible, low-surprise transition back to the normal layout.
- Decide whether zen mode is:
  - per-browser state,
  - per-chat state,
  - or purely ephemeral session UI state.

### Out of scope
- Full IDE-style window management
- Multi-monitor/popup editor windows
- Arbitrary custom workspace layout presets
- Mobile-first redesign of the entire shell

## Acceptance Criteria

- [x] A clear editor zen mode can be toggled on and off.
- [x] Zen mode behavior is deterministic and documented.
- [x] The active editor remains fully usable for edit/save/tab-switch workflows.
- [x] Entering zen mode does not lose unsaved changes or current tab state.
- [x] Exiting zen mode restores the previous layout cleanly.
- [x] Dock/terminal behavior in zen mode is explicitly defined.
- [x] Keyboard/accessibility behavior is defined for the toggle.
- [x] Manual validation covers entering, editing, saving, exiting, and reopening tabs.

## Implementation Paths

### Path A — UI state toggle in app shell (recommended)
1. Add a top-level zen-mode UI state in `web/src/app.ts`.
2. Apply shell/layout class changes to hide or compress surrounding panes.
3. Keep the editor extension itself unchanged except for any needed resize/focus hooks.
4. Persist only the minimal preference needed (if any).

**Pros:** smallest, safest slice; matches current shell architecture.
**Cons:** can become CSS-heavy if too many layout exceptions pile up.

### Path B — Pane capability / host-layout mode
1. Extend pane host concepts to support “focusable / immersive” layout states.
2. Let the editor pane request or drive the mode.
3. Reuse that capability later for draw.io, mind maps, or preview panes.

**Pros:** cleaner long-term abstraction.
**Cons:** more architecture work than needed for a first zen-mode feature.

## Recommended Path

Start with **Path A**.

Use a shell-level UI state and explicit CSS/layout transitions first. Only
promote it into a more general pane-layout abstraction if multiple pane types
need the same immersive behavior.

## Refinement questions

- ~~What exactly should hide in zen mode vs merely shrink?~~ → **Hide everything** (full immersive)
- ~~Should chat remain visible as a narrow column, or disappear entirely?~~ → **Disappear entirely**
- ~~Should the terminal dock auto-close when entering zen mode?~~ → **Yes, auto-close + restore on exit**
- ~~Should the tab strip remain visible, or collapse to a minimal single-line header?~~ → **Hidden until hover**
- ~~Should zen mode be available only when an editor tab is active?~~ → TBD (likely yes)
- ~~Do we want a matching command (e.g. `/zen`) or UI-only toggle first?~~ → **Keyboard shortcut + button first; Esc exits**

## Test Plan

- Add UI/state tests for zen-mode toggle behavior.
- Add manual validation for:
  1. open editor tab
  2. enter zen mode
  3. edit + save file
  4. switch tabs
  5. exit zen mode
  6. verify layout restoration
- Validate terminal/editor resize behavior when entering and leaving zen mode.
- Run:
  - `cd /workspace/piclaw/piclaw && bun run quality`

## Updates

### 2026-03-18 — Implementation complete

Implemented zen mode as Path A (app-shell UI state toggle):

**Commits:**
- `d8fd561` — feat: add editor zen mode (core toggle, keyboard, button, terminal auto-close/restore)
- `dfb502e` — feat(zen): center editor at 80% width and hide gutters
- `1a97342` — fix(zen): eliminate CPU spike from hover-reveal (fixed hover zone)
- `c11e6d1` — fix(zen): hide statusbar, fix centering via cm-scroller padding

**Files changed:**
- `piclaw/web/src/app.ts` — zen state, enter/exit/toggle, keyboard handlers (Ctrl+Shift+Z, Esc), terminal auto-close/restore
- `piclaw/web/src/components/tab-strip.ts` — zen toggle button (expand icon, right end of strip)
- `piclaw/web/static/css/styles.css` — zen layout rules: hide all chrome, center at 80%, hover-reveal tab strip

**Test evidence:**
- 1050 tests pass (`bun test`), 0 failures
- TypeScript clean (`tsc`)
- Web build clean (`build:web`)
- Manual validation: enter, edit, save, tab-switch, exit, layout restoration confirmed

Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)

### 2026-03-18 — Refinement batch 6–10 answered

| # | Question | Decision |
|---|----------|----------|
| 6 | Keyboard shortcut | **Ctrl+Shift+Z** |
| 7 | Transition animation | **Respect reduce-motion preference** (smooth when allowed, instant when not) |
| 8 | No editor tab open | **No-op** — zen requires an active editor tab |
| 9 | Browser fullscreen | **Optional separate** — zen stays in-viewport; native fullscreen available as a second toggle |
| 10 | Button location | **Right end of the editor tab strip** |

Cumulative design spec (questions 1–10):
- **Enter**: Ctrl+Shift+Z or click button at right end of tab strip (only when editor tab active)
- **Exit**: Ctrl+Shift+Z, Esc, or button (hover-revealed in tab strip area)
- **Layout**: Everything hidden except editor. Tab strip hidden until hover near top edge.
- **Terminal**: Auto-close on enter, auto-restore on exit.
- **Chat/sidebar**: Completely hidden.
- **Animation**: Smooth ~250ms slide/fade when `prefers-reduced-motion: no-preference`, instant snap otherwise.
- **Browser fullscreen**: Separate opt-in (not tied to zen toggle).
- **State**: Ephemeral session UI state, not persisted.
- **Edge case**: Zen is a no-op when no editor tab is open.

Quality: ★★★★☆ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)
- Ready for implementation.

### 2026-03-18 — Refinement batch 1–5 answered

Answers from adaptive card submission (row 11724):

| # | Question | Decision |
|---|----------|----------|
| 1 | What hides vs shrinks | **Hide everything except editor** (full immersive) |
| 2 | Chat visibility | **Completely hidden** |
| 3 | Terminal dock behavior | **Auto-close, restore on exit** |
| 4 | Tab strip | **Hidden until hover / mouse-near-top** |
| 5 | Toggle method | **Keyboard shortcut + button** |
| — | Exit shortcut | **Esc also exits zen mode** (user clarification) |

Design summary:
- Zen mode = full-screen editor only. Chat, sidebar, terminal, tab strip all hidden.
- Tab strip reveals on hover near top edge.
- Terminal auto-closes on enter, auto-restores on exit.
- Enter via: keyboard shortcut (TBD, e.g. Ctrl+Shift+Z) or button in tab strip.
- Exit via: same shortcut, same button (hover-reveals with tab strip), or Esc.
- State is ephemeral (session UI state, not persisted).

Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 1)
- Gap: deps score stays 1 until implementation verifies no editor-extension resize issues.

### 2026-03-14
- Ticket created from user request for “editor zen mode and co”.
- Scoped as a focused editor UX/layout feature rather than a broad shell redesign.
- Initial recommendation: implement as app-shell UI state first, not a new pane framework.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Links

- `piclaw/piclaw/web/src/app.ts`
- `piclaw/piclaw/extensions/editor/editor-extension.ts`
- `piclaw/piclaw/web/static/css/styles.css`
- `piclaw/piclaw/web/src/components/tab-strip.ts`
- `piclaw/piclaw/web/src/panes/terminal-pane.ts`
- `piclaw/piclaw/workitems/50-done/editor-as-standalone-extension.md`
