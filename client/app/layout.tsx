import type { Metadata } from 'next'
import './globals.css'

import Navbar from '@/components/navbar/navbar'
import { Toaster } from 'sonner'

import { config } from '@fortawesome/fontawesome-svg-core'
import '@fortawesome/fontawesome-svg-core/styles.css'
import { Bebas_Neue, DM_Sans } from 'next/font/google'
import QueryProvider from '@/components/provider/QueryProvider'

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
})

const bebasNeue = Bebas_Neue({
  variable: '--font-bebas-neue',
  subsets: ['latin'],
  weight: '400',
})
config.autoAddCss = false

export const metadata: Metadata = {
  title: 'CIT-U SSG Elections 2025',
  description:
    "CIT-U SSG Elections 2025 is an interactive platform for CIT-U's SSG Elections. It helps students explore candidate profiles, platforms, and achievements, with tools like a countdown to voting day, live vote tally, and a side-by-side comparison feature. Designed for clarity and accessibility, it empowers students to make informed choices throughout the election process.",
  icons: {
    icon: [
      {
        url: '/favicon/favicon.ico',
      },
    ],
  },
}

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${dmSans.variable} ${bebasNeue.variable} font-sans antialiased min-h-screen min-w-screen bg-gradient-to-b from-background to-[#141415] text-white drop-shadow-2xl`}
      >
        <QueryProvider>
          <Navbar />
          <Toaster position="top-right" />

          <main className="flex-1 flex items-center justify-center w-screen px-6 py-12">
            <div className="w-full max-w-[1200px]">{children}</div>
          </main>
        </QueryProvider>
      </body>
    </html>
  )
}
