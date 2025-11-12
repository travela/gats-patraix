export const languages = {
  es: 'Español', 
  ca: 'Català (Valencià)',
  en: 'English',
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'es';

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
      title: 'They deserve a home too',
      subtitle: 'We protect, care for, and manage stray cats in the Patraix area.',
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
      adoptBtn: 'Show more',
      age: 'Age',
      gender: 'Gender',
      personality: 'Personality',
      years: 'years',
      months: 'months',
      male: 'Male',
      female: 'Female'
    },
    blog: {
      title: 'Latest News & Stories',
      subtitle: 'Stay updated with our rescue stories and cat care tips',
      readMore: 'Read More',
      publishedOn: 'Published on',
      by: 'by'
    },
    contact: {
      title: 'Get in Touch',
      donateTitle: 'Support Our Cause',
      bankName: 'Bank Name',
      bankAccount: 'Account Number',
      iban: 'IBAN',
      subtitle: 'Ready to adopt or volunteer? Get in touch with us, there are many ways to help!',
      address: 'Address',
      phone: 'Phone',
      email: 'Email',
      hours: 'Hours',
      instagram: 'Instagram',
      form: {
        name: 'Name',
        email: 'Email',
        subject: 'Subject',
        message: 'Message',
        send: 'Send Message'
      }
    },
    footer: {
      description: 'Asociación Gats Patraix - They deserve a home too.',
      links: 'Quick Links',
      social: 'Follow Us',
      newsletter: 'Newsletter',
      newsletterDesc: 'Subscribe to our newsletter for updates',
      subscribe: 'Subscribe',
      copyright: '© 2025 Asociación Gats Patraix. All rights reserved.'
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
      title: 'Ellos también merecen un hogar',
      subtitle: 'Protegemos, cuidamos y gestionamos a los gatos de la calle en la zona de Patraix',
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
      adoptBtn: 'Ver más',
      age: 'Edad',
      gender: 'Género',
      personality: 'Personalidad',
      years: 'años',
      months: 'meses',
      male: 'Masculino',
      female: 'Femenino'
    },
    blog: {
      title: 'Últimas Noticias e Historias',
      subtitle: 'Mantente actualizado con nuestras historias de rescate y consejos de cuidado felino',
      readMore: 'Leer Más',
      publishedOn: 'Publicado el',
      by: 'por'  
    },
    contact: {
      title: 'Contáctanos',
      donateTitle: 'Apoya Nuestra Causa',
      bankName: 'Nombre del Banco',
      bankAccount: 'Número de Cuenta',
      iban: 'IBAN',
      subtitle: '¿Te animas a adoptar o ser voluntario/a? ¡Contáctanos, hay muchas formas de ayudar!',
      address: 'Dirección',
      phone: 'Teléfono',
      email: 'Correo',
      hours: 'Horarios',
      instagram: 'Instagram',
      form: {
        name: 'Nombre',
        email: 'Correo',
        subject: 'Asunto',
        message: 'Mensaje',
        send: 'Enviar Mensaje'
      }
    },
    footer: {
      description: 'Asociación Gats Patraix - Ellos también merecen un hogar.',
      links: 'Enlaces Rápidos',
      social: 'Síguenos',
      newsletter: 'Boletín',
      newsletterDesc: 'Suscríbete a nuestro boletín para actualizaciones',
      subscribe: 'Suscribirse',
      copyright: '© 2025 Asociación Gats Patraix. Todos los derechos reservados.'
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
      title: 'Ells també mereixen una llar',
      subtitle: 'Protegim, cuidem i gestionem els gats del carrer a la zona de Patraix.',
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
      adoptBtn: 'Mostra més',
      age: 'Edat',
      gender: 'Gènere',
      personality: 'Personalitat',
      years: 'anys',
      months: 'mesos',
      male: 'Mascle',
      female: 'Femení'
    },
    blog: {
      title: 'Últimes Notícies i Històries',
      subtitle: 'Mantén-te actualitzat amb les nostres històries de rescat i consells de cura felina',
      readMore: 'Llegir Més',
      publishedOn: 'Publicat el',
      by: 'per'
    },
    contact: {
      title: 'Contacta\'ns',
      donateTitle: 'Dóna Suport a la Nostra Causa',
      bankName: 'Nom del Banc',
      bankAccount: 'Número de Compte',
      iban: 'IBAN',
      subtitle: 'T\'animes a adoptar o ser voluntari/a? Contacta\'ns, hi ha moltes formes d\'ajudar!',
      address: 'Direcció',
      phone: 'Telèfon',
      email: 'Correu',
      hours: 'Horaris',
      instagram: 'Instagram',
      form: {
        name: 'Nom',
        email: 'Correu',
        subject: 'Assumpte',
        message: 'Missatge',
        send: 'Enviar Missatge'
      }
    },
    footer: {
      description: 'Associació Gats Patraix - Ells també mereixen una llar.',
      links: 'Enllaços Ràpids',
      social: 'Segueix-nos',
      newsletter: 'Butlletí',
      newsletterDesc: 'Subscriu-te al nostre butlletí per a actualitzacions',
      subscribe: 'Subscriure\'s',
      copyright: '© 2025 Associació Gats Patraix. Tots els drets reservats.'
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