import { describe, expect, test } from "bun:test";
import { AgentBuffers } from "../../../../src/channels/web/agent/agent-buffers.js";

describe("web agent buffers", () => {
  test("tracks panel expansion per turn and panel", () => {
    const buffers = new AgentBuffers();

    expect(buffers.isPanelExpanded("turn-1", "thought")).toBe(false);

    buffers.setPanelExpanded("turn-1", "thought", true);
    expect(buffers.isPanelExpanded("turn-1", "thought")).toBe(true);
    expect(buffers.isPanelExpanded("turn-1", "draft")).toBe(false);

    buffers.setPanelExpanded("turn-1", "draft", true);
    expect(buffers.isPanelExpanded("turn-1", "draft")).toBe(true);

    buffers.setPanelExpanded("turn-1", "thought", false);
    buffers.setPanelExpanded("turn-1", "draft", false);
    expect(buffers.isPanelExpanded("turn-1", "thought")).toBe(false);
    expect(buffers.isPanelExpanded("turn-1", "draft")).toBe(false);
  });

  test("stores and retrieves thought/draft buffers independently", () => {
    const buffers = new AgentBuffers();

    buffers.updateBuffer("turn-1", "thought", "thought text", 4);
    buffers.updateBuffer("turn-1", "draft", "draft text", 2);

    expect(buffers.getBuffer("turn-1", "thought")?.text).toBe("thought text");
    expect(buffers.getBuffer("turn-1", "draft")?.text).toBe("draft text");
  });

  test("prunes oldest entries beyond configured limit", () => {
    const buffers = new AgentBuffers(2);

    buffers.updateBuffer("turn-1", "thought", "one", 1);
    buffers.updateBuffer("turn-2", "thought", "two", 1);
    buffers.updateBuffer("turn-3", "thought", "three", 1);

    expect(buffers.getBuffer("turn-1", "thought")).toBeUndefined();
    expect(buffers.getBuffer("turn-2", "thought")?.text).toBe("two");
    expect(buffers.getBuffer("turn-3", "thought")?.text).toBe("three");
  });
});
