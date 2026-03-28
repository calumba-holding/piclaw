/**
 * runtime/coordinator.ts – Runtime message-loop orchestration helpers.
 */
import { createLogger } from "../utils/logger.js";
import { processMessages, runMessageLoop, } from "./message-loop.js";
const log = createLogger("runtime.coordinator");
/**
 * Start the runtime polling loop with message-processing dependencies bound.
 */
export async function startRuntimeLoop(deps) {
    const runMessageLoopImpl = deps.runMessageLoopFn ?? runMessageLoop;
    const processMessagesImpl = deps.processMessagesFn ?? processMessages;
    log.info("Binding runtime loop dependencies", {
        operation: "start_runtime_loop",
        pollIntervalMs: deps.pollIntervalMs,
    });
    await runMessageLoopImpl({
        queue: deps.queue,
        state: deps.state,
        assistantName: deps.assistantName,
        pollIntervalMs: deps.pollIntervalMs,
        processMessages: (chatJid) => processMessagesImpl(chatJid, {
            agentPool: deps.agentPool,
            whatsapp: deps.whatsapp,
            state: deps.state,
            assistantName: deps.assistantName,
            triggerPattern: deps.triggerPattern,
        }),
    });
}
