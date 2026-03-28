# Stage 4 execution steplist — extension and skill namespacing cleanup

## Purpose

Provide an execution-ready steplist for Stage 4 of the broad filesystem reorg.

## Stage 4 goal

Make packaged extension and skill surfaces more clearly namespaced without
breaking active workspace `.pi/...` conventions.

## Stage 4 target

Primary target surfaces:

- `runtime/extensions/`
- `runtime/skills/`

Documentation-first / compatibility-sensitive surfaces:

- `skel/.pi/extensions/`
- `skel/.pi/agent/extensions/`
- `skel/.pi/skills/`

Already-distinct surface that should not be conflated with the above:

- `runtime/src/extensions/`

## Preconditions

- Stage 1 board/workitems rename is landed
- Stage 2 runtime-generated containment is landed
- Stage 3 root-vs-runtime boundary clarification is landed
- source-of-truth docs exist:
  - `docs/stage4-extension-skill-namespacing-inventory-2026-03-28.md`
  - `docs/broad-filesystem-reorg-map-2026-03-28.md`

## Step-by-step execution plan

### Step 1 — separate the surfaces conceptually before moving anything

Document and preserve the distinction between:

- `runtime/src/extensions/` built-in extension factories
- `runtime/extensions/` packaged filesystem-backed extensions
- `runtime/skills/` packaged filesystem-backed skills
- `.pi/extensions` and `.pi/skills` workspace/project-local convention paths
- `.pi/agent/extensions` agent-local convention path

Do not perform moves that blur those roles.

### Step 2 — classify packaged runtime extensions by role

At minimum, classify each current `runtime/extensions/` entry as one of:

- packaged browser/desktop automation
- packaged viewer/editor web surface
- packaged integration/helper
- experimental/harness-only

Expected examples from current inventory:

- browser automation: `browser/cdp-browser/`
- Windows-specific platform extension: `platform/windows/win-ui/`
- viewer/editor web surface: `viewers/drawio-editor/`, `viewers/editor/`, `viewers/office-viewer/`
- integration/helper: `integrations/azure-openai.ts`, `integrations/context-mode.ts`
- experimental/harness-only: `experimental/azure-openai.harness.ts`

### Step 3 — classify packaged runtime skills by role

At minimum, classify each current `runtime/skills/` entry as one of:

- builtin/core operator flow
- operator/infrastructure integration
- external/tool-backed integration

The exact labels can change, but the grouped intent should be explicit.

### Step 4 — choose the concrete grouped target shape

Landed direction:

```text
runtime/extensions/
├── browser/
├── platform/
│   └── windows/
├── viewers/
├── integrations/
└── experimental/
```

```text
runtime/skills/
├── builtin/
├── operator/
└── integrations/
```

Do not force user/workspace `.pi/...` paths to mirror this exactly if keeping
public conventions stable is lower risk.

### Step 5 — update path-sensitive runtime code and docs

Audit and update at least:

- `runtime/src/agent-pool/session.ts`
- any imports or hard-coded packaged extension paths
- package file-list assumptions
- install docs and architecture docs
- workitems/docs that name packaged extension/skill paths directly

### Step 6 — keep `.pi/...` conventions stable unless required

Treat these as public convention surfaces:

- `.pi/extensions/`
- `.pi/skills/`
- `.pi/agent/extensions/`

Prefer documenting their relationship to runtime namespacing rather than
renaming them in the same batch.

### Step 7 — validate aggressively

Minimum validation ladder:

1. grep for stale old packaged extension/skill paths
2. run directly affected extension/skill loading checks
3. run `bun run lint`
4. run `bun run typecheck`
5. run `bun run check:repo-install`
6. run targeted runtime/install smoke checks if packaged path assumptions move

### Step 8 — record what stayed intentionally stable

Capture explicitly whether:

- `runtime/src/extensions/` remained unchanged in role
- `.pi/extensions/`, `.pi/skills/`, and `.pi/agent/extensions/` were kept as
  stable public convention paths
- only packaged runtime surfaces moved

## Stage 4 implementation result

The bounded Stage 4 landing should leave the repo in this state:

- `runtime/extensions/` grouped into:
  - `browser/`
  - `platform/windows/`
  - `viewers/`
  - `integrations/`
  - `experimental/`
- `runtime/skills/` grouped into:
  - `builtin/`
  - `operator/`
  - `integrations/`
- `runtime/src/extensions/` left unchanged in role as the built-in code-factory surface
- `.pi/extensions/`, `.pi/skills/`, and `.pi/agent/extensions/` preserved as compatibility-sensitive convention paths
- loader/docs/package-path references updated to the grouped packaged-runtime layout

## Guardrails

- do not mix this with board/workitems path work
- do not mix this with `runtime/generated/` containment work
- do not mix this with `runtime/src/channels/web/` grouping work
- do not introduce behavior refactors inside extension or skill implementations
- do not rename public `.pi/...` convention paths casually

## Success criteria

Stage 4 is successful when:

- packaged extension/skill categories are explicit rather than flat
- loader/discovery/docs references are updated consistently
- public `.pi/...` convention paths are either intentionally preserved or
  changed with explicit compatibility reasoning
- validation is green
