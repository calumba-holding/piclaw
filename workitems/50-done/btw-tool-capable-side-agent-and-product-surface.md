---
id: btw-tool-capable-side-agent-and-product-surface
title: Make /btw a tool-capable side agent and mature it into a durable product surface
status: done
priority: high
created: 2026-03-15
updated: 2026-03-18
completed: 2026-03-18
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - web
  - ui
  - btw
  - side-agent
  - tools
  - architecture
owner: pi
---

# Make /btw a tool-capable side agent and mature it into a durable product surface

## Summary

PiClaw now has a shipped first `/btw` slice: a web-native side conversation
panel backed by the side-prompt substrate, with streaming, retry, inject-back,
and browser-local persistence.

The remaining work is to turn `/btw` from a prompt-only side conversation into a
more durable product surface, especially by making it capable of running tools
through a true side-agent loop when that is worth the complexity.

## Acceptance Criteria

- [ ] The current `/btw` capability boundary is documented clearly:
  - current state = side prompt / no tool execution
  - target state = optional tool-capable side agent
- [ ] A design is chosen for tool-capable `/btw` execution that does not break
      main-chat queueing, recovery, or branch isolation.
- [ ] If implementation proceeds, the side-agent loop supports streamed status
      and tool-call visibility without corrupting the main session state.
- [ ] Persisted BTW state is reviewed and the desired long-term storage model is
      chosen explicitly.
- [ ] Card-assisted BTW outputs are evaluated only where they are genuinely
      better than the existing panel.
- [ ] `cd /workspace/piclaw/piclaw && bun run quality` passes for any shipped
      implementation.

## Implementation Paths

### Path A — keep the current panel, add a true side-agent loop (recommended)
- Preserve the current BTW panel UX.
- Replace prompt-only side execution with a bounded side-agent execution loop.
- Reuse existing streaming/status patterns where possible.
- Keep inject-back on the normal chat path.

### Path B — convert BTW into a primarily card-based interaction surface
- Use cards for most BTW outputs and actions.
- Reserve the panel only for streaming-heavy or long-form cases.

Why this is not preferred initially:
- current panel is already better for long-form streamed reasoning
- cards should be used where they improve the interaction, not merely because
  they exist

## Test Plan

- [ ] Add focused tests for side-agent execution lifecycle if implemented.
- [ ] Add regression coverage for queue/recovery isolation between main chat and
      BTW execution.
- [ ] Add UI tests for retry/inject/persistence behaviour as the product surface
      evolves.
- [ ] Run `cd /workspace/piclaw/piclaw && bun run quality`.

## Definition of Done

- [ ] Follow-up scope is explicit and does not overlap confusingly with the now-
      done Adaptive Cards ticket.
- [ ] Chosen execution/storage direction is recorded.
- [ ] Remaining BTW work is implementable without reopening the completed card
      rendering/action ticket.

## Updates

### 2026-03-15
- Created as the follow-up ticket when closing the shipped Adaptive Cards +
  first `/btw` slice.
- Remaining work is primarily about making `/btw` tool-capable and deciding how
  durable/persistent it should become as a first-class PiClaw surface.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

## Links

- `workitems/50-done/adaptive-cards-and-btw-side-conversations.md`
- `piclaw/piclaw/src/agent-pool.ts`
- `piclaw/piclaw/src/channels/web.ts`
- `piclaw/piclaw/web/src/components/btw-panel.ts`
- `piclaw/piclaw/web/src/ui/btw.ts`
