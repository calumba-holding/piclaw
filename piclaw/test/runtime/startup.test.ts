import { describe, expect, test } from "bun:test";
import { mkdirSync, readdirSync, readFileSync, writeFileSync } from "fs";
import { join } from "path";
import { createTempWorkspace } from "../helpers.js";

describe("runtime startup helpers", () => {
  test("queueStartupResumePendingIpc writes a resume_pending task", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const run = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          'import { queueStartupResumePendingIpc } from "./src/runtime/startup.js"; queueStartupResumePendingIpc();',
        ],
        cwd: "/workspace/piclaw/piclaw",
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const tasksDir = join(ws.data, "ipc", "tasks");
      const files = readdirSync(tasksDir).filter((file) => file.startsWith("resume_pending_"));
      expect(files).toHaveLength(1);

      const payload = JSON.parse(readFileSync(join(tasksDir, files[0]), "utf-8"));
      expect(payload).toEqual({ type: "resume_pending", chatJid: "all", reason: "startup" });
    } finally {
      ws.cleanup();
    }
  });

  test("queueStartupResumePendingIpc skips when a resume task is already queued", () => {
    const ws = createTempWorkspace("piclaw-startup-");

    try {
      const tasksDir = join(ws.data, "ipc", "tasks");
      mkdirSync(tasksDir, { recursive: true });
      writeFileSync(
        join(tasksDir, "resume_pending_existing.json"),
        JSON.stringify({ type: "resume_pending", chatJid: "all", reason: "reload" })
      );

      const run = Bun.spawnSync({
        cmd: [
          "bun",
          "-e",
          'import { queueStartupResumePendingIpc } from "./src/runtime/startup.js"; queueStartupResumePendingIpc();',
        ],
        cwd: "/workspace/piclaw/piclaw",
        env: {
          ...process.env,
          PICLAW_WORKSPACE: ws.workspace,
          PICLAW_STORE: ws.store,
          PICLAW_DATA: ws.data,
          PICLAW_DB_IN_MEMORY: "1",
        },
      });
      expect(run.exitCode).toBe(0);

      const files = readdirSync(tasksDir).filter((file) => file.startsWith("resume_pending_"));
      expect(files).toEqual(["resume_pending_existing.json"]);
    } finally {
      ws.cleanup();
    }
  });
});
