import { cpSync, rmSync, mkdirSync, copyFileSync, existsSync } from "node:fs";
import { resolve, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const root = resolve(__dirname, "..");

const dist = resolve(root, "dist");
const distClient = resolve(dist, "client");
const distServer = resolve(dist, "server");
const out = resolve(root, ".output");
const outClient = resolve(out, "client");
const outServer = resolve(out, "server");

if (!existsSync(distServer)) {
  console.error("[build-node-output] dist/server not found. Did 'vite build' run?");
  process.exit(1);
}

// Reset .output
rmSync(out, { recursive: true, force: true });
mkdirSync(outServer, { recursive: true });
mkdirSync(outClient, { recursive: true });

// Copy client and server bundles
cpSync(distClient, outClient, { recursive: true });
cpSync(distServer, outServer, { recursive: true });

// Copy node entry as index.mjs
copyFileSync(
  resolve(root, "server/node-entry.mjs"),
  resolve(outServer, "index.mjs"),
);

console.log("[build-node-output] .output/ assembled (server/index.mjs ready).");