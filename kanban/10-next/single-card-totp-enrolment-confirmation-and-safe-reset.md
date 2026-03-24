---
id: single-card-totp-enrolment-confirmation-and-safe-reset
title: Single-card TOTP enrolment/confirmation and safe reset flow
status: next
priority: high
created: 2026-03-24
updated: 2026-03-24
target_release: next
estimate: L
risk: medium
tags:
  - work-item
  - kanban
  - web
  - auth
  - totp
  - passkey
owner: pi
---

# Single-card TOTP enrolment/confirmation and safe reset flow

## Summary

Replace the current `/totp` behaviour with a commit-on-success flow that uses a single Adaptive Card to both display TOTP enrolment data and collect the confirmation code.

Required product behaviour:

- `/totp` on first setup must generate a new candidate secret and show one card containing:
  - QR code
  - issuer/label
  - manual entry code
  - 6-digit confirmation input
  - submit action
- The secret must **not** be committed unless the submitted code verifies against that candidate secret.
- After card submission, the user must receive explicit feedback indicating whether code validation succeeded or failed and what state changes were performed (for example: secret committed, sessions invalidated, current browser re-authenticated, or no changes made).
- `/totp` when a secret already exists must show the existing secret in the same card shape so the user can add a secondary device and confirm it works.
- `/totp reset <current-code>` must:
  1. verify the current active code first,
  2. generate a new candidate secret,
  3. show the same single-card QR/manual/confirmation UI for the new secret,
  4. commit the new secret **only if** confirmation against the new secret succeeds,
  5. invalidate existing web sessions only after successful confirmation.
- If setup/reset confirmation fails, **nothing is changed**.
- Passkey/WebAuthn enrolment remains tied to a valid TOTP-authenticated session, so a reset must not leave the user unable to re-establish that session after a successful confirmation.

Explicit non-goals for this ticket:

- No new database table for pending TOTP enrolments.
- No two-card setup/confirm flow.
- No silent secret commit before confirmation.
- No forced passkey deletion as part of TOTP reset.

## Acceptance Criteria

- [ ] `/totp` with no existing secret returns a single Adaptive Card with QR, manual entry code, confirmation input, and submit action.
- [ ] Every TOTP card submission returns explicit user-visible feedback describing validation outcome and resulting state changes.
- [ ] Submitting a valid confirmation code for first setup commits the generated secret and establishes a usable TOTP-authenticated session for the current browser.
- [ ] Submitting an invalid confirmation code for first setup leaves `WEB_TOTP_SECRET` unchanged and does not enable TOTP, and the user is told that no changes were made.
- [ ] `/totp` with an existing secret returns the same single-card flow using the current secret for secondary-device setup.
- [ ] Secondary-device confirmation success does not rotate or otherwise change the active secret, and the user is told that device validation succeeded with no secret change.
- [ ] `/totp reset <current-code>` rejects immediately when the current code is missing or invalid.
- [ ] `/totp reset <current-code>` with a valid current code returns a single Adaptive Card showing a **new** QR/manual code plus confirmation input.
- [ ] Reset confirmation success commits the new secret, invalidates old web sessions, keeps the current browser able to continue/re-login without being stranded mid-flow, and clearly reports those changes back to the user.
- [ ] Reset confirmation failure leaves the old secret and current sessions intact, and the user is told that validation failed and nothing changed.
- [ ] Existing `/passkey enrol` gating still requires a TOTP-authenticated session after the new flow lands.
- [ ] `/commands` and `/totp` help text accurately describe first setup, secondary-device setup, and reset semantics.
- [ ] Focused tests cover command parsing, handler behaviour, adaptive-card submission handling, and web auth/session consequences.

## Implementation Paths

### Path A — Signed single-card candidate flow (recommended)
1. Extend `/totp` handler output so it returns one adaptive card containing QR, issuer/label, manual code, a 6-digit confirmation input, and a submit action.
2. Include flow metadata in submit data (`setup` | `secondary` | `reset`) plus a server-verifiable integrity payload for the candidate secret.
3. Route TOTP card submissions through the adaptive-card submit path in `runtime/src/channels/web.ts`, similar to the existing login-card flow.
4. On submit, verify the entered code against the displayed secret, then commit only on success.
5. Return clear post-submit feedback for both success and failure, including whether any secret/session changes were applied.
6. For reset, verify old code before card creation, and invalidate existing sessions only after new-secret confirmation succeeds.

**Pros:** matches requested UX exactly; avoids a DB table; survives normal card lifecycle without long-lived server-side pending state; keeps first setup, secondary setup, and reset on one path.

**Cons:** requires careful payload signing/integrity checks; needs disciplined submit-path logic so secrets are not accepted from tampered payloads.

### Path B — In-memory pending candidate registry
1. Generate a candidate secret and store it in process memory.
2. Return a card containing only a lookup token.
3. On submit, resolve the token from memory and verify the entered TOTP code.

**Pros:** simpler submit payload; no DB schema changes.

**Cons:** fragile across reloads/restarts; cards can become orphaned; adds process-lifetime state that is harder to reason about and test.

## Recommended Path

Choose **Path A** because it satisfies the single-card UX while avoiding both a database table and fragile in-memory pending state.

## Risks and Mitigations

| Risk | Impact | Mitigation |
|---|---|---|
| Tampered card payload causes secret misuse | High | Use a server-verifiable integrity/signature check and reject modified payloads |
| Reset locks the user out too early | High | Only invalidate sessions after successful confirmation of the new secret |
| Current browser loses auth after secret change | Medium | Explicitly issue/refresh a valid TOTP-authenticated session for the confirming browser |
| WebAuthn enrolment gate regresses | Medium | Add regression tests for TOTP-session-gated passkey enrolment |
| `WebAuthGateway` uses stale config snapshot | Medium | Audit whether live secret updates are observed and add a refresh/read-live path if required |

## Test Plan

- [ ] Unit tests written for new/changed logic (file paths or describe blocks listed)
- [ ] All existing tests pass (`bun run test` or focused equivalent during development, full gate before review)
- [ ] Type check clean (`bun run typecheck`)
- [ ] Edge cases and error paths covered (invalid input, exceptions, empty state, tampered payload)
- [ ] Test evidence recorded in `## Updates` (commit hash, pass/fail count)
- [ ] All exported symbols have JSDoc (`grep -rn 'export ' src/ | grep -v '/**'` returns zero new gaps)
- [ ] Interface/type properties documented
- [ ] Public class methods documented

### Unit

- **Parser:** `runtime/test/agent-control/parser.test.ts`
  - `/totp`
  - `/totp enrol`
  - `/totp reset <code>`
- **Handler:** `runtime/test/agent-control/passkey-totp-handler.test.ts`
  - first setup returns single-card response instead of immediate commit
  - secondary-device flow uses existing secret
  - reset requires valid old code before card creation
  - failed final confirmation does not commit the new secret
- **Card helpers / integrity logic:** add focused tests for any TOTP card payload signer/verifier helper introduced
- **Adaptive-card helpers:** `runtime/test/channels/web/adaptive-card-actions.test.ts`
  - sanitize/submit behaviour for TOTP card data
  - tampered/expired/invalid candidate payload is rejected

### Integration

- **Web channel:** `runtime/test/channels/web/web-channel.test.ts`
  - submitting the TOTP card commits first-setup secret only on valid confirmation
  - invalid confirmation leaves state unchanged
  - success/failure responses include clear user-visible validation/change feedback
  - reset success rotates secret and invalidates sessions only after new-secret confirmation
  - reset failure preserves old secret and current sessions
- **TOTP auth:** `runtime/test/channels/web/totp-auth.test.ts`
  - committed secret authenticates successfully after setup/reset
  - confirming browser receives or retains a usable TOTP-authenticated session as intended
- **Passkey gating:** add/update auth route tests if touched so `/passkey enrol` and WebAuthn enrolment still require TOTP-authenticated context

### Production / Manual

1. Start from no TOTP secret.
2. Run `/totp` in web UI.
3. Scan QR and confirm from the same card.
4. Verify TOTP login works.
5. Run `/totp` again and add a second device using the same card shape.
6. Verify the active secret does not rotate.
7. Run `/totp reset <current-code>`.
8. Verify the returned card shows a new QR/manual code and confirmation input.
9. Submit a wrong new-secret code and verify nothing changes.
10. Submit a correct new-secret code and verify rotation/session invalidation happens only then.
11. Verify the UI reports exactly what happened after each submission attempt (validation success/failure, secret committed or unchanged, sessions invalidated or unchanged).
12. Verify passkey enrol still works from a valid TOTP-authenticated context after successful confirmation/reset.

## Definition of Done

- [ ] All acceptance criteria satisfied and verified
- [ ] Tests added or updated — passing locally (`bun run test`)
- [ ] Type check clean (`bun run typecheck`)
- [ ] Docs and notes updated with links to ticket
- [ ] Operational impact assessed (config changes, migrations, restarts)
- [ ] Follow-up tickets created for deferred scope
- [ ] Update history complete with evidence
- [ ] Quality score ≥ 9 recorded in final update
- [ ] Ticket front matter updated (`status`, `updated`, `completed`)
- [ ] Ticket moved to `50-done/`

## Updates

### 2026-03-24
- Created in `10-next` as an implementation-ready auth ticket.
- Refined to match the kanban skill structure: explicit implementation paths, recommended path, risks/mitigations, gated test plan, and standard definition-of-done checklist.
- Captures the agreed product flow: one card for display + confirmation, commit-on-success only, and safe reset semantics.
- Explicitly records the constraint that no DB table should be introduced for pending TOTP enrolments.
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

## Notes

- The current partial `/totp reset` work already covers command parsing/type plumbing and config persistence, but its handler semantics must be revised to avoid committing before the final confirmation step.
- Existing adaptive-card submit plumbing in `runtime/src/channels/web.ts` should likely be extended with a TOTP-specific intent similar to the login card flow.
- Because `WebChannel` currently snapshots auth config at construction, any change that needs the current browser to remain usable after confirmation/reset should verify whether the auth gateway reads the live secret or needs a lightweight refresh path.
- Be careful to preserve existing API/contract shapes unless a small additive change is clearly contained to the adaptive-card path.

## Links

- `runtime/src/agent-control/handlers/totp.ts`
- `runtime/src/agent-control/command-parsers.ts`
- `runtime/src/agent-control/agent-control-types.ts`
- `runtime/src/agent-control/command-registry.ts`
- `runtime/src/channels/web.ts`
- `runtime/src/channels/web/adaptive-card-actions.ts`
- `runtime/src/channels/web/auth-gateway.ts`
- `runtime/src/channels/web/session-auth.ts`
- `runtime/src/agent-control/handlers/passkey.ts`
- `runtime/test/agent-control/passkey-totp-handler.test.ts`
- `runtime/test/channels/web/web-channel.test.ts`
- `runtime/test/channels/web/totp-auth.test.ts`
