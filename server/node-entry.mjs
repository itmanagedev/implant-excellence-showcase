import { createServer } from "node:http";
import { Readable } from "node:stream";
import { createReadStream, statSync, existsSync } from "node:fs";
import { join, extname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import handler from "./server.js";

const __dirname = fileURLToPath(new URL(".", import.meta.url));
const CLIENT_DIR = resolve(__dirname, "../client");

const PORT = Number(process.env.PORT) || 3000;
const HOST = process.env.HOST || "0.0.0.0";

const MIME = {
  ".js": "application/javascript; charset=utf-8",
  ".mjs": "application/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".html": "text/html; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff": "font/woff",
  ".woff2": "font/woff2",
  ".ttf": "font/ttf",
  ".otf": "font/otf",
  ".map": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function tryStaticFile(urlPath) {
  // Block path traversal
  if (urlPath.includes("..")) return null;
  const filePath = join(CLIENT_DIR, urlPath);
  if (!filePath.startsWith(CLIENT_DIR)) return null;
  try {
    const st = statSync(filePath);
    if (st.isFile()) return { filePath, size: st.size };
  } catch {
    /* not found */
  }
  return null;
}

function nodeReqToWebRequest(req) {
  const protocol = req.socket.encrypted ? "https" : "http";
  const host = req.headers.host || `${HOST}:${PORT}`;
  const url = `${protocol}://${host}${req.url}`;

  const headers = new Headers();
  for (const [k, v] of Object.entries(req.headers)) {
    if (Array.isArray(v)) v.forEach((vv) => headers.append(k, vv));
    else if (v !== undefined) headers.set(k, v);
  }

  const method = req.method || "GET";
  const init = { method, headers };
  if (method !== "GET" && method !== "HEAD") {
    init.body = Readable.toWeb(req);
    init.duplex = "half";
  }
  return new Request(url, init);
}

async function sendWebResponse(webRes, res) {
  res.statusCode = webRes.status;
  webRes.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });
  if (!webRes.body) {
    res.end();
    return;
  }
  const nodeStream = Readable.fromWeb(webRes.body);
  nodeStream.pipe(res);
  nodeStream.on("error", () => res.end());
}

const server = createServer(async (req, res) => {
  try {
    // Serve static client assets first
    if (req.method === "GET" || req.method === "HEAD") {
      const urlPath = decodeURIComponent((req.url || "/").split("?")[0]);
      const staticFile = tryStaticFile(urlPath);
      if (staticFile) {
        const ext = extname(staticFile.filePath).toLowerCase();
        res.setHeader("Content-Type", MIME[ext] || "application/octet-stream");
        res.setHeader("Content-Length", staticFile.size);
        if (urlPath.startsWith("/assets/")) {
          res.setHeader("Cache-Control", "public, max-age=31536000, immutable");
        }
        if (req.method === "HEAD") {
          res.end();
          return;
        }
        createReadStream(staticFile.filePath).pipe(res);
        return;
      }
    }

    // Fall through to TanStack Start SSR handler
    const webReq = nodeReqToWebRequest(req);
    const webRes = await handler.fetch(webReq);
    await sendWebResponse(webRes, res);
  } catch (err) {
    console.error("[server] error:", err);
    if (!res.headersSent) {
      res.statusCode = 500;
      res.setHeader("Content-Type", "text/plain; charset=utf-8");
    }
    res.end("Internal Server Error");
  }
});

server.listen(PORT, HOST, () => {
  console.log(`▲ TanStack Start server listening on http://${HOST}:${PORT}`);
});