/**
 * test/db/in-memory-fixture.test.ts – Guardrail for test DB fixture mode.
 *
 * Ensures test runs use an in-memory SQLite database instead of filesystem
 * messages.db files.
 */

import { expect, test } from "bun:test";
import "../helpers.js";

import { initDatabase } from "../../src/db.js";
import { getDb } from "../../src/db/connection.js";

test("test suite uses in-memory SQLite fixture", () => {
  initDatabase();

  expect(process.env.PICLAW_DB_IN_MEMORY).toBe("1");

  const rows = getDb().query("PRAGMA database_list").all() as Array<{
    seq: number;
    name: string;
    file: string;
  }>;
  const main = rows.find((row) => row.name === "main");

  expect(main).toBeDefined();
  expect(main && (main.file === "" || main.file === ":memory:")).toBe(true);
});
