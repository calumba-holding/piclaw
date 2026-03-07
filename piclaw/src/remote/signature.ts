import { createHash } from "crypto";
import { signPayload, verifyPayload, type InteropIdentity } from "./identity.js";

export interface CanonicalRequestParams {
  method: string;
  pathWithQuery: string;
  contentType: string;
  bodyHash: string;
  timestamp: string;
  nonce: string;
  instanceId: string;
  sigVersion: string;
  trustEpoch?: string;
}

export function hashBody(body: Uint8Array): string {
  return createHash("sha256").update(body).digest("hex");
}

export function buildCanonicalRequest(params: CanonicalRequestParams): string {
  const lines = [
    params.method.toUpperCase(),
    params.pathWithQuery,
    params.contentType,
    params.bodyHash,
    params.timestamp,
    params.nonce,
    params.instanceId,
    params.sigVersion,
  ];
  if (params.trustEpoch !== undefined) {
    lines.push(params.trustEpoch);
  }
  return lines.join("\n");
}

export function signRequest(identity: InteropIdentity, canonical: string): string {
  return signPayload(identity, canonical);
}

export function verifyRequestSignature(publicKey: string, canonical: string, signature: string): boolean {
  return verifyPayload(publicKey, canonical, signature);
}

export function parseTimestamp(value: string | null): number | null {
  if (!value) return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  if (/^\d+$/.test(trimmed)) {
    const numeric = Number(trimmed);
    if (!Number.isFinite(numeric)) return null;
    return numeric > 10_000_000_000 ? numeric : numeric * 1000;
  }
  const parsed = Date.parse(trimmed);
  return Number.isNaN(parsed) ? null : parsed;
}
