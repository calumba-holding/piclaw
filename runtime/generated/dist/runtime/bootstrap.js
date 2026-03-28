/**
 * runtime/bootstrap.ts – Runtime bootstrap orchestration and default dependency wiring.
 */
import { getIdentityConfig, getRoutingConfig, getRuntimeTimingConfig, } from "../core/config.js";
import { stopIpcWatcher } from "../ipc.js";
import { stopSchedulerLoop } from "../task-scheduler.js";
import { createLogger } from "../utils/logger.js";
import { registerRuntimeShutdownSignals } from "./composition.js";
import { startRuntimeLoop } from "./coordinator.js";
import { registerOptionalProviders } from "./provider-bootstrap.js";
import { createShutdownHandler } from "./shutdown.js";
import { registerShutdownHandler } from "./shutdown-registry.js";
import { createWhatsAppChannel, initializeRuntimeEnvironment, queueStartupResumePendingIpc, startOptionalPushoverChannel, startWebChannel, } from "./startup.js";
import { createRuntimeSenders, startRuntimeWorkers, } from "./wiring.js";
const log = createLogger("runtime.bootstrap");
/**
 * Build default runtime bootstrap dependencies from production modules.
 */
export function createDefaultRuntimeBootstrapDeps(core) {
    return {
        core,
        assistantName: getIdentityConfig().assistantName,
        triggerPattern: getRoutingConfig().triggerPattern,
        pollIntervalMs: getRuntimeTimingConfig().pollIntervalMs,
        signalRegistrar: process,
        initializeRuntimeEnvironment: () => initializeRuntimeEnvironment(core.state),
        registerOptionalProviders: () => registerOptionalProviders(core.agentPool),
        startWebChannel: () => startWebChannel(core.queue, core.agentPool),
        startOptionalPushoverChannel: () => startOptionalPushoverChannel(),
        createWhatsAppChannel: () => createWhatsAppChannel(core.state),
        createShutdownHandler,
        registerRuntimeShutdownSignals,
        createRuntimeSenders,
        startRuntimeWorkers,
        queueStartupResumePendingIpc,
        startRuntimeLoop,
        log: (message) => log.info(message, { operation: "bootstrap.banner" }),
        stopIpcWatcher,
        stopSchedulerLoop,
    };
}
/**
 * Bootstrap and run all runtime subsystems in production order.
 */
export async function bootstrapRuntime(deps) {
    const { queue, agentPool, state } = deps.core;
    deps.initializeRuntimeEnvironment(state);
    deps.registerOptionalProviders(agentPool);
    deps.log("=== Piclaw - Pi Coding Agent Assistant ===");
    const web = await deps.startWebChannel(queue, agentPool);
    const pushover = await deps.startOptionalPushoverChannel();
    const whatsapp = deps.createWhatsAppChannel(state);
    const shutdown = deps.createShutdownHandler({
        queue,
        agentPool,
        whatsapp,
        web,
        pushover,
        stopIpcWatcher: deps.stopIpcWatcher,
        stopSchedulerLoop: deps.stopSchedulerLoop,
    });
    registerShutdownHandler(shutdown);
    deps.registerRuntimeShutdownSignals(deps.signalRegistrar, shutdown);
    const senders = deps.createRuntimeSenders(web, whatsapp, pushover);
    deps.startRuntimeWorkers(queue, agentPool, web, senders);
    // Queue restart recovery as soon as workers are online. Do not wait for
    // WhatsApp to finish its initial connect/reconnect path, which may be slow
    // or flaky on some installs and would otherwise delay web recovery.
    deps.queueStartupResumePendingIpc();
    await whatsapp.connect();
    await deps.startRuntimeLoop({
        queue,
        state,
        agentPool,
        whatsapp,
        assistantName: deps.assistantName,
        triggerPattern: deps.triggerPattern,
        pollIntervalMs: deps.pollIntervalMs,
    });
}
