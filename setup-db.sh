#!/bin/bash

# Quick Database Setup Script

echo "🚀 Setting up database for DSPT Pro SaaS..."

# Check if required environment variables are set
if [ -z "$DATABASE_URL" ]; then
    echo "❌ DATABASE_URL not set"
    echo "Please set up a PostgreSQL database and add the connection string:"
    echo ""
    echo "For Neon (recommended):"
    echo "1. Go to https://neon.tech"
    echo "2. Create a new project"
    echo "3. Copy the connection string"
    echo "4. Set as environment variable:"
    echo "   export DATABASE_URL='your-connection-string'"
    echo ""
    exit 1
fi

echo "✅ DATABASE_URL is set"

# Generate Prisma client
echo "📦 Generating Prisma client..."
npx prisma generate

# Push database schema
echo "🔄 Pushing database schema..."
npx prisma db push

# Seed database
echo "🌱 Seeding database..."
npx prisma db seed

echo "✅ Database setup complete!"
echo "🚀 You can now run: npm run dev"
