# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install dependencies (better cache)
COPY package.json package-lock.json* ./
RUN npm install --legacy-peer-deps

# Copy source and build (TanStack Start → Cloudflare Worker bundle in dist/)
COPY . .
RUN npm run build

# ---------- Stage 2: Runtime ----------
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production

# Bring built artifacts and the minimal files needed by wrangler
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/wrangler.jsonc ./wrangler.jsonc
COPY --from=builder /app/package.json ./package.json

# Install only wrangler (runs the worker bundle locally on workerd)
RUN npm install --no-save wrangler@latest

EXPOSE 3000

# Serve the built worker on 0.0.0.0:3000 so EasyPanel can route to it
CMD ["npx", "wrangler", "dev", "--ip", "0.0.0.0", "--port", "3000", "--local", "--config", "wrangler.jsonc"]
