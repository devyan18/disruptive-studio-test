# Utiliza una imagen base oficial de Node.js en su variante alpina por ser más ligera
FROM node:20-slim

WORKDIR /app

RUN npm install -g pnpm

COPY package.json pnpm-lock.yaml* ./
RUN pnpm install

COPY . .

RUN node /app/setup.env.mjs
RUN pnpm add typescript servor --save-dev
RUN pnpm run build

EXPOSE 3000

CMD ["pnpx", "servor", "dist", "index.html", "3000"]
