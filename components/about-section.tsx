"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Heart, Home, Users } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function AboutSection() {
  const { t } = useLanguage()

  const stats = [
    {
      icon: Heart,
      number: "2,000+",
      label: t("about.stats.rescued"),
      color: "text-red-500",
    },
    {
      icon: Home,
      number: "1,800+",
      label: t("about.stats.adopted"),
      color: "text-green-500",
    },
    {
      icon: Users,
      number: "150+",
      label: t("about.stats.volunteers"),
      color: "text-blue-500",
    },
  ]

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("about.title")}</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">{t("about.description")}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="text-center p-6 hover:shadow-lg transition-shadow">
              <CardContent className="space-y-4">
                <div
                  className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gray-100 ${stat.color}`}
                >
                  <stat.icon className="w-8 h-8" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
