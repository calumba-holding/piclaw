/**
 * test/web/csv-viewer-pane.test.ts – Resolution tests for the CSV viewer pane.
 */

import { describe, expect, test } from "bun:test";

import { csvViewerPaneExtension } from "../../web/src/panes/csv-viewer-pane.js";

describe("csv viewer pane", () => {
  test("claims csv and tsv files for both preview and tab contexts", () => {
    expect(csvViewerPaneExtension.canHandle?.({ path: "data/report.csv", mode: "view" } as any)).toBe(55);
    expect(csvViewerPaneExtension.canHandle?.({ path: "data/report.tsv", mode: "view" } as any)).toBe(55);
    expect(csvViewerPaneExtension.canHandle?.({ path: "data/report.csv", mode: "edit" } as any)).toBe(55);
  });

  test("does not claim non-tabular files", () => {
    expect(csvViewerPaneExtension.canHandle?.({ path: "notes/readme.md", mode: "view" } as any)).toBe(false);
  });
});
