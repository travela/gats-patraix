"use client"

import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { useLanguage } from "@/contexts/language-context"

export function ContactSection() {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: MapPin,
      label: t("contact.address"),
      value: "Calle de los Gatos 123, Valencia, España",
    },
    {
      icon: Phone,
      label: t("contact.phone"),
      value: "+34 963 123 456",
    },
    {
      icon: Mail,
      label: t("contact.email"),
      value: "info@catcare.org",
    },
    {
      icon: Clock,
      label: t("contact.hours"),
      value: t("contact.hours.value"),
    },
  ]

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">{t("contact.title")}</h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {contactInfo.map((info, index) => (
              <Card key={index} className="p-6">
                <CardContent className="flex items-start space-x-4 p-0">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                      <info.icon className="w-6 h-6 text-orange-600" />
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">{info.label}</h3>
                    <p className="text-gray-600">{info.value}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
