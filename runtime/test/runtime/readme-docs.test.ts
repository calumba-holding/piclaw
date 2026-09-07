import { expect, test } from "bun:test";
import { existsSync, readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { spawnSync } from "node:child_process";

// Keep README checks in the default CI suite, which excludes test/scripts.
const root = resolve(import.meta.dir, "../../..");
const documents = [
  "README.md",
  "docs/README.md",
  "docs/getting-started.md",
  "docs/desktop.md",
  "docs/install-from-repo.md",
];
const read = (path: string) => readFileSync(resolve(root, path), "utf8");
const stripCode = (text: string) => text.replace(/^```[^\n]*\n[\s\S]*?^```\s*$/gm, "");
const headings = (text: string) => [...stripCode(text).matchAll(/^#{1,6} (.+)$/gm)].map(
  (match) => match[1]!.toLowerCase().replace(/<[^>]*>/g, "")
    .replace(/[^\p{L}\p{N}\s_-]/gu, "").replace(/\s/g, "-"),
);

test("README and installation guide relative links and anchors resolve", () => {
  for (const path of documents) {
    const text = stripCode(read(path));
    const anchors = headings(text);
    expect(new Set(anchors).size).toBe(anchors.length);
    for (const match of text.matchAll(/\[[^\]]*\]\(([^\s)]+)\)/g)) {
      const href = match[1]!;
      if (/^[a-z]+:|^\/\//i.test(href)) continue;
      const [file, fragment] = href.split("#");
      const target = file ? resolve(root, dirname(path), decodeURIComponent(file)) : resolve(root, path);
      expect(existsSync(target), `${path}: ${href}`).toBe(true);
      if (fragment && target.endsWith(".md")) {
        expect(headings(readFileSync(target, "utf8")), `${path}: ${href}`).toContain(decodeURIComponent(fragment));
      }
    }
  }
});

test.skipIf(process.platform === "win32")("installation shell examples parse without executing them", () => {
  for (const path of documents) {
    for (const match of read(path).matchAll(/^```bash\n([\s\S]*?)^```/gm)) {
      const result = spawnSync("bash", ["-n"], { input: match[1], encoding: "utf8" });
      expect(result.status, `${path}: ${result.error ?? result.stderr}`).toBe(0);
    }
  }
});

test("newcomer setup retains loopback, persistence and deployment boundaries", () => {
  const readme = read("README.md");
  const guide = read("docs/getting-started.md");
  const docker = readme.match(/```bash\n([\s\S]*?)```/)?.[1] ?? "";
  for (const argument of ["--init", "-p 127.0.0.1:8080:8080", "$(pwd)/home:/config", "$(pwd)/workspace:/workspace"]) {
    expect(docker).toContain(argument);
  }
  expect(readme).toContain("Single-user is the default");
  expect(readme).toContain("Promoted `family-shared` deployments");
  expect(readme).toContain("Isolated-container mode is unavailable");
  expect(readme).toContain("messages.db");
  expect(readme).toContain("Cloud models and external tools");
  expect(guide).toContain("permits unauthenticated access");
  expect(guide).toContain("atomic database snapshot");
  expect(guide).toContain("does not restart a running process");
  expect(read("docs/install-from-repo.md")).not.toMatch(/github:rcarmo\/piclaw#v\d/);
});
