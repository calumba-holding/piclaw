import { describe, expect, test } from "bun:test";
import {
  buildAdaptiveCardSubmissionFallbackText,
  describeAdaptiveCardSubmission,
  extractAdaptiveCardSubmissionBlocks,
  isAdaptiveCardSubmissionBlock,
} from "../../web/src/ui/adaptive-card-submission.ts";

describe("adaptive card submission helpers", () => {
  test("accepts valid adaptive card submission blocks", () => {
    expect(isAdaptiveCardSubmissionBlock({
      type: "adaptive_card_submission",
      card_id: "card-1",
      source_post_id: 42,
      submitted_at: "2026-03-15T12:00:00.000Z",
      action_type: "Action.Submit",
    })).toBe(true);
  });

  test("extracts submission blocks from mixed content blocks", () => {
    const blocks = extractAdaptiveCardSubmissionBlocks([
      { type: "text", text: "hello" },
      {
        type: "adaptive_card_submission",
        card_id: "card-1",
        source_post_id: 42,
        submitted_at: "2026-03-15T12:00:00.000Z",
        action_type: "Action.Submit",
      },
    ]);
    expect(blocks).toHaveLength(1);
    expect(blocks[0]?.card_id).toBe("card-1");
  });

  test("rebuilds the persisted fallback submission text", () => {
    expect(buildAdaptiveCardSubmissionFallbackText({
      type: "adaptive_card_submission",
      card_id: "card-1",
      source_post_id: 42,
      submitted_at: "2026-03-15T12:00:00.000Z",
      action_type: "Action.Submit",
      title: "Approve",
      data: { env: "prod", dryRun: false },
    })).toBe("Card submission: Approve — env: prod, dryRun: no");
  });

  test("describes submission receipts compactly", () => {
    const meta = describeAdaptiveCardSubmission({
      type: "adaptive_card_submission",
      card_id: "card-1",
      source_post_id: 42,
      submitted_at: "2026-03-15T12:00:00.000Z",
      action_type: "Action.Submit",
      title: "Submit choices",
      data: { priority: "high", targets: ["docs", "tests"] },
    });
    expect(meta.title).toBe("Submit choices");
    expect(meta.summary).toContain("priority: high");
    expect(meta.summary).toContain("targets: docs, tests");
    expect(meta.fields).toEqual([
      { key: "priority", value: "high" },
      { key: "targets", value: "docs, tests" },
    ]);
  });
});
