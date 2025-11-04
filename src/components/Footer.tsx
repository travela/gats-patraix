import { Heart, Facebook, Instagram, Twitter, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

interface FooterProps {
  t: any;
}

export function Footer({ t }: FooterProps) {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80;
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  const quickLinks = [
    { key: 'home', action: () => scrollToSection('hero') },
    /* { key: 'about', action: () => scrollToSection('about') }, */
    { key: 'cats', action: () => scrollToSection('cats') },
    { key: 'blog', action: () => scrollToSection('blog') },
    { key: 'contact', action: () => scrollToSection('contact') }
  ];

  const socialLinks = [
    { icon: Facebook, href: 'https://www.facebook.com/p/Asociaci%C3%B3n-Patraix-Gats-100064322546778/', label: 'Facebook' },
    { icon: Instagram, href: 'https://www.instagram.com/gats_patraix/', label: 'Instagram' },

  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Heart className="w-8 h-8 text-orange-500 fill-current" />
              <span className="text-xl font-bold">Asociación Gats Patraix</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              {t.footer.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors"
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.links}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.key}>
                  <button
                    onClick={link.action}
                    className="text-gray-300 hover:text-orange-400 transition-colors"
                  >
                    {t.nav[link.key]}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
{/*           <div>
            <h3 className="text-lg font-semibold mb-4">{t.footer.newsletter}</h3>
            <p className="text-gray-300 text-sm mb-4">
              {t.footer.newsletterDesc}
            </p>
            <div className="flex">
              <Input
                type="email"
                placeholder="Email"
                className="rounded-r-none border-gray-600 bg-gray-800 text-white"
              />
              <Button className="rounded-l-none bg-orange-500 hover:bg-orange-600">
                {t.footer.subscribe}
              </Button>
            </div>
          </div> */}
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            {t.footer.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}