/**
 * agent-control/handlers/login.ts – Provider authentication via /login and /logout.
 *
 * Two-card flow:
 *   Card 1: Provider picker + action (OAuth / API key / Logout / Configure)
 *   Card 2: Provider-specific form (API key input, OAuth URL + paste, custom provider config)
 *
 * Edits pi config files directly (~/.pi/agent/auth.json, models.json) with backups.
 * Works without a running model — all hardcoded adaptive cards.
 */
import { writeFileSync, readFileSync, existsSync, copyFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";
// ── Pi config paths ─────────────────────────────────────────────
const PI_AGENT_DIR = join(homedir(), ".pi", "agent");
const AUTH_JSON = join(PI_AGENT_DIR, "auth.json");
const MODELS_JSON = join(PI_AGENT_DIR, "models.json");
function backupFile(path) {
    if (!existsSync(path))
        return null;
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    const backup = `${path}.${ts}.bak`;
    copyFileSync(path, backup);
    return backup;
}
function readJsonFile(path) {
    if (!existsSync(path))
        return {};
    try {
        return JSON.parse(readFileSync(path, "utf-8"));
    }
    catch {
        return {};
    }
}
function writeJsonFile(path, data) {
    writeFileSync(path, JSON.stringify(data, null, 2) + "\n", "utf-8");
}
const PROVIDER_DEFS = [
    { id: "anthropic", name: "Anthropic", hasOAuth: true, hasApiKey: true, apiKeyHint: "sk-ant-..." },
    { id: "github-copilot", name: "GitHub Copilot", hasOAuth: true, hasApiKey: false },
    { id: "google-gemini-cli", name: "Google Gemini CLI", hasOAuth: true, hasApiKey: true, apiKeyHint: "AIza..." },
    { id: "antigravity", name: "Antigravity (Google Cloud)", hasOAuth: true, hasApiKey: false },
    { id: "openai-codex", name: "OpenAI Codex", hasOAuth: true, hasApiKey: false },
    { id: "openai", name: "OpenAI", hasOAuth: false, hasApiKey: true, apiKeyHint: "sk-proj-..." },
    {
        id: "azure-openai",
        name: "Azure OpenAI",
        hasOAuth: false,
        hasApiKey: false,
        isCustom: true,
        customApi: "openai-responses",
        customFields: [
            { key: "baseUrl", label: "Base URL", placeholder: "https://myresource.openai.azure.com/openai/v1", required: true },
            { key: "apiKey", label: "API Key (or leave empty for managed identity)", placeholder: "Bearer ...", required: false },
            { key: "modelId", label: "Model ID", placeholder: "gpt-4o", required: true },
            { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "gpt-4o,o3-mini", required: false },
        ],
    },
    {
        id: "ollama",
        name: "Ollama",
        hasOAuth: false,
        hasApiKey: false,
        isCustom: true,
        customApi: "openai-completions",
        customFields: [
            { key: "baseUrl", label: "Base URL", placeholder: "http://192.168.1.100:11434/v1", required: true },
            { key: "modelId", label: "Model ID", placeholder: "llama3:latest", required: true },
            { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "qwen3:latest,gemma3:latest", required: false },
            { key: "contextWindow", label: "Context window", placeholder: "128000", required: false },
        ],
    },
];
// ── Auth storage access ─────────────────────────────────────────
function getAuthStorage(session, modelRegistry) {
    const registry = session.modelRegistry ?? modelRegistry;
    return registry?.authStorage ?? null;
}
function getProviderStatuses(authStorage) {
    return PROVIDER_DEFS.map((def) => {
        const cred = authStorage.get(def.id);
        let authType = "none";
        if (cred?.type === "oauth")
            authType = "oauth";
        else if (cred?.type === "api_key")
            authType = "api_key";
        else if (def.isCustom) {
            const models = readJsonFile(MODELS_JSON);
            if (models.providers?.[def.id])
                authType = "custom";
        }
        return { def, authType };
    });
}
function statusLabel(s) {
    if (s.authType === "oauth")
        return "✓ OAuth";
    if (s.authType === "api_key")
        return "✓ API key";
    if (s.authType === "custom")
        return "✓ Configured";
    return "—";
}
// ── Card 1: Provider picker ─────────────────────────────────────
function methodsLabel(def) {
    const parts = [];
    if (def.hasOAuth)
        parts.push("OAuth");
    if (def.hasApiKey)
        parts.push("Key");
    if (def.isCustom)
        parts.push("Configure");
    return parts.join(" · ") || "—";
}
function buildPickerCard(statuses) {
    const choices = statuses.map((s) => ({
        title: s.def.name,
        value: s.def.id,
    }));
    // Build column table rows
    const headerRow = {
        type: "ColumnSet",
        spacing: "medium",
        columns: [
            { type: "Column", width: "stretch", items: [{ type: "TextBlock", text: "Provider", weight: "Bolder", size: "Small" }] },
            { type: "Column", width: "80px", items: [{ type: "TextBlock", text: "Status", weight: "Bolder", size: "Small" }] },
            { type: "Column", width: "100px", items: [{ type: "TextBlock", text: "Methods", weight: "Bolder", size: "Small" }] },
        ],
    };
    const dataRows = statuses.map((s) => ({
        type: "ColumnSet",
        separator: false,
        columns: [
            { type: "Column", width: "stretch", items: [{ type: "TextBlock", text: s.def.name }] },
            {
                type: "Column", width: "80px",
                items: [{
                        type: "TextBlock",
                        text: s.authType !== "none" ? statusLabel(s) : "—",
                        color: s.authType !== "none" ? "Good" : "Attention",
                    }],
            },
            { type: "Column", width: "100px", items: [{ type: "TextBlock", text: methodsLabel(s.def), size: "Small", isSubtle: true }] },
        ],
    }));
    return {
        type: "adaptive_card",
        card_id: `provider-auth-picker-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: "Provider authentication — select a provider and action.",
        payload: {
            type: "AdaptiveCard",
            version: "1.5",
            body: [
                { type: "TextBlock", text: "Provider Authentication", weight: "Bolder", size: "Medium" },
                headerRow,
                ...dataRows,
                { type: "TextBlock", text: "Select provider and action", weight: "Bolder", separator: true, spacing: "medium" },
                { type: "Input.ChoiceSet", id: "provider", style: "compact", choices, value: choices[0]?.value || "" },
                {
                    type: "Input.ChoiceSet", id: "action", style: "compact",
                    choices: [
                        { title: "Login with OAuth", value: "oauth" },
                        { title: "Enter API key", value: "api_key" },
                        { title: "Configure provider", value: "configure" },
                        { title: "Logout / Remove", value: "logout" },
                    ],
                    value: "api_key",
                },
            ],
            actions: [
                { type: "Action.Submit", title: "Next →", data: { intent: "provider-auth" } },
            ],
        },
    };
}
// ── Card 2 builders ─────────────────────────────────────────────
function buildApiKeyCard(def) {
    return {
        type: "adaptive_card",
        card_id: `provider-apikey-${def.id}-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: `Enter API key for ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — API Key`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: "Enter your API key. It will be saved to `~/.pi/agent/auth.json` (backed up first).", wrap: true },
                { type: "Input.Text", id: "api_key", label: "API Key", placeholder: def.apiKeyHint || "Enter key...", style: "password" },
            ],
            actions: [
                { type: "Action.Submit", title: "Save API Key", data: { intent: "provider-auth-execute", provider: def.id, action: "api_key" } },
            ],
        },
    };
}
function buildOAuthCard(def, authUrl, instructions) {
    return {
        type: "adaptive_card",
        card_id: `provider-oauth-${def.id}-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: `OAuth login for ${def.name}: ${authUrl}`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — OAuth Login`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: "1. Click below to open the login page.", wrap: true },
                ...(instructions ? [{ type: "TextBlock", text: instructions, wrap: true, isSubtle: true }] : []),
                { type: "TextBlock", text: "2. Complete login in your browser. If the callback reaches this container, it completes automatically.", wrap: true, spacing: "medium" },
                { type: "TextBlock", text: "3. If it doesn't auto-complete, paste the redirect URL here:", wrap: true },
                { type: "Input.Text", id: "redirect_url", label: "Redirect URL (if needed)", placeholder: "http://localhost:..." },
            ],
            actions: [
                { type: "Action.OpenUrl", title: "Open login page ↗", url: authUrl },
                { type: "Action.Submit", title: "Check / Complete", data: { intent: "provider-auth-execute", provider: def.id, action: "oauth_complete" } },
            ],
        },
    };
}
function buildConfigCard(def) {
    // Pre-fill from existing models.json
    const models = readJsonFile(MODELS_JSON);
    const existing = models.providers?.[def.id] || {};
    const body = [
        { type: "TextBlock", text: `${def.name} — Configuration`, weight: "Bolder", size: "Medium" },
        { type: "TextBlock", text: "Values are saved to `~/.pi/agent/models.json` (backed up first). A restart applies changes.", wrap: true },
    ];
    for (const field of def.customFields || []) {
        let currentValue = "";
        if (field.key === "modelId") {
            const m = existing.models;
            currentValue = m?.[0]?.id || "";
        }
        else if (field.key === "modelIds") {
            const m = existing.models;
            currentValue = m?.map((x) => x.id).join(", ") || "";
        }
        else {
            currentValue = String(existing[field.key] || "");
        }
        body.push({
            type: "Input.Text",
            id: field.key,
            label: `${field.label}${field.required ? " *" : ""}`,
            placeholder: field.placeholder,
            value: currentValue,
        });
    }
    return {
        type: "adaptive_card",
        card_id: `provider-config-${def.id}-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: `Configure ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body,
            actions: [
                { type: "Action.Submit", title: "Save Configuration", data: { intent: "provider-auth-execute", provider: def.id, action: "configure" } },
            ],
        },
    };
}
function buildLogoutCard(def, currentAuth) {
    return {
        type: "adaptive_card",
        card_id: `provider-logout-${def.id}-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: `Confirm logout from ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — Remove`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: `Currently: **${currentAuth}**`, wrap: true },
                { type: "TextBlock", text: "This removes credentials from `auth.json` and/or the provider entry from `models.json`. A backup is created first.", wrap: true },
            ],
            actions: [
                { type: "Action.Submit", title: "Confirm Remove", data: { intent: "provider-auth-execute", provider: def.id, action: "logout" } },
            ],
        },
    };
}
// ── OAuth background flow ───────────────────────────────────────
function startOAuthBackground(authStorage, providerId) {
    let authUrl = "";
    let instructions = "";
    const loginPromise = authStorage.login(providerId, {
        onAuth: (info) => { authUrl = info.url; instructions = info.instructions || ""; },
        onProgress: () => { },
        onPrompt: async () => "",
        onManualCodeInput: () => new Promise((_, reject) => { setTimeout(() => reject(new Error("Timed out")), 180_000); }),
    });
    loginPromise
        .then(() => { authStorage.reload(); console.log(`[login] OAuth completed for ${providerId}`); })
        .catch((err) => { console.warn(`[login] OAuth failed for ${providerId}: ${err instanceof Error ? err.message : err}`); });
    const start = Date.now();
    while (!authUrl && Date.now() - start < 3000) {
        Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
    }
    return authUrl ? { authUrl, instructions } : null;
}
// ── Command handlers ────────────────────────────────────────────
export async function handleLogin(session, modelRegistry, command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage)
        return { status: "error", message: "Auth storage is not available." };
    // Internal routing from card submissions
    if (command.provider?.startsWith("__picker__")) {
        const parts = command.provider.replace("__picker__", "").trim().split(/\s+/);
        const providerId = parts[0] || "";
        const action = parts[1] || "";
        return handleProviderAuthPicker(authStorage, { provider: providerId, action });
    }
    if (command.provider?.startsWith("__execute__")) {
        const jsonStr = command.provider.replace("__execute__", "").trim();
        try {
            const data = JSON.parse(jsonStr);
            return handleProviderAuthExecute(authStorage, data);
        }
        catch {
            return { status: "error", message: "Invalid submission data." };
        }
    }
    const statuses = getProviderStatuses(authStorage);
    return {
        status: "success",
        message: "Provider authentication",
        contentBlocks: [buildPickerCard(statuses)],
    };
}
export async function handleLogout(session, modelRegistry, command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage)
        return { status: "error", message: "Auth storage is not available." };
    if (command.provider) {
        const providerId = command.provider.trim().toLowerCase();
        const cred = authStorage.get(providerId);
        if (!cred)
            return { status: "error", message: `**${providerId}** is not logged in.` };
        backupFile(AUTH_JSON);
        authStorage.set(providerId, undefined);
        authStorage.reload();
        return { status: "success", message: `✓ Logged out from **${providerId}**.` };
    }
    const statuses = getProviderStatuses(authStorage);
    return {
        status: "success",
        message: "Provider authentication — select a provider and choose Logout",
        contentBlocks: [buildPickerCard(statuses)],
    };
}
/** Handle Card 1 submission → show Card 2. */
export function handleProviderAuthPicker(authStorage, data) {
    const providerId = String(data.provider || "").trim();
    const action = String(data.action || "").trim();
    const def = PROVIDER_DEFS.find((p) => p.id === providerId);
    if (!def)
        return { status: "error", message: `Unknown provider "${providerId}".` };
    if (action === "api_key") {
        if (!def.hasApiKey && !def.isCustom)
            return { status: "error", message: `**${def.name}** doesn't support API key auth.` };
        return { status: "success", message: `Enter API key for ${def.name}`, contentBlocks: [buildApiKeyCard(def)] };
    }
    if (action === "oauth") {
        if (!def.hasOAuth)
            return { status: "error", message: `**${def.name}** doesn't support OAuth.` };
        const result = startOAuthBackground(authStorage, providerId);
        if (!result)
            return { status: "error", message: `Could not start OAuth for **${def.name}**.` };
        return { status: "success", message: `OAuth login for ${def.name}`, contentBlocks: [buildOAuthCard(def, result.authUrl, result.instructions)] };
    }
    if (action === "configure") {
        if (!def.isCustom)
            return { status: "error", message: `**${def.name}** doesn't need custom configuration. Use OAuth or API key.` };
        return { status: "success", message: `Configure ${def.name}`, contentBlocks: [buildConfigCard(def)] };
    }
    if (action === "logout") {
        const statuses = getProviderStatuses(authStorage);
        const status = statuses.find((s) => s.def.id === providerId);
        if (!status || status.authType === "none")
            return { status: "error", message: `**${def.name}** is not configured.` };
        return { status: "success", message: `Confirm removal for ${def.name}`, contentBlocks: [buildLogoutCard(def, statusLabel(status))] };
    }
    return { status: "error", message: `Unknown action: ${action}` };
}
/** Handle Card 2 submission → execute the action. */
export function handleProviderAuthExecute(authStorage, data) {
    const providerId = String(data.provider || "").trim();
    const action = String(data.action || "").trim();
    const def = PROVIDER_DEFS.find((p) => p.id === providerId);
    const name = def?.name || providerId;
    if (action === "api_key") {
        const apiKey = String(data.api_key || "").trim();
        if (!apiKey)
            return { status: "error", message: "API key cannot be empty." };
        backupFile(AUTH_JSON);
        authStorage.set(providerId, { type: "api_key", key: apiKey });
        authStorage.reload();
        return { status: "success", message: `✓ API key saved for **${name}**. Backup created. Use \`/model\` to select a model.` };
    }
    if (action === "oauth_complete") {
        authStorage.reload();
        const cred = authStorage.get(providerId);
        if (cred?.type === "oauth") {
            return { status: "success", message: `✓ OAuth login completed for **${name}**. Use \`/model\` to select a model.` };
        }
        return { status: "error", message: `OAuth for **${name}** didn't complete. The callback may not be reachable. Try API key instead.` };
    }
    if (action === "configure") {
        if (!def?.customFields)
            return { status: "error", message: "No configuration fields." };
        const baseUrl = String(data.baseUrl || "").trim();
        const apiKey = String(data.apiKey || "").trim();
        const modelId = String(data.modelId || "").trim();
        const modelIds = String(data.modelIds || "").trim();
        const contextWindow = parseInt(String(data.contextWindow || ""), 10) || undefined;
        const api = def.customApi || "openai-completions";
        if (!baseUrl)
            return { status: "error", message: "Base URL is required." };
        if (!modelId && !modelIds)
            return { status: "error", message: "At least one model ID is required." };
        // Build models list
        const allIds = modelIds
            ? modelIds.split(",").map((s) => s.trim()).filter(Boolean)
            : [modelId];
        if (modelId && !allIds.includes(modelId))
            allIds.unshift(modelId);
        const models = allIds.map((id) => ({
            id,
            name: id,
            ...(contextWindow ? { contextWindow } : {}),
        }));
        // Read, backup, update models.json
        backupFile(MODELS_JSON);
        const modelsJson = readJsonFile(MODELS_JSON);
        if (!modelsJson.providers)
            modelsJson.providers = {};
        modelsJson.providers[providerId] = {
            baseUrl,
            api,
            ...(apiKey ? { apiKey } : {}),
            models,
        };
        writeJsonFile(MODELS_JSON, modelsJson);
        return {
            status: "success",
            message: `✓ **${name}** saved to \`models.json\` (backup created).\n\nModels: ${allIds.join(", ")}\n\nRun \`/restart\` to apply, then \`/model\` to select.`,
        };
    }
    if (action === "logout") {
        // Remove from auth.json
        const cred = authStorage.get(providerId);
        if (cred) {
            backupFile(AUTH_JSON);
            authStorage.set(providerId, undefined);
            authStorage.reload();
        }
        // Remove from models.json if custom
        if (def?.isCustom) {
            const modelsJson = readJsonFile(MODELS_JSON);
            if (modelsJson.providers?.[providerId]) {
                backupFile(MODELS_JSON);
                delete modelsJson.providers[providerId];
                writeJsonFile(MODELS_JSON, modelsJson);
            }
        }
        return { status: "success", message: `✓ **${name}** removed. Backups created.` };
    }
    return { status: "error", message: `Unknown action: ${action}` };
}
