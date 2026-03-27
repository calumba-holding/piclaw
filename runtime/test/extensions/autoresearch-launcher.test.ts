import { describe, expect, test } from "bun:test";

import { buildAutoresearchSubagentCommand } from "../../src/extensions/autoresearch-launcher.js";

describe("autoresearch launcher", () => {
  test("launches pi via bun so node is not required separately", () => {
    const command = buildAutoresearchSubagentCommand({
      workDir: "/tmp/project",
      model: "openai-codex/gpt-5.4",
      extPath: "/vendor/ext.ts",
      skillPath: "/vendor/skill",
      sessionDir: "/tmp/session",
      prompt: "extract queued follow-ups",
      hasExistingData: false,
      bunPath: "/usr/local/lib/bun/bin/bun",
      piScriptPath: "/usr/local/lib/bun/bin/pi",
    });

    expect(command).toContain('cd "/tmp/project" &&');
    expect(command).toContain('exec "/usr/local/lib/bun/bin/bun" "/usr/local/lib/bun/bin/pi" --model "openai-codex/gpt-5.4"');
    expect(command).toContain('--extension "/vendor/ext.ts"');
    expect(command).toContain('--skill "/vendor/skill"');
    expect(command).toContain('--session-dir "/tmp/session"');
    expect(command).toContain('"/skill:autoresearch-create extract queued follow-ups"');
    expect(command).not.toContain("exec pi ");
  });

  test("uses continue mode when existing JSONL data is present", () => {
    const command = buildAutoresearchSubagentCommand({
      workDir: "/tmp/project",
      model: "",
      extPath: "/vendor/ext.ts",
      skillPath: "/vendor/skill",
      sessionDir: "/tmp/session",
      prompt: "ignored",
      hasExistingData: true,
      bunPath: "/bun",
      piScriptPath: "/pi",
    });

    expect(command).toContain('exec "/bun" "/pi" --continue');
    expect(command).toContain('"/autoresearch resume the experiment loop — read autoresearch.md for context"');
    expect(command).not.toContain('/skill:autoresearch-create');
  });
});
