import type { ModelRegistry } from "@mariozechner/pi-coding-agent";
import type { Api, Model } from "@mariozechner/pi-ai";

/** Resolved auth payload for provider requests in Piclaw runtime helpers. */
export interface ModelRequestAuth {
  ok: boolean;
  apiKey?: string;
  headers?: Record<string, string>;
  error?: string;
}

/**
 * Resolve per-request auth in a way that works with current upstream Pi and older test doubles.
 *
 * Upstream `ModelRegistry.getApiKey()` was replaced by `getApiKeyAndHeaders()`. Piclaw still has
 * tests and lightweight stubs that only implement the older method, so this helper preserves a
 * compatibility path while forwarding headers when available.
 */
export async function resolveModelRequestAuth(
  registry: ModelRegistry,
  model: Model<Api>,
): Promise<ModelRequestAuth> {
  const registryWithHeaders = registry as ModelRegistry & {
    getApiKeyAndHeaders?: (model: Model<Api>) => Promise<{ ok: boolean; apiKey?: string; headers?: Record<string, string>; error?: string }>;
    getApiKey?: (model: Model<Api>) => Promise<string | undefined>;
  };

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
