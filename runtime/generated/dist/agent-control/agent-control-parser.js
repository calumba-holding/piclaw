/**
 * agent-control/agent-control-parser.ts – Parse raw text into control commands.
 *
 * Takes a raw message string, strips any trigger prefix (@BotName), and
 * attempts to match it against the registered command parsers. Returns
 * an AgentControlCommand if the text is a valid control command, or null
 * if it's a regular message.
 *
 * Consumers:
 *   - runtime/message-loop.ts calls parseControlCommand() on each inbound
 *     message to determine if it should be handled as a control command.
 *   - channels/web/request-router.ts uses it for web-channel messages.
 */
import { normalizeControlCommandName } from "./command-registry.js";
import { stripTrigger } from "./parser-utils.js";
import { COMMAND_PARSERS } from "./command-parsers.js";
/** Parse a raw text message into an AgentControlCommand, or return null if not a command. */
export function parseControlCommand(text, triggerPattern) {
    if (!text)
        return null;
    const cleaned = stripTrigger(text, triggerPattern);
    if (!cleaned.startsWith("/"))
        return null;
    const [command, ...rest] = cleaned.split(/\s+/);
    const args = rest.join(" ").trim();
    const commandLower = normalizeControlCommandName(command.toLowerCase());
    const parser = COMMAND_PARSERS[commandLower];
    if (!parser)
        return null;
    return parser(args, cleaned);
}
