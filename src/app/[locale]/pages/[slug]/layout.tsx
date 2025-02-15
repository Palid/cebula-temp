import { NavContainer } from "@/components/nav-container";
import { getLocale, Lang } from "@/i18n/locales";
import { translations } from "@/i18n/translations";

export default async function MdxLayout({ children, params }: { children: React.ReactNode, params: Promise<{ locale: Lang }> }) {
  const { locale } = await (params);
  const currentLang = getLocale(locale);

  const t = translations[currentLang];
  return (
    <div>
      <NavContainer title={t.nav.title} >{null}</NavContainer>
      <section className="container mx-auto px-4 py-10">
        <div className="container mx-auto px-4 py-8">
          <article
            className="prose prose-invert max-w-none
        prose-h1:font-press-start prose-h1:text-4xl md:prose-h1:text-5xl prose-h1:mb-8 prose-h1:text-center prose-h1:text-foreground
        prose-h2:font-press-start prose-h2:text-2xl md:prose-h2:text-3xl prose-h2:text-foreground/80
        prose-h3:font-press-start prose-h3:text-xl md:prose-h3:text-2xl prose-h3:text-foreground/60
        prose-h4:font-press-start prose-h4:text-l md:prose-h4:text-xl prose-h4:text-foreground/40
        prose-p:text-muted-foreground prose-p:leading-relaxed
        prose-a:text-foreground prose-a:no-underline hover:prose-a:text-foreground/80 prose-a:transition-colors
        prose-strong:text-foreground prose-strong:font-bold
        prose-code:text-foreground prose-code:bg-muted/20 prose-code:px-1 prose-code:rounded
        prose-pre:bg-muted/20 prose-pre:border prose-pre:border-muted
        prose-img:rounded-lg prose-img:border prose-img:border-muted
        prose-blockquote:border-primary prose-blockquote:text-muted-foreground
        prose-ul:text-muted-foreground prose-ol:text-muted-foreground
        prose-li:marker:text-foreground"
          >
            {children}
          </article>
        </div>
      </section>
    </div>
  )
}

