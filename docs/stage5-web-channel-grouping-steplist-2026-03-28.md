# Stage 5 execution steplist — web-channel source-tree grouping cleanup

## Purpose

Provide an execution-ready steplist for Stage 5 of the broad filesystem reorg.

## Stage 5 goal

Reduce the flat-root sprawl under `runtime/src/channels/web/` by grouping the
most clearly cohesive files first, without mixing in behavioral refactors.

## Stage 5 target

Primary target:

- shrink the flat root of `runtime/src/channels/web/`

Already-grouped areas to leave structurally intact unless there is a specific
reason otherwise:

- `http/`
- `handlers/`
- `workspace/`
- `terminal/`
- `vnc/`
- `remote-display/`

## Preconditions

- Stages 1–4 of the broad filesystem reorg are landed
- WebChannel split work is considered stabilized enough that Stage 5 can focus
  on grouping rather than inventing new behavior seams
- source-of-truth docs exist:
  - `docs/stage5-web-channel-grouping-inventory-2026-03-28.md`
  - `docs/broad-filesystem-reorg-map-2026-03-28.md`
  - `workitems/10-next/group-web-channel-flat-files.md`

## Step-by-step execution plan

### Step 1 — move only the clearest semantic clusters first

Preferred first tranche:

- `auth/`
- `sse/`
- `cards/`
- `media/`
- `theming/`
- `messaging/`

Avoid widening into ambiguous orchestration/control files in the same first
pass unless the boundaries are already obvious.

### Step 2 — update imports and adjacent tests immediately with each move

For every moved source file:

- update runtime imports
- update test imports
- mirror test structure where it is already straightforward

Do not leave large stale-import cleanup for the end.

### Step 3 — keep it as file moves + import rewrites, not logic churn

Guardrail:

- no new behavior changes unless an import/path fix strictly requires them
- no opportunistic refactors of service logic while moving files

### Step 4 — reassess the remaining flat root after the first tranche

After the obvious groups move, inspect what remains at the web root and decide
whether a second tranche is justified.

This prevents Stage 5 from turning into another catch-all god-ticket.

### Step 5 — validate aggressively

Minimum validation ladder:

1. grep for stale old web-channel paths/imports
2. run the most directly affected focused tests
3. run `bun run lint`
4. run `bun run typecheck`
5. run any import-boundary checks affected by the move

## Candidate first-tranche mapping

### `auth/`

- `auth-endpoints.ts`
- `auth-gateway.ts`
- `auth-runtime.ts`
- `auth.ts`
- `login-command.ts`
- `totp-auth.ts`
- `webauthn-auth.ts`
- `webauthn-enrol-page.ts`

### `sse/`

- `sse.ts`
- `sse-hub.ts`
- `agent-events.ts`
- `session-broadcast-service.ts`

### `cards/`

- `adaptive-card-actions.ts`
- `adaptive-card-side-prompt-service.ts`
- `interaction-service.ts`

### `media/`

- `avatar-service.ts`
- `link-previews.ts`
- `media-service.ts`

### `theming/`

- `ui-bridge.ts`
- `ui-theme-commands.ts`
- `ui-theme-data.ts`

### `messaging/`

- `agent-message-entry-service.ts`
- `agent-message-service.ts`
- `agent-message-store.ts`
- `message-store.ts`
- `message-write-flows.ts`
- `message-processing-storage-service.ts`
- `peer-message-service.ts`

## Success criteria

Stage 5 is successful when:

- the `web/` flat root is materially smaller
- the most obvious capability slices have dedicated directories
- imports/tests/docs are updated consistently
- validation is green
- the remaining root files are a deliberate remainder rather than accidental sprawl
