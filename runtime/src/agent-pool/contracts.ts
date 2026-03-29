/**
 * agent-pool/contracts.ts – Shared public contracts for AgentPool and its helpers.
 */

import type { AgentSession, AgentSessionEvent } from "@mariozechner/pi-coding-agent";
import type {
  Api,
  AssistantMessageEvent,
  AssistantMessageEventStream,
  Model,
  Usage,
  streamSimple,
} from "@mariozechner/pi-ai";

import type { AttachmentInfo } from "./attachments.js";

/** Output from an agent run: response text, status, and token usage. */
export interface AgentOutput {
  status: "success" | "error";
  result: string | null;
  error?: string;
  attachments?: AttachmentInfo[];
}

/** A single turn's output within a multi-turn agent run. */
export interface TurnOutput {
  text: string;
  attachments: AttachmentInfo[];
}

/** Result returned from a side prompt run. */
export interface SidePromptResult {
  status: "success" | "error";
  result: string | null;
  thinking: string | null;
  error?: string;
  model: string | null;
  usage?: Usage;
  stopReason?: string;
}

/** Options accepted by AgentPool.runSidePrompt(). */
export interface SidePromptOptions {
  systemPrompt?: string;
  signal?: AbortSignal;
  onEvent?: (event: AssistantMessageEvent | AgentSessionEvent) => void;
  onTextDelta?: (delta: string) => void;
  onThinkingDelta?: (delta: string) => void;
}

/** Options for AgentPool.runAgent(): chatJid, messages, callbacks. */
export interface RunAgentOptions {
  onEvent?: (event: AgentSessionEvent) => void;
  /** Called when a turn completes (text_start → next text_start or end). */
  onTurnComplete?: (turn: TurnOutput) => void;
  /** Override the default timeout (ms). Use 0 or a negative value to disable. */
  timeoutMs?: number;
}

/** Construction options for creating an AgentPool. */
export interface AgentPoolOptions {
  createSession?: (chatJid: string, sessionDir: string) => Promise<AgentSession>;
  createSideSession?: (chatJid: string, sessionDir: string) => Promise<AgentSession>;
  modelRegistry?: import("@mariozechner/pi-coding-agent").ModelRegistry;
  sideStreamSimple?: (
    model: Model<Api>,
    context: Parameters<typeof streamSimple>[1],
    options?: Parameters<typeof streamSimple>[2]
  ) => AssistantMessageEventStream;
}
