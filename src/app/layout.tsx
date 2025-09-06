import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { Providers } from '@/components/providers'
import { Toaster } from 'react-hot-toast'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'DSPT Pro - NHS DSPT Compliance Made Simple',
  description: 'Automate your NHS Data Security and Protection Toolkit compliance with our comprehensive platform. Save time, reduce costs, and ensure continuous compliance for your healthcare practice.',
  keywords: 'NHS DSPT, Data Security Protection Toolkit, healthcare compliance, GDPR, cybersecurity, UK healthcare',
  authors: [{ name: 'DSPT Pro Team' }],
  creator: 'DSPT Pro',
  publisher: 'DSPT Pro',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://dsptpro.com',
    title: 'DSPT Pro - NHS DSPT Compliance Made Simple',
    description: 'Automate your NHS Data Security and Protection Toolkit compliance with our comprehensive platform.',
    siteName: 'DSPT Pro',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSPT Pro - NHS DSPT Compliance Made Simple',
    description: 'Automate your NHS Data Security and Protection Toolkit compliance with our comprehensive platform.',
    creator: '@dsptpro',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#2563eb',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        <Providers>
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
          <Toaster 
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
            }}
          />
        </Providers>
      </body>
    </html>
  )
}
