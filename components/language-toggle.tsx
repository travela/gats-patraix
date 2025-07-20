"use client";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Languages } from "lucide-react";
import { useLanguage } from "@/contexts/language-context";
import Image from "next/image";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  const languages = [
    { code: "es", name: "Español", flag: "🇪🇸" },
    { code: "ca", name: "Valencià", flag: "/valencia.png" },
    // { code: "en", name: "English", flag: "🇺🇸" },
    { code: "en", name: "English", flag: "🇬🇧" },
  ];

  const currentLanguage = languages.find((lang) => lang.code === language);

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="sm" className="gap-2">
          <Languages className="h-4 w-4" />
          <span className="hidden sm:inline">{currentLanguage?.name}</span>
          <span className="sm:hidden">{currentLanguage?.flag}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {languages.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            onClick={() => setLanguage(lang.code as any)}
            className={language === lang.code ? "bg-accent" : ""}
          >
            {lang.flag.endsWith(".png") ? (
              <Image
                className="mr-2"
                src={lang.flag}
                alt=""
                width={14}
                height={10}
              />
            ) : (
              <span className="mr-2">{lang.flag}</span>
            )}

            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
