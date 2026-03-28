/**
 * channels/web/message-processing-storage-service.ts – WebChannel message processing/storage seam.
 *
 * Owns the thin adapter layer for WebChannel's public processChat() and
 * storeMessage() methods so WebChannel can remain a coordinator while the
 * existing handler/persistence behavior stays unchanged.
 */

import type { InteractionRow } from "../../../db.js";
import { processChat as processAgentChat } from "../handlers/agent.js";
import type { LinkPreviewChannel } from "../media/link-previews.js";
import {
  storeWebMessage as persistWebMessage,
  type StoreWebMessageOptions,
  type StoreWebMessageParams,
} from "./message-store.js";
import type { WebChannelLike } from "../web-channel-contracts.js";

export interface WebChannelStoreMessageOptions {
  contentBlocks?: unknown[];
  linkPreviews?: unknown[];
  threadId?: number;
  isTerminalAgentReply?: boolean;
  isSteeringMessage?: boolean;
}

export interface WebMessageProcessingStorageChannel extends WebChannelLike, LinkPreviewChannel {}

export interface WebMessageProcessingStorageServiceOptions {
  defaultAgentId: string;
  getAssistantName(): string;
  processChat(
    channel: WebChannelLike,
    chatJid: string,
    agentId: string,
    threadRootId?: number,
  ): Promise<void>;
  storeWebMessage(
    channel: LinkPreviewChannel,
    params: StoreWebMessageParams,
    options: StoreWebMessageOptions,
  ): InteractionRow | null;
}

export function createWebMessageProcessingStorageService(
  channel: WebMessageProcessingStorageChannel,
  defaults: { defaultAgentId: string; getAssistantName(): string },
): WebMessageProcessingStorageService {
  return new WebMessageProcessingStorageService(channel, {
    defaultAgentId: defaults.defaultAgentId,
    getAssistantName: defaults.getAssistantName,
    processChat: (target, chatJid, agentId, threadRootId) =>
      processAgentChat(target, chatJid, agentId, threadRootId),
    storeWebMessage: (target, params, options) => persistWebMessage(target, params, options),
  });
}

export class WebMessageProcessingStorageService {
  constructor(
    private readonly channel: WebMessageProcessingStorageChannel,
    private readonly options: WebMessageProcessingStorageServiceOptions,
  ) {}

  processChat(chatJid: string, agentId: string, threadRootId?: number | null): Promise<void> {
    return this.options.processChat(this.channel, chatJid, agentId, threadRootId ?? undefined);
  }

  storeMessage(
    chatJid: string,
    content: string,
    isBot: boolean,
    mediaIds: number[],
    options: WebChannelStoreMessageOptions = {},
  ): InteractionRow | null {
    return this.options.storeWebMessage(
      this.channel,
      {
        chatJid,
        content,
        isBot,
        mediaIds,
        agentId: this.options.defaultAgentId,
        agentName: this.options.getAssistantName(),
      },
      {
        contentBlocks: options.contentBlocks,
        linkPreviews: options.linkPreviews,
        threadId: options.threadId ?? null,
        isTerminalAgentReply: options.isTerminalAgentReply,
        isSteeringMessage: options.isSteeringMessage,
      },
    );
  }
}
