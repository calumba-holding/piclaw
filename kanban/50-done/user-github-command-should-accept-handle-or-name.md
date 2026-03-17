---
id: user-github-command-should-accept-handle-or-name
title: /user-github should accept @handle or name instead of requiring URL
status: done
created: 2026-03-17
updated: 2026-03-17
tags:
  - work-item
  - kanban
  - commands
  - github
  - ux
owner: pi
---

# /user-github should accept @handle or name instead of requiring URL

## Summary

The `/user-github` command currently expects a full GitHub URL. Improve command UX so users can pass:
- `@handle` (e.g. `@torvalds`)
- plain handle/name (e.g. `torvalds`)

while preserving URL input support.

## Updates

### 2026-03-17
- Lane change: `inbox` → `doing` via triage submission (`action: triage_radio_apply`, `user_github_command_should_accept_handle_or_name_decision_2: doing`).
- Start scope: parse `/user-github` inputs for URL, `@handle`, and bare handle forms with deterministic validation and clear errors.
- Added deterministic validation to `piclaw/src/agent-control/handlers/user.ts`, preserved URL path handling, and clarified invalid-input messaging with examples.
- Added coverage in `piclaw/test/agent-control/user-handler.test.ts` and `piclaw/test/agent-control/parser.test.ts`.
- Updated `/commands` help text in `piclaw/src/agent-control/command-registry.ts` to advertise handle or URL input.
- Quality: ★★★☆☆ 6/10 (problem: 1, scope: 3, test: 2, deps: 0, risk: 1)

### 2026-03-17
- Ticket created from user request.
- Scope: input parsing + normalization + help text updates.

## Notes

Acceptance criteria:
- `/user-github https://github.com/owner` still works.
- `/user-github @owner` works.
- `/user-github owner` works.
- Invalid/ambiguous inputs return a clear error with examples.
- Command help/documentation reflects all accepted forms.

## Links

- `piclaw/src/agent-control/handlers/user.ts`
- `piclaw/src/agent-control/command-parsers.ts`
- `piclaw/src/agent-control/command-registry.ts`
- `piclaw/test/agent-control/user-handler.test.ts`
- `piclaw/test/agent-control/parser.test.ts`
