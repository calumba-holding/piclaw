---
id: pi-generative-ui-integration-evaluation
title: Evaluate integrating pi-generative-ui into piclaw
status: done
priority: medium
created: 2026-03-13
updated: 2026-03-19
completed: 2026-03-19
target_release: next
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - web
  - ui
  - generative-ui
  - integration
owner: pi
---

# Evaluate integrating pi-generative-ui into piclaw

## Summary

Evaluate whether and how [`Michaelliv/pi-generative-ui`](https://github.com/Michaelliv/pi-generative-ui)
could be integrated into piclaw's web experience.

Conclusion:

- **Do not** pursue direct integration into the chat timeline.
- **Do not** treat it as a replacement for Adaptive Cards.
- Prefer either:
  - **selective pattern adoption**, or
  - a **parallel experiment** that launches a user-dismissible floating widget surface from the timeline.

The reference project is a macOS-native `pi` extension built around Glimpse /
WKWebView windows, streaming HTML diffs, and arbitrary widget code execution.
Piclaw is a browser-based, persistence-first product whose existing supported UI
surfaces are timeline-native messages / Adaptive Cards and web pane extensions.

## Acceptance Criteria

- [x] Review the reference repo architecture, runtime assumptions, and UI primitives.
- [x] Identify overlap and differences versus piclaw's current web UI and message rendering model.
- [x] Compare it with the current Adaptive Cards / structured UI direction already under consideration.
- [x] Decide whether this is best treated as:
  - direct integration,
  - selective pattern adoption,
  - parallel experiment,
  - or out of scope.
- [x] If viable, outline a minimal proof-of-concept integration path with explicit risks and boundaries.
- [x] If not viable, document why.

## Implementation Paths

### Path A — direct timeline integration
Treat `pi-generative-ui` as something piclaw should embed directly into the web
chat timeline as rich live widgets.

**Why this is not recommended:**
- the reference repo depends on macOS-native Glimpse windows, not browser panes
- it assumes streamed HTML mutation during tool-call execution
- it favors arbitrary HTML/JS widget execution over persisted chat-native UI
- it overlaps awkwardly with piclaw's Adaptive Card and message-history model

### Path B — selective adoption / parallel experiment (recommended)
Treat `pi-generative-ui` as inspiration for:
1. design/prompt patterns,
2. a sandboxed widget artifact format,
3. and a piclaw-native floating widget surface launched from timeline history.

**Why this is recommended:**
- preserves piclaw's history-first product model
- fits the current web shell better than native-window assumptions
- avoids replacing Adaptive Cards, which remain the preferred structured chat UI
- allows an explicit, bounded proof-of-concept

## Test Plan

- [x] Review the reference repository README and extension entry point.
- [x] Review piclaw web timeline rendering and Adaptive Card plumbing.
- [x] Review piclaw extension UI contract and pane-extension host model.
- [x] Compare runtime assumptions and identify concrete integration seams.
- [x] Produce a recommendation and a scoped follow-up implementation ticket.

## Definition of Done

- [x] Integration recommendation recorded with explicit rationale.
- [x] Direct-integration risks documented.
- [x] Minimal viable experiment direction identified.
- [x] Follow-up ticket created for the chosen piclaw-native path.
- [x] Ticket front matter updated (`status`, `updated`, `completed`).
- [x] Ticket moved to `50-done/`.

## Updates

### 2026-03-19
- Investigated the reference repo at `/workspace/tmp/pi-generative-ui` and compared it with piclaw's current web architecture.
- Confirmed the core mismatch:
  - `pi-generative-ui` is a macOS-native `pi` extension using Glimpse / WKWebView windows,
  - piclaw is a browser-based, persistence-first web shell.
- Reviewed relevant piclaw surfaces and contracts:
  - `piclaw/piclaw/web/src/components/post.ts`
  - `piclaw/piclaw/web/src/ui/adaptive-card-renderer.ts`
  - `piclaw/piclaw/src/extensions/send-adaptive-card.ts`
  - `piclaw/docs/extension-ui-contract.md`
  - `piclaw/docs/web-pane-extensions.md`
  - `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- Decision: do **not** integrate `pi-generative-ui` directly into the timeline and do **not** treat it as a replacement for Adaptive Cards.
- Chosen direction: a **parallel experiment** for a timeline-launched, user-dismissible floating widget surface, with stored widget artifacts and a sandboxed web rendering model.
- Created follow-up ticket: `workitems/10-next/timeline-launched-floating-generative-widget-pane.md`.
- Lane change: `10-next` → `50-done`.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-16
- Refinement triage kept this in `00-inbox` as a standalone evaluation item for now.
- Do not merge it pre-emptively into broader extension-UI/product-surface tickets until the repo/runtime fit is actually reviewed.

### 2026-03-13
- Added from request to evaluate integrating `pi-generative-ui` into piclaw.

## Notes

- This should stay at evaluation/design level first.
- Prefer small integration seams over broad UI rewrites.
- Should account for piclaw's current web stack, message storage model, and agent interaction flow.
- Likely related to `adopt-openclaw-ui.md`, but should be evaluated independently before merging directions.
- User direction after investigation: make the experiment a **floating pane** that can be dismissed from the timeline flow.

## Links

- https://github.com/Michaelliv/pi-generative-ui
- `/workspace/tmp/pi-generative-ui/README.md`
- `/workspace/tmp/pi-generative-ui/.pi/extensions/generative-ui/index.ts`
- `piclaw/piclaw/web/src/components/post.ts`
- `piclaw/piclaw/web/src/ui/adaptive-card-renderer.ts`
- `piclaw/piclaw/src/extensions/send-adaptive-card.ts`
- `piclaw/docs/extension-ui-contract.md`
- `piclaw/docs/web-pane-extensions.md`
- `piclaw/piclaw/src/channels/web/ui-bridge.ts`
- `workitems/10-next/timeline-launched-floating-generative-widget-pane.md`
