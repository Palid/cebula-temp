"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { useColorSections } from "@/hooks/color-sections"
import type { Sections, translations } from "@/i18n/translations"
import { Menu } from "lucide-react"
import { useRef } from "react"
import { LanguageSelector } from "./ui/language-selector"

function NavContent({
  t,
  linksOrder
}: {
  t: typeof translations.pl,
  linksOrder: Array<Sections>
}) {
  const parent = useRef<HTMLDivElement>(null);
  useColorSections(parent);
  return (
    <nav className="flex flex-col gap-4 mt-8" ref={parent}>
      {linksOrder.map((value) => (
        <a key={value} href={`#${value}`} className="text-lg hover:text-primary transition-colors">
          {t.nav[value]}
        </a>
      ))}
      <LanguageSelector />
    </nav>
  )
}

export function MobileNav({
  t,
  linksOrder,
}: {
  t: typeof translations.pl
  linksOrder: Array<Sections>
}) {
  return (
    <Sheet >
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t.mobileNav.toggleMenu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] sm:w-[385px] z-max">
        <SheetHeader>
          <SheetTitle>{t.mobileNav.menu}</SheetTitle>
        </SheetHeader>
        <NavContent t={t} linksOrder={linksOrder} />
      </SheetContent>
    </Sheet>
  )
}

