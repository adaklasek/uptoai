#!/bin/bash
set -e

echo "=== UpToAI n8n Setup ==="

# Docker
apt-get update -qq
apt-get install -y -qq docker.io git

# Docker Compose v2 binary (docker-compose-plugin not available on Ubuntu 24.04 default repos)
if ! command -v docker-compose &> /dev/null; then
  curl -fsSL "https://github.com/docker/compose/releases/download/v2.24.0/docker-compose-linux-x86_64" \
    -o /usr/local/bin/docker-compose
  chmod +x /usr/local/bin/docker-compose
fi

# Repo
git clone https://github.com/adaklasek/uptoai.git /opt/uptoai
cd /opt/uptoai/infra/n8n

# .env
if [ ! -f .env ]; then
  cp .env.example .env
  ENC_KEY=$(openssl rand -hex 16)
  JWT_SECRET=$(openssl rand -hex 16)
  sed -i "s/vygeneruj_32_znaku_nahodny_retezec/$ENC_KEY/" .env
  sed -i "s/vygeneruj_dalsi_32_znaku_nahodny_retezec/$JWT_SECRET/" .env
  echo ""
  echo ">>> Nastav heslo v /opt/uptoai/infra/n8n/.env (N8N_PASSWORD) a pak spust:"
  echo ">>> docker compose up -d"
else
  docker compose up -d
  echo "n8n bezi na https://n8n.uptoai.cz"
fi
