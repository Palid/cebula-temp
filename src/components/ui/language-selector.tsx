'use client'

import { Lang } from "@/i18n/locales";
import Link from "next/link";
import { useParams } from "next/navigation";


export const LanguageSelector = () => {
  const params = useParams<{ locale: Lang }>();

  const lang = params?.locale || 'pl';
  const hash = window?.location?.hash || '';
  if (lang === 'pl') return (<>
    <Link className="pt-1" href={`/en${hash}`}>🇬🇧</Link></>);
  if (lang === 'en') return (<>
    <Link className="pt-1" href={`/pl${hash}`}>🇵🇱</Link></>);
};
