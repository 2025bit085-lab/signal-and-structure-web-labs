import path from "node:path";
import { fileURLToPath } from "node:url";
import { spawnSync } from "node:child_process";

process.env.HOME = "C:/Users/DANIEL MBEINE";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(__dirname, "..");
const skillScripts = "C:/Users/DANIEL MBEINE/.codex/plugins/cache/openai-primary-runtime/presentations/26.430.10722/skills/presentations/scripts";
const nodeBin = "C:/Users/DANIEL MBEINE/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/bin/node.exe";

const workspace = path.join(repoRoot, ".presentation-workspace");
const slidesDir = path.join(__dirname, "slides");
const outputDir = path.join(repoRoot, "presentation");
const previewDir = path.join(workspace, "preview");
const layoutDir = path.join(workspace, "layout");
const output = path.join(outputDir, "signal-and-structure-project-showcase.pptx");
const manifest = path.join(outputDir, "artifact-build-manifest.json");

const result = spawnSync(
  nodeBin,
  [
    path.join(skillScripts, "build_artifact_deck.mjs"),
    "--workspace",
    workspace,
    "--slides-dir",
    slidesDir,
    "--out",
    output,
    "--preview-dir",
    previewDir,
    "--layout-dir",
    layoutDir,
    "--manifest",
    manifest,
    "--slide-count",
    "3",
  ],
  {
    cwd: repoRoot,
    stdio: "inherit",
  },
);

if (result.status !== 0) {
  if (result.status === null && !result.error) {
    process.exit(0);
  }
  process.exit(result.status ?? 1);
}
