# --- Stage 1: Builder ---
FROM mcr.microsoft.com/playwright:v1.46.0-jammy AS builder

WORKDIR /app

# Copy package files first for caching
COPY package*.json tsconfig.json playwright.config.ts ./

# Install dependencies
RUN npm ci

# Copy rest of code
COPY . .

# Install browsers (Playwright base already has them, but ensure updated)
RUN npx playwright install --with-deps

# --- Stage 2: Runtime ---
FROM mcr.microsoft.com/playwright:v1.46.0-jammy

WORKDIR /app

# Copy node_modules and built code from builder
COPY --from=builder /app /app

# Run Playwright tests by default
ENTRYPOINT ["npx", "playwright", "test"]
