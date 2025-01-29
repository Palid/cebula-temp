const common = {
  jgs7: "JGS7",
  oxanium: "Oxanium",
};

const pl = {
  siteTitle: "CEBULACAMP",
  nav: {
    about: "O nas",
    when: "Kiedy",
    where: "Gdzie",
    food: "Wyżywienie",
    contact: "Kontakt",
    tickets: "Bilety",
    accommodation: "Nocleg",
  },
  mobileNav: {
    toggleMenu: "Aktywnuj menu",
    menu: "Menu",
  },
  hero: {
    title: "CEBULACAMP 2025",
    subtitle: "REAKTYWACJA",
  },
  about: {
    title: "O nas",
    description:
      "Zjazd hakerów, miłośników open source, wolnych duchów. Organizowany przez hakerów dla hakerów. Będzie mate, będzie utopia, będzie chillera.\n\nSpodziewaj się ciekawych prezentacji, dziwnych instalacji artystycznych i mnóstwa dyskusji. Możesz opowiedzieć o swoim projekcie, zademonstrować skonstruowane zabawki, albo wspólnie coś stworzyć podczas eventu.",
  },
  where: {
    title: "Gdzie",
    location: "klub Łącznik, Tramwajowa 1-3, Wrocław, obok Hackerspace Wrocław",
  },
  when: {
    title: "Kiedy",
    date: "28-31.08.2025",
    extra:
      "chętnych do pomocy w przygotowaniach zapraszamy już na *Day 0* 27 sierpnia",
  },
  tickets: {
    title: "Bilety",
    status: "soon",
  },
  accommodation: {
    title: "Nocleg",
    description:
      "w duchu prawdziwego campu przygotowujemy ogrodzone miejsce do rozbicia namiotu z toaletami i prysznicem. Ilość miejsc namiotowych ograniczona, obowiązuje kolejność rezerwacji. Jest także możliwość zakwaterowania we własnym zakresie w pobliskim hotelu lub akademikach.",
  },
  food: {
    title: "Wyżywienie",
    description:
      "we własnym zakresie, w okolicy dostępne są knajpy z dowozem, wieczory planujemy umilić wspólnym grillowaniem.",
  },
  contact: {
    title: "Kontakt",
    email: "contact@cebula.camp",
  },
  credits: {
    title: "Uznania",
    usedFonts: "Użyte fonty:",
    oxanium: common.oxanium,
    jgs7: common.jgs7,
    jgs7RemovedGlyphs: "z usuniętymi znakami",
  },
};

const en = {};

export const translations: {
  en: typeof pl;
  pl: typeof pl;
} = {
  pl: pl,
  // @ts-expect-error This should fail so far, remove me when translations are properly added to "en" object.
  en: en,
};

export type Sections = keyof (typeof pl)["nav"];
