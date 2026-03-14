export function parseStatusStartedAt(status: Record<string, unknown> | null | undefined): number | null {
  if (!status || typeof status !== "object") return null;
  const raw = status.started_at ?? status.startedAt;
  if (typeof raw !== "string" || !raw) return null;
  const value = Date.parse(raw);
  return Number.isFinite(value) ? value : null;
}

export function isCompactionStatus(status: Record<string, unknown> | null | undefined): boolean {
  if (!status || typeof status !== "object") return false;
  const intentKey = status.intent_key ?? status.intentKey;
  return status.type === "intent" && intentKey === "compaction";
}

export function formatElapsedDuration(elapsedMs: number): string {
  const totalSeconds = Math.max(0, Math.floor(elapsedMs / 1000));
  const seconds = totalSeconds % 60;
  const minutes = Math.floor(totalSeconds / 60) % 60;
  const hours = Math.floor(totalSeconds / 3600);
  if (hours > 0) {
    return `${hours}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
  }
  return `${minutes}:${String(seconds).padStart(2, "0")}`;
}

export function getStatusElapsedLabel(
  status: Record<string, unknown> | null | undefined,
  nowMs = Date.now()
): string | null {
  const startedAtMs = parseStatusStartedAt(status);
  if (startedAtMs === null) return null;
  return formatElapsedDuration(Math.max(0, nowMs - startedAtMs));
}
