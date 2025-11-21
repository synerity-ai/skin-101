#!/bin/bash

# S3 Deployment Script for Skin 101
# Usage: ./scripts/deploy-s3.sh [bucket-name] [cloudfront-distribution-id]

set -e

BUCKET_NAME=${1:-${S3_BUCKET_NAME}}
CLOUDFRONT_ID=${2:-${CLOUDFRONT_DISTRIBUTION_ID}}

if [ -z "$BUCKET_NAME" ]; then
  echo "Error: S3 bucket name is required"
  echo "Usage: ./scripts/deploy-s3.sh <bucket-name> [cloudfront-distribution-id]"
  echo "Or set S3_BUCKET_NAME environment variable"
  exit 1
fi

echo "🚀 Deploying to S3 bucket: $BUCKET_NAME"

# Build the application
echo "📦 Building application..."
npm run build

# Sync files to S3
echo "📤 Uploading files to S3..."
aws s3 sync dist/ s3://$BUCKET_NAME/ \
  --delete \
  --exact-timestamps \
  --cache-control "public, max-age=31536000, immutable" \
  --exclude "*.html" \
  --exclude "*.xml" \
  --exclude "*.txt"

# Upload HTML files with no-cache
echo "📄 Uploading HTML files..."
aws s3 sync dist/ s3://$BUCKET_NAME/ \
  --delete \
  --exact-timestamps \
  --cache-control "public, max-age=0, must-revalidate" \
  --exclude "*" \
  --include "*.html"

# Upload XML and TXT files (sitemap, robots.txt)
echo "📋 Uploading XML and TXT files..."
aws s3 sync dist/ s3://$BUCKET_NAME/ \
  --delete \
  --exact-timestamps \
  --cache-control "public, max-age=3600" \
  --exclude "*" \
  --include "*.xml" \
  --include "*.txt"

# Set index.html as default document
echo "⚙️  Configuring bucket settings..."
aws s3 website s3://$BUCKET_NAME/ \
  --index-document index.html \
  --error-document index.html

# Invalidate CloudFront if distribution ID is provided
if [ -n "$CLOUDFRONT_ID" ]; then
  echo "🔄 Invalidating CloudFront cache..."
  INVALIDATION_ID=$(aws cloudfront create-invalidation \
    --distribution-id $CLOUDFRONT_ID \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text)
  echo "✅ CloudFront invalidation created: $INVALIDATION_ID"
fi

echo "✅ Deployment complete!"
echo "🌐 Website URL: http://$BUCKET_NAME.s3-website-$(aws configure get region).amazonaws.com"

