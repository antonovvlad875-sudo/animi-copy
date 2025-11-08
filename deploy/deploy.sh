#!/bin/bash

# Deploy script for finx.bet
# Usage: ./deploy.sh

set -e

echo "🚀 Starting deployment for finx.bet..."

# Configuration
SERVER_IP="185.196.9.46"
SERVER_USER="root"
DOMAIN="finx.bet"
REMOTE_DIR="/var/www/finx.bet"

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
NC='\033[0m' # No Color

# Build the project
echo -e "${BLUE}📦 Building project...${NC}"
npm run build

# Create tarball
echo -e "${BLUE}📦 Creating deployment package...${NC}"
tar -czf dist.tar.gz dist/

# Upload to server
echo -e "${BLUE}📤 Uploading to server...${NC}"
scp dist.tar.gz ${SERVER_USER}@${SERVER_IP}:/tmp/
scp deploy/nginx.conf ${SERVER_USER}@${SERVER_IP}:/tmp/

# Deploy on server
echo -e "${BLUE}🔧 Deploying on server...${NC}"
ssh ${SERVER_USER}@${SERVER_IP} << 'ENDSSH'
# Create directory if it doesn't exist
mkdir -p /var/www/finx.bet

# Extract files
cd /var/www/finx.bet
tar -xzf /tmp/dist.tar.gz
rm /tmp/dist.tar.gz

# Copy nginx config if not exists
if [ ! -f /etc/nginx/sites-available/finx.bet ]; then
    cp /tmp/nginx.conf /etc/nginx/sites-available/finx.bet
    ln -sf /etc/nginx/sites-available/finx.bet /etc/nginx/sites-enabled/finx.bet
    nginx -t && systemctl reload nginx
fi

# Set permissions
chown -R www-data:www-data /var/www/finx.bet
chmod -R 755 /var/www/finx.bet

echo "✅ Deployment complete!"
ENDSSH

# Cleanup
rm dist.tar.gz

echo -e "${GREEN}✅ Deployment successful!${NC}"
echo -e "${GREEN}🌐 Your site is available at: https://${DOMAIN}${NC}"
