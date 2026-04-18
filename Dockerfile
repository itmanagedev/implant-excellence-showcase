FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN NODE_OPTIONS="--max-old-space-size=512" npm run build
RUN npm install -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]
