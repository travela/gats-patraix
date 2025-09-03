export const languages = {
  en: 'English',
  es: 'Español', 
  ca: 'Català (Valencià)'
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'en';

export const translations = {
  en: {
    nav: {
      home: 'Home',
      about: 'About Us',
      cats: 'Adopt a Cat',
      blog: 'Blog',
      contact: 'Contact',
      donate: 'Donate'
    },
    hero: {
      title: 'Saving Lives, One Cat at a Time',
      subtitle: 'Valencia Cat Association is dedicated to rescuing, caring for, and finding loving homes for cats in need.',
      cta: 'Adopt Today',
      secondary: 'Learn More'
    },
    about: {
      title: 'About Our Mission',
      subtitle: 'Dedicated to feline welfare since 1998',
      description: 'The Valencia Cat Association has been at the forefront of cat rescue and adoption for over 25 years. Our dedicated team of volunteers works tirelessly to provide medical care, rehabilitation, and loving temporary homes for cats until they find their forever families.',
      stats: {
        rescued: 'Cats Rescued',
        adopted: 'Successful Adoptions',
        volunteers: 'Active Volunteers',
        years: 'Years of Service'
      }
    },
    cats: {
      title: 'Cats Looking for Homes',
      subtitle: 'Meet our wonderful cats ready for adoption',
      adoptBtn: 'Learn More',
      age: 'Age',
      gender: 'Gender',
      personality: 'Personality'
    },
    blog: {
      title: 'Latest News & Stories',
      subtitle: 'Stay updated with our rescue stories and cat care tips',
      readMore: 'Read More',
      publishedOn: 'Published on'
    },
    contact: {
      title: 'Get in Touch',
      subtitle: 'Ready to adopt or volunteer? Contact us today!',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Valencia Cat Association - Saving lives, one cat at a time.',
      links: 'Quick Links',
      social: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to our newsletter for updates',
      subscribe: 'Subscribe',
      copyright: '© 2024 Valencia Cat Association. All rights reserved.'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Nosotros',
      cats: 'Adoptar un Gato',
      blog: 'Blog',
      contact: 'Contacto',
      donate: 'Donar'
    },
    hero: {
      title: 'Salvando Vidas, Un Gato a la Vez',
      subtitle: 'La Asociación de Gatos de Valencia se dedica a rescatar, cuidar y encontrar hogares amorosos para gatos necesitados.',
      cta: 'Adopta Hoy',
      secondary: 'Saber Más'
    },
    about: {
      title: 'Nuestra Misión',
      subtitle: 'Dedicados al bienestar felino desde 1998',
      description: 'La Asociación de Gatos de Valencia ha estado a la vanguardia del rescate y adopción de gatos durante más de 25 años. Nuestro equipo dedicado de voluntarios trabaja incansablemente para brindar atención médica, rehabilitación y hogares temporales amorosos para gatos hasta que encuentren sus familias para siempre.',
      stats: {
        rescued: 'Gatos Rescatados',
        adopted: 'Adopciones Exitosas',
        volunteers: 'Voluntarios Activos',
        years: 'Años de Servicio'
      }
    },
    cats: {
      title: 'Gatos Buscando Hogar',
      subtitle: 'Conoce nuestros maravillosos gatos listos para adopción',
      adoptBtn: 'Saber Más',
      age: 'Edad',
      gender: 'Género',
      personality: 'Personalidad'
    },
    blog: {
      title: 'Últimas Noticias e Historias',
      subtitle: 'Mantente actualizado con nuestras historias de rescate y consejos de cuidado felino',
      readMore: 'Leer Más',
      publishedOn: 'Publicado el'
    },
    contact: {
      title: 'Contáctanos',
      subtitle: '¿Listo para adoptar o ser voluntario? ¡Contáctanos hoy!',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Correo',
      hours: 'Horarios',
      form: {
        name: 'Nombre',
        email: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    },
    footer: {
      description: 'Asociación de Gatos de Valencia - Salvando vidas, un gato a la vez.',
      links: 'Enlaces Rápidos',
      social: 'Síguenos',
      newsletter: 'Boletín',
      newsletterDesc: 'Suscríbete a nuestro boletín para actualizaciones',
      subscribe: 'Suscribirse',
      copyright: '© 2024 Asociación de Gatos de Valencia. Todos los derechos reservados.'
    }
  },
  ca: {
    nav: {
      home: 'Inici',
      about: 'Nosaltres',
      cats: 'Adoptar un Gat',
      blog: 'Blog',
      contact: 'Contacte',
      donate: 'Donar'
    },
    hero: {
      title: 'Salvant Vides, Un Gat cada Vegada',
      subtitle: 'L\'Associació de Gats de València es dedica a rescatar, cuidar i trobar llars amoroses per a gats necessitats.',
      cta: 'Adopta Hui',
      secondary: 'Saber Més'
    },
    about: {
      title: 'La Nostra Missió',
      subtitle: 'Dedicats al benestar felí des de 1998',
      description: 'L\'Associació de Gats de València ha estat a l\'avantguarda del rescat i adopció de gats durant més de 25 anys. El nostre equip dedicat de voluntaris treballa incansablement per brindar atenció mèdica, rehabilitació i llars temporals amoroses per a gats fins que troben les seues famílies per sempre.',
      stats: {
        rescued: 'Gats Rescatats',
        adopted: 'Adopcions Exitoses',
        volunteers: 'Voluntaris Actius',
        years: 'Anys de Servici'
      }
    },
    cats: {
      title: 'Gats Buscant Llar',
      subtitle: 'Coneix els nostres meravellosos gats preparats per a adopció',
      adoptBtn: 'Saber Més',
      age: 'Edat',
      gender: 'Gènere',
      personality: 'Personalitat'
    },
    blog: {
      title: 'Últimes Notícies i Històries',
      subtitle: 'Mantén-te actualitzat amb les nostres històries de rescat i consells de cura felina',
      readMore: 'Llegir Més',
      publishedOn: 'Publicat el'
    },
    contact: {
      title: 'Contacta\'ns',
      subtitle: 'Preparat per adoptar o ser voluntari? Contacta\'ns hui!',
      address: 'Direcció',
      phone: 'Telèfon',
      email: 'Correu',
      hours: 'Horaris',
      form: {
        name: 'Nom',
        email: 'Correu',
        subject: 'Assumpte',
        message: 'Missatge',
        send: 'Enviar Missatge'
      }
    },
    footer: {
      description: 'Associació de Gats de València - Salvant vides, un gat cada vegada.',
      links: 'Enllaços Ràpids',
      social: 'Segueix-nos',
      newsletter: 'Butlletí',
      newsletterDesc: 'Subscriu-te al nostre butlletí per a actualitzacions',
      subscribe: 'Subscriure\'s',
      copyright: '© 2024 Associació de Gats de València. Tots els drets reservats.'
    }
  }
} as const;

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) return lang as Language;
  return defaultLang;
}

export function useTranslations(lang: Language) {
  return translations[lang];
}

export function getLocalizedPath(path: string, lang: Language): string {
  if (lang === defaultLang) return path;
  return `/${lang}${path}`;
}