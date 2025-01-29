"use client"

import { Nav } from "@/components/nav"
import { translations } from "@/i18n/translations"
import { useEffect, useRef } from "react"


export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const t = translations.pl // For now using Polish, could be made dynamic


  useEffect(() => {
    const handleScroll = () => {
      if (videoRef.current) {
        const scrolled = window.scrollY;
        videoRef.current.style.willChange = "transform";
        videoRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
        videoRef.current.style.willChange = "unset";
      }
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => window.removeEventListener('scroll', throttledHandleScroll);
  }, []);

  return (
    <div>
      <Nav t={t} />

      <main className="flex flex-col min-h-screen">
        <section className="h-screen relative overflow-hidden dark:bg-black">
          <div className="absolute inset-0 bg-black opacity-80">
            <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-full object-cover parallax-video ">
              <source src="/cebula.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className="text-center font-[JGS7]">
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter mb-6 light:text-background">{t.hero.title}</h1>
              <p className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl-text:7xl 2xl:text-8xl text-primary">{t.hero.subtitle}</p>
            </div>
          </div>
        </section>

        <section id="about" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.about.title}</h2>
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto whitespace-pre-line">
              {t.about.description}
            </div>
          </div>
        </section>

        <section id="where" className="py-24 bg-background/90">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.where.title}</h2>
            <div className="text-lg text-muted-foreground">
              <p>{t.where.location}</p>
            </div>
          </div>
        </section>

        <section id="when" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.when.title}</h2>
            <div className="text-lg text-muted-foreground">
              <p className="text-primary text-3xl font-[JGS7]">{t.when.date}</p>
              <p className="mt-4">{t.when.extra}</p>
            </div>
          </div>
        </section>

        <section id="tickets" className="py-24 bg-background/90">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.tickets.title}</h2>
            <div className="text-lg text-muted-foreground">
              <p>{t.tickets.status}</p>
            </div>
          </div>
        </section>

        <section id="accommodation" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.accommodation.title}</h2>
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>{t.accommodation.description}</p>
            </div>
          </div>
        </section>

        <section id="food" className="py-24 bg-background/90">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.food.title}</h2>
            <div className="text-lg text-muted-foreground max-w-3xl mx-auto">
              <p>{t.food.description}</p>
            </div>
          </div>
        </section>

        <section id="contact" className="py-24 bg-background">
          <div className="container mx-auto px-4">
            <h2 className="text-4xl font-bold mb-8 tracking-tighter">{t.contact.title}</h2>
            <div className="text-lg text-muted-foreground">
              <a href={`mailto:${t.contact.email}`} className="text-primary hover:underline">
                {t.contact.email}
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

