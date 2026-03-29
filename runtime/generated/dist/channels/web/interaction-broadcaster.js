/**
 * channels/web/interaction-broadcaster.ts – profile-aware interaction broadcast helpers.
 */
import { broadcastAgentResponse, broadcastInteractionUpdated, } from "./cards/interaction-service.js";
/** Create an interaction broadcaster bound to a channel and profile metadata.
 *  The profile can be an object or a getter function; when a function is
 *  provided the profile is resolved at broadcast-time so runtime identity
 *  changes (e.g. /agent-name) take effect immediately.
 */
export function createInteractionBroadcaster(channel, profileOrFn) {
    const resolve = typeof profileOrFn === "function" ? profileOrFn : () => profileOrFn;
    return {
        broadcastAgentResponse: (interaction) => {
            const profile = resolve();
            broadcastAgentResponse(channel, interaction, profile.agentName, profile.agentAvatar, profile.userName, profile.userAvatar, profile.userAvatarBackground);
        },
        broadcastInteractionUpdated: (interaction) => {
            const profile = resolve();
            broadcastInteractionUpdated(channel, interaction, profile.agentName, profile.agentAvatar, profile.userName, profile.userAvatar, profile.userAvatarBackground);
        },
    };
}
