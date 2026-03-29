---
id: adaptive-card-submissions-outside-web-default-to-default-session
title: Adaptive card submissions outside web must not fall back to the default session
status: doing
priority: high
created: 2026-03-28
updated: 2026-03-28
target_release: next
estimate: M
risk: high
tags:
  - work-item
  - kanban
  - adaptive-cards
  - routing
  - chat
  - session
  - ux
owner: pi
blocked-by: []
---

# Adaptive card submissions outside web must not fall back to the default session

## Summary

There is a major UX/routing bug in adaptive card submission handling:

When an Adaptive Card is submitted from outside the web UI, the resulting
submission/message can land in the default session instead of the originating
chat/session.

This breaks the core expectation that card actions stay attached to the same
conversation context that launched the card.

## Why this matters

- card actions can appear to "jump chats"
- follow-up state is written to the wrong session
- the originating user/channel does not see the result where they triggered it
- the default session gets polluted with unrelated submissions
- any card flow that relies on chat-local state becomes unreliable outside web

## Desired behavior

- Adaptive Card submissions always resolve back to the originating chat/session.
- Non-web channels must preserve the original chat/session identity when the
  submission is processed.
- Falling back to the default session must only happen when there is truly no
  originating chat identity available, and that case should be explicit.
- Submission/rendered results should appear in the same conversation that owns
  the card.

## Acceptance Criteria

- [ ] Adaptive Card submissions from non-web channels are routed to the originating chat/session.
- [ ] The default session is not used when valid originating chat/session metadata exists.
- [ ] Submission handling preserves enough metadata on the card/message to recover the correct target chat.
- [ ] At least one regression test covers non-web submission routing so the bug does not silently return.
- [ ] Existing web Adaptive Card behavior remains unchanged.

## Investigation hints

Likely surfaces to inspect:

- Adaptive Card submission routing/handlers
- card/message metadata persistence
- chat/session resolution for submissions initiated outside `web`
- any code paths that silently default to `web:default` / default-session creation
- prior autoresearch/card flows that were expected to post back to the originating chat

## Updates

### 2026-03-28
- Created from a major UX bug report: submitting Adaptive Cards outside the web UI currently makes the submission appear in the default session.
- Moved directly to `20-doing` because this is a cross-chat/session integrity bug rather than a speculative enhancement.

## Links

- `workitems/50-done/adaptive-cards-and-btw-side-conversations.md`
- `workitems/20-doing/login-command-passthrough.md`
