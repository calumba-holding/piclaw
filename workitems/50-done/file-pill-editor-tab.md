---
id: file-pill-editor-tab
title: Open file pills in a new editor tab when editor is visible
status: done
priority: medium
created: 2026-03-12
updated: 2026-03-14
completed: 2026-03-14
estimate: M
risk: low
tags:
  - work-item
  - kanban
  - web-ui
  - file-pill
  - editor
owner: pi
---

# Open file pills in a new editor tab when editor is visible

## Updates

### 2026-03-14
- Lane change: `20-doing` → `50-done` after confirming the timeline and compose file pills already shared the same `openFileFromPill` path in `web/src/app.ts`.
- Added focused behavioral coverage in `piclaw/test/web/file-pill-open.test.ts` for editor-visible, editor-hidden, external-path, unsupported-path, empty-path, and resolver-failure cases.
- Kept duplicate-tab reuse covered by the existing `piclaw/test/web/tab-store.test.ts` assertion that reopening the same path activates without duplicating.
- Small hardening change: extracted the shared decision logic into `piclaw/web/src/ui/file-pill-open.ts` so the tests exercise real code instead of an inline test copy.
- Validation/build evidence:
  - `bun test test/web/file-pill-open.test.ts test/web/tab-store.test.ts`
  - `bun run build`
  - `bun run build:web`
  - `bun run quality` → `801 pass, 0 fail`
- Quality: ★★★★★ 10/10 (problem: 2, scope: 2, test: 2, deps: 2, risk: 2)

### 2026-03-14
- Lane change: `00-inbox` → `20-doing` as a low-risk, UI-only candidate with clear scope and no backend contract work.
- Marked as a likely fast follow-up because it reuses existing pane resolution and editor-open behavior rather than introducing a new data model.

## Summary
When a user clicks a file pill (timeline or compose), the UI should attempt to open that file in the editor only when:

1. an editor pane handler is registered for the file path/type, and
2. the editor pane is currently visible.

If both conditions are met, open the file in a new editor tab (or focus/reuse existing tab, depending on current tab store behavior).

## Current Behavior
- File pills render with a click handler slot but currently no editor-open action.
- Clicking file pills does not reliably open files in the workspace editor.
- There is no visibility-aware guard before attempting editor operations.

## Desired Behavior
- On file pill click:
  - resolve the file target path from the pill payload,
  - verify there is a registered editor for that path (via pane registry/editor resolution logic),
  - if the editor is visible in the current layout (`editorOpen`), open the file in a tab,
  - otherwise keep a no-op/clear fallback (ticket to decide final UX).
- If no editor can handle the file path, do not throw; leave the current timeline/compose UI unchanged.

## Acceptance Criteria
- [x] Clicking a file pill in a timeline message attempts editor open when editor is visible.
- [x] Clicking a file pill in compose references attempts editor open when editor is visible.
- [x] File resolution guard checks for registered editor support before opening.
- [x] If editor is hidden, click does not force-open editor unexpectedly.
- [x] Existing pill remove behavior remains unchanged.
- [x] No regressions in message/file-reference rendering.

## Relevant files (expected)
- `piclaw/web/src/components/file-pill.ts`
- `piclaw/web/src/components/post.ts`
- `piclaw/web/src/components/compose-box.ts`
- `piclaw/web/src/app.ts`
- `piclaw/web/src/panes/tab-store.ts`
- `piclaw/web/src/ui/use-editor-state.ts`
- `piclaw/web/src/panes/pane-registry.ts`

## Refinement Notes (v1)

### Scope lock (minimal)
- This feature is **strictly UI-only** inside the web client.
- It does **not** alter message parsing, backend APIs, or attachment storage.
- It only affects click behavior for `fileRefs` pills emitted by post/compose pill rendering.

### Deterministic behavior (v1)
1. When a user clicks a file pill, extract the file path string from the pill label/payload.
2. Ignore click if editor pane is not visible (`editorOpen === false`).
3. Resolve editor support by calling `paneRegistry.resolve({ path, mode: 'edit' })`:
   - If no pane resolves, do nothing (no throw, no nav).
   - If a pane resolves, open/reuse path via `openEditor(path)`.
4. Preserve current remove interactions on pills.
5. Preserve existing behavior for message-reference pills (`msg:<id>`) and media pills unchanged.

### Edge cases to handle
- Empty/invalid paths: no-op.
- External links or protocol paths in file section: safe no-op (no editor attempt).
- Duplicate clicks on already-open file path: should focus existing tab (current `openEditor` behavior).

### Decided
1. Unsupported or blocked file-open attempts should show a toast using the existing intent/status pane.
2. No duplicate tabs: reuse/focus existing tab when already open.

### Questions (resolved)
1. On unsupported file types while editor is visible, user feedback should be shown via the intent pane (toast style).
2. Repeated opens should reuse/focus existing tabs (`openEditor` default behavior).
### Acceptance criteria (refined)
- [x] File pill click in **timeline** calls shared handler that gates on editor visibility + pane resolution.
- [x] File pill click in **compose** shares the same handler behavior.
- [x] Unsupported/invalid paths never break rendering and never open an editor.
- [x] Existing remove interactions and drag/drop/multiselect flows are unchanged.
- [x] If editor is hidden, clicking file pill does not force-open the editor and instead shows the intended warning toast.