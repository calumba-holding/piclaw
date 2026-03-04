/**
 * web/ui-context.ts – Extension UI context implementation.
 *
 * Implements the ExtensionUIContext interface used by pi-agent extensions
 * to request user input. Backed by the UI bridge for actual delivery.
 *
 * Consumers: channels/web.ts creates a UIContext for each agent session.
 */
import { UiBridge } from "./ui-bridge.js";
function getBridge(channel) {
    return channel.uiBridge ?? new UiBridge(channel);
}
/** Attach a UiBridge to an agent session for extension UI interactions. */
export async function bindSessionUiContext(channel, session, chatJid) {
    return getBridge(channel).bindSession(session, chatJid);
}
/** Create an ExtensionUIContext backed by the given UiBridge. */
export function createUiContext(channel, chatJid) {
    return getBridge(channel).createUiContext(chatJid);
}
