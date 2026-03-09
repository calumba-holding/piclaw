import { describe, expect, test } from "bun:test";
import { PendingSteeringStore } from "../../../src/channels/web/pending-steering.js";

describe("web pending steering store", () => {
  test("ignores undefined timestamps", () => {
    const store = new PendingSteeringStore();
    store.queue("web:1", undefined);
    expect(store.consumeLatest("web:1")).toBeNull();
  });

  test("returns latest timestamp and clears queue", () => {
    const store = new PendingSteeringStore();
    store.queue("web:1", "2024-01-01T00:00:00.000Z");
    store.queue("web:1", "2024-01-01T00:00:01.000Z");
    store.queue("web:1", "2024-01-01T00:00:00.500Z");

    expect(store.consumeLatest("web:1")).toBe("2024-01-01T00:00:01.000Z");
    expect(store.consumeLatest("web:1")).toBeNull();
  });
});
