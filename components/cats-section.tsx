"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Heart } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import { catsData } from "@/data/cats-data"
import Image from "next/image"

export function CatsSection() {
  const { t } = useLanguage()

  return (
    <section id="cats" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("cats.title")}</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">{t("cats.subtitle")}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {catsData
            .filter((cat) => cat.available)
            .map((cat) => (
              <Card key={cat.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative h-48">
                  <Image src={cat.image || "/placeholder.svg"} alt={cat.name} fill className="object-cover" />
                </div>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{cat.name}</h3>
                  <div className="space-y-2 text-sm text-gray-600 mb-3">
                    <div>
                      <strong>{t("cats.age")}:</strong> {cat.age} {cat.age === 1 ? "año" : "años"}
                    </div>
                    <div>
                      <strong>{t("cats.gender")}:</strong> {cat.gender === "male" ? "Macho" : "Hembra"}
                    </div>
                  </div>
                  <div className="mb-3">
                    <div className="text-sm font-medium text-gray-700 mb-1">{t("cats.personality")}:</div>
                    <div className="flex flex-wrap gap-1">
                      {cat.personality.map((trait, index) => (
                        <Badge key={index} variant="secondary" className="text-xs">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 line-clamp-3">{cat.description}</p>
                </CardContent>
                <CardFooter className="p-4 pt-0">
                  <Button className="w-full bg-orange-500 hover:bg-orange-600">
                    <Heart className="w-4 h-4 mr-2" />
                    {t("cats.cta")}
                  </Button>
                </CardFooter>
              </Card>
            ))}
        </div>
      </div>
    </section>
  )
}
