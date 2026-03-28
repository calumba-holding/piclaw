---
id: promote-close-of-day-skill-into-skel
title: Promote close-of-day skill into skel
status: done
priority: medium
created: 2026-03-17
updated: 2026-03-17
completed: 2026-03-17
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - skills
  - skel
  - piclaw
owner: pi
---

# Promote close-of-day skill into skel

## Summary

The private `close-of-day` skill was triaged as a good candidate to move into
`skel` for fresh Piclaw installs.

Recorded triage outcome:
- decision: `move-to-skel`
- portable: `yes`
- safe_default: `yes`

No explicit `reason` value was included in this submission, so this ticket keeps
that rationale open for confirmation during implementation.

This follow-up is to copy/sync the skill into `skel/.pi/skills`, verify any
relative-path assumptions still work for fresh containers, and update docs if
needed.

## Acceptance Criteria

- `close-of-day` exists under `skel/.pi/skills/`.
- A fresh container/workspace seeded from skel receives the skill.
- Skill docs/path references remain correct when seeded from skel.
- No private/local-only assumptions break the skill on a fresh install.
- Any required docs or operator notes are updated.

## Implementation Paths

### Path A — Copy skill into skel and keep workspace copy authoritative (recommended)
1. Copy `/.pi/skills/close-of-day/` into `skel/.pi/skills/close-of-day/`.
2. Verify relative-path references resolve correctly from the skel location.
3. Update any docs that enumerate built-in/skel skills.

**Pros:** Small, low-risk, fast to validate.
**Cons:** Requires explicit future sync if the workspace version evolves.

### Path B — Rework skill packaging/source-of-truth first
1. Introduce a stronger shared-source or packaged-skill flow.
2. Then expose the same skill through skel and/or global install.

**Pros:** Better long-term deduplication story.
**Cons:** Too large for this narrow follow-up.

## Recommended Path

Path A — the user explicitly triaged this as a skel candidate, so the smallest
follow-up is to sync it into skel and validate the seeded path.

## Test Plan

- Verify the skill files exist under `skel/.pi/skills/close-of-day/`.
- Check relative references in `SKILL.md` still resolve correctly.
- Validate a fresh seeded workspace/container would receive the skill.
- Record any required docs updates.

## Definition of Done

- [x] Skill copied into skel
- [x] Seeded-path assumptions verified
- [x] Docs updated if needed
- [x] Evidence recorded in `## Updates`

## Updates

### 2026-03-17 (implementation)
- Lane change: `10-next` → `50-done` after copying `close-of-day` into `skel/.pi/skills/close-of-day/`.
- Promoted dependent support files required for the seeded workflow:
  - copied `situate-daily-notes` into `skel/.pi/skills/situate-daily-notes/`
  - copied `scripts/situate.ts`, `scripts/daily-notes.ts`, and `scripts/lib/chat-session-scope.ts` into `skel/scripts/`
- Hardened `close-of-day.ts` to resolve Piclaw runtime modules from portable paths instead of assuming `/workspace/piclaw/...` source checkout paths.
- Validation:
  - `bun run skel/.pi/skills/close-of-day/close-of-day.ts --help`
  - `bun run skel/scripts/situate.ts --help`
  - `bun run skel/scripts/daily-notes.ts --help`
- Although `situate-daily-notes` did not have its own promotion ticket, it was required to satisfy the close-of-day skill's documented chained-step contract on a fresh seeded install.
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-17
- Created from Adaptive Card triage submission.
- Source submission recorded:
  - `kind: private-skill-skel-triage`
  - `scope: piclaw-private-not-in-skel`
  - `skill: close-of-day`
  - `decision: move-to-skel`
  - `portable: yes`
  - `safe_default: yes`
- No explicit `reason` field was present in the submission payload.
- This ticket exists as the explicit follow-up requested by the card action.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

This ticket records the decision; it does not yet apply the change.

## Links

- `/workspace/.pi/skills/close-of-day/SKILL.md`
- `skel/.pi/skills/`
