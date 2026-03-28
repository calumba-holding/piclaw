---
id: define-first-class-extension-ui-surface-for-piclaw-extensions
title: Define a first-class extension UI surface for Piclaw extensions
status: inbox
priority: medium
created: 2026-03-16
updated: 2026-03-17
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - extensions
  - ui
  - sse
  - product
  - architecture
owner: pi
---

# Define a first-class extension UI surface for Piclaw extensions

## Summary

Piclaw currently exposes extension UI through a pragmatic compatibility path:
`extension_ui_*` SSE events are bridged into browser events and selected events
can surface lightweight shell notifications.

That transport now works, but the product surface is still underspecified.

This ticket asks a higher-level question: should Piclaw keep extension UI as a
thin browser-event bridge, or should it define a more explicit first-class UI
host model for extension-driven experiences in the web app?

## Acceptance Criteria

- [ ] Decide whether browser-event bridging is the intended long-term extension
  UI contract or only an interim compatibility layer.
- [ ] If a richer surface is needed, define the minimum viable host model
  (for example: panel, shell slot, toast, modal, card, or timeline-owned UI).
- [ ] Classify the current `extension_ui_*` event families into:
  - bridged-only,
  - first-class rendered,
  - internal/private,
  - deprecated.
- [ ] Clarify what guarantees third-party/workspace extensions should rely on.
- [ ] Document the decision well enough that follow-up implementation tickets can
  be created without reopening the product question.

## Implementation Paths

### Path A — Keep browser-event bridging as the official contract
1. Treat the current `extension_ui_*` → browser-event bridge as the stable API.
2. Define event naming, payload shape, lifecycle, and safety expectations.
3. Document which events may trigger shell affordances and which remain fully
   extension-owned in the browser.

**Pros:** small scope, preserves current architecture, easy to document.
**Cons:** keeps extension UI fragmented and may limit richer built-in extension
surfaces later.

### Path B — Define a minimal first-class extension UI host (recommended)
1. Keep browser-event bridging for low-level compatibility.
2. Add a product-level model for a few sanctioned UI surfaces.
3. Document where extension UI belongs: timeline, shell chrome, panel area,
   modal-like affordances, or ephemeral notifications.
4. Split implementation follow-ups only after the host model is agreed.

**Pros:** gives extensions a clearer product target without overcommitting to a
full framework.
**Cons:** needs careful scope control so it does not balloon into a full plugin
UI platform design.

## Recommended Path

Path B — preserve the current event bridge as a low-level mechanism, but decide
whether Piclaw should expose a small number of explicit extension UI surfaces so
extension authors are not forced to reverse-engineer shell behavior from ad hoc
events.

## Test Plan

- [ ] Audit current `extension_ui_*` event usage in the codebase and examples.
- [ ] Enumerate which events already have shell-visible effects vs browser-only
      compatibility behavior.
- [ ] Produce a short contract table mapping event class → intended surface.
- [ ] If a richer surface is chosen, create focused follow-up tickets rather
      than bundling implementation into this decision ticket.

## Definition of Done

- [ ] Product stance recorded: bridge-only vs richer host model
- [ ] Supported extension UI surfaces documented
- [ ] Event categories classified
- [ ] Third-party/workspace extension contract clarified
- [ ] Follow-up implementation tickets created only where needed

## Updates

### 2026-03-17
- Renamed and rewritten from the older, more awkwardly framed ticket
  `richer-extension-ui-product-surface.md`.
- Tightened the problem statement so the ticket is explicitly about the product
  contract for extension UI, not just whether an existing transport works.
- Added clearer acceptance criteria, implementation paths, a recommended path,
  and a minimal test/decision plan.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

### 2026-03-16
- Created as a follow-up to the closed client-contract gap ticket after the
  basic `extension_ui_*` browser-event bridge landed.

## Notes

This ticket should stay focused on the product/API boundary.

It is **not** the place to implement a full extension UI system. The output here
should be a clarified contract and a small set of follow-up tickets if needed.

## Links

- `workitems/50-done/extension-ui-sse-client-contract-gap.md`
- `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- `piclaw/piclaw/web/src/api.ts`
- `piclaw/piclaw/web/src/app.ts`
