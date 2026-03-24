/**
 * channels/web/totp-card.ts – Build and verify single-card TOTP enrolment flows.
 *
 * Encodes candidate TOTP secrets into signed card payloads so the web UI can
 * display QR/manual setup info and later confirm a code from the same card
 * without persisting a separate pending-enrolment row in the database.
 */

import { createHash, createHmac, randomBytes, timingSafeEqual } from "node:crypto";
import { WEB_INTERNAL_SECRET } from "../../core/config.js";
import { generateTotpQr } from "../../utils/totp-qr.js";

/** Supported TOTP card flows. */
export type TotpCardFlow = "setup" | "secondary" | "reset";

/** Signed state embedded in a TOTP confirmation card. */
export interface TotpCardState {
  /** Flow type being confirmed. */
  flow: TotpCardFlow;
  /** Candidate secret displayed in the card. */
  secret: string;
  /** Hash of the active secret when the card was generated. */
  previousSecretHash: string;
  /** Expiration timestamp in epoch milliseconds. */
  expiresAtMs: number;
  /** Random nonce to make tokens unique. */
  nonce: string;
}

/** Result of parsing a signed TOTP card token. */
export type ParseTotpCardTokenResult =
  | {
      /** True when the token is valid and not expired. */
      ok: true;
      /** Verified embedded card state. */
      state: TotpCardState;
    }
  | {
      /** False when verification fails. */
      ok: false;
      /** Human-readable failure reason. */
      error: "missing" | "invalid" | "expired";
    };

const DEFAULT_TOTP_CARD_TTL_SECONDS = 10 * 60;
const FALLBACK_SIGNING_SECRET = randomBytes(32).toString("base64url");
const BASE64URL_PADDING = "====";

function getSigningSecret(): string {
  return (WEB_INTERNAL_SECRET || "").trim() || FALLBACK_SIGNING_SECRET;
}

function encodeBase64Url(value: string): string {
  return Buffer.from(value, "utf8").toString("base64url");
}

function decodeBase64Url(value: string): string | null {
  if (!value || typeof value !== "string") return null;
  try {
    const padded = value + BASE64URL_PADDING.slice((value.length % 4) || 4);
    return Buffer.from(padded, "base64url").toString("utf8");
  } catch {
    return null;
  }
}

function signPayload(payload: string): string {
  return createHmac("sha256", getSigningSecret()).update(payload, "utf8").digest("base64url");
}

/** Hash a TOTP secret for optimistic concurrency checks. */
export function hashTotpSecret(secret: string): string {
  return createHash("sha256").update((secret || "").trim(), "utf8").digest("hex");
}

/** Create a signed token that carries candidate TOTP card state. */
export function createTotpCardToken(params: {
  /** Flow type to embed. */
  flow: TotpCardFlow;
  /** Candidate secret displayed to the user. */
  secret: string;
  /** Hash of the active secret when the card was created. */
  previousSecretHash: string;
  /** Optional expiry override in seconds. */
  ttlSeconds?: number;
}): string {
  const ttlSeconds = Number.isFinite(params.ttlSeconds)
    ? Math.max(30, Math.floor(params.ttlSeconds as number))
    : DEFAULT_TOTP_CARD_TTL_SECONDS;
  const payload = {
    flow: params.flow,
    secret: (params.secret || "").trim(),
    previousSecretHash: (params.previousSecretHash || "").trim(),
    expiresAtMs: Date.now() + ttlSeconds * 1000,
    nonce: randomBytes(12).toString("base64url"),
  } satisfies TotpCardState;

  const encoded = encodeBase64Url(JSON.stringify(payload));
  const signature = signPayload(encoded);
  return `${encoded}.${signature}`;
}

/** Parse and verify a signed TOTP card token. */
export function parseTotpCardToken(token: string, now = Date.now()): ParseTotpCardTokenResult {
  const trimmed = (token || "").trim();
  if (!trimmed) return { ok: false, error: "missing" };

  const dot = trimmed.lastIndexOf(".");
  if (dot <= 0 || dot === trimmed.length - 1) {
    return { ok: false, error: "invalid" };
  }

  const payloadPart = trimmed.slice(0, dot);
  const signaturePart = trimmed.slice(dot + 1);
  const expected = signPayload(payloadPart);
  const a = Buffer.from(expected, "utf8");
  const b = Buffer.from(signaturePart, "utf8");
  if (a.length !== b.length || !timingSafeEqual(a, b)) {
    return { ok: false, error: "invalid" };
  }

  const json = decodeBase64Url(payloadPart);
  if (!json) return { ok: false, error: "invalid" };

  let parsed: Partial<TotpCardState>;
  try {
    parsed = JSON.parse(json) as Partial<TotpCardState>;
  } catch {
    return { ok: false, error: "invalid" };
  }

  const flow = parsed.flow;
  const secret = typeof parsed.secret === "string" ? parsed.secret.trim() : "";
  const previousSecretHash = typeof parsed.previousSecretHash === "string" ? parsed.previousSecretHash.trim() : "";
  const expiresAtMs = typeof parsed.expiresAtMs === "number" ? parsed.expiresAtMs : NaN;
  const nonce = typeof parsed.nonce === "string" ? parsed.nonce.trim() : "";

  if ((flow !== "setup" && flow !== "secondary" && flow !== "reset") || !secret || !nonce || !Number.isFinite(expiresAtMs)) {
    return { ok: false, error: "invalid" };
  }

  if (expiresAtMs <= now) {
    return { ok: false, error: "expired" };
  }

  return {
    ok: true,
    state: {
      flow,
      secret,
      previousSecretHash,
      expiresAtMs,
      nonce,
    },
  };
}

/** Build the single adaptive card used for TOTP display + confirmation. */
export function buildTotpAdaptiveCard(params: {
  /** Flow type being rendered. */
  flow: TotpCardFlow;
  /** Secret to display and verify. */
  secret: string;
  /** QR issuer label. */
  issuer: string;
  /** QR account label. */
  label: string;
  /** Signed state token echoed back on submit. */
  token: string;
  /** Optional card ID override. */
  cardId?: string;
}): Record<string, unknown> {
  const qr = generateTotpQr({
    secret: params.secret,
    issuer: params.issuer,
    label: params.label,
  });
  const imageUrl = `data:image/svg+xml;base64,${Buffer.from(qr.svg, "utf8").toString("base64")}`;
  const title = params.flow === "reset"
    ? "Confirm new TOTP secret"
    : params.flow === "secondary"
      ? "Add another TOTP device"
      : "Set up TOTP";
  const intro = params.flow === "reset"
    ? "Scan or copy this new TOTP secret, then enter a live 6-digit code below. Nothing changes until confirmation succeeds."
    : params.flow === "secondary"
      ? "Use this existing TOTP secret on another device, then enter a live 6-digit code below to confirm it works."
      : "Scan or copy this new TOTP secret, then enter a live 6-digit code below to confirm your authenticator is working.";
  const submitTitle = params.flow === "secondary" ? "Validate device" : params.flow === "reset" ? "Confirm reset" : "Confirm setup";
  const cardId = params.cardId || `totp-${params.flow}-${Date.now()}`;

  return {
    type: "adaptive_card",
    card_id: cardId,
    schema_version: "1.5",
    state: "active",
    submit_behavior: "keep_active",
    fallback_text: title,
    payload: {
      type: "AdaptiveCard",
      version: "1.5",
      body: [
        { type: "TextBlock", text: title, weight: "Bolder", size: "Medium", wrap: true },
        { type: "TextBlock", text: intro, wrap: true, spacing: "Small" },
        { type: "Image", url: imageUrl, altText: "TOTP QR code", size: "Medium", horizontalAlignment: "Center", spacing: "Medium" },
        {
          type: "FactSet",
          facts: [
            { title: "Issuer", value: qr.issuer },
            { title: "Label", value: qr.label },
          ],
          spacing: "Medium",
        },
        { type: "TextBlock", text: "Manual entry code", weight: "Bolder", spacing: "Medium" },
        { type: "TextBlock", text: qr.secret, wrap: true },
        {
          type: "Input.Text",
          id: "confirmation_code",
          label: "6-digit TOTP code",
          placeholder: "123456",
          maxLength: 8,
          spacing: "Medium",
        },
      ],
      actions: [
        {
          type: "Action.Submit",
          title: submitTitle,
          data: {
            intent: "totp-confirm",
            __totp_token: params.token,
          },
        },
      ],
    },
  };
}
