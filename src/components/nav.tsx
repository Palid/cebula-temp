"use client"
import { useColorSections } from "@/hooks/color-sections"
import { type translations } from "@/i18n/translations"
import { cn } from "@/lib/utils"
import { useRef } from "react"
import { MobileNav } from "./mobile-nav"
import { NavContainer } from "./nav-container"

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

export function MainpageNav({
  t,
}: {
  t: typeof translations.pl
}) {
  const parent = useRef<HTMLDivElement>(null);
  useColorSections(parent);

  return (
    <NavContainer title={t.nav.title}>
      <>
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
        <div className="md:hidden ml-2">
          <MobileNav t={t} linksOrder={linksOrder} />
        </div>
      </>
    </NavContainer>
  )
}

