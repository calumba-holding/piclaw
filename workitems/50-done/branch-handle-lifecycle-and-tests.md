---
id: branch-handle-lifecycle-and-tests
title: Complete branch handle lifecycle and remove surplus display names
status: done
priority: high
created: 2026-03-17
updated: 2026-03-24
completed: 2026-03-24
target_release: next
estimate: M
risk: medium
tags:
  - work-item
  - kanban
  - web
  - sessions
  - branching
  - ux
  - sqlite
  - testing
owner: pi
---

# Complete branch handle lifecycle and remove surplus display names

## Summary

Branch lifecycle should be defined entirely around the `@agent` handle.
We no longer care about a separate branch `display_name`, and any leftover
branch-identity UX/API/DB surface that still treats `display_name` as a
meaningful concept should be removed or collapsed.

Already present today:

- branch rename APIs and DB support
- archive/prune support
- archived-branch restore support
- stable branch-row identity across archive/restore
- basic session-manager UI wiring for rename/prune/restore

What remains is to make the feature set coherent around handles only:

1. remove surplus branch `display_name` usage,
2. make rename/reuse/restore flows handle-first,
3. document and surface handle collision behavior,
4. improve lifecycle labels in the UI,
5. and add DB/API/web tests that lock the behavior down.

## Product decision

The branch identity contract is now:

- the branch identity is its `@agent` handle
- there is no separate user-meaningful branch `display_name`
- if any internal/session naming remains for technical reasons, it should not be
  treated as a parallel branch-identity field in product UX/API design

## Why

The current implementation still carries older dual-field assumptions:

- rename paths still mention both `agent_name` and `display_name`
- DB rows still store `display_name`
- some UI logic derives handle from a prompted label
- some session naming behavior still mirrors branch identity concerns

That creates needless ambiguity. If the product only cares about handles, we
should remove the extra identity layer instead of continuing to polish it.

## Current implementation already in place

### Backend / DB
- `runtime/src/db/chat-branches.ts`
  - `renameChatBranchIdentity(...)`
  - `archiveChatBranch(...)`
  - `restoreChatBranchIdentity(...)`
- `runtime/src/agent-pool.ts`
  - `renameChatBranch(...)`
  - `pruneChatBranch(...)`
  - `restoreChatBranch(...)`
  - `listKnownChats(..., { includeArchived })`

### Web API
- `GET /agent/branches`
- `POST /agent/branch-rename`
- `POST /agent/branch-prune`
- `POST /agent/branch-restore`

### Web UI
- `runtime/web/src/app.ts`
  - rename current branch
  - prune current branch
  - restore archived branch
- `runtime/web/src/components/compose-box.ts`
  - session manager popup already shows archived rows
  - archived rows can be restored
  - active rows can be switched to

## What is still missing

### 1) Handle-only contract cleanup
Current state:
- branch lifecycle code still carries both `agent_name` and `display_name`
- some UI rename flows start from a label and derive a handle from it

Missing:
- a handle-only product contract across DB/API/UI where appropriate
- removal of surplus `display_name` handling from branch lifecycle surfaces
- a decision on whether `display_name` is:
  - deleted from the branch registry entirely,
  - kept only as legacy/internal migration baggage,
  - or ignored but not exposed

### 2) Real rename UX for handles
Current state:
- rename uses a simple `window.prompt(...)`

Missing:
- a proper handle edit flow
- validation feedback before submit
- clearer rules around normalization and invalid handles
- no label-derived rename logic

### 3) Explicit archived handle reuse flow
Current state:
- archived branches can be restored from the session manager
- active branches can be renamed manually

Missing:
- explicit “reuse old handle” flow
- clear distinction between:
  - new fork
  - restore archived branch
  - rename active branch to an old handle
- restore outcome messaging when the requested old handle is no longer available

### 4) Collision policy surfaced as product behavior
Current state:
- active-handle collisions are rejected on rename
- archived restore auto-suffixes when needed
- uniqueness behavior is implemented in code

Missing:
- documented rules for:
  - active vs active collisions
  - active vs archived collisions
  - restore-time collisions
- clear UI feedback when restore changes the final handle
- explicit copy explaining why a requested handle changed

### 5) Lifecycle labels and picker clarity
Current state:
- some UI labels show `active`
- archived rows are visible in the session manager popup

Missing:
- consistent lifecycle badges/labels across session/branch surfaces
- a clearer `current / active / archived / restored` model, if needed
- normal picker/session flows that make archived state obvious instead of buried

### 6) Dedicated tests
Current state:
- branch-specific tests do not appear to exist yet for this slice

Missing:
- DB tests for rename/archive/restore/collision behavior
- handler/API tests for branch endpoints
- web tests for session manager rename/restore/prune flows

## Product contract to define

We should explicitly define and ship answers to these:

- Is `display_name` removed from the branch registry/API, or merely ignored?
- If some internal session title remains, does it have any user-facing branch meaning? (Prefer: no.)
- When restoring an archived branch whose old handle is now taken, do we:
  - auto-suffix silently,
  - auto-suffix with notice,
  - or block and force user choice?
- Can an active branch explicitly adopt the handle of an archived branch, or
  should the user restore that archived branch instead?
- Which surfaces show archived branches:
  - session manager only,
  - branch picker,
  - both?

## Acceptance Criteria

- [x] Remove or explicitly deprecate surplus branch `display_name` usage.
- [x] Define a handle-only branch identity contract.
- [x] Replace the prompt-based rename flow with a proper handle edit UI.
- [x] Make archived-branch restore/reuse a clear handle-first workflow.
- [x] Document and surface handle-collision rules in the UI and implementation.
- [x] Make lifecycle state obvious in the session/branch picker surfaces.
- [x] Add DB tests covering rename/archive/restore/collision rules.
- [x] Add API/handler tests for branch lifecycle endpoints.
- [x] Add web/UI tests for rename/prune/restore flows.
- [x] Confirm no regressions in `@agent` routing, branch switching, or queue/session behavior.

## Implementation notes

### Recommended scope
Treat this as a completion/simplification ticket, not a foundational architecture ticket.

### Likely implementation slices

#### Slice A — remove surplus display-name plumbing
- audit branch lifecycle codepaths that accept/store/emit `display_name`
- remove it where it is purely branch-identity baggage
- keep migration compatibility only where necessary
- ensure UI copy and payloads talk about handles, not names

#### Slice B — handle rename dialog / form
- replace `window.prompt(...)`
- show current handle
- validate next handle before submit
- explain normalization/collision outcome clearly

#### Slice C — restore/reuse lifecycle polish
- clarify archived rows in the session manager
- decide whether “reuse old handle” is:
  - restore that archived branch,
  - or adopt its handle onto another active branch
- make restore outcome visible when handle suffixing occurs

#### Slice D — tests
- DB tests for branch handle semantics
- API tests for rename/prune/restore endpoints
- web tests for session manager actions and state labels

## Test Plan

- [x] Add DB coverage for:
  - rename with unique handle
  - rename collision against active handle
  - archive + restore preserving branch identity
  - restore with handle collision causing deterministic suffixing
  - legacy compatibility if `display_name` fields remain during migration
- [x] Add endpoint coverage for:
  - `/agent/branch-rename`
  - `/agent/branch-prune`
  - `/agent/branch-restore`
- [x] Add web tests for:
  - rename current branch handle
  - prune current branch
  - restore archived branch from session manager
  - session list labeling for archived/active/current branches
- [x] Run `cd /workspace/piclaw && bun run quality`

## Definition of Done

- [x] Branch lifecycle is coherent around handles only.
- [x] Surplus branch `display_name` usage is removed or explicitly legacy-only.
- [x] Rename/reuse/restore behavior is explicitly defined.
- [x] Archived-handle reuse is discoverable and deterministic.
- [x] Automated tests exist for the behavior we rely on.

## Updates

### 2026-03-24
- Lane change: doing → done after landing the handle-only lifecycle cleanup and verification.
- Replaced the old prompt-based rename flow with an in-app handle form that validates drafts before submit and explains normalization.
- Centralized lifecycle labels/restore messaging in `runtime/web/src/ui/branch-lifecycle.ts` and reused them in the session manager + chat window branch picker.
- Removed surplus fork API `display_name` plumbing, kept branch records legacy-compatible with `display_name: null`, and refreshed DB migration coverage.
- Evidence: `bun test runtime/test/web/branch-lifecycle.test.ts runtime/test/web/compose-session-switcher.test.ts runtime/test/db/db.test.ts runtime/test/channels/web/web-channel.test.ts runtime/test/channels/web/http-dispatch-agent.test.ts` (97 pass, 0 fail); `bun run quality` (pass).
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-21
- Re-scoped from the older branch identity ticket to reflect current product direction.
- Explicitly narrowed scope to `@agent` handles only.
- Added removal/deprecation of surplus branch `display_name` usage as part of the work.
- Confirmed that rename/prune/restore mechanics already exist across DB,
  agent-pool, API, and UI.
- Remaining work is primarily contract cleanup, UX completion, collision-policy clarity, and test coverage.

### 2026-03-17
- Created as a focused child ticket from the umbrella
  `parallel-web-chat-windows-with-session-forks` to isolate one concrete user
  need: rename to old tree branch identities and intentionally reuse archived
  branches.

## Links

- `workitems/20-doing/parallel-web-chat-windows-with-session-forks.md`
- `runtime/src/db/chat-branches.ts`
- `runtime/src/agent-pool.ts`
- `runtime/src/channels/web.ts`
- `runtime/web/src/app.ts`
- `runtime/web/src/components/compose-box.ts`
