# Autoresearch: continue-decompose-web-app-shell

## Objective
Continue decomposing `runtime/web/src/app.ts` into bounded behavior seams while preserving UX semantics and payload shapes. This tranche targets active-branch roster shaping (normalization, merge precedence, and stable sorting) used by session/branch state refresh.

## Metrics
- **Primary**: `seam_score` (unitless, higher is better) — structural completion for the extracted active-branch roster seam
- **Secondary**: `targeted_test_ms` (ms, lower is better) — focused web shell test runtime

## How to Run
`./autoresearch.sh` — runs focused web tests and emits `METRIC` lines.

`./autoresearch.checks.sh` — runs `build:web`, `lint`, `typecheck`, and `check:stale-dist`.

## Files in Scope
- `runtime/web/src/app.ts` — authenticated web shell orchestration, currently owns roster merge/sort logic
- `runtime/web/src/ui/app-chat-agents.ts` — typed helper seam for active/branch roster normalization + merge ordering
- `runtime/test/web/app-chat-agents.test.ts` — focused seam tests
- Existing focused web seam tests under `runtime/test/web/`

## Off Limits
- Runtime/backend services and protocol contracts
- Auth/login flows
- Payload shape rewrites for queue/pane/extension surfaces
- Broad UI architecture changes

## Constraints
- Keep slices small and mergeable
- Preserve roster behavior and branch/session UX ordering semantics
- Keep newly extracted helpers in TypeScript (`.ts`)
- No new dependencies
- Keep focused web tests green and pass `build:web`, `lint`, `typecheck`, `check:stale-dist`

## What's Been Tried
- Prior tranches extracted typed seams for shell state, branch actions, window actions, browser events, pane state, chat-pane state, extension status, follow-up queue, floating widget, and agent previews.
- Baseline in this worktree initially failed `build:web` checks due a missing `beautiful-mermaid` package in `node_modules`; installing it locally (`npm install --no-save beautiful-mermaid@1.1.3`) restored full checks.
- Extracted active/branch roster normalization + merge/sort behavior from `app.ts` into typed `runtime/web/src/ui/app-chat-agents.ts`.
- `refreshActiveChatAgents` now delegates filtering + merge precedence + ordering to helpers (`normalizeActiveChatRows`, `mergeActiveAndBranchChats`), and `refreshCurrentChatBranches` delegates row filtering to `normalizeCurrentRootBranchRows`.
- Added focused seam coverage in `runtime/test/web/app-chat-agents.test.ts` for filtering rules, empty-branch fallback behavior, merge precedence, `is_active` nullish fallback semantics, and current/archived/activity sorting order.
