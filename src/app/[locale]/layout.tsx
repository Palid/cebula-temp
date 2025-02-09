import "../../globals.css";

import type React from "react";

import { getLocale, Lang } from "@/i18n/locales";
import Head from 'next/head';

import { ThemeProvider } from "@/components/providers";
import { translations } from "@/i18n/translations";
import { Oxanium } from "next/font/google";
import { headers } from "next/headers";
const oxanium = Oxanium({ subsets: ["latin-ext"] })

import type { Metadata } from 'next';


type Props = {
  params: Promise<{ locale: Lang }>
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  // read route params
  const locale = (await params).locale

  const currentLang = getLocale(locale);

  const t = translations[currentLang];

  return {
    title: "CebulaCamp",
    description: "An amazing gathering of hackers and open source enthusiasts.",
    icons: {
      icon: [
        { url: '/favicon-96x96.png', type: 'image/png' },
        { url: '/favicon.svg', type: 'image/svg+xml' },
        { url: '/favicon.ico', type: 'image/x-icon' }
      ],
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    other: {
      'apple-mobile-web-app-title': t.siteTitle,
    },
    openGraph: {
      title: t.siteTitle,
      description: 'An amazing gathering of hackers and open source enthusiasts.',
      url: 'https://cebula.camp',
      images: [
        {
          url: 'https://cebula.camp/web-app-manifest-512x512.png',
          width: 512,
          height: 512,
          alt: t.siteTitle,
        },
      ],
      siteName: t.siteTitle,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: 'CebulaCamp',
      description: 'An amazing gathering of hackers and open source enthusiasts.',
      images: ['https://cebula.camp/web-app-manifest-512x512.png'],
    },
  };
}


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

  const t = translations[currentLang];

  return (
    <html lang={currentLang} className={`${oxanium.className} ${defaultTheme}`}>
      <Head>
        <title>{t.siteTitle}</title>
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

