import { Sections } from "@/i18n/translations";
import { useLayoutEffect, useRef } from "react";

export const linksOrder: Array<Sections> = [
  "hero",
  "about",
  "where",
  "when",
  "tickets",
  "accommodation",
  "food",
  "contact",
]

export function useColorSections(parent: React.RefObject<HTMLDivElement | null>) {
  const previous = useRef<Sections>(linksOrder[0])

  useLayoutEffect(() => {
    if (parent.current === null) return;

    const options = {
      root: null,
      rootMargin: "-10px",
      threshold: 0.5, // Adjust the visibility threshold as needed
    };


    const sections = linksOrder.map(value => document.getElementById(value));
    const subs = linksOrder.reduce((acc, value) => {
      acc[value] = parent.current!.querySelector('[data-sub="' + value + '"]')!;
      return acc;
    }, {} as Record<Sections, HTMLAnchorElement>);
    const links = linksOrder.reduce((acc, value) => {
      acc[value] = parent.current!.querySelector('[href="#' + value + '"]')!;
      return acc;
    }, {} as Record<Sections, HTMLAnchorElement>);

    console.log(links)

    const observer = new IntersectionObserver((entries) => {

      for (const entry of entries) {
        const target = entry.target.id as Sections
        if (entry.isIntersecting) {
          // FIXME: This seems to be VERY broken on firefox.
          // See: https://bugzilla.mozilla.org/show_bug.cgi?id=1250972
          // It basically spikes up CPU usage to some enormous values just to update the hash, like WTF firefox.
          // if (history.replaceState) {
          //   timeout = setTimeout(() => {
          //     history.replaceState(null, "", `#${target}`)
          //   }, 150)
          // }
          subs[previous.current]?.classList.remove('scale-x-100');
          links[previous.current]?.classList.remove('text-primary');
          previous.current = target;

          subs[previous.current]?.classList.add('scale-x-100');
          links[previous.current]?.classList.add('text-primary');
          break;
        }
      }
    }, options);

    sections.forEach(section => {
      if (section) {
        observer.observe(section);
      }
    });

    return () => {
      observer.disconnect()
    };
  }, [parent]);

}
