/**
 * test/channels/web/totp-card.test.ts – Unit tests for signed TOTP card payloads.
 */

import { expect, test } from "bun:test";

import {
  buildTotpAdaptiveCard,
  createTotpCardToken,
  hashTotpSecret,
  parseTotpCardToken,
} from "../../../../src/channels/web/auth/totp-card.js";

test("totp card token round-trips signed state", () => {
  const token = createTotpCardToken({
    flow: "setup",
    secret: "ABCDEF123",
    previousSecretHash: hashTotpSecret(""),
    ttlSeconds: 300,
  });

  const parsed = parseTotpCardToken(token);
  expect(parsed.ok).toBe(true);
  if (parsed.ok) {
    expect(parsed.state.flow).toBe("setup");
    expect(parsed.state.secret).toBe("ABCDEF123");
    expect(parsed.state.previousSecretHash).toBe(hashTotpSecret(""));
  }
});

test("totp card token rejects tampering and expiry", () => {
  const token = createTotpCardToken({
    flow: "reset",
    secret: "ZYXWV987",
    previousSecretHash: hashTotpSecret("old"),
    ttlSeconds: 300,
  });

  const tampered = `${token}x`;
  expect(parseTotpCardToken(tampered)).toEqual({ ok: false, error: "invalid" });

  const parsed = parseTotpCardToken(token);
  expect(parsed.ok).toBe(true);
  if (!parsed.ok) return;
  expect(parseTotpCardToken(token, parsed.state.expiresAtMs + 1)).toEqual({ ok: false, error: "expired" });
});

test("totp adaptive card renders a larger QR code for easier scanning", () => {
  const token = createTotpCardToken({
    flow: "setup",
    secret: "ABCDEF123",
    previousSecretHash: hashTotpSecret(""),
    ttlSeconds: 300,
  });

  const card = buildTotpAdaptiveCard({
    flow: "setup",
    secret: "ABCDEF123",
    issuer: "Piclaw",
    label: "user@example.com",
    token,
  }) as { payload?: { body?: Array<Record<string, unknown>> } };

  const image = card.payload?.body?.find((block) => block.type === "Image");
  expect(image).toBeTruthy();
  expect(image?.size).toBe("Large");
  expect(image?.pixelWidth).toBe(160);
  expect(image?.pixelHeight).toBe(160);
});
