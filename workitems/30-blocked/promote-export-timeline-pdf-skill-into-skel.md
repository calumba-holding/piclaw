---
id: promote-export-timeline-pdf-skill-into-skel
title: Promote export-timeline-pdf skill into skel
status: blocked
priority: medium
created: 2026-03-17
updated: 2026-03-28
target_release: next
estimate: S
risk: medium
tags:
  - work-item
  - kanban
  - skills
  - skel
  - piclaw
  - pdf
  - unsupported
owner: pi
---

# Promote export-timeline-pdf skill into skel

## Summary

The private `export-timeline-pdf` skill was previously promoted into `skel`, but that earlier completion is now superseded.

Current conclusion: the PDF export path is **unsupported in this environment** because it depends on server-side components that are not available here. The skill should not be considered a completed/supported default workflow until those server components exist.

Recorded historical triage outcome:
- decision: `move-to-skel`
- reason: `core-workflow`
- portable: `yes`
- safe_default: `yes`

That historical decision is preserved below, but the ticket is now blocked pending the missing server-side pieces.

## Blockers

- The PDF export flow depends on server-side components that are not available in the current environment/runtime.
- Until those components exist, the skill cannot be treated as a supported completed feature.

## Acceptance Criteria

- Server-side components required by timeline PDF export are identified and available.
- `export-timeline-pdf` works end-to-end in the target environment.
- The skill can be honestly documented as supported/default once the runtime dependency gap is closed.

## Implementation Paths

### Path A — Keep blocked/unsupported until server components exist (recommended)
1. Mark the current skill as unsupported in this environment.
2. Preserve the existing files/history for future reactivation.
3. Reopen only when the missing server-side path is implemented.

**Pros:** Honest status, low-risk, preserves audit trail.
**Cons:** Feature remains unavailable.

### Path B — Keep claiming the skill is done and rely on partial/local behavior

**Rejected.** This would misrepresent the current support level and hide the server-component dependency.

## Recommended Path

Path A — block the skill as unsupported until the necessary server-side runtime support exists.

## Test Plan

- Confirm the skill/docs clearly indicate unsupported status in this environment.
- Revisit execution testing only after the missing server-side pieces are implemented.

## Definition of Done

- [ ] Missing server-side components implemented.
- [ ] Skill runs end-to-end successfully.
- [ ] Ticket can move out of blocked with fresh validation evidence.

## Updates

### 2026-03-28
- Lane retained: `30-blocked` via web blocked-card decision.
- Blocked-lane outcome recorded from the adaptive-card submission: **Keep in Blocked**.
- The missing server-side runtime components still appear to be the governing blocker for this workflow in the current environment.

### 2026-03-22
- Lane change: `50-done` → `30-blocked` after re-evaluation.
- Corrected status: the PDF export skill should be treated as unsupported/not-done in this environment because it requires server-side components that are not currently available.
- Historical implementation notes are preserved below for auditability, but they no longer imply current support.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 1, risk: 2)

### 2026-03-17 (historical implementation)
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

This ticket preserves the previous work/history but should no longer be read as “supported and complete” in the current environment.

## Links

- `/workspace/.pi/skills/export-timeline-pdf/SKILL.md`
- `skel/.pi/skills/export-timeline-pdf/`
