import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { Header, Footer } from '@/app/_components'

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
})

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const viewport: Viewport = {
  themeColor: '#000000',
  width: 'device-width',
  initialScale: 1,
}

export const metadata: Metadata = {
  title: 'Ukraine needs Public Support!',
  description:
    'Request your representatives to give Ukraine the munitions to win this war',
  metadataBase: new URL('https://protectukrainenow.org'),
  openGraph: {
    title: 'Ukraine needs Public Support!',
    description:
      'Request your representatives to give Ukraine the munitions to win this war',
    url: 'https://protectukrainenow.org',
    siteName: 'Protect Ukraine Now',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Ukraine needs Public Support!',
    description:
      'Request your representatives to give Ukraine the munitions to win this war',
    creator: '@Protect_UA_Now',
  },
  icons: {
    icon: [
      {
        url: '/favicon.png',
        sizes: '150x150',
      },
      // {
      //   url: '/icon.svg',
      //   type: 'image/svg+xml',
      // },
    ],
    // apple: [
    //   {
    //     url: '/apple-touch-icon.png',
    //     sizes: '180x180',
    //   },
    // ],
    shortcut: '/favicon.png',
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
