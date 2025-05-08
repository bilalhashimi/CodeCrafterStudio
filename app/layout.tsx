import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import React from 'react'
import Script from 'next/script'
import BackgroundEffect from '@/components/BackgroundEffect'
import { ThemeProvider } from '@/contexts/ThemeContext'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Homepage',
  description: 'Generated with Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <Script id="theme-switcher" strategy="beforeInteractive">
          {`
            // Check for dark mode preference
            if (
              localStorage.getItem('theme') === 'dark' ||
              (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)
            ) {
              document.documentElement.classList.add('dark');
            } else {
              document.documentElement.classList.remove('dark');
            }
          `}
        </Script>
      </head>
      <body className={inter.className}>
        <ThemeProvider>
          <BackgroundEffect />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
} 