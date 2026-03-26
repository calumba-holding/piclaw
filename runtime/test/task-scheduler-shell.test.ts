/**
 * test/task-scheduler-shell.test.ts – Scheduled shell task execution.
 */
import { beforeEach, afterEach, expect, test } from "bun:test";
import { getTestWorkspace, importFresh, setEnv } from "./helpers.js";

const sentMessages: Array<{ jid: string; text: string }> = [];
let restoreEnv: (() => void) | null = null;
let db: typeof import("../src/db.js") | null = null;
let scheduler: typeof import("../src/task-scheduler.js") | null = null;

afterEach(() => {
  sentMessages.length = 0;
  restoreEnv?.();
  restoreEnv = null;
  try { db?.getDb().close(); } catch { /* expected: test DB may already be closed during cleanup. */ }
  db = null;
  scheduler = null;
});

beforeEach(async () => {
  const ws = getTestWorkspace();
  restoreEnv = setEnv({
    PICLAW_WORKSPACE: ws.workspace,
    PICLAW_STORE: ws.store,
    PICLAW_DATA: ws.data,
  });
  db = await importFresh("../src/db.js");
  scheduler = await importFresh("../src/task-scheduler.js");
  db.initDatabase();
});

test("runScheduledTask executes shell command and sends output", async () => {
  const taskId = `task-shell-${Date.now()}`;
  db!.createTask({
    id: taskId,
    chat_jid: "web:default",
    prompt: "echo hi",
    model: null,
    task_kind: "shell",
    command: "echo hi",
    cwd: ".",
    timeout_sec: 10,
    schedule_type: "once",
    schedule_value: new Date().toISOString(),
    next_run: new Date().toISOString(),
    status: "active",
    created_at: new Date().toISOString(),
  });

  const task = db!.getTaskById(taskId);
  expect(task?.task_kind).toBe("shell");

  await scheduler!.runScheduledTask(task!, {
    queue: {} as any,
    agentPool: {} as any,
    sendMessage: async (jid, text) => { sentMessages.push({ jid, text }); },
  });

  expect(sentMessages.length).toBe(1);
  expect(sentMessages[0].text).toContain("```");
  expect(sentMessages[0].text).toContain("hi");
});
