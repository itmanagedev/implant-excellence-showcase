FROM node:18-alpine

WORKDIR /app

COPY . .

RUN npm install --legacy-peer-deps

RUN npm run build || echo "correção botão entrar"

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "dist", "-l", "3000"]
