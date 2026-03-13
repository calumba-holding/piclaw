---
id: compose-box-branch-affordance
title: Show current git branch badge in compose box
status: next
priority: medium
created: 2026-03-13
updated: 2026-03-13
target_release: next
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web
  - ui
  - git
owner: pi
---

# Show current git branch badge in compose box

## Summary
Display a compact compose-area affordance showing the currently active git branch name, with a small SVG branch icon.

The badge should be visually aligned near the existing context window / model indicator area and use the same
palette as the model hint so it looks native to the compose header.

## Background
Users and maintainers would like quick awareness of the active workspace branch from the web chat input area.
The existing compose UI already has compact metadata in the footer/meta row (model + context usage). This ticket
adds a lightweight branch badge in that same location.

## Requirements

- Add a branch indicator component in the compose box UI.
- Show the current git branch name (e.g. `main`, `feature/...`) when available.
- Render a small SVG branch icon next to the branch label.
- Use the same visual style/colors as the existing model hint (or token context style family).
- Place the badge near the context meter/model hint area (compose meta row), not as a large floating element.
- Keep the element compact so it doesn’t disrupt normal compose layout.
- If branch information is unavailable, fail gracefully (no visible badge, no layout breakage).

## Proposed implementation notes

### Backend
- Provide a small UI-facing data source for current git branch (e.g. existing status endpoint or a new lightweight
  `/agent/...`/workspace metadata endpoint), sourced from workspace git context.

### Frontend
- Read branch name from app state/api and pass to compose component.
- Add a small badge style (icon + text) near context/model meta area.
- Use shared styling tokens used by the model hint.
- Add simple placeholder/fallback if value is empty.

### Relevant Files (initial)
- `web/src/app.ts` (state + prop plumbing)
- `web/src/components/compose-box.ts`
- `web/src/styles` / `web/static/css/styles.css` (or equivalent compose styling module)
- Potential backend endpoint in `src/channels/web/...` if needed for branch metadata.

## Acceptance Criteria

- [ ] A compact branch indicator with icon appears in compose box near context/model controls.
- [ ] Branch value matches the active workspace git branch.
- [ ] Styling is subdued and consistent with model hint color/family.
- [ ] No regressions to compose flow (send/queue/steer, meter, model picker).
- [ ] Degrades safely when branch metadata is unavailable.

## Definition of Done

- [ ] Changes implemented and lint/typecheck pass.
- [ ] Targeted UI + endpoint tests (if existing harness applies) are added/updated.
- [ ] Manual check confirms badge remains aligned and non-intrusive across compose sizes.

## Updates

### 2026-03-13
- Ticket opened in response to user request.
- Requested behavior: small svg branch icon + branch name next to context meter / model hint.