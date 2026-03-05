# Azure OpenAI + Foundry managed-identity extension (experimental)

> **Status: experimental** — this extension is bundled with piclaw but its API surface and configuration may change between releases.

> **Caveat:** This extension is primarily designed for running inside **private Azure VNets** with **private Azure OpenAI endpoints** and **managed identity** authentication. It may shadow or conflict with future first-party Azure OpenAI support in [pi-mono](https://github.com/badlogic/pi-mono) — if upstream adds native Azure provider support, this extension should be reviewed and potentially retired.

This note documents the piclaw extension that registers Azure OpenAI and Azure AI Foundry providers using **managed identity (IMDS)** or a static API key. It also explains the **custom API names** required to avoid overriding global OpenAI handlers.

## Purpose

- Provide an Azure OpenAI provider (`azure-openai`) using managed identity (no Azure CLI dependency).
- Provide an Azure AI Foundry provider (`azure-foundry`) for text and image endpoints.
- Stream Responses API output with tool-call ID normalization and text output forcing.
- **Avoid global handler overrides** by using custom API names.

## Key design choices

- **Managed identity token** via Azure IMDS (no `az` CLI dependency), or a static API key (`AOAI_API_KEY`) for environments where a separate service handles token acquisition.
- **Token cache** written to `${AOAI_TOKEN_CACHE_DIR}` with a refresh skew.
- **OpenAI client** from the `openai` package, configured with the Azure Responses API base URL.
- **Custom API names** so this extension does *not* replace the global `openai-responses` / `openai-completions` handlers.
- **Tool-call ID normalization + sanitization** for Azure Responses constraints.
- **Model-switch tool-call cleanup** strips tool-call item IDs when providers/models differ.
- **Thinking level support** maps `/thinking` settings to `reasoning.effort` (clamped for xhigh when needed).
- **Runtime flags** to disable tools or reasoning (`AOAI_DISABLE_TOOLS`, `AOAI_DISABLE_REASONING`, `AOAI_DISABLE_REASONING_MODELS`).
- **Phase capture + replay** for GPT‑5.3 Codex output metadata (`AOAI_LOG_PHASES` for debug).
- **Stream failure logging** for `response.failed` / `error` events with request summaries.
- **Tool-call trimming + summarisation** to stay under Azure’s 128 tool-call limit (with optional dedupe of `tool_output_search`).
- **Text output forcing** via `text: { format: { type: "text" }, verbosity: "medium" }`.

## Pitfalls / guardrails

- **Do not use** `api: "openai-responses"` or `api: "openai-completions"` in this extension. That overrides global handlers and breaks other providers (e.g., GitHub Copilot).
- **Always set per-model `api`** to the custom API names. If you omit it, the model routes through global handlers and fails with auth errors.
- The OpenAI SDK always injects `Authorization: Bearer <apiKey>`. **Do not** add `Authorization` / `api-key` headers yourself or enable `authHeader`.
- This extension is **managed identity by default**. When `AOAI_API_KEY` is set, it uses the static key instead (skipping IMDS). `AOAI_RESOURCE` / `FOUNDRY_RESOURCE` must match the target resource or MI tokens will be invalid (401/403).
- `MODEL_SPECS.reasoning=false` will clamp thinking to off for that model.
- Do not remove tool-call ID sanitization or `TOOL_CALL_PROVIDERS`; Azure Responses rejects non‑compliant IDs.

## Provider registration

### Azure OpenAI (Responses)

- Provider ID: `azure-openai`
- API name: `azure-openai-responses-mi`
- Base URL: `AOAI_BASE_URL` (example: `https://{RESOURCE}.openai.azure.com/openai/v1`)
- Model IDs: `AOAI_MODEL_IDS` (defaults to `AOAI_MODEL_ID`)

Registered by `registerProvider()`:

```ts
pi.registerProvider("azure-openai", {
  baseUrl: AOAI_BASE_URL,
  api: "azure-openai-responses-mi",
  apiKey: token,
  streamSimple: streamSimpleAzureOpenAIResponses,
  models: [
    {
      id: "gpt-5-2-codex",
      name: "Azure GPT-5.2 Codex",
      api: "azure-openai-responses-mi",
      reasoning: true,
      input: ["text"],
      contextWindow: 200000,
      maxTokens: 64000,
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
    },
  ],
});
```

### Azure AI Foundry (Completions)

- Provider ID: `azure-foundry`
- API name: `azure-foundry-openai-completions-mi`
- Base URL: `FOUNDRY_BASE_URL` (example: `https://{FOUNDRY_RESOURCE}.cognitiveservices.azure.com/openai/v1`)
- Model IDs: `FOUNDRY_MODEL_IDS`

The Foundry stream wrapper forces the model API to `openai-completions` when invoking the built‑in OpenAI completions implementation, while keeping a **custom API name** for routing:

```ts
function streamSimpleFoundryOpenAICompletions(model, context, options) {
  const overrideModel = model.api === "openai-completions" ? model : { ...model, api: "openai-completions" };
  return streamSimpleOpenAICompletions(overrideModel, context, options);
}
```

## Token handling

### Token cache format

```json
{
  "accessToken": "...",
  "expiresOn": "2026-03-04 12:05:41.000000",
  "expiresOnEpoch": 1772625941
}
```

### IMDS fetch

- URL: `http://169.254.169.254/metadata/identity/oauth2/token`
- API version: `2018-02-01`
- Resource: `https://cognitiveservices.azure.com/` (override with `AOAI_RESOURCE` / `FOUNDRY_RESOURCE`)
- Header: `Metadata: true`

## Streaming and message conversion

### Tool-call ID normalization

Uses `convertResponsesMessages(model, context, TOOL_CALL_PROVIDERS)` with:

```ts
const TOOL_CALL_PROVIDERS = new Set([
  "openai",
  "openai-codex",
  "opencode",
  "azure-openai",
  "azure-foundry",
]);
```

Additional sanitization enforces Azure constraints (64‑char max, `[a-zA-Z0-9_-]`).

### Text output forcing

The Azure Responses API can return only reasoning items unless a text output format is provided. The extension injects:

```ts
text: { format: { type: "text" }, verbosity: "medium" }
```

### Thinking levels

- Thinking level is passed via `options.reasoning` and clamped if necessary (`xhigh` → `high` unless model supports xhigh).
- If `reasoningEffort` / `reasoningSummary` are present:

```ts
reasoning: { effort: ..., summary: ... }
include: ["reasoning.encrypted_content"]
```

- If not explicitly set and the model is GPT‑5, a developer instruction suppresses hidden reasoning.

## Environment variables

- `AOAI_BASE_URL` – Azure OpenAI Responses API base URL (required to activate the extension)
- `AOAI_API_KEY` – static API key; when set, skips managed-identity token fetch (useful when a separate service handles authentication)
- `AOAI_MODEL_ID` – model deployment ID
- `AOAI_MODEL_IDS` – comma‑separated list of model IDs
- `AOAI_MODEL_NAME` / `AOAI_MODEL_NAMES` – display names
- `AOAI_IMAGE_MODEL_ID` – image model ID (optional)
- `AOAI_RESOURCE` – resource URI for IMDS token fetch (default `https://cognitiveservices.azure.com/`)
- `AOAI_TOKEN_CACHE_DIR` – cache directory (default `/workspace/.piclaw/cache`)
- `AOAI_TOKEN_CACHE_FILE` – cache file path (default `${AOAI_TOKEN_CACHE_DIR}/aoai-token.json`)
- `AOAI_TOKEN_SKEW_SECONDS` – refresh skew in seconds (default `300`)
- `AOAI_API_VERSION` – Azure OpenAI API version (default `2024-02-15-preview`)
- `AOAI_DISABLE_TOOLS` – disable tool calls (`true`/`1`/`yes`)
- `AOAI_DISABLE_REASONING` – disable reasoning (`true`/`1`/`yes`)
- `AOAI_DISABLE_REASONING_MODELS` – comma‑separated model IDs to force reasoning off
- `AOAI_LOG_PHASES` – log GPT‑5.3 phase replay details (`true`/`1`/`yes`)
- `AOAI_MAX_TOOL_CALLS` – maximum tool calls per request before trimming (default `96`)
- `AOAI_TOOL_CALL_SUMMARY_MAX` – max tool-call entries to include in the summary message (default `12`)
- `AOAI_TOOL_CALL_OUTPUT_CHARS` – max chars per tool output snippet in summaries (default `200`)
- `AOAI_DEDUPE_TOOL_OUTPUT_SEARCH` – dedupe repeated `tool_output_search` calls (`1` default, set `0` to disable)

- `FOUNDRY_BASE_URL` – Foundry base URL
- `FOUNDRY_MODEL_IDS` / `FOUNDRY_MODEL_NAMES` – Foundry model list + names
- `FOUNDRY_IMAGE_MODEL_ID` – Foundry image model ID
- `FOUNDRY_API_VERSION` – Foundry API version override (defaults to `AOAI_API_VERSION`)
- `FOUNDRY_IMAGE_BASE_URL` – Optional explicit Foundry image base URL
- `FOUNDRY_IMAGE_API_VERSION` – Foundry image API version (default `preview`)
- `FOUNDRY_RESOURCE` – resource URI for IMDS token fetch

## Files and paths

- **Extension source**: `piclaw/extensions/azure-openai.ts` (bundled inside the package)
- **Token cache**: `${AOAI_TOKEN_CACHE_DIR}/aoai-token.json`

## Model-switch regression test (web)

Use this to validate cross-provider tool-call ID handling after changes to the extension.

Notes:
- IPC message files only send outbound bot messages; they do **not** trigger `/model` control commands.
- Use the internal web endpoint with the internal secret to issue `/model` and prompt messages.

Example (run on the host where piclaw runs):

```bash
BASE="http://localhost:3000"
SECRET="$PICLAW_INTERNAL_SECRET"

send_msg() {
  local msg="$1"
  curl -sS -H "x-piclaw-internal-secret: $SECRET" \
    -H "Content-Type: application/json" \
    -d "$(jq -n --arg content "$msg" '{content:$content}')" \
    "$BASE/agent/default/message" >/tmp/piclaw-test-last.json
}

wait_idle() {
  for i in $(seq 1 60); do
    status=$(curl -sS -H "x-piclaw-internal-secret: $SECRET" \
      "$BASE/agent/status?chat_jid=web:default" | jq -r .status)
    [ "$status" = "idle" ] && return 0
    sleep 2
  done
  return 1
}

# List models if needed
send_msg "/model"; wait_idle

# Smoke test sequence
send_msg "/model azure-openai/gpt-5-2-codex"; wait_idle
send_msg "ping 1"; wait_idle
send_msg "/model azure-openai/gpt-5-3-codex"; wait_idle
send_msg "ping 2"; wait_idle
send_msg "/model azure-openai/gpt-5-1-codex-mini"; wait_idle
send_msg "ping 3"; wait_idle
send_msg "/model github-copilot/claude-opus-4.6"; wait_idle
send_msg "ping opus"; wait_idle
send_msg "/model azure-openai/gpt-5-3-codex"; wait_idle
send_msg "ping after opus"; wait_idle
```

## GPT‑5.3 Codex challenges

- GPT‑5.3 adds a `phase` field on assistant output items (commentary vs `final_answer`). The extension captures it from the Responses stream and replays it on the next request so continuity is preserved.
- Even with phase replay enabled, long multi‑model sessions can still emit `response.failed` (sometimes with `error: null`) and `/compact` can return “Unknown error.”
- Disabling tools/reasoning (`AOAI_DISABLE_TOOLS`, `AOAI_DISABLE_REASONING`) does not consistently resolve the failure once it appears.
- For diagnosis, enable `AOAI_LOG_PHASES=1` and review stream failure logs + request summaries to see message counts and tool-call volume.
- Workarounds: restart the session, reduce tool-call history, or use `gpt-5-2-codex` until upstream handling stabilizes.

## Troubleshooting

- If model output is missing: verify the `text` format block is being injected.
- If tool call errors appear: ensure `TOOL_CALL_PROVIDERS` includes `azure-openai`/`azure-foundry` and that ID sanitization remains.
- If tokens fail: check IMDS connectivity (`curl -H Metadata:true http://169.254.169.254/...`).
- If other providers break: verify you did **not** register `openai-responses` / `openai-completions` in this extension.
- Stream failures now log `response.failed` / `error` events plus a request summary (model, message counts, tool counts):
  - `journalctl --user -u piclaw.service --no-pager | rg "azure-openai\] Stream"`
