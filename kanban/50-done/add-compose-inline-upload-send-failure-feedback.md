---
id: add-compose-inline-upload-send-failure-feedback
title: Show inline compose upload/send failure feedback
status: done
priority: low
created: 2026-03-17
updated: 2026-03-17
target_release: next
estimate: S
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - compose
owner: pi
---

# Show inline compose upload/send failure feedback

## Summary

When media upload or message send fails, compose can appear unchanged without clear in-place feedback, requiring users to infer failure from timeline behavior.

Add compact inline error status inside compose (and reuse existing intent toast path) while keeping the draft available for retry.

## Acceptance Criteria

- [x] Failed upload or send operations display a visible compose-local error message.
- [x] The error message includes a concise reason (server message when available).
- [x] Draft message and attachment pills are kept/restored so retry is possible.
- [x] On success, the error state is cleared.
- [x] No blocking of typing during compose retry.

## Links

- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/static/css/styles.css`
