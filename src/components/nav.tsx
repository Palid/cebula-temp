"use client"
import { Button } from "@/components/ui/button"
import { useColorSections } from "@/hooks/color-sections"
import { type translations } from "@/i18n/translations"
import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon } from "lucide-react"
import { useRef } from "react"
import { MobileNav } from "./mobile-nav"
import { useTheme } from "./providers"
import { LanguageSelector } from "./ui/language-selector"

const linksOrder: Array<keyof (typeof translations.pl)["nav"]> = [
  "hero",
  "about",
  "where",
  "when",
  "tickets",
  "accommodation",
  "food",
  "contact",
]

export function Nav({
  t,
}: {
  t: typeof translations.pl
}) {
  const { theme, setTheme } = useTheme()
  const parent = useRef<HTMLDivElement>(null);
  useColorSections(parent);

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-xs bg-background/40 border-b z-[10000]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4">
            <LanguageSelector />
            <a href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
              <h1>{t.nav.title}</h1>
            </a>
          </div>
          <div className="flex items-center">
            {/* Desktop Navigation */}
            <div className="hidden md:flex md:items-center md:gap-4 lg:gap-8" ref={parent}>

              {linksOrder.map((value) => (
                <a
                  key={value}
                  href={`#${value}`}
                  className="text-sm md:text-md hover:text-primary transition-colors relative group will-change-[color]"
                >
                  {t.nav[value]}
                  <span data-sub={value} className={cn("absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform will-change-transform", {
                  })} />
                </a>
              ))}
            </div>

            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              {theme === "dark" ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </Button>



            {/* Mobile Navigation */}
            <div className="md:hidden ml-2">
              <MobileNav t={t} linksOrder={linksOrder} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

