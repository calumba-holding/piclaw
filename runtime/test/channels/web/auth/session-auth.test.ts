import { describe, expect, test } from "bun:test";
import {
  buildSessionCookieHeader,
  getSessionTokenFromRequest,
} from "../../../../src/channels/web/auth/session-auth.js";

describe("web session auth helpers", () => {
  test("extracts session token from cookie header", () => {
    const req = new Request("http://example.com", {
      headers: { cookie: "a=1; piclaw_session=token123; b=2" },
    });
    expect(getSessionTokenFromRequest(req)).toBe("token123");
  });

  test("builds secure cookie for https or tls-configured deployments", () => {
    const httpsReq = new Request("https://example.com");
    const httpsCookie = buildSessionCookieHeader("abc", httpsReq, 120, false);
    expect(httpsCookie).toContain("Secure");
    expect(httpsCookie).toContain("Max-Age=120");

    const httpReq = new Request("http://example.com");
    const tlsCookie = buildSessionCookieHeader("abc", httpReq, 10, true);
    expect(tlsCookie).toContain("Secure");
    expect(tlsCookie).toContain("Max-Age=60");
  });
});
