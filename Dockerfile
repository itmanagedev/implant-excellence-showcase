FROM node:22-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
RUN npm install -g wrangler
EXPOSE 3000
CMD ["wrangler", "pages", "dev", "dist/client", "--port", "3000", "--ip", "0.0.0.0"]
