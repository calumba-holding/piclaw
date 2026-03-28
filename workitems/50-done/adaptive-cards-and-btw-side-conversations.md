---
id: adaptive-cards-and-btw-side-conversations
title: Ship Adaptive Cards in web chat and the first /btw side conversation slice
status: done
priority: high
created: 2026-03-15
updated: 2026-03-15
completed: 2026-03-15
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - web
  - ui
  - adaptive-cards
  - btw
  - chat
  - architecture
owner: pi
---

# Ship Adaptive Cards in web chat and the first /btw side conversation slice

## Summary

This ticket delivered PiClaw’s first complete Adaptive Cards implementation for
web chat, plus the first web-native `/btw` side conversation slice built on top
of the new side-prompt substrate.

In practical terms, this shipped:
- Adaptive Card rendering in the timeline
- PiClaw-themed card styling and markdown rendering
- `Action.Submit` and `Action.OpenUrl`
- card state transitions and submission persistence
- built-in `/test-card` validation flows
- a web-native `/btw` panel with streaming, retry, inject-back, and browser-
  local persistence

The remaining BTW work is now tracked separately in:
- `workitems/10-next/btw-tool-capable-side-agent-and-product-surface.md`

## Acceptance Criteria

- [x] `adaptivecards` SDK vendored and wired into the web runtime
- [x] HostConfig maps PiClaw theme variables and supports light/dark rendering
- [x] Timeline posts with `adaptive_card` content blocks render correctly
- [x] Posts without cards render normally with safe fallback behaviour
- [x] Failed card parsing falls back to normal text content
- [x] Schema version support is pinned to the current shipped contract
- [x] Built-in `/test-card` validation flows exist and cover useful variants
- [x] `Action.Submit` and `Action.OpenUrl` are supported in the web runtime
- [x] Card submissions persist as structured state and finished cards render as
      concise read-only receipts rather than noisy banner dumps
- [x] The first `/btw` side conversation slice ships as a web-native panel on
      top of the side-prompt substrate
- [x] BTW supports streaming, retry, inject-back, and browser-local persistence
- [x] `cd /workspace/piclaw/piclaw && bun run quality` passes

## Implementation Paths

### Path A — phased core-backed cards plus thin BTW consumer (chosen)
- Ship cards in phases: rendering first, then actions/lifecycle.
- Keep card persistence/action routing in core.
- Build `/btw` as a web-native consumer of the side-prompt substrate instead of
  trying to make everything card-based immediately.

### Path B — make BTW primarily card-based from the outset (deferred)
- This was explicitly deferred.
- The current BTW panel remains the better surface for long-form or streaming-
  heavy output.
- Card-assisted BTW outputs can still be explored later where they are clearly
  better than the panel.

## Test Plan

- [x] Add/update focused web tests for card rendering and submission behaviour
- [x] Add/update backend tests for card actions, dispatch, and persistence
- [x] Add/update BTW tests for parsing, streaming, persistence, and controls
- [x] Validate built-in `/test-card` variants
- [x] Run `cd /workspace/piclaw/piclaw && bun run quality`

## Definition of Done

- [x] Adaptive Cards are shipped as a real web feature rather than only planned
- [x] Card actions and lifecycle are implemented and validated
- [x] Current PiClaw card authoring contract is documented and operationalised
- [x] First `/btw` side conversation slice is shipped and usable in the web UI
- [x] Remaining BTW/tool-capable product work is split into a follow-up ticket
- [x] Ticket history includes implementation and validation evidence

## Historical implementation paths considered

- Render-only cards without action lifecycle: rejected as too incomplete for the
  intended web UX.
- Upstream `/btw` extension port as the primary implementation: rejected for the
  first slice in favour of a PiClaw-native web consumer on top of core side-
  prompt APIs.
- Fully card-based BTW from the outset: deferred because the current panel is a
  better fit for streamed, long-form side conversation output.

## Updates

### 2026-03-15 (closed)
- Moved from `20-doing` to `50-done` after shipping the intended Adaptive Cards
  and first `/btw` slice.
- Closure scope now reflects what was actually delivered: complete web Adaptive
  Cards support plus an initial BTW side-prompt panel, rather than the full
  long-term tool-capable BTW product roadmap.
- Follow-up created for remaining BTW work:
  - `workitems/10-next/btw-tool-capable-side-agent-and-product-surface.md`
- Implementation evidence includes the shipped phases and polish work across:
  - `aed7956` — Phase 1: Adaptive Cards rendering in web timeline
  - `1d41a35` — Add messages post action with content_blocks and SSE broadcast
  - `059a81c` — Expand adaptive card validation and lifecycle flows
  - `7bda2be` — Add side-prompt groundwork and refresh docs
  - `6f57295` — Make BTW context-aware and persist panel state
  - `afcc3bf` — Fix web turn defer state and polish BTW panel
  - `ebd8d7d` — Refresh docs for adaptive cards, BTW, and context restore
  - `77d4c6e` — Prepare v1.3.16 release
- Validation reached and exceeded the original gate, including repeated full
  quality passes during implementation and release prep.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-15
- Created as the combined design/implementation ticket superseding the separate
  Adaptive Cards and `/btw` investigations.
- Phased plan established: cards rendering → card actions → side-LLM engine →
  BTW product surface.
- Ticket later refined using the new public
  `adaptive-cards-authoring` skill to capture the shipped PiClaw authoring
  contract, supported payload shape, prompt pattern, and reusable templates.

## Links

- `workitems/10-next/btw-tool-capable-side-agent-and-product-surface.md`
- `piclaw/piclaw/src/agent-pool.ts`
- `piclaw/piclaw/src/channels/web.ts`
- `piclaw/piclaw/src/channels/web/adaptive-card-actions.ts`
- `piclaw/piclaw/src/channels/web/adaptive-card-test-command.ts`
- `piclaw/piclaw/web/src/components/post.ts`
- `piclaw/piclaw/web/src/components/btw-panel.ts`
- `piclaw/piclaw/web/src/ui/adaptive-card-renderer.ts`
- `piclaw/piclaw/web/src/ui/adaptive-card-host-config.ts`
- `piclaw/piclaw/web/src/ui/btw.ts`
- `piclaw/piclaw/docs/runtime-flows.md`
- `piclaw/piclaw/docs/tools-and-skills.md`
