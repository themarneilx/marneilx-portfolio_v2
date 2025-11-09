import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Script from 'next/script'
import '../app/lib/gsap';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Jon Marneil Cabahug - Portfolio',
  description: 'Personal Portfolio of Jon Marneil Cabahug, an IT Undergraduate specializing in full-stack development, system administration, and computer troubleshooting.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" data-theme="dark">
      <body className={inter.className}>
        {children}

        <Script src="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/js/all.min.js" strategy="lazyOnload" />
      </body>
    </html>
  )
}