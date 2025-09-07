import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { languages, type Language } from '@/lib/i18n';
import { Button } from '@/components/ui/button';

interface LanguageSwitcherProps {
  currentLang: Language;
  currentPath: string;
}

export function LanguageSwitcher({ currentLang, currentPath }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const getLocalizedPath = (lang: Language) => {
    // Remove current language from path if it exists
    const pathWithoutLang = currentPath.replace(/^\/[a-z]{2}/, '') || '/';
    // Add new language prefix (except for default language)
    return lang === 'es' ? pathWithoutLang : `/${lang}${pathWithoutLang}`;
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2"
      >
        <Globe className="w-4 h-4" />
        <span className="uppercase text-sm font-medium">{currentLang}</span>
      </Button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-1 bg-white border border-gray-200 rounded-md shadow-lg z-50 min-w-[120px]">
          {Object.entries(languages).map(([lang, label]) => (
            <a
              key={lang}
              href={getLocalizedPath(lang as Language)}
              className={`block px-4 py-2 text-sm hover:bg-gray-100 transition-colors ${
                currentLang === lang ? 'bg-gray-50 font-medium text-orange-600' : 'text-gray-700'
              }`}
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}