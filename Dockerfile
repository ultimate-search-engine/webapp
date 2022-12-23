# Install dependencies only when needed
FROM node:16-alpine AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app
COPY package.json ./
RUN npm install --frozen-lockfile

# Rebuild the source code only when needed
FROM node:16-alpine AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
ARG SUGGESTER_HOST=localhost
ENV NEXT_PUBLIC_SUGGESTER_HOST=${SUGGESTER_HOST}
ARG SUGGESTER_PORT=8000
ENV NEXT_PUBLIC_SUGGESTER_PORT=${SUGGESTER_PORT}
ARG SM_HOST=localhost
ENV NEXT_PUBLIC_SM_HOST=${SM_HOST}
ARG SM_PORT=8081
ENV NEXT_PUBLIC_SM_PORT=${SM_PORT}
COPY . .
ENV NEXT_TELEMETRY_DISABLED 1
RUN npm run build

# Production image, copy all the files and run next
FROM node:16-alpine AS runner
WORKDIR /app
ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs
#COPY --from=builder /app/.env.example ./.env.local
COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/package.json ./package.json
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static
USER nextjs
EXPOSE 80
ENV PORT 80
CMD ["node", "server.js"]
