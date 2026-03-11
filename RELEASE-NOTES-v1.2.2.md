# v1.2.2

**Scope:** Provider usage display · IPC media attachments · inline SVG UX · kanban board workflow · test guardrails

## Highlights

- **Provider quota/usage hints** for OpenAI Codex and GitHub Copilot shown inline next to the model picker in the web UI.
- **IPC messages** now support inline media attachments (SVG, images, etc.) with best-effort delivery.
- **Inline SVG** rendering in the web timeline is now full-quality and zoomable.
- **Kanban board skill** defaults to posting via IPC with auto light/dark theme by time of day.
- **Test harness** enforces in-memory DB fixture globally, with an explicit guard test.

## Added

### Provider usage display
- New `provider-usage.ts` module fetches live quota snapshots from the **OpenAI Codex** (ChatGPT usage API) and **GitHub Copilot** (internal quota API).
- Compact usage hint (e.g. `5h 62% · wk 41% · credits 123` or `premium 70% · chat 80%`) displayed next to the active model label in the compose box.
- Tooltip shows plan type and reset countdown.
- Results cached with configurable TTL (`PICLAW_PROVIDER_USAGE_TTL_MS`, default 60s).
- `getAvailableModels()` now returns `provider_usage` alongside model/thinking state.
- Unit tests cover both Codex and Copilot fetch paths with mocked responses.

### IPC media pipeline
- `media[]` array in IPC message payloads supports `path`, `content_type`, `filename`, `inline` fields.
- `inline` parsing accepts boolean-like strings (`"true"`, `"1"`, `"yes"`, `"on"`).
- `content_blocks` include `mime_type` for downstream rendering decisions.
- Best-effort attachment: failed media appends a warning but the message still posts.
- `MediaService.createFromPath()` added for filesystem-based media uploads with extension-based MIME inference.
- FTS indexes SVG text content from IPC-injected media.
- JSDoc guard test prevents regression of export-level documentation on IPC/media-service exports.

### Test DB fixture guardrail
- New `test/db/in-memory-fixture.test.ts` asserts `PRAGMA database_list` returns `:memory:`.
- `test/helpers.ts` enforces `PICLAW_DB_IN_MEMORY=1` in both the global prelude and every `setEnv()` call.
- `package.json` test scripts set the env var at process level as belt-and-suspenders.

## Web & UX

- **SVG image blocks** in posts use the full `/media/:id` URL instead of thumbnail, preserving click-to-zoom via `ImageModal`.
- **Model picker** refreshes provider usage after every `/model` switch and after sending a message.
- Compose box model hint tooltip shows plan, quota percentages, and reset countdown.

## Kanban board skill

- Skill script (`kanban-board-svg.ts`) supports `--theme auto` (default): dark 18:00–07:59, light 08:00–17:59.
- Board/lane surfaces changed to neutral grayscale + translucency for cross-theme blending.
- `SKILL.md` updated: `--post` required when sharing the board; Mermaid relegated to fallback.
- Script and skill doc synced to `skel/.pi/skills/kanban-management/`.

## Notes

- Expected `SyntaxError: JSON Parse error` logs in IPC tests are intentional (malformed fixture coverage).
- No breaking API changes.
