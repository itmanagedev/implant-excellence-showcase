# ---------- Stage 1: Build ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Install deps first (better cache)
COPY package.json package-lock.json* bun.lockb* ./
RUN npm install --legacy-peer-deps

# Copy source and build
COPY . .
RUN npm run build

# ---------- Stage 2: Serve with Nginx ----------
FROM nginx:alpine AS runner

# SPA-friendly nginx config (history fallback + gzip + cache)
COPY nginx.conf /etc/nginx/conf.d/default.conf

# TanStack Start (Cloudflare preset) emits the client bundle to dist/client
# Fallback to dist if a different preset is used.
COPY --from=builder /app/dist/client /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
