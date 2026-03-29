import { expect, test } from "bun:test";

import { AgentToolFactory } from "../../src/agent-pool/tool-factory.js";

test("AgentToolFactory builds the default read/bash/edit/write tool set", () => {
  const factory = new AgentToolFactory({ workspaceDir: "/workspace" });
  const tools = factory.createDefaultTools();

  expect(tools.map((tool) => tool.name)).toEqual(["read", "bash", "edit", "write"]);
});
