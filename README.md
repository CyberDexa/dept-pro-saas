# DSPT Pro - NHS DSPT Compliance Automation Platform

A comprehensive SaaS platform designed to streamline NHS Data Security and Protection Toolkit (DSPT) compliance for UK healthcare practices.

## 🚀 Features

- **Automated DSPT Assessment** - Guided questionnaire with intelligent recommendations
- **Real-time Compliance Monitoring** - Live dashboards and progress tracking
- **Policy Management** - Comprehensive library of NHS-compliant templates
- **Evidence Collection** - Centralized storage and organization
- **Advanced Analytics** - Compliance scoring and trend analysis
- **Multi-location Support** - Manage compliance across multiple practices
- **Integration Ready** - Connect with SystmOne, EMIS, Vision, and more

## 🛠️ Tech Stack

- **Frontend**: Next.js 14, TypeScript, Tailwind CSS
- **Authentication**: NextAuth.js with multiple providers
- **Database**: PostgreSQL with Prisma ORM
- **Payments**: Stripe integration
- **Email**: Nodemailer for transactional emails
- **Deployment**: Vercel-ready configuration

## 📋 Prerequisites

- Node.js 18.0.0 or higher
- PostgreSQL database
- npm or yarn package manager

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/your-org/dspt-pro-saas.git
cd dspt-pro-saas
```

### 2. Install dependencies

```bash
npm install
```

### 3. Environment Setup

Copy the environment variables file and configure your settings:

```bash
cp .env.local.example .env.local
```

Update `.env.local` with your configuration:

```env
# Database
DATABASE_URL="postgresql://username:password@localhost:5432/dspt_pro"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# Google OAuth (optional)
GOOGLE_CLIENT_ID="your-google-client-id"
GOOGLE_CLIENT_SECRET="your-google-client-secret"

# Stripe
STRIPE_PUBLISHABLE_KEY="pk_test_your-stripe-publishable-key"
STRIPE_SECRET_KEY="sk_test_your-stripe-secret-key"
STRIPE_WEBHOOK_SECRET="whsec_your-webhook-secret"

# Email
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASSWORD="your-app-password"
```

### 4. Database Setup

Generate Prisma client and push the schema:

```bash
npx prisma generate
npx prisma db push
```

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 📁 Project Structure

```
src/
├── app/                    # Next.js app directory
│   ├── api/               # API routes
│   ├── dashboard/         # Protected dashboard pages
│   ├── login/             # Authentication pages
│   ├── signup/            # Registration pages
│   ├── pricing/           # Pricing page
│   ├── features/          # Features page
│   ├── contact/           # Contact page
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
│   ├── Navbar.tsx         # Navigation component
│   ├── Footer.tsx         # Footer component
│   └── providers.tsx      # Context providers
├── lib/                   # Utility libraries
│   ├── auth.ts            # NextAuth configuration
│   └── prisma.ts          # Prisma client
├── types/                 # TypeScript type definitions
│   └── next-auth.d.ts     # NextAuth type extensions
└── prisma/                # Database schema and migrations
    └── schema.prisma      # Prisma schema
```

## 🗄️ Database Schema

The application uses a comprehensive database schema designed for healthcare compliance:

- **Users** - User accounts and authentication
- **Practices** - Healthcare practice information
- **DSPTSubmissions** - DSPT assessment data
- **ComplianceScores** - Historical compliance tracking
- **EvidenceFiles** - Document storage and management
- **Policies** - Policy and procedure management
- **Subscriptions** - Billing and plan management

## 🔐 Authentication

The platform supports multiple authentication methods:

- **Email/Password** - Traditional credentials
- **Google OAuth** - Single sign-on with Google
- **Microsoft OAuth** - Integration with Microsoft accounts

## 💳 Payment Integration

Stripe integration supports:

- **Subscription Management** - Recurring billing
- **Plan Upgrades/Downgrades** - Flexible plan changes
- **Usage-based Billing** - Location-based pricing
- **Webhook Handling** - Real-time payment events

## 🚀 Deployment

### Vercel Deployment

1. **Push to GitHub** and connect to Vercel
2. **Configure Environment Variables** in Vercel dashboard
3. **Set up Database** (recommend Vercel Postgres or PlanetScale)
4. **Deploy** - Vercel will handle the build and deployment

### Environment Variables for Production

Ensure these are set in your production environment:

```env
NODE_ENV=production
DATABASE_URL=your-production-database-url
NEXTAUTH_URL=https://your-domain.com
NEXTAUTH_SECRET=your-production-secret
STRIPE_SECRET_KEY=sk_live_your-live-stripe-key
# ... other production variables
```

## 📊 Analytics and Monitoring

The platform includes built-in analytics for:

- **Compliance Score Tracking** - Historical progress
- **User Engagement** - Feature usage metrics
- **Submission Success Rates** - DSPT completion tracking
- **Performance Monitoring** - Application health

## 🧪 Testing

Run the test suite:

```bash
npm run test        # Unit tests
npm run test:e2e    # End-to-end tests
npm run lint        # Code linting
npm run type-check  # TypeScript validation
```

## 📚 API Documentation

The platform provides REST API endpoints for:

- **Authentication** - `/api/auth/*`
- **User Management** - `/api/users/*`
- **Practice Management** - `/api/practices/*`
- **DSPT Submissions** - `/api/dspt/*`
- **File Upload** - `/api/upload/*`
- **Webhooks** - `/api/webhooks/*`

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- **Documentation**: [docs.dsptpro.com](https://docs.dsptpro.com)
- **Email Support**: support@dsptpro.com
- **Status Page**: [status.dsptpro.com](https://status.dsptpro.com)

## 🔄 Changelog

### v1.0.0 (Current)
- Initial release with core DSPT compliance features
- Multi-provider authentication
- Stripe payment integration
- Real-time compliance monitoring
- Policy management system

---

Built with ❤️ for UK Healthcare by the DSPT Pro Team
