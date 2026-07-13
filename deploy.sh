#!/usr/bin/env bash
# Build and deploy Empower OT to Vercel.
set -euo pipefail

echo "Installing dependencies..."
npm install

echo "Type-checking and building..."
npm run build

echo "Deploying to Vercel (production)..."
npx vercel --prod
