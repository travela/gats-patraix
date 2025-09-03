import { useState, useEffect } from 'react';
import { Menu, X, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { LanguageSwitcher } from './LanguageSwitcher';
import type { Language } from '@/lib/i18n';

interface NavigationProps {
  t: any;
  lang: Language;
  currentPath: string;
}

export function Navigation({ t, lang, currentPath }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Account for fixed header
      const elementPosition = element.offsetTop - offset;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  const navItems = [
    { key: 'home', href: '#hero' },
    { key: 'about', href: '#about' },
    { key: 'cats', href: '#cats' },
    { key: 'blog', href: '#blog' },
    { key: 'contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-md' : 'bg-white/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Heart className="w-8 h-8 text-orange-500 fill-current" />
            <span className="text-xl font-bold text-gray-900">
              Valencia Cat Association
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => scrollToSection(item.href.substring(1))}
                className="text-gray-700 hover:text-orange-600 transition-colors font-medium"
              >
                {t.nav[item.key]}
              </button>
            ))}
            <Button 
              size="sm" 
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => scrollToSection('contact')}
            >
              {t.nav.donate}
            </Button>
            <LanguageSwitcher currentLang={lang} currentPath={currentPath} />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <LanguageSwitcher currentLang={lang} currentPath={currentPath} />
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-gray-200">
              {navItems.map((item) => (
                <button
                  key={item.key}
                  onClick={() => scrollToSection(item.href.substring(1))}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-orange-600 hover:bg-orange-50 rounded-md transition-colors"
                >
                  {t.nav[item.key]}
                </button>
              ))}
              <Button 
                className="w-full mt-2 bg-orange-500 hover:bg-orange-600"
                onClick={() => scrollToSection('contact')}
              >
                {t.nav.donate}
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}