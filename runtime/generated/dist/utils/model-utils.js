/**
 * utils/model-utils.ts – Helpers for parsing and resolving LLM model identifiers.
 *
 * Model references can be specified as "modelId" or "provider/modelId". These
 * helpers parse that input, look up the matching Model from the pi-ai registry,
 * and handle ambiguous or missing matches with descriptive error messages.
 *
 * Consumers:
 *   - agent-control/handlers/model.ts uses parseModelInput() + findModel() to
 *     implement `/model set`, `/model info`, etc.
 *   - extensions/model-control.ts uses resolveModelLabel() for the model-switch
 *     tool exposed to the agent.
 *   - agent-pool.ts uses resolveModelLabel() when overriding the model for a run.
 */
/**
 * Split a raw model input string at the first `/`.
 * "anthropic/claude-sonnet-4-20250514" → { provider: "anthropic", modelId: "claude-sonnet-4-20250514" }
 * "claude-sonnet-4-20250514" → { modelId: "claude-sonnet-4-20250514" }
 */
export function parseModelInput(input) {
    const trimmed = input.trim();
    if (!trimmed)
        return { modelId: "" };
    const slash = trimmed.indexOf("/");
    return slash > 0
        ? { provider: trimmed.slice(0, slash), modelId: trimmed.slice(slash + 1) }
        : { modelId: trimmed };
}
/**
 * Find a single Model in the registry matching the given provider and modelId.
 * Returns an error string if no match is found or if the modelId is ambiguous
 * across multiple providers.
 */
export function findModel(models, provider, modelId) {
    if (provider) {
        const match = models.find((m) => m.provider.toLowerCase() === provider.toLowerCase() &&
            m.id.toLowerCase() === modelId.toLowerCase());
        return match
            ? { model: match }
            : { error: `Model not found: ${provider}/${modelId}.` };
    }
    const matches = models.filter((m) => m.id.toLowerCase() === modelId.toLowerCase());
    if (matches.length === 0)
        return { error: `Model not found: ${modelId}.` };
    if (matches.length > 1) {
        const list = matches.map((m) => `${m.provider}/${m.id}`).join(", ");
        return { error: `Model "${modelId}" matches multiple providers: ${list}. Use provider/modelId.` };
    }
    return { model: matches[0] };
}
/**
 * High-level convenience: refresh the registry, resolve the input, and return
 * the canonical "provider/modelId" label or an error message.
 *
 * Used by extensions/model-control.ts and agent-pool.ts.
 */
export function resolveModelLabel(modelRegistry, input) {
    const { provider, modelId } = parseModelInput(input);
    if (!modelId)
        return { error: "Model identifier is required." };
    modelRegistry.refresh();
    const { model, error } = findModel(modelRegistry.getAll(), provider, modelId);
    if (!model || error)
        return { error: error ?? "Model not found." };
    return { model: `${model.provider}/${model.id}` };
}
