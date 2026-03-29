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

## Execution update — three manual tranches landed

Three manual Stage 5 tranches have now landed in code.

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

That second tranche reduced the flat root from 47 files to 32 files.

### Third tranche

Grouped the next clear structural seams:

- endpoint/context files under `endpoints/`
- runtime/follow-up/state files under `runtime/`
- WebChannel constructor/contracts/surface files under `core/`

Current post-move flat-root count:

- `runtime/src/channels/web/` — **12 flat files**

This clears the original acceptance target of 15 or fewer files at the web
root while preserving a deliberate small remainder for still-central files like
routing, post/timeline writes, and server lifecycle glue.

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

## Deliberate remainder after the landed tranches

After the three landed tranches, the remaining flat files are now the smaller
set that still read reasonably as top-level web-channel coordinator support,
including things like:

- request routing glue
- post/timeline write surfaces
- server lifecycle / transport glue
- a few compact utility modules still central to the root scan

At this point the broad flattening goal has been met without forcing every last
file into a subdirectory for its own sake.

## Recommended Stage 5 posture

### Safe first tranche

Prefer moving these first:

- `auth/`
- `sse/`
- `cards/`
- `media/`
- `theming/`
- `messaging/`

### Deliberate later tranches

The second and third tranches were then used to group the next clearest support
seams without forcing the final small remainder into artificial buckets.

## Success signal for Stage 5

A good Stage 5 landing materially reduces the flat root count and leaves
`runtime/src/channels/web/` easier to scan.

That success signal is now satisfied: the flat root dropped from 73 files to 12
across three reviewable manual tranches.

## Related files

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `workitems/40-review/group-web-channel-flat-files.md`
- `workitems/50-done/plan-broad-filesystem-reorg-from-audit.md`
