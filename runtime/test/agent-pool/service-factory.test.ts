import { expect, test } from "bun:test";

import { AuthStorage, ModelRegistry, SettingsManager, getAgentDir } from "@mariozechner/pi-coding-agent";

import { createAgentPoolServices } from "../../src/agent-pool/service-factory.js";

function createSettingsManager() {
  return SettingsManager.create("/workspace", getAgentDir());
}

test("createAgentPoolServices wires the extracted helper services together", () => {
  const pool = new Map();
  const sidePool = new Map();
  const activeForkBaseLeafByChat = new Map();
  const authStorage = AuthStorage.create();
  const modelRegistry = new ModelRegistry(authStorage);
  const settingsManager = createSettingsManager();

  const services = createAgentPoolServices({
    pool,
    sidePool,
    activeForkBaseLeafByChat,
    authStorage,
    modelRegistry,
    settingsManager,
    workspaceDir: "/workspace",
  });

  expect(services.attachments).toBeDefined();
  expect(services.sessionBinder).toBeDefined();
  expect(services.toolFactory).toBeDefined();
  expect(services.turnCoordinator).toBeDefined();
  expect(services.sessionManager).toBeDefined();
  expect(services.runtimeFacade).toBeDefined();
  expect(services.branchManager).toBeDefined();
  expect(services.runtimeFacade.isStreaming("web:default")).toBe(false);
});
