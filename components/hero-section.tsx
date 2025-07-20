"use client"

import { Button } from "@/components/ui/button"
import { Heart, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function HeroSection() {
  const { t } = useLanguage()

  return (
    <section id="home" className="min-h-screen flex items-center bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">{t("hero.title")}</h1>
              <p className="text-xl text-gray-600 leading-relaxed">{t("hero.subtitle")}</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                <Heart className="w-5 h-5 mr-2" />
                {t("hero.cta.adopt")}
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-orange-500 text-orange-600 hover:bg-orange-50 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                {t("hero.cta.donate")}
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/placeholder.svg?height=500&width=600"
                alt="Happy cats in shelter"
                fill
                className="object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-pink-200 rounded-full opacity-60"></div>
            <div className="absolute -top-6 -right-6 w-16 h-16 bg-orange-200 rounded-full opacity-60"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
