import { expect, test } from "bun:test";
import "../helpers.js";

import { buildBtwInjectionText, parseBtwCommand, resolveBtwChatJid, shouldShowBtwAnswer, shouldShowBtwControls } from "../../web/src/ui/btw.ts";

test("parseBtwCommand parses ask/clear/help variants", () => {
  expect(parseBtwCommand("/btw hello there")).toEqual({ type: "ask", question: "hello there" });
  expect(parseBtwCommand("/btw clear")).toEqual({ type: "clear" });
  expect(parseBtwCommand("/btw")).toEqual({ type: "help" });
  expect(parseBtwCommand("hello")).toBeNull();
});

test("buildBtwInjectionText formats question and answer", () => {
  expect(buildBtwInjectionText({ question: "What changed?", answer: "A short answer." })).toBe(
    "BTW side conversation\n\nQuestion: What changed?\n\nAnswer:\nA short answer.",
  );
});

test("resolveBtwChatJid prefers the active branch chat and falls back to the default chat", () => {
  expect(resolveBtwChatJid("web:branch-a")).toBe("web:branch-a");
  expect(resolveBtwChatJid("  web:branch-b  ")).toBe("web:branch-b");
  expect(resolveBtwChatJid("")).toBe("web:default");
  expect(resolveBtwChatJid(null)).toBe("web:default");
});

test("shouldShowBtwAnswer only shows the final answer after BTW is done", () => {
  expect(shouldShowBtwAnswer({ status: "running", answer: "Draft answer" })).toBe(false);
  expect(shouldShowBtwAnswer({ status: "success", answer: "Final answer" })).toBe(true);
  expect(shouldShowBtwAnswer({ status: "error", answer: "Partial answer" })).toBe(true);
  expect(shouldShowBtwAnswer({ status: "success", answer: "   " })).toBe(false);
});

test("shouldShowBtwControls hides footer actions until BTW finishes", () => {
  expect(shouldShowBtwControls({ status: "running" })).toBe(false);
  expect(shouldShowBtwControls({ status: "success" })).toBe(true);
  expect(shouldShowBtwControls({ status: "error" })).toBe(true);
  expect(shouldShowBtwControls(null)).toBe(false);
});
