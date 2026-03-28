---
id: model-popup-sorting
title: Sort models in the model picker popup
status: done
priority: medium
created: 2026-03-16
updated: 2026-03-16
target_release: next
estimate: XS
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - compose
  - quick-win
owner: pi
---

# Sort models in the model picker popup

## Summary

The model picker popup in the compose box currently renders models in whatever
order the API returns them. Apply a sensible default sort so the list is
predictable and easy to scan.

## Current Behavior

`compose-box.ts` fetches models via `getAgentModels()` and renders the
resulting `modelOptions` array as-is, with no sorting applied.

## Desired Behavior

- Models are sorted alphabetically (case-insensitive) by default.
- The currently active model should remain visually highlighted but does not
  need to be pinned to the top (the `.active` class already handles this).
- If a `provider/modelId` format is common, sort by the full string so models
  from the same provider cluster together naturally.

## Acceptance Criteria

- [ ] Model list in the popup is sorted alphabetically (case-insensitive).
- [ ] Active model highlighting is unaffected.
- [ ] No regression in model switching or cycling behavior.
- [ ] `bun run build:web` passes.

## Implementation

In `web/src/components/compose-box.ts`, after the `payload.models` filter step
inside the `showModelPopup` effect, add:

```ts
models.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: 'base' }));
```

One-line change.

## Relevant Files

- `piclaw/piclaw/web/src/components/compose-box.ts` (lines ~869–872)

## Notes

- Quick win — XS estimate, single sort call.
- If we later want pinned/favorite models or recency-based ordering, that can
  be a separate follow-up ticket.

## Links

- `piclaw/piclaw/web/src/components/compose-box.ts`
