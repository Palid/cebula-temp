import "../../globals.css";

import type React from "react";

import { getLocale, Lang } from "@/i18n/locales";
import Head from 'next/head';

import { ThemeProvider } from "@/components/providers";
import { Oxanium } from "next/font/google";
import { headers } from "next/headers";
const oxanium = Oxanium({ subsets: ["latin-ext"] })


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: Promise<{ locale: Lang }>
}) {
  const [{ locale }, head] = await Promise.all([
    params,
    headers(),
  ]);

  const preferedTheme = head.get("Sec-CH-Prefers-Color-Scheme")?.toLowerCase();
  const supportedThemes = ["dark", "light"];

  const isDarkOrLight =
    preferedTheme && supportedThemes.includes(preferedTheme);

  const currentLang = getLocale(locale);
  const defaultTheme = isDarkOrLight ? preferedTheme : "dark";

  return (
    <html lang={currentLang} className={`${oxanium.className} ${defaultTheme}`}>
      <Head>
        <link rel="icon" type="image/png" href="/favicon-96x96.png" sizes="96x96" />
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <meta name="apple-mobile-web-app-title" content="CebulaCamp" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body className="bg-background text:foreground antialiased">
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}

