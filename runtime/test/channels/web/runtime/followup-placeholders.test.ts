import { describe, expect, test } from "bun:test";
import { FollowupPlaceholderStore } from "../../../../src/channels/web/runtime/followup-placeholders.js";

describe("web followup placeholder store", () => {
  test("returns null for empty chat queue", () => {
    const store = new FollowupPlaceholderStore();
    expect(store.consume("web:default")).toBeNull();
  });

  test("consumes queued placeholder row ids FIFO", () => {
    const store = new FollowupPlaceholderStore();
    store.enqueue("web:default", 10);
    store.enqueue("web:default", 11);

    expect(store.consume("web:default")).toBe(10);
    expect(store.consume("web:default")).toBe(11);
    expect(store.consume("web:default")).toBeNull();
  });
});
