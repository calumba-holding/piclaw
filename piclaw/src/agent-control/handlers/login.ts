/**
 * agent-control/handlers/login.ts – Provider authentication via /login and /logout.
 *
 * Card-driven authentication flow for AI model providers.
 * Works without a running model — all UI is hardcoded adaptive cards.
 *
 * Flow:
 *   /login  → posts a provider status card with login/logout actions
 *   /logout → same card, focused on logged-in providers
 *
 * Card submissions are intercepted in the adaptive card action handler
 * (web.ts) and routed back through applySlashCommand.
 */

import type { AgentSession, ModelRegistry } from "@mariozechner/pi-coding-agent";
import type { AgentControlCommand, AgentControlResult } from "../agent-control-types.js";

type LoginCommand = Extract<AgentControlCommand, { type: "login" }>;
type LogoutCommand = Extract<AgentControlCommand, { type: "logout" }>;

interface AuthStorageLike {
  getOAuthProviders(): Array<{ id: string; name: string; usesCallbackServer?: boolean }>;
  get(provider: string): { type?: string; [key: string]: unknown } | undefined;
  set(provider: string, credential: Record<string, unknown>): void;
  login(
    providerId: string,
    callbacks: {
      onAuth: (info: { url: string; instructions?: string }) => void;
      onPrompt: (prompt: { message: string; placeholder?: string }) => Promise<string>;
      onProgress?: (message: string) => void;
      onManualCodeInput?: () => Promise<string>;
    },
  ): Promise<void>;
  reload(): void;
}

/** Known providers that support direct API key authentication. */
const API_KEY_PROVIDERS: Array<{ id: string; name: string; envVar: string; hint: string }> = [
  { id: "anthropic", name: "Anthropic", envVar: "ANTHROPIC_API_KEY", hint: "sk-ant-..." },
  { id: "openai", name: "OpenAI", envVar: "OPENAI_API_KEY", hint: "sk-proj-..." },
  { id: "google", name: "Google AI", envVar: "GOOGLE_API_KEY", hint: "AIza..." },
];

/** Providers that use env vars / managed identity rather than /login. */
const ENV_ONLY_PROVIDERS: Array<{ id: string; name: string; vars: string[] }> = [
  { id: "azure", name: "Azure OpenAI", vars: ["AOAI_BASE_URL", "AOAI_RESOURCE", "AOAI_MODEL_ID"] },
  { id: "azure-openai", name: "Azure OpenAI", vars: ["AOAI_BASE_URL", "AOAI_RESOURCE", "AOAI_MODEL_ID"] },
];

function getAuthStorage(session: AgentSession, modelRegistry: ModelRegistry): AuthStorageLike | null {
  const registry = (session as AgentSession & { modelRegistry?: ModelRegistry }).modelRegistry ?? modelRegistry;
  return (registry as unknown as { authStorage?: AuthStorageLike })?.authStorage ?? null;
}

interface ProviderInfo {
  id: string;
  name: string;
  authType: "oauth" | "api_key" | "none";
  hasOAuth: boolean;
  hasApiKey: boolean;
}

function getProviderStatus(authStorage: AuthStorageLike): ProviderInfo[] {
  const oauthProviders = authStorage.getOAuthProviders();
  const apiKeyIds = new Set(API_KEY_PROVIDERS.map((p) => p.id));
  const seen = new Set<string>();
  const result: ProviderInfo[] = [];

  for (const p of oauthProviders) {
    seen.add(p.id);
    const cred = authStorage.get(p.id);
    result.push({
      id: p.id,
      name: p.name,
      authType: cred?.type === "oauth" ? "oauth" : cred?.type === "api_key" ? "api_key" : "none",
      hasOAuth: true,
      hasApiKey: apiKeyIds.has(p.id),
    });
  }

  for (const p of API_KEY_PROVIDERS) {
    if (seen.has(p.id)) continue;
    seen.add(p.id);
    const cred = authStorage.get(p.id);
    result.push({
      id: p.id,
      name: p.name,
      authType: cred?.type === "api_key" ? "api_key" : cred?.type === "oauth" ? "oauth" : "none",
      hasOAuth: false,
      hasApiKey: true,
    });
  }

  return result;
}

function buildStatusEmoji(info: ProviderInfo): string {
  if (info.authType === "oauth") return "✓ OAuth";
  if (info.authType === "api_key") return "✓ API key";
  return "—";
}

function buildProviderCardPayload(providers: ProviderInfo[]): Record<string, unknown> {
  const body: unknown[] = [
    {
      type: "TextBlock",
      text: "Provider Authentication",
      weight: "Bolder",
      size: "Medium",
    },
    {
      type: "TextBlock",
      text: "Select a provider, choose an auth method, and submit.",
      wrap: true,
    },
  ];

  // Provider facts showing current status
  const facts = providers.map((p) => ({
    title: p.name,
    value: buildStatusEmoji(p),
  }));
  body.push({ type: "FactSet", facts, spacing: "medium" });

  // Provider picker
  const providerChoices = providers.map((p) => ({
    title: `${p.name}${p.authType !== "none" ? ` (${buildStatusEmoji(p)})` : ""}`,
    value: p.id,
  }));
  body.push(
    { type: "TextBlock", text: "Provider", weight: "Bolder", spacing: "medium" },
    {
      type: "Input.ChoiceSet",
      id: "provider",
      style: "compact",
      choices: providerChoices,
      value: providers[0]?.id || "",
    },
  );

  // Action picker
  body.push(
    { type: "TextBlock", text: "Action", weight: "Bolder", spacing: "medium" },
    {
      type: "Input.ChoiceSet",
      id: "action",
      style: "compact",
      choices: [
        { title: "Login with OAuth", value: "oauth" },
        { title: "Enter API key", value: "api_key" },
        { title: "Logout", value: "logout" },
      ],
      value: "api_key",
    },
  );

  // API key input (masked)
  body.push(
    {
      type: "TextBlock",
      text: "API Key (only for \"Enter API key\" action)",
      spacing: "medium",
      isSubtle: true,
      wrap: true,
    },
    {
      type: "Input.Text",
      id: "api_key",
      placeholder: "sk-...",
      style: "password",
    },
  );

  // Azure / env-only provider note
  const envNote = ENV_ONLY_PROVIDERS.map(
    (p) => `**${p.name}**: configured via env vars (${p.vars.join(", ")})`
  ).join("\n\n");
  body.push({
    type: "TextBlock",
    text: envNote,
    spacing: "medium",
    isSubtle: true,
    wrap: true,
    size: "Small",
  });

  return {
    type: "AdaptiveCard",
    version: "1.5",
    body,
    actions: [
      { type: "Action.Submit", title: "Submit", data: { intent: "provider-auth" } },
    ],
  };
}

function buildProviderAuthCard(providers: ProviderInfo[]): Record<string, unknown> {
  return {
    type: "adaptive_card",
    card_id: `provider-auth-${Date.now()}`,
    schema_version: "1.5",
    state: "active",
    fallback_text: "Provider authentication card.",
    payload: buildProviderCardPayload(providers),
  };
}

/** Handle /login — post provider auth card, or handle direct commands. */
export async function handleLogin(
  session: AgentSession,
  modelRegistry: ModelRegistry,
  command: LoginCommand,
): Promise<AgentControlResult> {
  const authStorage = getAuthStorage(session, modelRegistry);
  if (!authStorage) {
    return { status: "error", message: "Auth storage is not available." };
  }

  const providers = getProviderStatus(authStorage);

  // Direct /login <provider> key:<value> from card submission routing
  if (command.provider) {
    const providerArg = command.provider.trim();
    const keyMatch = providerArg.match(/^(\S+)\s+key:(.+)$/i);
    if (keyMatch) {
      const providerId = keyMatch[1].toLowerCase();
      const apiKey = keyMatch[2].trim();
      if (!apiKey) {
        return { status: "error", message: "API key cannot be empty." };
      }
      authStorage.set(providerId, { type: "api_key", key: apiKey });
      authStorage.reload();
      const providerName = providers.find((p) => p.id === providerId)?.name || providerId;
      return { status: "success", message: `✓ API key stored for **${providerName}**. Use \`/model\` to select a model.` };
    }

    // Direct /login <provider> for OAuth
    const providerId = providerArg.toLowerCase();
    const provider = providers.find((p) => p.id === providerId);

    // Check env-only providers
    const envOnly = ENV_ONLY_PROVIDERS.find((p) => p.id === providerId);
    if (envOnly) {
      return {
        status: "error",
        message: `**${envOnly.name}** is configured via environment variables, not /login.\n\nRequired vars: ${envOnly.vars.map((v) => `\`${v}\``).join(", ")}`,
      };
    }

    if (!provider) {
      return {
        status: "error",
        message: `Unknown provider "${providerArg}". Available: ${providers.map((p) => p.id).join(", ")}`,
      };
    }

    if (provider.hasOAuth) {
      return startOAuthLogin(authStorage, providerId, provider.name);
    }

    return {
      status: "error",
      message: `**${provider.name}** only supports API key auth. Use \`/login\` and enter a key via the card.`,
    };
  }

  // No arguments — show the card
  if (providers.length === 0) {
    return { status: "error", message: "No authentication providers available." };
  }

  return {
    status: "success",
    message: "Provider authentication",
    contentBlocks: [buildProviderAuthCard(providers)],
  };
}

/**
 * Start OAuth login — non-blocking.
 *
 * Immediately returns a message with instructions. The actual OAuth flow
 * runs in the background; if the callback server succeeds, credentials
 * are stored automatically. If not, the user already has the URL.
 */
function startOAuthLogin(
  authStorage: AuthStorageLike,
  providerId: string,
  providerName: string,
): AgentControlResult {
  let authUrl = "";
  let authInstructions = "";
  let resolved = false;

  // Start the login in the background — do NOT await
  const loginPromise = authStorage.login(providerId, {
    onAuth: (info) => {
      authUrl = info.url;
      authInstructions = info.instructions || "";
    },
    onProgress: () => {},
    onPrompt: async () => "",
    onManualCodeInput: () => {
      return new Promise<string>((_resolve, reject) => {
        // Let the callback server try for 3 minutes
        setTimeout(() => reject(new Error("Timed out waiting for browser redirect")), 180_000);
      });
    },
  });

  // Handle background completion
  loginPromise
    .then(() => {
      resolved = true;
      authStorage.reload();
      console.log(`[login] OAuth login completed for ${providerName}`);
    })
    .catch((err) => {
      if (!resolved) {
        console.warn(`[login] OAuth login failed for ${providerName}: ${err instanceof Error ? err.message : err}`);
      }
    });

  // Wait briefly for onAuth to fire (it's typically synchronous/fast)
  // We use a sync spin here because onAuth fires during the initial
  // HTTP request phase of the OAuth flow, before any user interaction.
  const start = Date.now();
  while (!authUrl && Date.now() - start < 3000) {
    // Bun supports Atomics.wait for sync sleep
    Atomics.wait(new Int32Array(new SharedArrayBuffer(4)), 0, 0, 50);
  }

  if (authUrl) {
    const lines = [
      `**${providerName}** OAuth login started.`,
      "",
      "1. Open this URL in your browser:",
      `   ${authUrl}`,
      authInstructions ? `   ${authInstructions}` : "",
      "",
      "2. Complete the login in the browser.",
      "3. The callback server is listening — if your browser can reach this container, login will complete automatically.",
      "4. If it doesn't complete within a minute, credentials may need to be set via API key instead.",
    ].filter(Boolean);
    return { status: "success", message: lines.join("\n") };
  }

  return {
    status: "error",
    message: `Could not start OAuth flow for **${providerName}**. The provider may not be available. Try API key auth instead.`,
  };
}

/** Handle /logout. */
export async function handleLogout(
  session: AgentSession,
  modelRegistry: ModelRegistry,
  command: LogoutCommand,
): Promise<AgentControlResult> {
  const authStorage = getAuthStorage(session, modelRegistry);
  if (!authStorage) {
    return { status: "error", message: "Auth storage is not available." };
  }

  if (!command.provider) {
    const providers = getProviderStatus(authStorage);
    const loggedIn = providers.filter((p) => p.authType !== "none");
    if (loggedIn.length === 0) {
      return { status: "success", message: "No providers are currently logged in." };
    }
    const lines = ["**Logged in providers:**", ""];
    for (const p of loggedIn) {
      lines.push(`• **${p.name}** (${p.id}) — ${p.authType}`);
    }
    lines.push("", "Use `/logout <provider>` to remove credentials.");
    return { status: "success", message: lines.join("\n") };
  }

  const providerId = command.provider.trim().toLowerCase();
  const providers = getProviderStatus(authStorage);
  const provider = providers.find((p) => p.id === providerId);
  const providerName = provider?.name || providerId;
  const cred = authStorage.get(providerId);
  if (!cred) {
    return { status: "error", message: `**${providerName}** is not logged in.` };
  }

  authStorage.set(providerId, undefined as unknown as Record<string, unknown>);
  authStorage.reload();
  return { status: "success", message: `✓ Logged out from **${providerName}**.` };
}
