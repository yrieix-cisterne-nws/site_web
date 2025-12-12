# Étape 1 : Build
FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .
RUN npm run build

# Étape 2 : Serveur Nginx
FROM node:20-alpine
RUN npm install -g serve
COPY --from=builder /app/dist ./build

EXPOSE 8089
CMD ["serve", "-s", "build", "-l", "8089"]