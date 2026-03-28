import { describe, expect, test } from "bun:test";
import {
  handleWebauthnLoginFinish,
  handleWebauthnLoginStart,
  handleWebauthnRegisterFinish,
  handleWebauthnRegisterStart,
  type WebauthnAuthContext,
} from "../../../../src/channels/web/auth/webauthn-auth.js";
import { WebauthnChallengeTracker } from "../../../../src/channels/web/auth/webauthn-challenges.js";

function createContext(passkeyEnabled = true) {
  const authEvents: string[] = [];
  const ctx: WebauthnAuthContext = {
    isPasskeyEnabled: () => passkeyEnabled,
    json: (payload, status = 200) =>
      new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
      }),
    buildSessionCookie: () => "piclaw_session=test",
    logAuthEvent: (_req, event) => authEvents.push(event),
    getClientKey: () => "test-ip",
    challenges: new WebauthnChallengeTracker(),
  };
  return { ctx, authEvents };
}

describe("webauthn auth handlers", () => {
  test("rejects passkey endpoints when passkeys are disabled", async () => {
    const { ctx } = createContext(false);

    const req = new Request("https://example.com/auth/webauthn/login/start", { method: "POST" });
    const res = await handleWebauthnLoginStart(req, ctx);

    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: "Passkeys disabled" });
  });

  test("login finish validates JSON and required payload", async () => {
    const { ctx, authEvents } = createContext(true);

    const invalidJsonReq = new Request("https://example.com/auth/webauthn/login/finish", {
      method: "POST",
      body: "{",
      headers: { "Content-Type": "application/json" },
    });
    const invalidJsonRes = await handleWebauthnLoginFinish(invalidJsonReq, ctx);
    expect(invalidJsonRes.status).toBe(400);
    expect(await invalidJsonRes.json()).toEqual({ error: "Invalid JSON" });

    const missingCredentialReq = new Request("https://example.com/auth/webauthn/login/finish", {
      method: "POST",
      body: JSON.stringify({ token: "abc" }),
      headers: { "Content-Type": "application/json" },
    });
    const missingCredentialRes = await handleWebauthnLoginFinish(missingCredentialReq, ctx);
    expect(missingCredentialRes.status).toBe(400);
    expect(await missingCredentialRes.json()).toEqual({ error: "Missing credential" });
    expect(authEvents).toContain("WebAuthn login missing credential payload");
  });

  test("login finish rejects unknown or expired challenges", async () => {
    const { ctx, authEvents } = createContext(true);

    const req = new Request("https://example.com/auth/webauthn/login/finish", {
      method: "POST",
      body: JSON.stringify({ token: "missing", credential: { id: "cred-id" } }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await handleWebauthnLoginFinish(req, ctx);
    expect(res.status).toBe(400);
    expect(await res.json()).toEqual({ error: "Login expired" });
    expect(authEvents).toContain("WebAuthn login expired or unknown token");
  });

  test("register handlers validate required token/credential payloads", async () => {
    const { ctx, authEvents } = createContext(true);

    const missingTokenReq = new Request("https://example.com/auth/webauthn/register/start", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    const missingTokenRes = await handleWebauthnRegisterStart(missingTokenReq, ctx);
    expect(missingTokenRes.status).toBe(400);
    expect(await missingTokenRes.json()).toEqual({ error: "Missing enrol token" });

    const missingCredentialReq = new Request("https://example.com/auth/webauthn/register/finish", {
      method: "POST",
      body: JSON.stringify({ token: "abc" }),
      headers: { "Content-Type": "application/json" },
    });
    const missingCredentialRes = await handleWebauthnRegisterFinish(missingCredentialReq, ctx);
    expect(missingCredentialRes.status).toBe(400);
    expect(await missingCredentialRes.json()).toEqual({ error: "Missing credential" });

    expect(authEvents).toContain("WebAuthn registration missing enrol token");
    expect(authEvents).toContain("WebAuthn registration missing credential payload");
  });
});
