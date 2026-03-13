# Web Pane Extensions

The web UI uses a pane registry to resolve file-oriented renderers by context.

## Pane contexts

A pane extension can inspect:

- `path`
- `content`
- `mtime`
- `size`
- `mode`
- optional `preview` payloads for read-only workspace previews

## Preview extensions

Workspace file previews can now be resolved through the same pane extension model.

Built-in examples include:

- `workspace-preview-default`
- `workspace-markdown-preview`

These extensions allow the workspace explorer preview surface to:

- preserve a safe default renderer for text/image/binary previews
- override preview behavior for specific file types
- keep preview rendering modular instead of hard-coding all branches in `workspace-explorer.ts`

## Registration

Preview extensions are registered in the web app during startup alongside the editor and terminal pane extensions.

## Resolution model

The registry chooses the highest-priority matching tab-pane extension for the provided context.
For preview surfaces, the workspace explorer passes `mode: "view"` plus the preview payload.
This allows preview-specific handlers to win over the default editor pane.
