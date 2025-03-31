import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import localFont from 'next/font/local'
import Head from 'next/head'

const simpsonFont = localFont({
  src: '../public/fonts/simpsonfont.otf',
  variable: '--font-simpson'
})

export const metadata: Metadata = {
  title: "SimpsonToken - The Official Cryptocurrency of Springfield",
  description:
    "Join the yellow revolution with SimpsonToken, Springfield's first and only Simpson-themed cryptocurrency on the blockchain.",
  generator: 'v0.dev',
  icons: {
    icon: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
    shortcut: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
    apple: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://simpsontoken.xyz',
    title: 'SimpsonToken - The Official Cryptocurrency of Springfield',
    description: 'Join the yellow revolution with SimpsonToken, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain.',
    siteName: 'SimpsonToken',
    images: [
      {
        url: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'SimpsonToken Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SimpsonToken - The Official Cryptocurrency of Springfield',
    description: 'Join the yellow revolution with SimpsonToken, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain.',
    images: ['https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <Head>
        <link rel="icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" type="image/png" />
        <link rel="shortcut icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpsontoken.xyz" />
        <meta property="og:title" content="SimpsonToken - The Official Cryptocurrency of Springfield" />
        <meta property="og:description" content="Join the yellow revolution with SimpsonToken, Springfield's first and only Simpson-themed cryptocurrency on the blockchain." />
        <meta property="og:image" content="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
        <meta property="og:site_name" content="SimpsonToken" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SimpsonToken - The Official Cryptocurrency of Springfield" />
        <meta name="twitter:description" content="Join the yellow revolution with SimpsonToken, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain." />
        <meta name="twitter:image" content="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
      </Head>
      <html lang="en" className={`${simpsonFont.variable}`}>
        <body className={`${simpsonFont.className}`}>{children}</body>
      </html>
    </>
  )
}

import './globals.css'