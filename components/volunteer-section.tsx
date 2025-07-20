"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Heart, Users, Clock, Smile } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"
import Image from "next/image"

export function VolunteerSection() {
  const { t } = useLanguage()

  const benefits = [
    {
      icon: Heart,
      title: "Make a Difference",
      description: "Help save lives and give cats a second chance",
    },
    {
      icon: Users,
      title: "Join a Community",
      description: "Meet like-minded people who share your passion",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description: "Volunteer when it works for your schedule",
    },
    {
      icon: Smile,
      title: "Feel Good",
      description: "Experience the joy of helping animals in need",
    },
  ]

  return (
    <section id="volunteer" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-full h-[400px] rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Volunteers with cats"
                fill
                className="object-cover"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("volunteer.title")}</h2>
              <p className="text-xl text-gray-600 mb-8">{t("volunteer.description")}</p>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <Card key={index} className="p-4">
                  <CardContent className="flex items-start space-x-3 p-0">
                    <div className="flex-shrink-0">
                      <benefit.icon className="w-6 h-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">{benefit.title}</h3>
                      <p className="text-sm text-gray-600">{benefit.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
              <Users className="w-5 h-5 mr-2" />
              {t("volunteer.cta")}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
