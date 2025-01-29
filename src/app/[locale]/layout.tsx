import "../../globals.css";

import type React from "react";

import { Lang, locales } from "@/i18n/locales";

import { Oxanium } from "next/font/google";
const oxanium = Oxanium({ subsets: ["latin-ext"] })


export default async function RootLayout({
  children,
  params
}: {
  children: React.ReactNode
  params: { locale: Lang }
}) {
  const { locale } = await params
  const currentLang = locales.includes(locale) ? locale : "en"
  return (
    <html lang={currentLang} className={oxanium.className}>
      <body className="bg-background text:foreground antialiased">
        {children}
      </body>
    </html>
  )
}

