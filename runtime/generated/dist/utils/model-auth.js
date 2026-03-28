/**
 * Resolve per-request auth in a way that works with current upstream Pi and older test doubles.
 *
 * Upstream `ModelRegistry.getApiKey()` was replaced by `getApiKeyAndHeaders()`. Piclaw still has
 * tests and lightweight stubs that only implement the older method, so this helper preserves a
 * compatibility path while forwarding headers when available.
 */
export async function resolveModelRequestAuth(registry, model) {
    const registryWithHeaders = registry;
    if (typeof registryWithHeaders.getApiKeyAndHeaders === "function") {
        const auth = await registryWithHeaders.getApiKeyAndHeaders(model);
        if (auth.ok) {
            return { ok: true, apiKey: auth.apiKey, headers: auth.headers };
        }
        return { ok: false, error: auth.error || `No credentials available for ${model.provider}/${model.id}.` };
    }
    if (typeof registryWithHeaders.getApiKey === "function") {
        const apiKey = await registryWithHeaders.getApiKey(model);
        if (apiKey) {
            return { ok: true, apiKey };
        }
    }
    return { ok: false, error: `No credentials available for ${model.provider}/${model.id}.` };
}
