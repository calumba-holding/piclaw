import { describe, expect, test } from "bun:test";
import { resolveModelRequestAuth } from "../../src/utils/model-auth.js";

describe("model auth helper", () => {
  const model = { provider: "openai", id: "gpt-test" } as any;

  test("prefers getApiKeyAndHeaders when available", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKeyAndHeaders: async () => ({
        ok: true,
        apiKey: "header-key",
        headers: { Authorization: "Bearer token", "X-Test": "1" },
      }),
      getApiKey: async () => "legacy-key",
    } as any, model);

    expect(auth).toEqual({
      ok: true,
      apiKey: "header-key",
      headers: { Authorization: "Bearer token", "X-Test": "1" },
    });
  });

  test("supports header-only auth payloads from getApiKeyAndHeaders", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKeyAndHeaders: async () => ({
        ok: true,
        headers: { cookie: "session=abc" },
      }),
    } as any, model);

    expect(auth).toEqual({
      ok: true,
      apiKey: undefined,
      headers: { cookie: "session=abc" },
    });
  });

  test("falls back to legacy getApiKey for older test doubles", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKey: async () => "legacy-key",
    } as any, model);

    expect(auth).toEqual({ ok: true, apiKey: "legacy-key" });
  });

  test("returns a stable error when no credentials are available", async () => {
    const auth = await resolveModelRequestAuth({
      getApiKeyAndHeaders: async () => ({ ok: false, error: "missing auth" }),
    } as any, model);

    expect(auth).toEqual({ ok: false, error: "missing auth" });
  });
});
