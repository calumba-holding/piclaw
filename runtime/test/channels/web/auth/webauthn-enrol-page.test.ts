import { describe, expect, test } from "bun:test";
import {
  handleWebauthnEnrollPageRequest,
  type WebauthnEnrolPageContext,
} from "../../../../src/channels/web/auth/webauthn-enrol-page.js";

function createContext(passkeyEnabled: boolean): WebauthnEnrolPageContext {
  return {
    isPasskeyEnabled: () => passkeyEnabled,
    json: (payload, status = 200) =>
      new Response(JSON.stringify(payload), {
        status,
        headers: { "Content-Type": "application/json" },
      }),
  };
}

describe("webauthn enrol page", () => {
  test("returns 404 json payload when passkeys are disabled", async () => {
    const res = handleWebauthnEnrollPageRequest(createContext(false));
    expect(res.status).toBe(404);
    expect(await res.json()).toEqual({ error: "Passkeys disabled" });
  });

  test("returns html enrol page with no-store cache", async () => {
    const res = handleWebauthnEnrollPageRequest(createContext(true));
    expect(res.status).toBe(200);
    expect(res.headers.get("Content-Type")).toBe("text/html; charset=utf-8");
    expect(res.headers.get("Cache-Control")).toBe("no-store");

    const html = await res.text();
    expect(html).toContain("<title>Passkey enrolment</title>");
    expect(html).toContain("/auth/webauthn/register/start");
    expect(html).toContain("/auth/webauthn/register/finish");
  });
});
