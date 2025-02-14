'use client'

import { Lang } from "@/i18n/locales";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";


export const LanguageSelector = () => {
  const params = useParams<{ locale: Lang }>();
  const pathname = usePathname()

  const replacements = {
    'pl': 'en',
    'en': 'pl',
  }

  const lang = params?.locale || 'pl';
  const changedLang = pathname.replace(`/${lang}/`, `/${replacements[lang]}/`)

  if (lang === 'pl') return (<>
    <Link suppressHydrationWarning className="pt-1" href={changedLang}>🇬🇧</Link></>);
  if (lang === 'en') return (<>
    <Link suppressHydrationWarning className="pt-1" href={changedLang}>🇵🇱</Link></>);
};
