import type React from "react"
import type { Metadata } from "next"
import "@/styles/globals.css"
import localFont from 'next/font/local'
import Head from 'next/head'
import Script from 'next/script'

const simpsonFont = localFont({
  src: '../public/fonts/simpsonfont.otf',
  variable: '--font-simpson'
})

export const metadata: Metadata = {
  title: "SIMPSONSCOIN - The Official Cryptocurrency of Springfield",
  description:
    "Join the yellow revolution with SIMPSONSCOIN, Springfield's first and only Simpson-themed cryptocurrency on the blockchain.",
  generator: 'v0.dev',
  icons: {
    icon: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
    shortcut: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
    apple: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
  },
  openGraph: {
    type: 'website',
    url: 'https://simpsontoken.xyz',
    title: 'SIMPSONSCOIN - The Official Cryptocurrency of Springfield',
    description: 'Join the yellow revolution with SIMPSONSCOIN, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain.',
    siteName: 'SIMPSONSCOIN',
    images: [
      {
        url: 'https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png',
        width: 1200,
        height: 630,
        alt: 'SIMPSONSCOIN Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SIMPSONSCOIN - The Official Cryptocurrency of Springfield',
    description: 'Join the yellow revolution with SIMPSONSCOIN, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain.',
    images: ['https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png'],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${simpsonFont.variable}`}>
      <head>
        <link rel="icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" type="image/png" />
        <link rel="shortcut icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://simpsontoken.xyz" />
        <meta property="og:title" content="SIMPSONSCOIN - The Official Cryptocurrency of Springfield" />
        <meta property="og:description" content="Join the yellow revolution with SIMPSONSCOIN, Springfield's first and only Simpson-themed cryptocurrency on the blockchain." />
        <meta property="og:image" content="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
        <meta property="og:site_name" content="SIMPSONSCOIN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SIMPSONSCOIN - The Official Cryptocurrency of Springfield" />
        <meta name="twitter:description" content="Join the yellow revolution with SIMPSONSCOIN, Springfield\'s first and only Simpson-themed cryptocurrency on the blockchain." />
        <meta name="twitter:image" content="https://i.postimg.cc/t4zkHTJS/bart-coin-removebg-preview.png" />
        <Script 
          id="counter-dev"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              if(!sessionStorage.getItem("_swa")&&document.referrer.indexOf(location.protocol+"//"+location.host)!== 0){fetch("https://counter.dev/track?"+new URLSearchParams({referrer:document.referrer,screen:screen.width+"x"+screen.height,id:"4c26003d-8807-499d-a273-a4f6275d4adc",utcoffset:"3"}))};
              sessionStorage.setItem("_swa","1");
            `
          }}
        />
      </head>
      <body className={`${simpsonFont.className}`}>
        {children}
      </body>
    </html>
  )
}

import './globals.css'