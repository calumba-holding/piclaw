/**
 * runtime/composition.ts – runtime core composition and signal binding helpers.
 */
import { AgentPool } from "../agent-pool.js";
import { DATA_DIR } from "../core/config.js";
import { AgentQueue } from "../queue.js";
import { createLogger } from "../utils/logger.js";
import { RuntimeState } from "./state.js";
const log = createLogger("runtime.composition");
/** Build fresh runtime core services for a single process run. */
export function createRuntimeCoreServices(deps = {}) {
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
/** Register SIGTERM/SIGINT handlers for graceful runtime shutdown. */
export function registerRuntimeShutdownSignals(registrar, shutdown) {
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
