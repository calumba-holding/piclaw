# Stage 5 web-channel grouping inventory — 2026-03-28

## Purpose

Capture the current `runtime/src/channels/web/` surface so Stage 5 of the broad
filesystem reorg can work from current counts instead of the older 56-file
snapshot.

## Current structure

Measured on 2026-03-28:

- `runtime/src/channels/web/` — **73 flat files**
- `runtime/src/channels/web/http/` — **21 files**
- `runtime/src/channels/web/handlers/` — **5 files**
- `runtime/src/channels/web/workspace/` — **9 files**
- `runtime/src/channels/web/terminal/` — **1 file**
- `runtime/src/channels/web/vnc/` — **1 file**
- `runtime/src/channels/web/remote-display/` — **1 file**

This means the existing `group-web-channel-flat-files` ticket is still valid,
but its older 56-file number is stale.

## Execution update — two manual tranches landed

Two manual Stage 5 tranches have now landed in code.

### First tranche

Moved source clusters:

- `auth/`
- `sse/`
- `cards/`
- `media/`
- `theming/`
- `messaging/`

That first tranche reduced the flat root from 73 files to 47 files.

### Second tranche

Expanded the grouped layout with additional obvious support areas:

- more auth support moved under `auth/`
- a new `agent/` directory for agent/status/control-plane support files
- fallback `theme.ts` moved under `theming/`

Current post-move flat-root count:

- `runtime/src/channels/web/` — **32 flat files**

That is a meaningful reduction from the 73-file starting point, while still
leaving a deliberate later-tranche remainder for the more ambiguous lifecycle,
endpoint, and routing files.

## Stable existing grouped areas

Already-grouped subtrees that should remain conceptually separate from the flat
root cleanup:

- `http/`
- `handlers/`
- `workspace/`
- `terminal/`
- `vnc/`
- `remote-display/`

Stage 5 is primarily about shrinking the remaining flat root surface.

## Candidate grouping clusters from the flat root

### 1. `auth/`

Likely auth-focused files:

- `auth-endpoints.ts`
- `auth-gateway.ts`
- `auth-runtime.ts`
- `auth.ts`
- `totp-auth.ts`
- `webauthn-auth.ts`
- `webauthn-enrol-page.ts`

Why this cluster is attractive:

- semantically cohesive
- path intent is obvious
- mostly pure import-rewrite risk

### 2. `sse/`

Likely SSE/event-stream files:

- `sse.ts`
- `sse-hub.ts`
- `agent-events.ts`
- `session-broadcast-service.ts`

Why this cluster is attractive:

- clear event-stream boundary
- low ambiguity relative to other root files

### 3. `cards/`

Likely adaptive-card / interaction files:

- `adaptive-card-actions.ts`
- `adaptive-card-side-prompt-service.ts`
- `interaction-service.ts`

Why this cluster is attractive:

- already reads like a focused capability slice
- aligns with the broad reorg map’s earlier `cards/` direction

### 4. `media/`

Likely media/preview files:

- `avatar-service.ts`
- `link-previews.ts`
- `media-service.ts`

Why this cluster is attractive:

- focused capability surface
- low naming ambiguity

### 5. `theming/`

Likely theme/UI bridge files:

- `ui-bridge.ts`
- `ui-theme-commands.ts`
- `ui-theme-data.ts`

Why this cluster is attractive:

- small, coherent grouping
- clearly not part of auth/messaging/workspace

### 6. `messaging/`

Likely message-flow files:

- `agent-message-entry-service.ts`
- `agent-message-service.ts`
- `agent-message-store.ts`
- `message-store.ts`
- `message-write-flows.ts`
- `message-processing-storage-service.ts`
- `peer-message-service.ts`

Why this cluster is attractive:

- high semantic cohesion
- likely to pay off quickly in navigation clarity

## High-ambiguity remainder after the obvious clusters

After the clusters above, the remaining flat files are more mixed and likely
need a second pass or narrower child batches. These likely include:

- control-plane / session orchestration
- follow-up / queue / special wrapper services
- channel endpoint context helpers
- request routing adjuncts that are not already under `http/`
- runtime lifecycle glue that still belongs at the web root

Stage 5 should assume the obvious clusters can land first without requiring the
entire remainder to move in one shot.

## Recommended Stage 5 posture

### Safe first tranche

Prefer moving these first:

- `auth/`
- `sse/`
- `cards/`
- `media/`
- `theming/`
- `messaging/`

### Deliberate second tranche

Re-evaluate the remaining root files after the first tranche lands, then decide
whether additional directories are justified.

## Success signal for Stage 5

A good Stage 5 landing should materially reduce the flat root count and leave
`runtime/src/channels/web/` easier to scan, even if the final root count is
reached in more than one commit.

## Related files

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `workitems/10-next/group-web-channel-flat-files.md`
- `workitems/20-doing/plan-broad-filesystem-reorg-from-audit.md`
