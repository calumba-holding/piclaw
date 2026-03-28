---
id: login-command-passthrough
title: Pass /login command through to pi and effect successful logins
status: review
priority: medium
created: 2026-03-11
updated: 2026-03-27
tags:
  - work-item
  - kanban
  - auth
  - web
  - commands
owner: pi
---

# Pass /login command through to pi and effect successful logins

## Summary

Implement and verify the `/login` slash command handoff in the web chat flow so
piclaw routes provider authentication through pi's built-in login/auth storage
flow instead of treating `/login` as a normal chat message.

This ticket is specifically about handing off to pi's provider-auth flow and
surfacing whatever follow-up inputs, login URLs, or prompts that flow requires.
It is not about piclaw's own web/TOTP/passkey session login.

## Desired Behavior

- `/login` is recognized in the web chat slash-command path.
- The command is handed off directly to pi's built-in login/provider-auth flow.
- Any subsequent provider-auth steps are surfaced in the chat/UI as needed
  (for example input prompts, device/login URLs, or confirmation messages).
- After successful provider authentication, the user remains in the same chat view.
- This command is used to handle backend model-provider auth, not web-session auth.

## Acceptance Criteria

- [x] `/login` recognized as a slash command in the web chat flow.
- [x] Command is forwarded to pi's built-in `/login` handler rather than being sent as a normal chat message.
- [x] Any follow-up provider-auth steps required by pi are surfaced via the card-driven login flow.
- [ ] After successful provider authentication, the user stays in the same chat view.
- [x] Scope remains limited to pi/provider-auth integration rather than piclaw's own web auth stack.
- [ ] Error cases handled gracefully for provider-auth failures or cancellations.

## Investigation Needed

- How does pi's built-in `/login` command work? (check pi SDK docs / command registry)
- What follow-up UI/message surfaces does it expect for provider authentication?
- How should provider-auth prompts/URLs be relayed through the web chat flow?

## Updates

### 2026-03-27
- Lane change: `20-doing` → `40-review`.
- Repo-status audit found the implementation present in code:
  - `/login` command registered in `runtime/src/agent-control/command-registry.ts`
  - parser wiring in `runtime/src/agent-control/command-parsers.ts`
  - card-driven provider-auth implementation in `runtime/src/agent-control/handlers/login.ts`
  - web submission routing in `runtime/src/channels/web.ts`
- Updated the ticket summary/criteria to match current reality instead of describing `/login` as entirely unimplemented.
- Remaining review gap: run an end-to-end validation for at least one OAuth/manual-paste flow and one API-key flow, confirming same-chat UX and graceful failure behavior.
- Quality: ★★★★☆ 8/10 (problem: 2, scope: 2, test: 1, deps: 2, risk: 1)

### 2026-03-18 — Refinement complete (8 questions)

**Batch 1–5: Core flow**

| # | Question | Decision |
|---|----------|----------|
| 1 | Provider selection UI | **Hardcoded adaptive card via internal route** (no agent needed) |
| 2 | OAuth callback handling | **Always manual paste** — show auth URL, user pastes redirect URL back |
| 3 | Auth URL presentation | **Card with clickable link + text input field for pasting redirect URL** |
| 4 | Intercept point | **Command parser** (same level as /model, /passkey — server-side, pre-agent) |
| 5 | Progress/error feedback | **Update the existing card in-place** with progress/error state |

**Batch 6–8: API key auth + display**

| # | Question | Decision |
|---|----------|----------|
| 6 | API key entry flow | **Unified card** — same /login card offers both OAuth providers + API key entry |
| 7 | API key security | **Password-masked input field in card** — key sent via card submission, never shown in timeline text |
| 8 | Auth success display | **Update card to completed state** showing provider + auth type (no secrets) |

**Design spec:**

1. `/login` intercepted in piclaw command parser (pre-agent, works without a model)
2. Posts a hardcoded adaptive card via internal route listing:
   - Available OAuth providers (from `authStorage.getOAuthProviders()`)
   - API key entry option per known provider (Anthropic, OpenAI, Azure, etc.)
3. User picks a provider:
   - **OAuth path:** Card updates to show auth URL (clickable) + text input for pasting redirect URL. `authStorage.login(providerId, { onAuth, onManualCodeInput })` called with always-manual callbacks.
   - **API key path:** Card shows password-masked input field. On submit, key stored via `authStorage.set(provider, { type: "api_key", key })`.
4. On success: card transitions to completed state showing provider name + auth type.
5. On error: card shows error state with message.
6. Entire flow is hardcoded cards/messages — no LLM involvement.

**Key pi SDK surface used:**
- `session.modelRegistry.authStorage.getOAuthProviders()` — list OAuth providers
- `session.modelRegistry.authStorage.login(providerId, callbacks)` — OAuth flow
- `session.modelRegistry.authStorage.set(provider, credential)` — store credentials
- `session.modelRegistry.authStorage.get(provider)` — check current auth
- `session.modelRegistry.authStorage.setRuntimeApiKey(provider, key)` — in-memory override

Quality: ★★★★☆ 9/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 1)
- Ready for implementation.

### 2026-03-18
- Lane update confirmed via `triage-doing-blocked` (`loginPassthrough: doing`).

### 2026-03-17
- Moved from `00-inbox` to `20-doing` for active implementation.

### 2026-03-12
- Refined from 5-question pass:
  - scope is web chat slash-command handling only
  - hand off directly to pi's provider-auth flow
  - surface any follow-up provider inputs, login URLs, or prompts through the chat/UI
  - keep the user in the same chat view after success
  - keep scope limited to provider auth rather than piclaw web-session auth

### 2026-03-11
- Created ticket.

## Notes

- This has nothing to do with our own login/TOTP/authn flows.
- This is specifically for backend AI model-provider authentication handled by pi.
- The web chat should hand off immediately and then surface whatever provider-auth inputs, URLs, or confirmations pi emits.
- User stays in the current chat view throughout the flow.

## Links

- `piclaw/piclaw/src/agent-control/command-parsers.ts`
- `piclaw/piclaw/src/agent-control/command-registry.ts`
