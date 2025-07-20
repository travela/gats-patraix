"use client";

import { createContext, useContext, useState, type ReactNode } from "react";

type Language = "es" | "ca" | "en";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations = {
  en: {
    // Navigation
    "nav.home": "Home",
    "nav.about": "About Us",
    "nav.cats": "Adopt a Cat",
    "nav.volunteer": "Volunteer",
    "nav.contact": "Contact",
    "nav.blog": "Blog",

    // Hero Section
    "hero.title": "Saving Lives, One Paw at a Time",
    "hero.subtitle": "Help us give abandoned cats a second chance at happiness",
    "hero.cta.adopt": "Adopt Now",
    "hero.cta.donate": "Donate",

    // About Section
    "about.title": "About Our Mission",
    "about.description":
      "We are a non-profit organization dedicated to rescuing, rehabilitating, and rehoming abandoned cats. Since 2010, we have helped over 2,000 cats find loving families.",
    "about.stats.rescued": "Cats Rescued",
    "about.stats.adopted": "Successful Adoptions",
    "about.stats.volunteers": "Active Volunteers",

    // Cats Section
    "cats.title": "Meet Our Cats",
    "cats.subtitle": "These beautiful cats are looking for their forever homes",
    "cats.age": "Age",
    "cats.gender": "Gender",
    "cats.personality": "Personality",
    "cats.cta": "Meet Me",

    // Volunteer Section
    "volunteer.title": "Join Our Team",
    "volunteer.description":
      "Become a volunteer and help us make a difference in the lives of cats in need.",
    "volunteer.cta": "Volunteer Now",

    // Contact Section
    "contact.title": "Get in Touch",
    "contact.address": "Address",
    "contact.phone": "Phone",
    "contact.email": "Email",
    "contact.hours": "Visit Hours",
    "contact.hours.value": "Mon-Fri: 10AM-6PM, Sat-Sun: 10AM-4PM",

    // Blog Section
    "blog.title": "Latest News & Stories",
    "blog.subtitle":
      "Read about our rescue stories, adoption tips, and cat care advice",
    "blog.read-more": "Read More",
    "blog.back-to-home": "Back to Home",
    "blog.published": "Published",
    "blog.by": "by",
  },
  es: {
    // Navigation
    "nav.home": "Inicio",
    "nav.about": "Nosotros",
    "nav.cats": "Adoptar un Gato",
    "nav.volunteer": "Voluntariado",
    "nav.contact": "Contacto",
    "nav.blog": "Blog",

    // Hero Section
    "hero.title": "Salvando Vidas, Una Patita a la Vez",
    "hero.subtitle":
      "Ayúdanos a dar una segunda oportunidad de felicidad a gatos abandonados",
    "hero.cta.adopt": "Adoptar Ahora",
    "hero.cta.donate": "Donar",

    // About Section
    "about.title": "Nuestra Misión",
    "about.description":
      "Somos una organización sin fines de lucro dedicada a rescatar, rehabilitar y reubicar gatos abandonados. Desde 2010, hemos ayudado a más de 2,000 gatos a encontrar familias amorosas.",
    "about.stats.rescued": "Gatos Rescatados",
    "about.stats.adopted": "Adopciones Exitosas",
    "about.stats.volunteers": "Voluntarios Activos",

    // Cats Section
    "cats.title": "Conoce Nuestros Gatos",
    "cats.subtitle": "Estos hermosos gatos buscan su hogar para siempre",
    "cats.age": "Edad",
    "cats.gender": "Género",
    "cats.personality": "Personalidad",
    "cats.cta": "Conóceme",

    // Volunteer Section
    "volunteer.title": "Únete a Nuestro Equipo",
    "volunteer.description":
      "Conviértete en voluntario y ayúdanos a hacer la diferencia en las vidas de gatos necesitados.",
    "volunteer.cta": "Ser Voluntario",

    // Contact Section
    "contact.title": "Contáctanos",
    "contact.address": "Dirección",
    "contact.phone": "Teléfono",
    "contact.email": "Correo",
    "contact.hours": "Horarios de Visita",
    "contact.hours.value": "Lun-Vie: 10AM-6PM, Sáb-Dom: 10AM-4PM",

    // Blog Section
    "blog.title": "Últimas Noticias e Historias",
    "blog.subtitle":
      "Lee sobre nuestras historias de rescate, consejos de adopción y cuidado de gatos",
    "blog.read-more": "Leer Más",
    "blog.back-to-home": "Volver al Inicio",
    "blog.published": "Publicado",
    "blog.by": "por",
  },
  ca: {
    // Navigation
    "nav.home": "Inici",
    "nav.about": "Nosaltres",
    "nav.cats": "Adoptar un Gat",
    "nav.volunteer": "Voluntariat",
    "nav.contact": "Contacte",
    "nav.blog": "Blog",

    // Hero Section
    "hero.title": "Salvant Vides, Una Pateta Cada Vegada",
    "hero.subtitle":
      "Ajuda'ns a donar una segona oportunitat de felicitat a gats abandonats",
    "hero.cta.adopt": "Adoptar Ara",
    "hero.cta.donate": "Donar",

    // About Section
    "about.title": "La Nostra Missió",
    "about.description":
      "Som una organització sense ànim de lucre dedicada a rescatar, rehabilitar i reubicar gats abandonats. Des de 2010, hem ajudat a més de 2.000 gats a trobar famílies amoroses.",
    "about.stats.rescued": "Gats Rescatats",
    "about.stats.adopted": "Adopcions Exitoses",
    "about.stats.volunteers": "Voluntaris Actius",

    // Cats Section
    "cats.title": "Coneix els Nostres Gats",
    "cats.subtitle": "Aquests hermosos gats busquen la seua llar per sempre",
    "cats.age": "Edat",
    "cats.gender": "Gènere",
    "cats.personality": "Personalitat",
    "cats.cta": "Coneix-me",

    // Volunteer Section
    "volunteer.title": "Uneix-te al Nostre Equip",
    "volunteer.description":
      "Converteix-te en voluntari i ajuda'ns a fer la diferència en les vides de gats necessitats.",
    "volunteer.cta": "Ser Voluntari",

    // Contact Section
    "contact.title": "Contacta'ns",
    "contact.address": "Adreça",
    "contact.phone": "Telèfon",
    "contact.email": "Correu",
    "contact.hours": "Horaris de Visita",
    "contact.hours.value": "Dll-Div: 10AM-6PM, Dis-Diu: 10AM-4PM",

    // Blog Section
    "blog.title": "Últimes Notícies i Històries",
    "blog.subtitle":
      "Llig sobre les nostres històries de rescat, consells d'adopció i cura de gats",
    "blog.read-more": "Llegir Més",
    "blog.back-to-home": "Tornar a l'Inici",
    "blog.published": "Publicat",
    "blog.by": "per",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("es");

  const t = (key: string): string => {
    return (
      translations[language][
        key as keyof (typeof translations)[typeof language]
      ] || key
    );
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
