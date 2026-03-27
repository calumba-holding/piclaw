---
id: evaluate-pi-boomerang
title: Evaluate pi-boomerang for Piclaw
status: inbox
priority: medium
created: 2026-03-27
updated: 2026-03-27
target_release: later
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - evaluation
  - pi
  - integration
  - workflow
owner: pi
---

# Evaluate pi-boomerang for Piclaw

## Summary

Review [`nicobailon/pi-boomerang`](https://github.com/nicobailon/pi-boomerang)
and assess whether Piclaw should adopt, integrate, emulate, or ignore any part
of its workflow or implementation model.

This should begin as an evaluation/design ticket, not an implementation
commitment.

## Questions to answer

- What problem is `pi-boomerang` solving?
- Is it primarily a workflow pattern, an extension, a UI idea, or an automation loop?
- How does it overlap with existing Piclaw capabilities and active tickets?
- Does it fit Piclaw better as:
  - a skill,
  - an extension,
  - a built-in workflow,
  - or just inspiration for an existing feature?
- What parts would transfer cleanly into Piclaw’s web/timeline-native model?
- What assumptions in `pi-boomerang` would not fit Piclaw’s architecture or product direction?
- If it is promising, what is the smallest Piclaw-native MVP worth trying?

## Rough Acceptance Criteria

- [ ] `pi-boomerang` is reviewed for product shape, workflow, and architecture assumptions.
- [ ] Overlap/differences with current Piclaw behavior are documented.
- [ ] A recommendation is made: adopt, adapt, emulate, or reject.
- [ ] If worth pursuing, a concrete follow-up implementation ticket is created.

## Notes

- Prefer a Piclaw-native interpretation over a literal clone.
- Keep timeline-native UX, bounded workflows, and explicit operator controls in mind during evaluation.
- If the idea overlaps strongly with existing work, fold the useful parts into the best existing ticket rather than creating parallel implementation tracks.

## Updates

### 2026-03-27
- Created from request to evaluate `nicobailon/pi-boomerang` for possible Piclaw adoption or inspiration.
- Kept in `00-inbox` pending first-pass review of the repository and workflow model.

## Links

- `https://github.com/nicobailon/pi-boomerang`
