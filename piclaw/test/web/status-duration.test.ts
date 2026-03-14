import { describe, expect, test } from "bun:test";

import {
  formatElapsedDuration,
  getStatusElapsedLabel,
  isCompactionStatus,
  parseStatusStartedAt,
} from "../../web/src/ui/status-duration.js";

describe("status duration helpers", () => {
  test("detects compaction intent status", () => {
    expect(isCompactionStatus({ type: "intent", intent_key: "compaction" })).toBe(true);
    expect(isCompactionStatus({ type: "intent", intent_key: "other" })).toBe(false);
    expect(isCompactionStatus({ type: "tool_call" })).toBe(false);
  });

  test("parses started_at timestamps safely", () => {
    expect(parseStatusStartedAt({ started_at: "2026-03-14T14:00:00.000Z" })).toBe(Date.parse("2026-03-14T14:00:00.000Z"));
    expect(parseStatusStartedAt({ started_at: "not-a-date" })).toBeNull();
    expect(parseStatusStartedAt(null)).toBeNull();
  });

  test("formats elapsed durations for short and long runs", () => {
    expect(formatElapsedDuration(0)).toBe("0:00");
    expect(formatElapsedDuration(65_000)).toBe("1:05");
    expect(formatElapsedDuration(3_661_000)).toBe("1:01:01");
  });

  test("builds elapsed label from status payload", () => {
    const label = getStatusElapsedLabel(
      { started_at: "2026-03-14T14:00:00.000Z" },
      Date.parse("2026-03-14T14:02:05.000Z")
    );
    expect(label).toBe("2:05");
  });
});
