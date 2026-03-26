import { createServer } from "node:net";
import { createTempWorkspace, importFresh, setEnv } from "../../../helpers.js";

async function getFreePort(): Promise<number> {
  return await new Promise((resolve, reject) => {
    const server = createServer();
    server.unref();
    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      if (!address || typeof address === "string") {
        server.close();
        reject(new Error("Could not resolve a free TCP port for the dedicated web test instance."));
        return;
      }
      const { port } = address;
      server.close((error) => {
        if (error) reject(error);
        else resolve(port);
      });
    });
  });
}

function createImmediateQueue() {
  const run = (task: () => unknown | Promise<unknown>) => {
    void Promise.resolve()
      .then(task)
      .catch((error) => {
        console.error("[optional-browser-test] queued task failed", error);
      });
  };

  return {
    enqueue(task: () => unknown | Promise<unknown>) {
      run(task);
    },
    enqueueTask(_taskId: string, task: () => unknown | Promise<unknown>) {
      run(task);
    },
  };
}

export interface DedicatedWebTestInstance {
  workspace: ReturnType<typeof createTempWorkspace>;
  baseUrl: string;
  db: any;
  web: any;
  close: () => Promise<void>;
}

export async function startDedicatedWebTestInstance(options: {
  agentPool: any;
  seed?: (db: any) => void | Promise<void>;
  prefix?: string;
}): Promise<DedicatedWebTestInstance> {
  const workspace = createTempWorkspace(options.prefix || "piclaw-optional-browser-");
  const port = await getFreePort();
  const restoreEnv = setEnv({
    PICLAW_WORKSPACE: workspace.workspace,
    PICLAW_STORE: workspace.store,
    PICLAW_DATA: workspace.data,
    PICLAW_WEB_HOST: "127.0.0.1",
    PICLAW_WEB_PORT: String(port),
    PICLAW_WEB_TLS_CERT: undefined,
    PICLAW_WEB_TLS_KEY: undefined,
    PICLAW_WEB_TOTP_SECRET: undefined,
    PICLAW_WEB_INTERNAL_SECRET: undefined,
    PICLAW_WEB_PASSKEY_MODE: undefined,
  });

  const db = await importFresh<any>("../src/db.js");
  const webMod = await importFresh<any>("../src/channels/web.js");

  db.initDatabase();
  db.getDb().exec([
    "DELETE FROM message_media;",
    "DELETE FROM messages;",
    "DELETE FROM chats;",
    "DELETE FROM chat_cursors;",
    "DELETE FROM chat_branches;",
    "DELETE FROM web_sessions;",
  ].join("\n"));

  if (typeof options.seed === "function") {
    await options.seed(db);
  }

  const web = new webMod.WebChannel({
    queue: createImmediateQueue(),
    agentPool: options.agentPool,
  });

  await web.start();
  const serverPort = web.server?.port || port;
  const baseUrl = `http://127.0.0.1:${serverPort}`;

  let ready = false;
  const deadline = Date.now() + 5000;
  while (Date.now() < deadline) {
    try {
      const response = await fetch(`${baseUrl}/`);
      if (response.ok) {
        ready = true;
        break;
      }
    } catch {
      /* expected: instance startup polling races with the server not listening yet. */
    }
    await Bun.sleep(50);
  }
  if (!ready) {
    await web.stop().catch(() => {
      /* expected: failed startup cleanup should stay best-effort in test helpers. */
    });
    restoreEnv();
    workspace.cleanup();
    throw new Error(`Dedicated web test instance did not become ready at ${baseUrl}.`);
  }

  return {
    workspace,
    baseUrl,
    db,
    web,
    close: async () => {
      try {
        await web.stop();
      } finally {
        restoreEnv();
        workspace.cleanup();
      }
    },
  };
}
