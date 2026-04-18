FROM node:22-slim
WORKDIR /app
COPY . .
RUN npm install --legacy-peer-deps
RUN npm run build
RUN npm install -g http-server
EXPOSE 3000
CMD ["http-server", "dist/client", "-p", "3000", "--proxy", "http://localhost:3000?"]
