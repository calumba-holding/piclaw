import { createHmac } from "node:crypto";
import { describe, expect, test } from "bun:test";
import {
  handleAuthVerifyRequest,
  type TotpAuthContext,
  type TotpFailureTrackerLike,
} from "../../../../src/channels/web/auth/totp-auth.js";
import { WEB_RUNTIME_CONFIG } from "../../../../src/core/config.js";
import { initDatabase } from "../../../../src/db.js";

class StubFailureTracker implements TotpFailureTrackerLike {
  constructor(
    private readonly state: {
      isLocked?: boolean;
      recordLocked?: boolean;
      failures?: number;
      failureLimit?: number;
      cleared?: { value: boolean };
    } = {}
  ) {}

  isLocked(): boolean {
    return Boolean(this.state.isLocked);
  }

  recordFailure(): { locked: boolean; failures: number } {
    return {
      locked: Boolean(this.state.recordLocked),
      failures: this.state.failures ?? 1,
    };
  }

  clear(): void {
    if (this.state.cleared) this.state.cleared.value = true;
  }

  getFailureLimit(): number {
    return this.state.failureLimit ?? 5;
  }
}

function createContext(overrides?: Partial<TotpAuthContext>): TotpAuthContext {
  return {
    isAuthEnabled: () => true,
    isTotpEnabled: () => true,
    json: (payload, status = 200) =>
      new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
      }),
    getClientKey: () => "test-client",
    logAuthEvent: () => {},
    buildSessionCookie: () => "piclaw_session=test",
    failureTracker: new StubFailureTracker(),
    ...overrides,
  };
}

const BASE32_ALPHABET = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";

function decodeBase32(value: string): Buffer | null {
  const clean = value.toUpperCase().replace(/[^A-Z2-7]/g, "");
  if (!clean) return null;

  let bits = 0;
  let buffer = 0;
  const bytes: number[] = [];

  for (const char of clean) {
    const index = BASE32_ALPHABET.indexOf(char);
    if (index < 0) continue;
    buffer = (buffer << 5) | index;
    bits += 5;
    if (bits >= 8) {
      bits -= 8;
      bytes.push((buffer >> bits) & 0xff);
    }
  }

  return bytes.length > 0 ? Buffer.from(bytes) : null;
}

function totpCode(secret: string, timeMs = Date.now(), stepSeconds = 30, digits = 6): string {
  const key = decodeBase32(secret) ?? Buffer.from(secret, "utf8");
  const counter = Math.floor(timeMs / 1000 / stepSeconds);
  const counterBuffer = Buffer.alloc(8);
  counterBuffer.writeBigUInt64BE(BigInt(counter));
  const hmac = createHmac("sha1", key).update(counterBuffer).digest();
  const offset = hmac[hmac.length - 1] & 0x0f;
  const code =
    ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);
  return (code % 10 ** digits).toString().padStart(digits, "0");
}

describe("totp auth verify handler", () => {
  test("returns 404 when auth or totp is disabled", async () => {
    const req = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: JSON.stringify({ code: "123456" }),
      headers: { "Content-Type": "application/json" },
    });

    const authDisabled = await handleAuthVerifyRequest(req, createContext({ isAuthEnabled: () => false }));
    expect(authDisabled.status).toBe(404);
    expect(await authDisabled.json()).toEqual({ error: "Auth disabled" });

    const totpDisabled = await handleAuthVerifyRequest(req, createContext({ isTotpEnabled: () => false }));
    expect(totpDisabled.status).toBe(404);
    expect(await totpDisabled.json()).toEqual({ error: "Auth disabled" });
  });

  test("validates JSON body and code presence", async () => {
    const invalidReq = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: "{",
      headers: { "Content-Type": "application/json" },
    });
    const invalidRes = await handleAuthVerifyRequest(invalidReq, createContext());
    expect(invalidRes.status).toBe(400);
    expect(await invalidRes.json()).toEqual({ error: "Invalid JSON" });

    const missingCodeReq = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: JSON.stringify({}),
      headers: { "Content-Type": "application/json" },
    });
    const missingCodeRes = await handleAuthVerifyRequest(missingCodeReq, createContext());
    expect(missingCodeRes.status).toBe(400);
    expect(await missingCodeRes.json()).toEqual({ error: "Missing code" });
  });

  test("rejects when lockout is active", async () => {
    const req = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: JSON.stringify({ code: "123456" }),
      headers: { "Content-Type": "application/json" },
    });

    const events: string[] = [];
    const res = await handleAuthVerifyRequest(req, createContext({
      logAuthEvent: (_req, event) => events.push(event),
      failureTracker: new StubFailureTracker({ isLocked: true }),
    }));

    expect(res.status).toBe(429);
    expect(await res.json()).toEqual({ error: "Too many failed attempts. Try again later." });
    expect(events).toContain("TOTP lockout active");
  });

  test("records invalid totp failures and returns 401", async () => {
    const req = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: JSON.stringify({ code: "bad-code" }),
      headers: { "Content-Type": "application/json" },
    });

    const events: string[] = [];
    const res = await handleAuthVerifyRequest(req, createContext({
      logAuthEvent: (_req, event) => events.push(event),
      failureTracker: new StubFailureTracker({ failures: 2, failureLimit: 5 }),
    }));

    expect(res.status).toBe(401);
    expect(await res.json()).toEqual({ error: "Invalid code" });
    expect(events).toContain("TOTP failed (2/5)");
  });

  test("issues a session cookie with the compatibility success envelope on valid totp", async () => {
    initDatabase();
    const cleared = { value: false };
    const req = new Request("https://example.com/auth/verify", {
      method: "POST",
      body: JSON.stringify({ code: totpCode(WEB_RUNTIME_CONFIG.totpSecret) }),
      headers: { "Content-Type": "application/json" },
    });

    const res = await handleAuthVerifyRequest(req, createContext({
      failureTracker: new StubFailureTracker({ cleared }),
      buildSessionCookie: () => "piclaw_session=test; Path=/; HttpOnly",
    }));

    expect(res.status).toBe(200);
    expect(await res.json()).toEqual({ status: "ok", ok: true });
    expect(res.headers.get("Set-Cookie")).toContain("piclaw_session=test");
    expect(cleared.value).toBe(true);
  });
});
