# Stage 4 extension and skill namespacing inventory — 2026-03-28

## Purpose

Capture the current extension/skill path surfaces before Stage 4 of the broad
filesystem reorg.

The goal is to distinguish clearly between:

- code-registered built-in runtime extensions
- packaged filesystem-backed runtime extensions
- packaged runtime skills
- scaffolded project/workspace-local `.pi` extensions and skills
- agent-local scaffolded assets under `.pi/agent/`

## Current surfaces

### 1. `runtime/src/extensions/`

This is already a namespaced code surface for built-in extension factories.

Observed role:

- factories imported by `runtime/src/extensions/index.ts`
- registered through `builtinExtensionFactories`
- passed directly to `DefaultResourceLoader` in
  `runtime/src/agent-pool/session.ts`

Interpretation:

- this is the code-registered built-in extension layer
- it is **not** the same thing as the filesystem-backed `runtime/extensions/`
  tree
- Stage 4 should avoid conflating the two

### 2. `runtime/extensions/`

Current top-level entries: **8**

Directories:

- `cdp-browser/`
- `drawio-editor/`
- `editor/`
- `office-viewer/`
- `win-ui/`

Files:

- `azure-openai.harness.ts`
- `azure-openai.ts`
- `context-mode.ts`

Observed loader behavior from `runtime/src/agent-pool/session.ts`:

`additionalExtensionPaths` currently points at a hard-coded mixed set:

- `runtime/extensions/azure-openai.ts` *(env-gated by `AOAI_BASE_URL`)*
- `runtime/extensions/context-mode.ts`
- `runtime/extensions/cdp-browser/index.ts`
- `runtime/extensions/win-ui/index.ts`
- `runtime/extensions/office-viewer/index.ts`

Notably packaged-but-not-auto-loaded from that list:

- `drawio-editor/`
- `editor/`
- `azure-openai.harness.ts`

Interpretation:

- `runtime/extensions/` is currently a mixed filesystem surface
- it combines shipped browser/viewer extensions, optional runtime helpers,
  and at least one harness-only file
- the current flat layout hides those category differences

### 3. `runtime/skills/`

Current top-level entries: **7**

- `graphite-power-chart/`
- `playwright/`
- `proxmox-management/`
- `reload/`
- `schedule/`
- `send-message/`
- `token-chart/`

Interpretation:

- packaged runtime skills are filesystem-backed and currently flat
- the tree does not distinguish bundled/core/operator/integration categories
- the surface is smaller and simpler than `runtime/extensions/`, but still a
  candidate for grouping

### 4. `skel/.pi/extensions/`

Current top-level entries: **3**

- `context-mode.ts`
- `powershell.ts`
- `win-ui/`

Interpretation:

- scaffolded project/workspace-local extension surface
- this is user/project-facing convention space, not just repo-internal layout
- Stage 4 should treat it as compatibility-sensitive

### 5. `skel/.pi/agent/extensions/`

Current top-level entries: **1**

- `cdp-browser/`

Interpretation:

- agent-local scaffolded extension surface
- distinct from the general workspace/project-local `.pi/extensions/` layer
- should remain explicitly differentiated in any namespacing plan

### 6. `skel/.pi/skills/`

Current top-level entries: **23**

Representative examples:

- `adaptive-cards-authoring/`
- `debug/`
- `extension-design/`
- `playwright/`
- `proxmox-management/`
- `reload/`
- `schedule/`
- `send-message/`
- `setup/`
- `token-chart/`
- `web-search/`
- `web-search-summary/`

Interpretation:

- scaffolded project/workspace-local skill surface
- this is also compatibility-sensitive because `.pi/skills/` is an active user
  convention and is referenced by workspace indexing logic

## Stage 4 design implications

### Keep distinct in the model

Stage 4 should treat these as separate concerns:

1. `runtime/src/extensions/` — code-registered built-ins
2. `runtime/extensions/` — filesystem-backed packaged extensions
3. `runtime/skills/` — filesystem-backed packaged skills
4. `.pi/extensions` / `.pi/skills` — workspace/project-local convention paths
5. `.pi/agent/extensions` — agent-local convention path

### Likely low-risk namespacing targets

Most likely Stage 4 move targets:

- grouping inside `runtime/extensions/`
- grouping inside `runtime/skills/`

### Compatibility-sensitive targets

Most likely *documentation-first* targets rather than rename-first targets:

- `skel/.pi/extensions/`
- `skel/.pi/skills/`
- `skel/.pi/agent/extensions/`

These correspond to active workspace conventions and should not be renamed
casually inside a repo-layout batch.

## Recommended Stage 4 policy

### Safe default

- keep public `.pi/...` convention paths stable in Stage 4 unless a stronger
  reason emerges
- limit filesystem namespacing moves to packaged runtime surfaces first

### Preferred grouping direction

A workable direction is:

```text
runtime/extensions/
├── packaged/
│   ├── browser/
│   ├── viewers/
│   ├── integrations/
│   └── experimental/
```

and

```text
runtime/skills/
├── builtin/
├── operator/
└── integrations/
```

Exact category names can change, but the important outcome is to stop treating
all packaged filesystem-backed extensions and skills as a single flat space.

## Explicit Stage 4 guardrail

Do **not** mix a packaged-runtime namespacing cleanup with a public `.pi`
convention rename unless loader/discovery behavior proves it is necessary.

## Related files

- `docs/broad-filesystem-reorg-map-2026-03-28.md`
- `runtime/src/extensions/index.ts`
- `runtime/src/agent-pool/session.ts`
- `runtime/extensions/`
- `runtime/skills/`
- `skel/.pi/extensions/`
- `skel/.pi/agent/extensions/`
- `skel/.pi/skills/`
- `workitems/10-next/namespace-internal-extensions-and-skills-paths.md`
