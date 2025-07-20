"use client"

import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { MobileNav } from "./mobile-nav"
import { LanguageToggle } from "./language-toggle"

interface HeaderProps {
  onNavigate: (section: string) => void
}

export function Header({ onNavigate }: HeaderProps) {
  const { t } = useLanguage()

  const navItems = [
    { key: "home", label: t("nav.home") },
    { key: "about", label: t("nav.about") },
    { key: "cats", label: t("nav.cats") },
    { key: "volunteer", label: t("nav.volunteer") },
    { key: "contact", label: t("nav.contact") },
  ]

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
            <Heart className="w-4 h-4 text-white fill-current" />
          </div>
          <span className="font-bold text-lg text-gray-900">CatCare</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          {navItems.map((item) => (
            <Button
              key={item.key}
              variant="ghost"
              onClick={() => onNavigate(item.key)}
              className="text-gray-700 hover:text-orange-600"
            >
              {item.label}
            </Button>
          ))}
        </nav>

        <div className="flex items-center space-x-2">
          <div className="hidden md:block">
            <LanguageToggle />
          </div>
          <MobileNav onNavigate={onNavigate} />
        </div>
      </div>
    </header>
  )
}
