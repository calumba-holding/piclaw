/**
 * test/web/markdown-live-preview-gating.test.ts — Pure tests for markdown
 * live-preview cursor gating rules.
 */

import { expect, test } from "bun:test";
import {
  isAlwaysDecoratedNode,
  usesBlockCursorGate,
} from "../../extensions/viewers/editor/markdown/cursor-gating.ts";
import { shouldDecorateBlockquote } from "../../extensions/viewers/editor/markdown/blockquote-utils.ts";

test("blockquote nodes are not suppressed by generic block cursor gating", () => {
  expect(usesBlockCursorGate("Blockquote")).toBe(false);
  expect(usesBlockCursorGate("Table")).toBe(true);
});

test("list items remain always decorated", () => {
  expect(isAlwaysDecoratedNode("ListItem")).toBe(true);
});

test("regular blockquotes stay decorated while editing inside them", () => {
  expect(shouldDecorateBlockquote("> quoted bullet list", true)).toBe(true);
});

test("callouts still back off while editing inside them", () => {
  expect(shouldDecorateBlockquote("> [!warning] Heads up", true)).toBe(false);
  expect(shouldDecorateBlockquote("> [!warning] Heads up", false)).toBe(true);
});
