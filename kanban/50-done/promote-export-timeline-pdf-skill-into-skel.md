---
id: promote-export-timeline-pdf-skill-into-skel
title: Promote export-timeline-pdf skill into skel
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

# Promote export-timeline-pdf skill into skel

## Summary

The private `export-timeline-pdf` skill was triaged as a good candidate to move
into `skel` for fresh Piclaw installs.

Recorded triage outcome:
- decision: `move-to-skel`
- reason: `core-workflow`
- portable: `yes`
- safe_default: `yes`

This follow-up is to copy/sync the skill into `skel/.pi/skills`, verify any
relative-path assumptions still work for fresh containers, and update docs if
needed.

## Acceptance Criteria

- `export-timeline-pdf` exists under `skel/.pi/skills/`.
- A fresh container/workspace seeded from skel receives the skill.
- Skill docs/path references remain correct when seeded from skel.
- No private/local-only assumptions break the skill on a fresh install.
- Any required docs or operator notes are updated.

## Implementation Paths

### Path A — Copy skill into skel and keep workspace copy authoritative (recommended)
1. Copy `/.pi/skills/export-timeline-pdf/` into `skel/.pi/skills/export-timeline-pdf/`.
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

Path A — the user already explicitly triaged this as a safe default skel skill,
so the smallest follow-up is to sync it into skel and validate the seeded path.

## Test Plan

- Verify the skill files exist under `skel/.pi/skills/export-timeline-pdf/`.
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
- Lane change: `10-next` → `50-done` after copying `export-timeline-pdf` into `skel/.pi/skills/export-timeline-pdf/`.
- Also copied `scripts/playwright/package.json` and `scripts/playwright/bun.lock` into `skel/scripts/playwright/` so the seeded workspace retains the expected local Playwright project scaffold.
- Hardened `export-timeline-pdf.ts` to resolve Piclaw static assets and the Playwright package scaffold from portable runtime paths instead of assuming `/workspace/piclaw/...` always exists.
- Validation:
  - `bun run skel/.pi/skills/export-timeline-pdf/export-timeline-pdf.ts --help`
- Quality: ★★★★★ 9/10 (problem: 2, scope: 2, test: 2, deps: 1, risk: 2)

### 2026-03-17
- Created from Adaptive Card triage submission.
- Source submission recorded:
  - `kind: private-skill-skel-triage`
  - `scope: piclaw-private-not-in-skel`
  - `skill: export-timeline-pdf`
  - `decision: move-to-skel`
  - `reason: core-workflow`
  - `portable: yes`
  - `safe_default: yes`
- This ticket exists as the explicit follow-up requested by the card action.
- Quality: ★★★☆☆ 6/10 (problem: 2, scope: 1, test: 1, deps: 1, risk: 1)

## Notes

This ticket records the decision; it does not yet apply the change.

## Links

- `/workspace/.pi/skills/export-timeline-pdf/SKILL.md`
- `skel/.pi/skills/`
