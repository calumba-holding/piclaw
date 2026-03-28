---
id: message-timeline-pdf-attachment-previews-do-not-render
title: Message timeline PDF attachment previews do not render
status: done
created: 2026-03-17
updated: 2026-03-17
completed: 2026-03-17
tags:
  - work-item
  - kanban
  - web
  - timeline
  - pdf
  - attachments
owner: pi
---

# Message timeline PDF attachment previews do not render

## Summary

PDF attachment previews are not rendering in the message timeline.

## Updates

### 2026-03-17
- Lane change: `doing` → `done` via triage submission (`action: triage_radio_apply`, `message_timeline_pdf_attachment_previews_do_not_render: done`).
- This ticket is now closed in board triage; timeline PDF attachment preview fix is now expected to piggyback on the attachment modal/PDF viewer fixes already shipped.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

### 2026-03-17
- Lane change: `inbox` → `doing` via triage radio-card submission (`action: triage_radio_apply`).
- Selected decision: `doing` (`message_timeline_pdf_attachment_previews-do-not-render` scope).
- Focus for implementation: align timeline PDF attachment preview behavior with the working editor-pane PDF viewer path and verify in browser.
- Quality: ★★★☆☆ 5/10 (problem: 2, scope: 1, test: 1, deps: 0, risk: 1)

### 2026-03-17
- Ticket created from user report.
- Needs reproduction steps, scope confirmation, and root-cause triage.

## Notes

Likely areas to inspect:
- web timeline rendering pipeline for attachment/content blocks
- PDF preview pane/card integration for timeline posts
- attachment metadata/content block parsing differences between timeline and pane viewers

## Links

- `piclaw/web/src/components/timeline.ts`
- `piclaw/web/src/components/post-content.ts`
- `piclaw/web/src/panes/pdf-viewer-pane.ts`
