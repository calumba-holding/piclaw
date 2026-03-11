/**
 * test/helpers.ts – Shared test utilities and fixtures.
 *
 * Provides createTempWorkspace() for isolated temp directories,
 * getTestWorkspace() for a shared workspace across tests, and
 * setEnv() for temporarily overriding environment variables.
 *
 * Imported by nearly every test file as a setup side-effect.
 */

import { mkdtempSync, rmSync, mkdirSync } from "fs";
import { tmpdir } from "os";
import { join } from "path";

/** Shape of an isolated temp workspace: paths and cleanup callback. */
export interface TempWorkspace {
  base: string;
  workspace: string;
  store: string;
  data: string;
  cleanup: () => void;
}

let sharedWorkspace: TempWorkspace | null = null;

/** Create an isolated temp directory with workspace, store, and data subdirs. */
export function createTempWorkspace(prefix = "piclaw-test-"): TempWorkspace {
  const base = mkdtempSync(join(tmpdir(), prefix));
  const workspace = base;
  const store = join(base, "store");
  const data = join(base, "data");
  mkdirSync(store, { recursive: true });
  mkdirSync(data, { recursive: true });
  return {
    base,
    workspace,
    store,
    data,
    cleanup: () => {
      rmSync(base, { recursive: true, force: true });
    },
  };
}

/** Return the shared temp workspace, creating it on first call. */
export function getTestWorkspace(): TempWorkspace {
  if (!sharedWorkspace) {
    sharedWorkspace = createTempWorkspace("piclaw-shared-test-");
  }
  return sharedWorkspace;
}

const ENFORCED_TEST_ENV: Readonly<Record<string, string>> = {
  PICLAW_DB_IN_MEMORY: "1",
};

const shared = getTestWorkspace();
process.env.PICLAW_WORKSPACE = shared.workspace;
process.env.PICLAW_STORE = shared.store;
process.env.PICLAW_DATA = shared.data;
for (const [key, value] of Object.entries(ENFORCED_TEST_ENV)) {
  process.env[key] = value;
}

/**
 * Temporarily override env vars; returns a restore function.
 *
 * Tests always enforce an in-memory database fixture.
 */
export function setEnv(vars: Record<string, string | undefined>): () => void {
  const requested: Record<string, string | undefined> = {
    ...vars,
    ...ENFORCED_TEST_ENV,
  };

  const previous: Record<string, string | undefined> = {};
  for (const [key, value] of Object.entries(requested)) {
    previous[key] = process.env[key];
    if (value === undefined) delete process.env[key];
    else process.env[key] = value;
  }

  return () => {
    for (const [key, value] of Object.entries(previous)) {
      if (value === undefined) delete process.env[key];
      else process.env[key] = value;
    }
    for (const [key, value] of Object.entries(ENFORCED_TEST_ENV)) {
      process.env[key] = value;
    }
  };
}

/** Import a module with a cache-busting suffix to bypass Bun's module cache. */
export async function importFresh<T = any>(modulePath: string): Promise<T> {
  const suffix = `?t=${Date.now()}-${Math.random().toString(36).slice(2)}`;
  return import(`${modulePath}${suffix}`) as Promise<T>;
}

/** Poll a predicate until it returns true, or throw after timeoutMs. */
export async function waitFor(predicate: () => boolean, timeoutMs = 5000, intervalMs = 50): Promise<void> {
  const start = Date.now();
  while (Date.now() - start < timeoutMs) {
    if (predicate()) return;
    await Bun.sleep(intervalMs);
  }
  throw new Error("Timed out waiting for condition");
}
