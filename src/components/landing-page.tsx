"use client"

import dynamic from 'next/dynamic';



import { Nav } from "@/components/nav";
import { jgs7 } from '@/fonts';
import { Translations } from "@/i18n/translations";
import { cn } from "@/lib/utils";
import { ReactElement, useEffect, useRef } from "react";
import { NewsletterPopup } from './newsletter-form';
import { useTheme } from "./providers";
import { Skeleton } from './ui/skeleton';

function Section({
  id,
  title,
  paragraphs,
  after
}: {
  id: string
  title: string;
  paragraphs: ReactElement;
  after?: ReactElement;
}) {
  return (<section id={id} className="bg-background">
    <div className="container mx-auto px-4">
      <h2 className="text-4xl font-bold tracking-tighter max-w-3xl mx-auto mb-2">{title}</h2>
      <div className="text-lg text-muted-foreground max-w-3xl mx-auto whitespace-pre-line">
        {paragraphs}
      </div>
      {after}
    </div>
  </section>)
}

function getSource({
  src,
  type
}: {
  src: string;
  type: 'mp4' | 'webm' | 'ogv'
}) {
  const sourceType = `video/${type}`
  return [
    <source
      key={`mobile-${type}`}
      media="(max-width: 640px)"
      src={src.replace('.mp4', `_mobile.${type}`)}
      type={sourceType}
    />,

    <source
      key={`tablet-${type}`}
      media="(max-width: 1024px)"
      src={src.replace('.mp4', `_tablet.${type}`)}
      type={sourceType}
    />,

    <source
      key={`hd-${type}`}
      media="(max-width: 1920px)"
      src={src.replace('.mp4', `_hd.${type}`)}
      type={sourceType}
    />,

    <source
      key={`twok-${type}`}
      media="(max-width: 2560px)"
      src={src.replace('.mp4', `_twok.${type}`)}
      type={sourceType}
    />,

    <source
      key={`uhd-${type}`}
      media="(max-width: 3840px)"
      src={src.replace('.mp4', `_uhd.${type}`)}
      type={sourceType}
    />,

    <source
      key={`original-${type}`}
      media="(min-width: 3841px)"
      src={src.replace('.mp4', `_original.${type}`)}
      type={sourceType}
    />,
  ];
}

function Video({ sourceBase, hidden }: {
  sourceBase: string;
  hidden: boolean;
}) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!videoRef.current || hidden) return;

      videoRef.current.play();
      const scrolled = window.scrollY;
      videoRef.current.style.willChange = "transform";
      videoRef.current.style.transform = `translateY(${scrolled * 0.5}px)`;
      videoRef.current.style.willChange = "unset";
    };

    const throttledHandleScroll = () => {
      requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", throttledHandleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", throttledHandleScroll);
  }, [hidden]);

  const sources = [...getSource({ src: sourceBase, type: 'mp4' }), ...getSource({ src: sourceBase, type: 'ogv' }), ...getSource({ src: sourceBase, type: 'webm' })]

  return (
    <video
      ref={videoRef}
      preload="auto"
      autoPlay
      muted
      loop
      playsInline
      webkit-playsinline="true"
      x5-playsinline="true"
      className={cn("w-full h-full object-contain parallax-video", {
        hidden,
      })}
    >
      {sources.map(x => x)}
    </video>
  );
}


const LazyLeafletMap = dynamic(() => import('./event-map.lazy'), {
  ssr: false,
  loading: () => <Skeleton className="mt-8 h-[368px] w-full" />
})

export default function LandingPage(
  { t }: { t: Translations }
) {

  const { theme } = useTheme()

  return (
    <div>
      <Nav t={t} />
      <main className="flex flex-col min-h-screen grid-gap-10 gap-10 pb-12">

        <section id="hero" className="h-screen relative overflow-hidden dark:bg-black light:bg-white ">
          <div className="absolute inset-0 opacity-80">
            <Video sourceBase="/videos/ceboola_gradient.mp4" hidden={theme === 'light'} />
            <Video sourceBase="/videos/ceboola_gradient-white.mp4" hidden={theme === "dark"} />
          </div>
          <div className="relative z-10 container mx-auto px-4 h-full flex items-center justify-center">
            <div className={`text-center ${jgs7.className}`}>
              <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tighter light:text-background">{t.hero.title}</h1>
              <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl-text:7xl 2xl:text-8xl text-primary">{t.hero.subtitle}</p>
              <p className="mt-2 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl-text:7xl 2xl:text-8xl text-primary ">{t.when.date}</p>
              <NewsletterPopup t={t} />
            </div>
          </div>
        </section>


        <Section id="about" title={t.about.title} paragraphs={<p>{t.about.description}</p>} />
        <Section id="where" title={t.where.title} paragraphs={<p>{t.where.location}</p>} after={<LazyLeafletMap t={t} />} />

        <Section id="when" title={t.when.title} paragraphs={<>
          <p className={`text-primary text-3xl ${jgs7.className}`}>{t.when.date}</p>
          <p className="mt-4">{t.when.extra}</p></>}
        />
        <Section id="tickets" title={t.tickets.title} paragraphs={<p>{t.tickets.status}</p>} />
        <Section id="accommodation" title={t.accommodation.title} paragraphs={<p>{t.accommodation.description}</p>} />
        <Section id="food" title={t.food.title} paragraphs={<p>{t.food.description}</p>} />
        <Section id="contact" title={t.contact.title} paragraphs={<a href={`mailto:${t.contact.email}`}>{t.contact.email}</a>} />
        <Section id="credits" title={t.credits.title} paragraphs={<>
          <p>{t.credits.usedFonts}</p>
          <p><a className="hover:underline" href="https://velvetyne.fr/fonts/jgs-font/">{t.credits.jgs7}</a></p>
          <p><a className="hover:underline" href="https://fonts.google.com/specimen/Oxanium">{t.credits.oxanium}</a></p>
        </>}
        />
      </main>
    </div>
  )
}

