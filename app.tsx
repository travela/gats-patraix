"use client"

import { useEffect } from "react"
import { LanguageProvider } from "@/contexts/language-context"
import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { CatsSection } from "@/components/cats-section"
import { VolunteerSection } from "@/components/volunteer-section"
import { ContactSection } from "@/components/contact-section"

function AppContent() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 64 // Height of fixed header
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  useEffect(() => {
    // Smooth scrolling polyfill for older browsers
    if (!("scrollBehavior" in document.documentElement.style)) {
      import("smoothscroll-polyfill").then((smoothscroll) => {
        smoothscroll.polyfill()
      })
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Header onNavigate={scrollToSection} />
      <main>
        <HeroSection />
        <AboutSection />
        <CatsSection />
        <VolunteerSection />
        <ContactSection />
      </main>
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2024 CatCare Association. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}
