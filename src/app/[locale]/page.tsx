import LandingPage from "@/components/landing-page";
import { getLocale, Lang } from "@/i18n/locales";
import { translations } from "@/i18n/translations";


export default async function Home(
  { params }
    :
    { params: Promise<{ locale: Lang }> }
) {
  const { locale } = await params
  const currentLocale = getLocale(locale)
  const t = translations[currentLocale];

  return <LandingPage t={t} />
}

