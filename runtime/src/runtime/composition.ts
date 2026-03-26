/**
 * runtime/composition.ts – runtime core composition and signal binding helpers.
 */

import { AgentPool } from "../agent-pool.js";
import { DATA_DIR } from "../core/config.js";
import { AgentQueue } from "../queue.js";
import { createLogger } from "../utils/logger.js";
import { RuntimeState } from "./state.js";

const log = createLogger("runtime.composition");

/** Core long-lived services that runtime main wiring composes together. */
export interface RuntimeCoreServices {
  queue: AgentQueue;
  agentPool: AgentPool;
  state: RuntimeState;
}

/** Optional factory overrides for runtime core service creation. */
export interface RuntimeCoreFactoryDeps {
  dataDir?: string;
  createQueue?: () => AgentQueue;
  createAgentPool?: () => AgentPool;
  createState?: (dataDir: string) => RuntimeState;
}

/** Build fresh runtime core services for a single process run. */
export function createRuntimeCoreServices(deps: RuntimeCoreFactoryDeps = {}): RuntimeCoreServices {
  const dataDir = deps.dataDir ?? DATA_DIR;
  const createQueue = deps.createQueue ?? (() => new AgentQueue());
  const createAgentPool = deps.createAgentPool ?? (() => new AgentPool());
  const createState = deps.createState ?? ((dir) => new RuntimeState(dir));

  const services = {
    queue: createQueue(),
    agentPool: createAgentPool(),
    state: createState(dataDir),
  };
  log.info("Created runtime core services", {
    operation: "create_runtime_core_services",
    dataDir,
  });
  return services;
}

/** Async runtime shutdown callback signature for signal handlers. */
export type RuntimeShutdownHandler = (signal: string) => Promise<void>;

/** Minimal process-like signal registrar used by runtime signal wiring. */
export interface RuntimeSignalRegistrar {
  on(event: "SIGTERM" | "SIGINT", listener: () => void): void;
}

/** Register SIGTERM/SIGINT handlers for graceful runtime shutdown. */
export function registerRuntimeShutdownSignals(
  registrar: RuntimeSignalRegistrar,
  shutdown: RuntimeShutdownHandler
): void {
  log.info("Registering runtime shutdown signals", {
    operation: "register_runtime_shutdown_signals",
    signals: ["SIGTERM", "SIGINT"],
  });
  registrar.on("SIGTERM", () => {
    void shutdown("SIGTERM");
  });
  registrar.on("SIGINT", () => {
    void shutdown("SIGINT");
  });
}
