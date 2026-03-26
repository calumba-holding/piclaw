/**
 * web/json-body.ts – Shared JSON request-body guards for web handlers.
 */

export function isJsonObjectRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === "object" && !Array.isArray(value);
}

export async function parseJsonObjectRequest(req: Request): Promise<
  | { ok: true; payload: Record<string, unknown> }
  | { ok: false; error: string }
> {
  try {
    const payload = await req.json();
    if (!isJsonObjectRecord(payload)) {
      return { ok: false, error: "JSON body must be an object" };
    }
    return { ok: true, payload };
  } catch {
    return { ok: false, error: "Invalid JSON" };
  }
}
