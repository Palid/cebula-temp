"use client"
import { Button } from "@/components/ui/button"
import { Sections, type translations } from "@/i18n/translations"
import { cn } from "@/lib/utils"
import { MoonIcon, SunIcon } from "lucide-react"
import { useEffect, useState } from "react"
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
  const [activeSection, setActiveSection] = useState<Sections>("about")


  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "-10px",
      threshold: 0.5, // Adjust the visibility threshold as needed
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        const target = entry.target.id as keyof (typeof translations.pl)["nav"]
        if (entry.isIntersecting) {
          setActiveSection(target);
          if (history.replaceState) {
            history.replaceState(null, "", `#${target}`);
          }
        }
      });
    }, options);

    const sections = linksOrder.map(value => document.getElementById(value));
    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      sections.forEach(section => {
        if (section) {
          observer.unobserve(section);
        }
      });
    };
  }, []);

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
            <div className="hidden md:flex md:items-center md:gap-4 lg:gap-8">

              {linksOrder.map((value) => (
                <a
                  key={value}
                  href={`#${value}`}
                  className={cn("text-sm md:text-md hover:text-primary transition-colors relative group", {
                    'text-primary': activeSection === value
                  })}
                >
                  {t.nav[value]}
                  <span className={cn("absolute inset-x-0 -bottom-1 h-0.5 bg-primary transform scale-x-0 group-hover:scale-x-100 transition-transform", {
                    'scale-x-100': activeSection === value
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
              <MobileNav t={t} linksOrder={linksOrder} activeSection={activeSection} />
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

