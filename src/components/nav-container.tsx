'use client';

import { Button } from "@/components/ui/button";
import { MoonIcon, SunIcon } from "lucide-react";
import { useTheme } from "./providers";
import { LanguageSelector } from "./ui/language-selector";

export function NavContainer({ children, title, }: { children: React.ReactNode, title: string }) {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="fixed top-0 left-0 right-0 backdrop-blur-xs bg-background/40 border-b z-[10000]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex gap-4">
            <LanguageSelector />
            <a href="#" className="text-xl font-bold tracking-tighter hover:text-primary transition-colors">
              <h1>{title}</h1>
            </a>
          </div>
          <div className="flex items-center">
            {children}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-4"
            >
              {theme === "dark" ? (
                <SunIcon className="h-5 w-5" />
              ) : (
                <MoonIcon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
