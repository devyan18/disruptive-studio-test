# Utiliza una imagen base oficial de Node.js en su variante alpina por ser más ligera
FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

RUN pnpm add global typescript
RUN pnpm run build
RUN pnpm install global servor

EXPOSE 8080

CMD ["pnpx", "servor", "dist", "index.html", "3000"]
