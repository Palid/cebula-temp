"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import type { Sections, translations } from "@/i18n/translations"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"

export function MobileNav({
  t,
  linksOrder,
  activeSection
}: {
  t: typeof translations.pl
  linksOrder: Array<Sections>
  activeSection: Sections
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
            <a key={value} href={`#${value}`} className={cn("text-lg hover:text-primary transition-colors", {
              'text-primary': activeSection === value
            })}>
              {t.nav[value]}
            </a>
          ))}
        </nav>
      </SheetContent>
    </Sheet>
  )
}

