FROM node:20-alpine AS builder
WORKDIR /app

COPY package*.json pnpm-lock.yaml* ./
RUN npm install -g pnpm && pnpm install --frozen-lockfile

COPY . .
RUN pnpm build

FROM node:20-alpine AS runner
WORKDIR /app

RUN apk add --no-cache nginx

ENV NODE_ENV=production
ENV PORT=3000
ENV HOSTNAME=127.0.0.1

COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static
COPY --from=builder /app/public ./public

RUN printf 'server {\n\
    listen 80;\n\
    server_name _;\n\
    location / {\n\
        proxy_pass http://127.0.0.1:3000;\n\
        proxy_http_version 1.1;\n\
        proxy_set_header Host $host;\n\
        proxy_set_header X-Real-IP $remote_addr;\n\
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;\n\
        proxy_set_header X-Forwarded-Proto $scheme;\n\
    }\n\
}\n' > /etc/nginx/http.d/default.conf

EXPOSE 80
CMD sh -c "PORT=3000 node server.js & nginx -g 'daemon off;'"
