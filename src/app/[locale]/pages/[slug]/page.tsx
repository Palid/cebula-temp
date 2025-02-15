import { getLocale, Lang } from "@/i18n/locales"
import { notFound } from "next/navigation"

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string, locale: Lang }>
}) {
  const { slug, locale } = await params
  const currentLocale = getLocale(locale)

  const isReallyProperSlug = /^[a-zA-Z0-9_-]+$/.test(slug)

  if (!isReallyProperSlug) {
    notFound()
  }

  try {
    const path = `@/pages/${currentLocale}/${slug}.mdx`
    const pagemodule = await import(path)
    const Post = pagemodule.default

    return <Post />
  } catch (error) {
    console.log(error)
    notFound()
  }
}

export function generateStaticParams() {
  return [{ slug: 'privacy' }]
}

export const dynamicParams = false
