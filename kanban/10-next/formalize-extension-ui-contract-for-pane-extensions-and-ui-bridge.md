---
id: formalize-extension-ui-contract-for-pane-extensions-and-ui-bridge
title: Formalize extension UI contract for pane extensions and the UI bridge
status: next
priority: medium
created: 2026-03-16
updated: 2026-03-17
target_release: next
estimate: S
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

# Formalize extension UI contract for pane extensions and the UI bridge

## Summary

Piclaw already has a **first-class extension UI host** for pane-like experiences:

- `WebPaneExtension` / `PaneRegistry`
- tab and dock placements
- built-in pane implementations (editor, terminal, draw.io, office/pdf/image/csv viewers, workspace preview)
- a documented extension guide in `docs/web-pane-extensions.md`

It also already has a low-level browser-event compatibility bridge for
`extension_ui_*` events, plus a few shell-visible affordances such as lightweight
toasts.

So the remaining question is **not** whether Piclaw needs a first-class UI host
at all — that part already exists.

The remaining product/contract gap is to define how these two surfaces fit
 together for third-party/workspace extensions:

1. when an extension should use a pane extension,
2. what `extension_ui_*` events are actually supported as long-term contract,
3. which shell-owned affordances are stable vs internal/private.

## Acceptance Criteria

- [ ] Record that pane extensions are the existing first-class host model for
      substantial extension UI in the web app.
- [ ] Classify current `extension_ui_*` families into:
  - supported public bridge events,
  - shell-owned affordances,
  - internal/private implementation details,
  - deprecated or legacy events.
- [ ] Clarify what third-party/workspace extensions should prefer for each UI class:
  - pane extension,
  - browser-event bridge,
  - timeline/adaptive-card/message-based UI,
  - or no supported surface.
- [ ] Document the non-goals clearly enough that extension authors do not assume
      a richer plugin UI platform than what Piclaw actually ships.
- [ ] Create focused follow-up tickets only for the remaining genuine gaps.

## Implementation Paths

### Path A — Contract/documentation pass over existing surfaces (recommended)
1. Treat pane extensions as the already-shipped first-class host model.
2. Audit `extension_ui_*` against actual shell behavior.
3. Write a short contract table mapping UI need → recommended surface.
4. Split only the remaining concrete product gaps into smaller tickets.

**Pros:** removes already-implemented scope and aligns docs with reality.
**Cons:** may expose that some legacy bridge events need pruning or clearer warnings.

### Path B — Narrow the bridge aggressively
1. Treat pane extensions as the only substantial supported UI path.
2. Reduce/document the bridge as strictly compatibility-level.
3. Deprecate ambiguous `extension_ui_*` events sooner.

**Pros:** simpler long-term story.
**Cons:** may overconstrain useful lightweight extension interactions.

## Recommended Path

Path A — the host model already exists, so the highest-value work now is to
formalize the contract between pane extensions, bridge events, and shell-owned
UI affordances rather than re-litigating whether a host should exist.

## Test Plan

- [ ] Audit current pane-host implementation and built-in pane usage.
- [ ] Inventory current `extension_ui_*` events and whether the shell visibly
      reacts to them.
- [ ] Produce a surface-mapping table such as:
  - substantial file/tool UI → pane extension
  - lightweight prompt/status/toast/editor helpers → bridge events
  - structured conversation actions → adaptive cards / timeline messages
- [ ] Create smaller follow-up tickets only where the current contract still has
      real product ambiguity.

## Definition of Done

- [ ] Ticket scope no longer includes already-shipped pane-host work
- [ ] Current first-class host model explicitly recorded
- [ ] Bridge event categories documented
- [ ] Third-party/workspace extension guidance clarified
- [ ] Only genuine remaining gaps left as follow-up tickets

## Updates

### 2026-03-17
- Reassessed against the current implementation and removed scope that is already shipped.
- Confirmed the original framing was outdated because Piclaw now already has:
  - a first-class pane host model (`WebPaneExtension`, `PaneRegistry`, tabs/dock),
  - multiple built-in pane implementations,
  - and a public extension guide in `docs/web-pane-extensions.md`.
- Refocused the ticket on the **remaining** gap: formalizing the contract between
  pane extensions and the lower-level `extension_ui_*` browser-event bridge.
- Renamed from `define-first-class-extension-ui-surface-for-piclaw-extensions`
  to this more accurate contract-oriented ticket.
- Lane change: `00-inbox` → `10-next` because the scope is now specific and ready.
- Quality: ★★★★☆ 7/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 1)

### 2026-03-17 (previous framing)
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

It is **not** the place to design another pane host or a full extension UI
framework. The remaining output should be a clarified contract and, if needed,
a few smaller follow-up tickets.

## Links

- `kanban/50-done/extension-ui-sse-client-contract-gap.md`
- `docs/web-pane-extensions.md`
- `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- `piclaw/piclaw/web/src/api.ts`
- `piclaw/piclaw/web/src/app.ts`
