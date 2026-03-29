import { createWebAdaptiveCardSidePromptService, } from "../cards/adaptive-card-side-prompt-service.js";
import { getWebAgentMessageEntryService } from "../messaging/agent-message-entry-service.js";
import { createWebAgentPeerMessageRelayService, } from "../agent/agent-peer-message-relay-service.js";
function getAdaptiveCardSidePromptService(channel, defaults) {
    return channel.adaptiveCardSidePromptService
        ?? createWebAdaptiveCardSidePromptService(channel, {
            defaultChatJid: defaults.defaultChatJid,
            defaultAgentId: defaults.defaultAgentId,
        });
}
function getAgentPeerMessageRelayService(channel, defaults) {
    return channel.peerMessageRelayService
        ?? createWebAgentPeerMessageRelayService(channel, {
            defaultAgentId: defaults.defaultAgentId,
        });
}
export class WebChannelLifecycleSpecialSurfaceService {
    channel;
    defaults;
    constructor(channel, defaults) {
        this.channel = channel;
        this.defaults = defaults;
    }
    get server() {
        return this.channel.serverLifecycleGateway.server;
    }
    async start() {
        await this.channel.serverLifecycleGateway.start();
    }
    async stop() {
        await this.channel.serverLifecycleGateway.stop();
    }
    async handleAdaptiveCardAction(req) {
        return await getAdaptiveCardSidePromptService(this.channel, this.defaults).handleAdaptiveCardAction(req);
    }
    async handleAgentSidePrompt(req) {
        return await getAdaptiveCardSidePromptService(this.channel, this.defaults).handleAgentSidePrompt(req);
    }
    async handleAgentSidePromptStream(req) {
        return await getAdaptiveCardSidePromptService(this.channel, this.defaults).handleAgentSidePromptStream(req);
    }
    async handleAgentPeerMessage(req) {
        return await getAgentPeerMessageRelayService(this.channel, this.defaults).handleAgentPeerMessage(req);
    }
    handleAgentMessage(req, pathname) {
        return getWebAgentMessageEntryService(this.channel, this.defaults).handleAgentMessage(req, pathname);
    }
}
export function createWebChannelLifecycleSpecialSurfaceService(channel, defaults) {
    return new WebChannelLifecycleSpecialSurfaceService(channel, defaults);
}
export function getWebChannelLifecycleSpecialSurfaceService(channel, defaults) {
    return channel.lifecycleSpecialSurfaceService ?? createWebChannelLifecycleSpecialSurfaceService(channel, defaults);
}
