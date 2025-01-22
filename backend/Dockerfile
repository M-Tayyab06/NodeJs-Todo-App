# Stage 1: Build
FROM node:16 as builder

WORKDIR /app
COPY package.json .
RUN npm install

COPY . .

# Stage 2: Runtime
FROM node:16-slim

WORKDIR /app
COPY --from=builder /app .

EXPOSE 5000
CMD ["npm", "start"]