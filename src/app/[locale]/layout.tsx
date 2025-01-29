import "../../globals.css";

import type React from "react";

import { Lang, locales } from "@/i18n/locales";
import Head from 'next/head';

import { Oxanium } from "next/font/google";
const oxanium = Oxanium({ subsets: ["latin-ext"] })


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: Lang }>
}) {
  const { locale } = await params
  const currentLang = locales.includes(locale) ? locale : "en"
  return (
    <html lang={currentLang} className={`${oxanium.className} dark`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="MyWebSite" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-background text:foreground antialiased">
        {children}
      </body>
    </html>
  )
}

