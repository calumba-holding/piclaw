const USAGE_CACHE_TTL_MS = Number(process.env.PICLAW_PROVIDER_USAGE_TTL_MS || "60000");
const usageCache = new Map();
function clampPercent(value) {
    const num = Number(value);
    if (!Number.isFinite(num))
        return null;
    return Math.max(0, Math.min(100, num));
}
function parseDate(value) {
    if (typeof value === "number" && Number.isFinite(value)) {
        // Unix seconds for Codex API
        return new Date(value * 1000);
    }
    if (typeof value === "string" && value.trim()) {
        const date = new Date(value);
        return Number.isNaN(date.getTime()) ? null : date;
    }
    return null;
}
function formatResetDescription(date) {
    if (!date)
        return null;
    const deltaMs = date.getTime() - Date.now();
    if (!Number.isFinite(deltaMs))
        return null;
    if (deltaMs <= 0)
        return "resets soon";
    const totalMinutes = Math.max(1, Math.round(deltaMs / 60000));
    if (totalMinutes < 60)
        return `resets in ~${totalMinutes}m`;
    const hours = Math.floor(totalMinutes / 60);
    const mins = totalMinutes % 60;
    return mins > 0 ? `resets in ~${hours}h ${mins}m` : `resets in ~${hours}h`;
}
function makeWindow(label, usedPercentInput, resetInput, windowMinutes) {
    const usedPercent = clampPercent(usedPercentInput);
    if (usedPercent == null)
        return null;
    const remaining = clampPercent(100 - usedPercent);
    const resetDate = parseDate(resetInput);
    return {
        label,
        used_percent: usedPercent,
        remaining_percent: remaining,
        window_minutes: windowMinutes,
        resets_at: resetDate ? resetDate.toISOString() : null,
        reset_description: formatResetDescription(resetDate),
    };
}
function compactPercent(value) {
    if (value == null)
        return null;
    return `${Math.round(value)}%`;
}
function buildCodexHint(primary, secondary, creditsRemaining, creditsUnlimited) {
    const parts = [];
    const p1 = compactPercent(primary?.remaining_percent ?? null);
    const p2 = compactPercent(secondary?.remaining_percent ?? null);
    if (p1)
        parts.push(`5h ${p1}`);
    if (p2)
        parts.push(`wk ${p2}`);
    if (creditsUnlimited)
        parts.push("credits ∞");
    else if (creditsRemaining != null && Number.isFinite(creditsRemaining)) {
        parts.push(`credits ${creditsRemaining.toFixed(creditsRemaining >= 100 ? 0 : 1).replace(/\.0$/, "")}`);
    }
    return parts.join(" • ");
}
function buildCopilotHint(primary, secondary) {
    const parts = [];
    const premium = compactPercent(primary?.remaining_percent ?? null);
    const chat = compactPercent(secondary?.remaining_percent ?? null);
    if (premium)
        parts.push(`premium ${premium}`);
    if (chat)
        parts.push(`chat ${chat}`);
    return parts.join(" • ");
}
async function getOAuthCredential(authStorage, providerId) {
    const current = authStorage.get(providerId) ?? null;
    if (!current || current.type !== "oauth")
        return null;
    if (typeof current.expires === "number" && Number.isFinite(current.expires) && Date.now() >= current.expires) {
        try {
            await authStorage.refreshOAuthTokenWithLock(providerId);
        }
        catch {
            // Fall through and use whatever credentials are currently present.
        }
    }
    const refreshed = authStorage.get(providerId) ?? null;
    return refreshed && refreshed.type === "oauth" ? refreshed : null;
}
async function fetchCodexUsage(authStorage) {
    const credential = await getOAuthCredential(authStorage, "openai-codex");
    if (!credential?.access || !credential?.accountId)
        return null;
    const res = await fetch("https://chatgpt.com/backend-api/wham/usage", {
        headers: {
            Authorization: `Bearer ${credential.access}`,
            Accept: "application/json",
            "ChatGPT-Account-Id": credential.accountId,
            "User-Agent": "PiClaw",
        },
    });
    if (!res.ok)
        return null;
    const payload = (await res.json());
    const primary = makeWindow("5h", payload?.rate_limit?.primary_window?.used_percent, payload?.rate_limit?.primary_window?.reset_at, Number.isFinite(payload?.rate_limit?.primary_window?.limit_window_seconds)
        ? Math.round(payload.rate_limit.primary_window.limit_window_seconds / 60)
        : 300);
    const secondary = makeWindow("week", payload?.rate_limit?.secondary_window?.used_percent, payload?.rate_limit?.secondary_window?.reset_at, Number.isFinite(payload?.rate_limit?.secondary_window?.limit_window_seconds)
        ? Math.round(payload.rate_limit.secondary_window.limit_window_seconds / 60)
        : null);
    const creditsRemaining = payload?.credits?.balance != null ? Number(payload.credits.balance) : null;
    const creditsUnlimited = Boolean(payload?.credits?.unlimited);
    return {
        provider: "openai-codex",
        source: "chatgpt-usage-api",
        plan: typeof payload?.plan_type === "string" ? payload.plan_type : null,
        fetched_at: new Date().toISOString(),
        primary,
        secondary,
        credits_remaining: Number.isFinite(creditsRemaining) ? creditsRemaining : null,
        credits_unlimited: creditsUnlimited,
        hint_short: buildCodexHint(primary, secondary, Number.isFinite(creditsRemaining) ? creditsRemaining : null, creditsUnlimited),
    };
}
async function fetchGitHubCopilotUsage(authStorage) {
    const credential = await getOAuthCredential(authStorage, "github-copilot");
    const githubToken = typeof credential?.refresh === "string" ? credential.refresh : null;
    if (!githubToken)
        return null;
    const res = await fetch("https://api.github.com/copilot_internal/user", {
        headers: {
            Authorization: `token ${githubToken}`,
            Accept: "application/json",
            "Editor-Version": "vscode/1.96.2",
            "Editor-Plugin-Version": "copilot-chat/0.26.7",
            "User-Agent": "GitHubCopilotChat/0.26.7",
            "X-Github-Api-Version": "2025-04-01",
        },
    });
    if (!res.ok)
        return null;
    const payload = (await res.json());
    const premium = payload?.quota_snapshots?.premium_interactions;
    const chat = payload?.quota_snapshots?.chat;
    const primary = premium
        ? {
            label: "premium",
            used_percent: clampPercent(100 - Number(premium.percent_remaining ?? premium.remaining / premium.entitlement * 100)),
            remaining_percent: clampPercent(premium.percent_remaining ?? premium.remaining / premium.entitlement * 100),
            window_minutes: null,
            resets_at: parseDate(payload?.quota_reset_date)?.toISOString() ?? null,
            reset_description: formatResetDescription(parseDate(payload?.quota_reset_date)),
        }
        : null;
    const secondary = chat
        ? {
            label: "chat",
            used_percent: clampPercent(100 - Number(chat.percent_remaining ?? chat.remaining / chat.entitlement * 100)),
            remaining_percent: clampPercent(chat.percent_remaining ?? chat.remaining / chat.entitlement * 100),
            window_minutes: null,
            resets_at: parseDate(payload?.quota_reset_date)?.toISOString() ?? null,
            reset_description: formatResetDescription(parseDate(payload?.quota_reset_date)),
        }
        : null;
    return {
        provider: "github-copilot",
        source: "github-copilot-internal-api",
        plan: typeof payload?.copilot_plan === "string" ? payload.copilot_plan : null,
        fetched_at: new Date().toISOString(),
        primary,
        secondary,
        credits_remaining: null,
        credits_unlimited: false,
        hint_short: buildCopilotHint(primary, secondary),
    };
}
export async function getProviderUsage(authStorage, providerId) {
    if (providerId !== "openai-codex" && providerId !== "github-copilot")
        return null;
    const cached = usageCache.get(providerId);
    if (cached && cached.expiresAt > Date.now()) {
        return cached.value;
    }
    let value;
    try {
        value = providerId === "openai-codex"
            ? await fetchCodexUsage(authStorage)
            : await fetchGitHubCopilotUsage(authStorage);
    }
    catch {
        value = cached?.value ?? null;
    }
    usageCache.set(providerId, {
        expiresAt: Date.now() + USAGE_CACHE_TTL_MS,
        value,
    });
    return value;
}
export function clearProviderUsageCache() {
    usageCache.clear();
}
