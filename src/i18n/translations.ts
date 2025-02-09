const common = {
  jgs7: "JGS font Jgs font by Adel Faure. Distributed by velvetyne.fr",
  oxanium: "Oxanium",
  orgaEmail: "orga@cebula.camp",
};

const pl = {
  siteTitle: "CebulaCamp 2025",
  nav: {
    title: "CEBULACAMP",
    hero: "Cebula",
    about: "O nas",
    when: "Kiedy",
    where: "Gdzie",
    food: "Wyżywienie",
    contact: "Kontakt",
    tickets: "Bilety",
    accommodation: "Nocleg",
  },
  mobileNav: {
    toggleMenu: "Aktywuj menu",
    menu: "Menu",
  },
  hero: {
    title: "CEBULACAMP 2025",
    subtitle: "REAKTYWACJA",
  },
  about: {
    title: "O nas",
    description:
      "Zjazd hakerów, miłośników open source, wolnych duchów. Organizowany przez hakerów dla hakerów. Będzie mate, będzie utopia, będzie chillera.\n\nReaktywacja wydarzenia po długiej przerwie od ostatniej edycji w 2021. Tym razem widzimy się we Wrocławiu, w budynku starej zajezdni tramwajowej który zamienimy na łączone hackcenter i salę prelekcyjną.\n\nSpodziewaj się ciekawych prezentacji, dziwnych instalacji artystycznych i mnóstwa dyskusji. Możesz opowiedzieć o swoim projekcie, zademonstrować skonstruowane zabawki, albo wspólnie coś stworzyć podczas eventu.",
  },
  where: {
    title: "Gdzie",
    location:
      "Klub „Łącznik”, Tramwajowa 1-3, Wrocław, obok Hackerspace Wrocław",
  },
  when: {
    title: "Kiedy",
    date: "28-31.08.2025",
    extra:
      "Chętnych do pomocy w przygotowaniach zapraszamy już na Day 0, 27 sierpnia",
  },
  tickets: {
    title: "Bilety",
    status: "Wkrótce ™",
  },
  accommodation: {
    title: "Nocleg",
    description:
      "We własnym zakresie - jest możliwość zakwaterowania się w pobliskich hotelach lub akademikach. Planujemy przygotowanie pola namiotowego przed lokalem, ale jeszcze nie jest to gwarantowane i miejsca są ograniczone.",
  },
  food: {
    title: "Wyżywienie",
    description:
      "We własnym zakresie, w okolicy dostępne są sklepy oraz knajpy z dowozem. Wieczory planujemy umilić wspólnym grillowaniem.",
  },
  contact: {
    title: "Kontakt",
    email: common.orgaEmail,
  },
  credits: {
    title: "Uznania",
    usedFonts: "Użyte fonty:",
    oxanium: common.oxanium,
    jgs7: common.jgs7,
  },
};

const en = {
  siteTitle: "CebulaCamp 2025",
  nav: {
    title: "CEBULACAMP",
    hero: "Onion",
    about: "About us",
    when: "When",
    where: "Where",
    food: "Food",
    contact: "Contact",
    tickets: "Tickets",
    accommodation: "Accomodation",
  },
  mobileNav: {
    toggleMenu: "Toggle menu",
    menu: "Menu",
  },
  hero: {
    title: "CEBULACAMP 2025",
    subtitle: "REACTIVATED",
  },
  about: {
    title: "About us",
    description:
      "A gathering of hackers, open source enthusiasts, and free spirits. Organized by hackers for hackers. An utopia of mate and chill vibes.\n\nFirst event since a long pause that started on 2021. This year we'll see eachother in Wrocław, in an old tram depot building which we'll turn into a combined hack center and talk stage.\n\nExpect interesting presentations, weird art installations, and lots of discussions. Talk about your project, show off the stuff you've built, or work on something together during the event.",
  },
  where: {
    title: "Where",
    location:
      "“Łącznik” Club, Tramwajowa 1-3, Wrocław, next to Hackerspace Wrocław",
  },
  when: {
    title: "When",
    date: "28-31.08.2025",
    extra:
      "Those willing to help with preparations are welcome to join on Day 0, August 27",
  },
  tickets: {
    title: "Tickets",
    status: "Soon ™",
  },
  accommodation: {
    title: "Accommodation",
    description:
      "Please arrange your own accommodation in a nearby hotel or student dormitories. We might be able to prepare a camping space in front of the venue, but that's not guaranteed yet, and spots will be limited.",
  },
  food: {
    title: "Food",
    description:
      "DIY. There are shops nearby and restaurants with takeaway/delivery. We plan to have some communal barbecues in the evenings.",
  },
  contact: {
    title: "Contact",
    email: common.orgaEmail,
  },
  credits: {
    title: "Credits",
    usedFonts: "Used fonts:",
    oxanium: common.oxanium,
    jgs7: common.jgs7,
  },
};

export const translations: {
  en: typeof pl;
  pl: typeof pl;
} = {
  pl: pl,
  en: en,
};

export type Translations = typeof pl;

export type Sections = keyof (typeof pl)["nav"];
