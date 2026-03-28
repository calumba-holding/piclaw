---
id: improve-adaptive-card-submission-rendering
title: Improve rendering of Adaptive Card submissions in the web timeline
status: done
priority: medium
created: 2026-03-16
updated: 2026-03-17
completed: 2026-03-17
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web
  - adaptive-cards
  - timeline
  - ux
owner: pi
---

# Improve rendering of Adaptive Card submissions in the web timeline

## Summary

Adaptive Card submissions now render as a compact, human-readable receipt in the
web timeline so the key decision values are visible without exposing verbose
payload noise.

This work adds a structured summary section to submission posts that:

- highlights the selected action title at a glance,
- renders key/value fields as compact readable chips,
- preserves compatibility with existing submission payloads,
- keeps detailed fallback compatibility for existing persisted rows.

## Problem Statement

Current card submissions can surface as a plain submission message with dense or
mechanical details such as:

- raw-ish key/value payload echoes
- repetitive card/action metadata
- weak visual distinction between:
  - the original card
  - the user’s submitted response
  - the resulting agent/system follow-up
- poor summarization of the actual chosen action

That makes structured card interactions feel less polished than the rest of the
web timeline, even when the underlying workflow behaves correctly.

## Goals

- Make card submissions easy to scan in the timeline
- Emphasize the user’s actual choice or entered values
- De-emphasize internal transport details
- Preserve enough structure for debugging/auditability
- Keep the result consistent with the existing PiClaw web visual language

## Possible Improvements

- Render a compact, human-readable submission summary instead of dumping raw
  submission details
- Show button/action title prominently (for example: “Submitted: Move to done”)
- Render selected fields as a small fact list or badge set
- Hide or collapse low-level metadata like card ids / internal action type by default
- Visually connect a submission to its source card when possible
- Distinguish completed/cancelled/failed card outcomes more clearly
- Improve spacing, borders, icons, and typography for submission blocks

## Acceptance Criteria

- [x] Adaptive Card submissions are rendered in a more human-readable form than the current baseline
- [x] The main user decision/selection is visible at a glance
- [x] Low-value metadata is reduced, hidden, or visually deprioritized
- [x] Rendering remains compatible with the existing persisted submission payloads
- [x] Failed/invalid card submissions still surface enough detail for troubleshooting
- [x] Regression coverage or fixture coverage exists for the chosen rendering behavior

## Investigation Notes

Areas involved:

- `web/src/ui/adaptive-card-submission.ts`
- `web/src/components/post.ts`
- `web/src/static/css/styles.css`
- `test/web/adaptive-card-submission.test.ts`

## Updates

### 2026-03-17
- Updated helper shape to provide stable compact field summaries and hidden-field count.
- Reworked submission receipt rendering in timeline posts to show:
  - a compact “Submitted” header,
  - action title,
  - top fields as pill-style key/value values,
  - concise fallback summaries.
- Added/expanded regression coverage in `test/web/adaptive-card-submission.test.ts`.

## Notes

- This is a rendering/UX ticket, not a request to redesign Adaptive Card action semantics.
- Kept payload shape unchanged; compatibility with existing stored `adaptive_card_submission`
  blocks is preserved.

## Links

- `workitems/50-done/adaptive-cards-and-btw-side-conversations.md`
- `piclaw/web/src/ui/adaptive-card-submission.ts`
- `piclaw/web/src/components/post.ts`
- `piclaw/test/web/adaptive-card-submission.test.ts`
