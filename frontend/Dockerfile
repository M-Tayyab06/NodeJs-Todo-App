# Stage 1: Build
FROM node:16 as builder

# Use a custom npm registry (if needed)
RUN npm config set registry https://registry.npmmirror.com

# Increase npm timeout
RUN npm config set fetch-retry-mintimeout 20000
RUN npm config set fetch-retry-maxtimeout 120000

WORKDIR /app
COPY package.json .

# Clear npm cache and install dependencies
RUN npm cache clean --force
RUN npm install

COPY . .
RUN npm run build

# Stage 2: Runtime
FROM nginx:alpine

COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]