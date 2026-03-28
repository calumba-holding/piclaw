---
id: integrate-or-port-squad-as-a-specialized-research-experience
title: Integrate or port Squad as a specialized research experience
status: inbox
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: later
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - research
  - autoresearch
  - ux
  - integration
  - multi-agent
owner: pi
---

# Integrate or port Squad as a specialized research experience

## Summary

Evaluate whether Piclaw should integrate or port ideas from
[`bradygaster/squad`](https://github.com/bradygaster/squad) as a **specialized
research workflow** that is adjacent to autoresearch, but intentionally has a
**different UX and operating model**.

This should **not** be treated as “just another skin” on the current
autoresearch flow. The point is to assess whether Squad represents a meaningfully
different product shape — for example a more explicit orchestrated/team-like
research workflow, different user steering model, different presentation of
intermediate work, or a different launch / inspect / iterate loop.

## Why

Piclaw already has active autoresearch work, including:

- upstream-style sub-agent supervision,
- timeline-native controls,
- and exploration of a more Piclaw-native bounded experiment runner.

If Squad is worth borrowing from, it should be because it offers a **distinct
experience** rather than duplicating the existing autoresearch path.

This ticket exists to answer:

- what parts of Squad are conceptually valuable for Piclaw,
- whether the right move is integration, inspiration, or selective porting,
- and what a Piclaw-native UX/workflow would look like if we adopt the idea.

## Questions to answer

- What is Squad’s core workflow and operator experience?
- How is it different from `pi-autoresearch` in task framing, orchestration, and user control?
- Is Squad better modeled in Piclaw as:
  - a separate workflow/tool,
  - a variant of autoresearch,
  - or a new multi-agent research mode entirely?
- What parts are transportable without inheriting the original product’s assumptions or UI model?
- What should remain timeline-native versus living in a dedicated pane/workspace surface?
- Does Squad imply a stronger notion of roles/agents/teams than Piclaw currently exposes?
- What persistence model does it want: runs, artifacts, plans, shared notes, decisions, checkpoints?
- What is the smallest Piclaw-native MVP that proves the value without committing to a large port?

## Rough Acceptance Criteria

- [ ] Squad is reviewed for workflow shape, UX model, and architecture assumptions.
- [ ] Differences vs current Piclaw autoresearch are documented clearly.
- [ ] A recommendation is made: integrate, selectively port, emulate, or reject.
- [ ] If pursued, a Piclaw-native MVP slice is defined with explicit non-goals.
- [ ] Follow-up tickets are created for any chosen implementation path.

## Notes

- Treat this as a **design/evaluation** ticket first, not an automatic implementation commitment.
- Prefer borrowing the **interaction model** or workflow ideas over cloning product chrome.
- Keep Piclaw’s current principles in mind:
  - timeline as durable history,
  - bounded/resumable workflows,
  - explicit user controls,
  - and avoiding TUI- or host-specific assumptions when a web-native equivalent is better.
- This likely intersects with existing autoresearch tickets, but should only merge with them if the workflows truly converge.

## Updates

### 2026-03-27
- Created from request to track possible integration/port of `bradygaster/squad` as a specialized research experience.
- Initial framing deliberately keeps this in `00-inbox` because the first need is comparative product/design evaluation, not immediate implementation.
- Expected refinement outcome is probably one of:
  - reject as redundant,
  - capture a few ideas in existing autoresearch work,
  - or split a new dedicated Piclaw-native research workflow track.

## Links

- `https://github.com/bradygaster/squad`
- `workitems/50-done/autoresearch-sub-agent-supervisor.md`
- `workitems/00-inbox/piclaw-native-autoresearch-lite-experiment-runner.md`
- `docs/autoresearch-lite-design.md`
