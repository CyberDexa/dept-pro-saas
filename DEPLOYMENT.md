# DSPT Pro - Deployment Guide

## 🚀 Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-username/dspt-pro-saas)

## 📋 Deployment Checklist

### 1. Database Setup
- [ ] Create PostgreSQL database (recommended: Neon, Supabase, or Vercel Postgres)
- [ ] Copy connection string to `DATABASE_URL` in Vercel environment variables
- [ ] Run `npx prisma db push` to create tables

### 2. Environment Variables (Set in Vercel Dashboard)
```bash
# Required
DATABASE_URL="postgresql://..."
NEXTAUTH_URL="https://your-domain.vercel.app"
NEXTAUTH_SECRET="generate-random-secret"

# Optional OAuth
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"
```

### 3. Domain Setup
- [ ] Add custom domain in Vercel
- [ ] Update NEXTAUTH_URL with your domain
- [ ] Configure DNS records

### 4. Post-Deployment
- [ ] Test user registration
- [ ] Test authentication flow
- [ ] Verify database connections
- [ ] Set up monitoring

## 🔧 Local Development

```bash
# Install dependencies
npm install

# Set up database
npm run db:push

# Start development server
npm run dev
```

## 📖 Documentation

- [Next.js Deployment](https://nextjs.org/docs/deployment)
- [Vercel Deployment](https://vercel.com/docs)
- [Prisma Deployment](https://www.prisma.io/docs/guides/deployment)

## 🆘 Support

For deployment support, check the deployment logs in Vercel dashboard or contact support.
