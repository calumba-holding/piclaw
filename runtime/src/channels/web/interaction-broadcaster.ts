/**
 * channels/web/interaction-broadcaster.ts – profile-aware interaction broadcast helpers.
 */

import type { InteractionRow } from "../../db.js";
import {
  broadcastAgentResponse,
  broadcastInteractionUpdated,
  type InteractionBroadcastChannel,
} from "./cards/interaction-service.js";

/** Display profile metadata applied to broadcasted interaction payloads. */
export interface InteractionBroadcasterProfile {
  agentName: string;
  agentAvatar?: string | null;
  userName?: string | null;
  userAvatar?: string | null;
  userAvatarBackground?: string | null;
}

/** Broadcast helper contract consumed by web interaction write flows. */
export interface InteractionBroadcaster {
  broadcastAgentResponse(interaction: InteractionRow): void;
  broadcastInteractionUpdated(interaction: InteractionRow): void;
}

/** Create an interaction broadcaster bound to a channel and profile metadata.
 *  The profile can be an object or a getter function; when a function is
 *  provided the profile is resolved at broadcast-time so runtime identity
 *  changes (e.g. /agent-name) take effect immediately.
 */
export function createInteractionBroadcaster(
  channel: InteractionBroadcastChannel,
  profileOrFn: InteractionBroadcasterProfile | (() => InteractionBroadcasterProfile)
): InteractionBroadcaster {
  const resolve = typeof profileOrFn === "function" ? profileOrFn : () => profileOrFn;
  return {
    broadcastAgentResponse: (interaction) => {
      const profile = resolve();
      broadcastAgentResponse(
        channel,
        interaction,
        profile.agentName,
        profile.agentAvatar,
        profile.userName,
        profile.userAvatar,
        profile.userAvatarBackground
      );
    },
    broadcastInteractionUpdated: (interaction) => {
      const profile = resolve();
      broadcastInteractionUpdated(
        channel,
        interaction,
        profile.agentName,
        profile.agentAvatar,
        profile.userName,
        profile.userAvatar,
        profile.userAvatarBackground
      );
    },
  };
}
