"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { translations } from "@/i18n/translations"
import { Menu } from "lucide-react"

export function MobileNav({
  t,
  linksOrder,
}: {
  t: typeof translations.pl
  linksOrder: Array<keyof (typeof translations.pl)["nav"]>
}) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">{t.mobileNav.toggleMenu}</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[80vw] sm:w-[385px]">
        <SheetHeader>
          <SheetTitle>{t.mobileNav.menu}</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 mt-8">
          {linksOrder.map((value) => (
            <a key={value} href={`#${value}`} className="text-lg hover:text-primary transition-colors">
              {t.nav[value]}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

