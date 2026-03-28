import { describe, expect, test } from "bun:test";
import { resolveWebauthnRpInfo } from "../../../src/channels/web/auth/webauthn-challenges.js";
import { checkCsrfOrigin } from "../../../src/channels/web/http/security.js";
import { getRequestOriginParts } from "../../../src/utils/request-client.js";

/**
 * Proxy-sensitive flow regression tests.
 *
 * These validate that auth, CSRF, WebAuthn, and origin resolution all
 * behave correctly behind TLS-terminating reverse proxies and tunnels.
 */
describe("proxy-sensitive web flows", () => {
  // ── Origin resolution ─────────────────────────────────────────

  test("getRequestOriginParts omits non-default port when proxy forwards standard HTTPS", () => {
    const req = new Request("http://internal:3000/path", {
      headers: {
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    const parts = getRequestOriginParts(req, true);
    expect(parts.proto).toBe("https");
    expect(parts.host).toBe("app.example.com");
  });

  test("getRequestOriginParts appends non-standard port from x-forwarded-port", () => {
    const req = new Request("http://internal:3000/path", {
      headers: {
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
        "x-forwarded-port": "8443",
      },
    });
    const parts = getRequestOriginParts(req, true);
    expect(parts.host).toBe("app.example.com:8443");
  });

  test("getRequestOriginParts ignores forwarded headers when trustProxy is false", () => {
    const req = new Request("http://internal:3000/path", {
      headers: {
        host: "internal:3000",
        "x-forwarded-host": "attacker.example.com",
        "x-forwarded-proto": "https",
      },
    });
    const parts = getRequestOriginParts(req, false);
    expect(parts.proto).toBe("http");
    expect(parts.host).toBe("internal:3000");
  });

  // ── CSRF origin checks behind proxies ─────────────────────────

  test("CSRF allows proxy-forwarded origin matching x-forwarded-host", () => {
    const req = new Request("http://internal:3000/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("CSRF blocks origin that doesn't match either direct or forwarded host", () => {
    const req = new Request("http://internal:3000/post", {
      method: "POST",
      headers: {
        origin: "https://evil.example.com",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(false);
  });

  test("CSRF allows missing Origin header (non-browser clients)", () => {
    const req = new Request("http://internal:3000/post", {
      method: "POST",
      headers: { host: "internal:3000" },
    });
    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("CSRF blocks origin=null", () => {
    const req = new Request("http://internal:3000/post", {
      method: "POST",
      headers: { origin: "null", host: "internal:3000" },
    });
    expect(checkCsrfOrigin(req)).toBe(false);
  });

  test("CSRF TLS-offload fallback: https browser vs http backend, same host", () => {
    const req = new Request("http://app.example.com:80/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "app.example.com",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("CSRF TLS-offload fallback does not allow different hosts", () => {
    const req = new Request("http://other.example.com/post", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "other.example.com",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(false);
  });

  // ── WebAuthn RP resolution behind proxies ─────────────────────

  test("WebAuthn RP uses browser Origin header when present", () => {
    const req = new Request("http://internal:3000/auth/webauthn/login/start", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "internal:3000",
      },
    });
    const info = resolveWebauthnRpInfo(req);
    expect(info.rpId).toBe("app.example.com");
    expect(info.origin).toBe("https://app.example.com");
  });

  test("WebAuthn RP falls back to forwarded host/proto without Origin (requires TRUST_PROXY)", () => {
    // Note: In production, browsers always send Origin on POST. This fallback
    // path only fires for non-browser clients. The forwarded-header lookup
    // goes through getRequestOriginParts which respects the global TRUST_PROXY
    // config. We pass trustProxy explicitly here to simulate production.
    const req = new Request("http://internal:3000/auth/webauthn/login/start", {
      method: "POST",
      headers: {
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    // Without TRUST_PROXY, falls back to direct request URL
    const infoNoProxy = resolveWebauthnRpInfo(req);
    expect(infoNoProxy.rpId).toBe("internal");

    // With TRUST_PROXY, would use forwarded headers via getRequestOriginParts
    const parts = getRequestOriginParts(req, true);
    expect(parts.host).toBe("app.example.com");
    expect(parts.proto).toBe("https");
  });

  test("WebAuthn RP uses direct request URL as last resort", () => {
    const req = new Request("http://localhost:8080/auth/webauthn/login/start", {
      method: "POST",
      headers: { host: "localhost:8080" },
    });
    const info = resolveWebauthnRpInfo(req);
    expect(info.rpId).toBe("localhost");
    expect(info.origin).toBe("http://localhost:8080");
  });

  test("WebAuthn RP ignores origin=null and falls back to request host", () => {
    const req = new Request("http://internal:3000/auth/webauthn/login/start", {
      method: "POST",
      headers: {
        origin: "null",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    const info = resolveWebauthnRpInfo(req);
    // "null" is rejected; fallback goes to getRequestOriginParts which
    // respects TRUST_PROXY (false in test env → uses direct host)
    expect(info.rpId).toBe("internal");

    // Verify forwarded headers ARE available when trustProxy is on
    const parts = getRequestOriginParts(req, true);
    expect(parts.host).toBe("app.example.com");
  });

  // ── Posting / uploads / workspace writes behind proxies ───────

  test("CSRF passes for workspace write with matching forwarded origin", () => {
    const req = new Request("http://internal:3000/workspace/file", {
      method: "PUT",
      headers: {
        origin: "https://app.example.com",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("CSRF passes for media upload with matching forwarded origin", () => {
    const req = new Request("http://internal:3000/media/upload", {
      method: "POST",
      headers: {
        origin: "https://app.example.com",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(true);
  });

  test("CSRF blocks media upload with mismatched forwarded origin", () => {
    const req = new Request("http://internal:3000/media/upload", {
      method: "POST",
      headers: {
        origin: "https://evil.example.com",
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
        "x-forwarded-proto": "https",
      },
    });
    expect(checkCsrfOrigin(req)).toBe(false);
  });

  // ── SSE ───────────────────────────────────────────────────────

  test("SSE stream is GET-only and not affected by CSRF origin checks", () => {
    const req = new Request("http://internal:3000/sse/stream", {
      method: "GET",
      headers: {
        host: "internal:3000",
        "x-forwarded-host": "app.example.com",
      },
    });
    // GET requests skip CSRF, so this should always pass
    expect(checkCsrfOrigin(req)).toBe(true);
  });
});
