# 🎯 Environment Variables for Vercel Deployment

## Your Neon Database is Ready!

✅ Database URL: `postgresql://neondb_owner:npg_SJFiDhtU3CN7@ep-fancy-frog-abd4wmgp-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require`

✅ Database seeded with DSPT questions

## Update Vercel Environment Variables

Go to: https://vercel.com/cyberdexas-projects/dspt-pro-saas/settings/environment-variables

**Update/Add these variables:**

1. **DATABASE_URL** (Production)
   ```
   postgresql://neondb_owner:npg_SJFiDhtU3CN7@ep-fancy-frog-abd4wmgp-pooler.eu-west-2.aws.neon.tech/neondb?sslmode=require
   ```

2. **NEXTAUTH_URL** (Production)
   ```
   https://dspt-pro-saas-dolbnsj96-cyberdexas-projects.vercel.app
   ```

3. **NEXTAUTH_SECRET** (Production)
   ```
   super-secure-secret-key-for-production-change-this-to-something-random
   ```

## After updating environment variables:

1. Click "Save" in Vercel dashboard
2. Trigger a new deployment:
   ```bash
   npx vercel --prod
   ```

This will fix all the 401, 404, and 500 errors you were seeing!
