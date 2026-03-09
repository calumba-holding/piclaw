/**
 * runtime/provider-bootstrap.ts – Optional model provider registration at startup.
 */

import type { AgentPool } from "../agent-pool.js";
import {
  getApiProvider,
  streamSimpleAzureOpenAIResponses,
  streamSimpleOpenAICompletions,
} from "@mariozechner/pi-ai";

function splitCsv(value: string | undefined): string[] {
  return (value ?? "")
    .split(",")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

/** Ensure optional Azure providers are discoverable in /model at startup. */
export function registerOptionalProviders(agentPool: AgentPool): void {
  const registry = (agentPool as unknown as { modelRegistry?: any }).modelRegistry;

  const aoaiToken = process.env.AOAI_API_KEY;
  const aoaiBaseUrl = process.env.AOAI_BASE_URL;
  if (registry && aoaiToken && aoaiBaseUrl) {
    const hasAzureModels = registry.getAll?.().some((model: any) => model.provider === "azure-openai");
    const azureApiRegistered = Boolean(getApiProvider("azure-openai-responses-mi" as any));
    if (!hasAzureModels) {
      const ids = splitCsv(process.env.AOAI_MODEL_IDS);
      const names = splitCsv(process.env.AOAI_MODEL_NAMES);
      const defaultIds = ["gpt-5-2-codex", "gpt-5-3-codex", "gpt-5-1-codex-mini", "gpt-5-1", "gpt-5-mini"];
      const modelIds = ids.length > 0 ? ids : defaultIds;
      const models = modelIds.map((id: string, idx: number) => ({
        id,
        name: names[idx] || `Azure ${id}`,
        api: "azure-openai-responses-mi",
        reasoning: true,
        input: ["text"],
        contextWindow: 200000,
        maxTokens: 64000,
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      }));

      registry.registerProvider("azure-openai", {
        baseUrl: aoaiBaseUrl,
        api: "azure-openai-responses-mi",
        apiKey: aoaiToken,
        streamSimple: streamSimpleAzureOpenAIResponses,
        models,
      });
    } else if (!azureApiRegistered) {
      registry.registerProvider("azure-openai", {
        baseUrl: aoaiBaseUrl,
        api: "azure-openai-responses-mi",
        apiKey: aoaiToken,
        streamSimple: streamSimpleAzureOpenAIResponses,
      });
    }
  }

  const foundryToken = process.env.FOUNDRY_API_KEY || process.env.AOAI_API_KEY;
  const foundryBaseUrl = process.env.FOUNDRY_BASE_URL;
  if (registry && foundryToken && foundryBaseUrl) {
    const hasFoundryModels = registry.getAll?.().some((model: any) => model.provider === "azure-foundry");
    const foundryApiRegistered = Boolean(getApiProvider("azure-foundry-openai-completions-mi" as any));
    if (!hasFoundryModels) {
      const ids = splitCsv(process.env.FOUNDRY_MODEL_IDS);
      const names = splitCsv(process.env.FOUNDRY_MODEL_NAMES);
      const modelIds = ids.length > 0 ? ids : ["mistral-large-3"];
      const models = modelIds.map((id: string, idx: number) => ({
        id,
        name: names[idx] || `Azure Foundry ${id}`,
        api: "azure-foundry-openai-completions-mi",
        reasoning: false,
        input: ["text"],
        contextWindow: 200000,
        maxTokens: 64000,
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0 },
      }));

      registry.registerProvider("azure-foundry", {
        baseUrl: foundryBaseUrl,
        api: "azure-foundry-openai-completions-mi",
        apiKey: foundryToken,
        streamSimple: streamSimpleOpenAICompletions,
        models,
      });
    } else if (!foundryApiRegistered) {
      registry.registerProvider("azure-foundry", {
        baseUrl: foundryBaseUrl,
        api: "azure-foundry-openai-completions-mi",
        apiKey: foundryToken,
        streamSimple: streamSimpleOpenAICompletions,
      });
    }
  }
}
