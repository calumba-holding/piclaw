/**
 * agent-control/handlers/login.ts – Card-driven provider authentication.
 *
 * Three-card flow:
 *   Card 1: Pick a provider (Layout F column table)
 *   Card 2: Auth form (only applicable methods for that provider)
 *   Card 3: Activate — pick a model from that provider
 *
 * Logout: Card 1 → confirmation card → done (no Card 3).
 * Custom providers: Card 2 saves config → "restart + /model" (no Card 3).
 *
 * Edits ~/.pi/agent/auth.json and models.json directly with backups.
 * Works without a running model.
 */
import { writeFileSync, readFileSync, existsSync, copyFileSync } from "fs";
import { join } from "path";
import { homedir } from "os";
// ── Config paths ────────────────────────────────────────────────
const PI_AGENT_DIR = join(homedir(), ".pi", "agent");
const AUTH_JSON = join(PI_AGENT_DIR, "auth.json");
const MODELS_JSON = join(PI_AGENT_DIR, "models.json");
function backupFile(path) {
    if (!existsSync(path))
        return;
    const ts = new Date().toISOString().replace(/[:.]/g, "-");
    copyFileSync(path, `${path}.${ts}.bak`);
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
        id: "azure-openai", name: "Azure OpenAI", hasOAuth: false, hasApiKey: false, isCustom: true,
        customApi: "openai-responses",
        customFields: [
            { key: "baseUrl", label: "Base URL", placeholder: "https://myresource.openai.azure.com/openai/v1", required: true },
            { key: "apiKey", label: "API Key (or empty for managed identity)", placeholder: "Bearer ...", required: false },
            { key: "modelId", label: "Model ID", placeholder: "gpt-4o", required: true },
            { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "gpt-4o,o3-mini", required: false },
        ],
    },
    {
        id: "ollama", name: "Ollama", hasOAuth: false, hasApiKey: false, isCustom: true,
        customApi: "openai-completions",
        customFields: [
            { key: "baseUrl", label: "Base URL", placeholder: "http://192.168.1.100:11434/v1", required: true },
            { key: "modelId", label: "Model ID", placeholder: "llama3:latest", required: true },
            { key: "modelIds", label: "Additional model IDs (comma-separated)", placeholder: "qwen3:latest", required: false },
            { key: "contextWindow", label: "Context window", placeholder: "128000", required: false },
        ],
    },
];
// ── Helpers ──────────────────────────────────────────────────────
function getAuthStorage(session, modelRegistry) {
    const registry = session.modelRegistry ?? modelRegistry;
    return registry?.authStorage ?? null;
}
function getModelRegistry(session, modelRegistry) {
    return (session.modelRegistry ?? modelRegistry);
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
// ── Card 1: Provider Picker ─────────────────────────────────────
function buildCard1(statuses) {
    const choices = statuses.map((s) => ({ title: s.def.name, value: s.def.id }));
    const headerRow = {
        type: "ColumnSet", spacing: "medium",
        columns: [
            { type: "Column", width: "stretch", items: [{ type: "TextBlock", text: "Provider", weight: "Bolder", size: "Small" }] },
            { type: "Column", width: "80px", items: [{ type: "TextBlock", text: "Status", weight: "Bolder", size: "Small" }] },
            { type: "Column", width: "100px", items: [{ type: "TextBlock", text: "Methods", weight: "Bolder", size: "Small" }] },
        ],
    };
    const dataRows = statuses.map((s) => ({
        type: "ColumnSet",
        columns: [
            { type: "Column", width: "stretch", items: [{ type: "TextBlock", text: s.def.name }] },
            { type: "Column", width: "80px", items: [{ type: "TextBlock", text: s.authType !== "none" ? statusLabel(s) : "—", color: s.authType !== "none" ? "Good" : "Attention" }] },
            { type: "Column", width: "100px", items: [{ type: "TextBlock", text: methodsLabel(s.def), size: "Small", isSubtle: true }] },
        ],
    }));
    return {
        type: "adaptive_card",
        card_id: `login-1-pick-${Date.now()}`,
        schema_version: "1.5",
        state: "active",
        fallback_text: "Provider authentication — select a provider.",
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: "Provider Authentication", weight: "Bolder", size: "Medium" },
                headerRow,
                ...dataRows,
                { type: "TextBlock", text: "Select a provider", weight: "Bolder", separator: true, spacing: "medium" },
                { type: "Input.ChoiceSet", id: "provider", style: "compact", choices, value: choices[0]?.value || "" },
            ],
            actions: [
                { type: "Action.Submit", title: "Next →", data: { intent: "login-step1" } },
            ],
        },
    };
}
// ── Card 2: Auth Form ───────────────────────────────────────────
function buildCard2ApiKey(def) {
    return {
        type: "adaptive_card",
        card_id: `login-2-apikey-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `Enter API key for ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — API Key`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: "Saved to `~/.pi/agent/auth.json` (backup created first).", wrap: true, isSubtle: true },
                { type: "Input.Text", id: "api_key", label: "API Key", placeholder: def.apiKeyHint || "Enter key...", style: "password" },
            ],
            actions: [
                { type: "Action.Submit", title: "Save & Continue →", data: { intent: "login-step2", provider: def.id, method: "api_key" } },
            ],
        },
    };
}
function buildCard2OAuth(def, authUrl, instructions) {
    const body = [
        { type: "TextBlock", text: `${def.name} — OAuth Login`, weight: "Bolder", size: "Medium" },
        { type: "TextBlock", text: "1. Click below to open the login page in your browser.", wrap: true },
    ];
    if (instructions) {
        body.push({ type: "TextBlock", text: instructions, wrap: true, isSubtle: true });
    }
    body.push({ type: "TextBlock", text: "2. Complete login, then click Check below.", wrap: true, spacing: "medium" }, { type: "TextBlock", text: "3. If the callback didn't work, paste the redirect URL:", wrap: true }, { type: "Input.Text", id: "redirect_url", label: "Redirect URL (if needed)", placeholder: "http://localhost:..." });
    return {
        type: "adaptive_card",
        card_id: `login-2-oauth-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `OAuth login for ${def.name}: ${authUrl}`,
        payload: {
            type: "AdaptiveCard", version: "1.5", body,
            actions: [
                { type: "Action.OpenUrl", title: "Open login page ↗", url: authUrl },
                { type: "Action.Submit", title: "Check & Continue →", data: { intent: "login-step2", provider: def.id, method: "oauth_check" } },
            ],
        },
    };
}
function buildCard2Config(def) {
    const models = readJsonFile(MODELS_JSON);
    const existing = models.providers?.[def.id] || {};
    const body = [
        { type: "TextBlock", text: `${def.name} — Configuration`, weight: "Bolder", size: "Medium" },
        { type: "TextBlock", text: "Saved to `~/.pi/agent/models.json` (backup created first). Restart needed to apply.", wrap: true, isSubtle: true },
    ];
    for (const field of def.customFields || []) {
        let currentValue = ""; // eslint-disable-line no-useless-assignment
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
            type: "Input.Text", id: field.key,
            label: `${field.label}${field.required ? " *" : ""}`,
            placeholder: field.placeholder, value: currentValue,
        });
    }
    return {
        type: "adaptive_card",
        card_id: `login-2-config-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `Configure ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5", body,
            actions: [
                { type: "Action.Submit", title: "Save Configuration", data: { intent: "login-step2", provider: def.id, method: "configure" } },
            ],
        },
    };
}
function buildCard2Logout(def, currentAuth) {
    return {
        type: "adaptive_card",
        card_id: `login-2-logout-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `Confirm removal of ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — Remove`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: `Currently: **${currentAuth}**`, wrap: true },
                { type: "TextBlock", text: "Removes credentials from config files. Backup created first.", wrap: true, isSubtle: true },
            ],
            actions: [
                { type: "Action.Submit", title: "Confirm Remove", data: { intent: "login-step2", provider: def.id, method: "logout" } },
            ],
        },
    };
}
function buildCard2AuthPicker(def) {
    const methods = [];
    if (def.hasOAuth)
        methods.push({ title: "Login with OAuth", value: "oauth" });
    if (def.hasApiKey)
        methods.push({ title: "Enter API key", value: "api_key" });
    if (def.isCustom)
        methods.push({ title: "Configure provider", value: "configure" });
    methods.push({ title: "Logout / Remove", value: "logout" });
    return {
        type: "adaptive_card",
        card_id: `login-2-pick-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `Choose auth method for ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — Choose Action`, weight: "Bolder", size: "Medium" },
                {
                    type: "Input.ChoiceSet", id: "action", style: "expanded",
                    choices: methods, value: methods[0]?.value || "",
                },
            ],
            actions: [
                { type: "Action.Submit", title: "Next →", data: { intent: "login-step1-method", provider: def.id } },
            ],
        },
    };
}
// ── Card 3: Activate / Model Picker ─────────────────────────────
function buildCard3(def, models) {
    const choices = models.map((m) => ({ title: m.name || m.id, value: m.id }));
    return {
        type: "adaptive_card",
        card_id: `login-3-activate-${def.id}-${Date.now()}`,
        schema_version: "1.5", state: "active",
        fallback_text: `Select a model from ${def.name}.`,
        payload: {
            type: "AdaptiveCard", version: "1.5",
            body: [
                { type: "TextBlock", text: `${def.name} — Select Model`, weight: "Bolder", size: "Medium" },
                { type: "TextBlock", text: `✓ Authentication successful. ${models.length} model${models.length !== 1 ? "s" : ""} available.`, wrap: true, color: "Good" },
                {
                    type: "Input.ChoiceSet", id: "model", style: "compact",
                    choices, value: choices[0]?.value || "",
                },
            ],
            actions: [
                { type: "Action.Submit", title: "Activate Model", data: { intent: "login-step3", provider: def.id } },
            ],
        },
    };
}
// ── OAuth helper ────────────────────────────────────────────────
async function startOAuthBackground(authStorage, providerId) {
    let authUrl = "";
    let instructions = "";
    let authReceived = null;
    const authReady = new Promise((resolve) => { authReceived = resolve; });
    const loginPromise = authStorage.login(providerId, {
        onAuth: (info) => { authUrl = info.url; instructions = info.instructions || ""; authReceived?.(); },
        onProgress: () => { },
        onPrompt: async () => "",
        onManualCodeInput: () => new Promise((_, reject) => { setTimeout(() => reject(new Error("Timed out")), 180_000); }),
    });
    loginPromise
        .then(() => { authStorage.reload(); console.log(`[login] OAuth completed for ${providerId}`); })
        .catch((err) => { console.warn(`[login] OAuth failed for ${providerId}: ${err instanceof Error ? err.message : err}`); });
    const timeout = new Promise((resolve) => setTimeout(resolve, 10_000));
    await Promise.race([authReady, timeout]);
    return authUrl ? { authUrl, instructions } : null;
}
// ── Step handlers ───────────────────────────────────────────────
/** Card 1 submitted → show Card 2 (auth method picker or direct form). */
async function handleStep1(authStorage, data) {
    const providerId = String(data.provider || "").trim();
    const def = PROVIDER_DEFS.find((p) => p.id === providerId);
    if (!def)
        return { status: "error", message: `Unknown provider "${providerId}".` };
    // Count applicable methods
    const methods = [def.hasOAuth, def.hasApiKey, def.isCustom].filter(Boolean).length;
    const hasLogoutOption = getProviderStatuses(authStorage).find((s) => s.def.id === providerId)?.authType !== "none";
    // If only one auth method (+ optional logout), go straight to the form
    if (methods === 1 && !hasLogoutOption) {
        if (def.hasOAuth) {
            const result = await startOAuthBackground(authStorage, providerId);
            if (!result)
                return { status: "error", message: `Could not start OAuth for **${def.name}**.` };
            return { status: "success", message: `OAuth login for ${def.name}`, contentBlocks: [buildCard2OAuth(def, result.authUrl, result.instructions)] };
        }
        if (def.hasApiKey)
            return { status: "success", message: `Enter API key for ${def.name}`, contentBlocks: [buildCard2ApiKey(def)] };
        if (def.isCustom)
            return { status: "success", message: `Configure ${def.name}`, contentBlocks: [buildCard2Config(def)] };
    }
    // Multiple methods → show method picker
    return { status: "success", message: `Choose action for ${def.name}`, contentBlocks: [buildCard2AuthPicker(def)] };
}
/** Card 2 method picker submitted → show the actual auth form. */
async function handleStep1Method(authStorage, data) {
    const providerId = String(data.provider || "").trim();
    const action = String(data.action || "").trim();
    const def = PROVIDER_DEFS.find((p) => p.id === providerId);
    if (!def)
        return { status: "error", message: `Unknown provider "${providerId}".` };
    if (action === "oauth") {
        if (!def.hasOAuth)
            return { status: "error", message: `**${def.name}** doesn't support OAuth.` };
        const result = await startOAuthBackground(authStorage, providerId);
        if (!result)
            return { status: "error", message: `Could not start OAuth for **${def.name}**.` };
        return { status: "success", message: `OAuth login for ${def.name}`, contentBlocks: [buildCard2OAuth(def, result.authUrl, result.instructions)] };
    }
    if (action === "api_key") {
        if (!def.hasApiKey)
            return { status: "error", message: `**${def.name}** doesn't support API key auth.` };
        return { status: "success", message: `Enter API key for ${def.name}`, contentBlocks: [buildCard2ApiKey(def)] };
    }
    if (action === "configure") {
        if (!def.isCustom)
            return { status: "error", message: `**${def.name}** doesn't need configuration.` };
        return { status: "success", message: `Configure ${def.name}`, contentBlocks: [buildCard2Config(def)] };
    }
    if (action === "logout") {
        const status = getProviderStatuses(authStorage).find((s) => s.def.id === providerId);
        if (!status || status.authType === "none")
            return { status: "error", message: `**${def.name}** is not configured.` };
        return { status: "success", message: `Confirm removal for ${def.name}`, contentBlocks: [buildCard2Logout(def, statusLabel(status))] };
    }
    return { status: "error", message: `Unknown action: ${action}` };
}
/** Card 2 auth form submitted → execute auth, show Card 3 or completion. */
function handleStep2(authStorage, registry, data) {
    const providerId = String(data.provider || "").trim();
    const method = String(data.method || "").trim();
    const def = PROVIDER_DEFS.find((p) => p.id === providerId);
    const name = def?.name || providerId;
    if (method === "api_key") {
        const apiKey = String(data.api_key || "").trim();
        if (!apiKey)
            return { status: "error", message: "API key cannot be empty." };
        backupFile(AUTH_JSON);
        authStorage.set(providerId, { type: "api_key", key: apiKey });
        authStorage.reload();
        // Show Card 3 with models for this provider
        return showCard3OrComplete(def, providerId, name, registry);
    }
    if (method === "oauth_check") {
        authStorage.reload();
        const cred = authStorage.get(providerId);
        if (cred?.type === "oauth") {
            return showCard3OrComplete(def, providerId, name, registry);
        }
        return { status: "error", message: `OAuth for **${name}** didn't complete yet. Try clicking "Check & Continue" again after completing login in your browser.` };
    }
    if (method === "configure") {
        if (!def?.customFields)
            return { status: "error", message: "No configuration fields." };
        const baseUrl = String(data.baseUrl || "").trim();
        const apiKey = String(data.apiKey || "").trim();
        const modelId = String(data.modelId || "").trim();
        const modelIds = String(data.modelIds || "").trim();
        const contextWindow = parseInt(String(data.contextWindow || ""), 10) || undefined;
        if (!baseUrl)
            return { status: "error", message: "Base URL is required." };
        if (!modelId && !modelIds)
            return { status: "error", message: "At least one model ID is required." };
        const allIds = modelIds ? modelIds.split(",").map((s) => s.trim()).filter(Boolean) : [modelId];
        if (modelId && !allIds.includes(modelId))
            allIds.unshift(modelId);
        const models = allIds.map((id) => ({ id, name: id, ...(contextWindow ? { contextWindow } : {}) }));
        backupFile(MODELS_JSON);
        const modelsJson = readJsonFile(MODELS_JSON);
        if (!modelsJson.providers)
            modelsJson.providers = {};
        modelsJson.providers[providerId] = { baseUrl, api: def.customApi || "openai-completions", ...(apiKey ? { apiKey } : {}), models };
        writeJsonFile(MODELS_JSON, modelsJson);
        return {
            status: "success",
            message: `✓ **${name}** saved to \`models.json\` (backup created).\n\nModels: ${allIds.join(", ")}\n\nRun \`/restart\` to load the new configuration, then \`/model\` to select a model.`,
        };
    }
    if (method === "logout") {
        const cred = authStorage.get(providerId);
        if (cred) {
            backupFile(AUTH_JSON);
            authStorage.set(providerId, undefined);
            authStorage.reload();
        }
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
    return { status: "error", message: `Unknown method: ${method}` };
}
/** Show Card 3 (model picker) or auto-complete if only one model. */
function showCard3OrComplete(def, providerId, name, registry) {
    // Custom providers need a restart before models appear in the registry
    if (def?.isCustom) {
        return {
            status: "success",
            message: `✓ **${name}** configured. Run \`/restart\` to load, then \`/model\` to select a model.`,
        };
    }
    const models = registry.getAll().filter((m) => m.provider === providerId);
    if (models.length === 0) {
        return { status: "success", message: `✓ **${name}** authenticated, but no models found for this provider. Use \`/model\` to check available models.` };
    }
    if (models.length === 1) {
        // Auto-select the single model
        return {
            status: "success",
            message: `✓ **${name}** authenticated. One model available: **${models[0].name || models[0].id}**.\n\nUse \`/model ${models[0].provider}/${models[0].id}\` to activate it.`,
        };
    }
    return {
        status: "success",
        message: `${name} — select a model`,
        contentBlocks: [buildCard3(def, models)],
    };
}
/** Card 3 submitted → activate model. */
function handleStep3(data) {
    const providerId = String(data.provider || "").trim();
    const modelId = String(data.model || "").trim();
    if (!modelId)
        return { status: "error", message: "No model selected." };
    return {
        status: "success",
        message: `✓ Use \`/model ${providerId}/${modelId}\` to switch to this model.`,
    };
}
// ── Command handlers ────────────────────────────────────────────
export async function handleLogin(session, modelRegistry, command) {
    const authStorage = getAuthStorage(session, modelRegistry);
    if (!authStorage)
        return { status: "error", message: "Auth storage is not available." };
    const registry = getModelRegistry(session, modelRegistry);
    // Internal routing from card submissions
    if (command.provider?.startsWith("__step1 ")) {
        const json = command.provider.slice(8);
        try {
            return await handleStep1(authStorage, JSON.parse(json));
        }
        catch {
            return { status: "error", message: "Invalid data." };
        }
    }
    if (command.provider?.startsWith("__step1method ")) {
        const json = command.provider.slice(14);
        try {
            return await handleStep1Method(authStorage, JSON.parse(json));
        }
        catch {
            return { status: "error", message: "Invalid data." };
        }
    }
    if (command.provider?.startsWith("__step2 ")) {
        const json = command.provider.slice(8);
        try {
            return handleStep2(authStorage, registry, JSON.parse(json));
        }
        catch {
            return { status: "error", message: "Invalid data." };
        }
    }
    if (command.provider?.startsWith("__step3 ")) {
        const json = command.provider.slice(8);
        try {
            return handleStep3(JSON.parse(json));
        }
        catch {
            return { status: "error", message: "Invalid data." };
        }
    }
    // No args → show Card 1
    const statuses = getProviderStatuses(authStorage);
    return { status: "success", message: "Provider authentication", contentBlocks: [buildCard1(statuses)] };
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
    return { status: "success", message: "Provider authentication", contentBlocks: [buildCard1(statuses)] };
}
