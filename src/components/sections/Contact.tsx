import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';

interface ContactProps {
  t: any;
}

export function Contact({ t }: ContactProps) {
  const contactInfo = [
    {
      icon: MapPin,
      label: t.contact.address,
      value: 'C.de Montesa, 13, Patraix, 46017 València, Spain'
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+34 610 741 828'
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'patraixgats@gmail.com'
    },
    {
      icon: Instagram,
      label: t.contact.instagram,
      value: '@gats_patraix'
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: 'Mon-Sat: 10:00-15:00, 18:00-20:30\nSun: 11:00-20:00'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.contact.title}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t.contact.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <Card key={index} className="border-0 shadow-lg">
                    <CardContent className="p-6 text-center">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-4">
                        <IconComponent className="w-6 h-6 text-orange-600" />
                      </div>
                      <h3 className="font-semibold text-gray-900 mb-2">{info.label}</h3>
                      <p className="text-sm text-gray-600 whitespace-pre-line">{info.value}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Map placeholder */}
{/*             <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
              </div>
            </div> */}
          </div>

          {/* Donation Bank Info */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.contact.donateTitle}</h3>
              <div className="space-y-4">
                <div>
                  <Label className="font-semibold text-gray-900">{t.contact.bankName}</Label>
                  <p className="text-gray-700">CAIXA POPULAR</p>
                </div>
                <div>
                  <Label className="font-semibold text-gray-900">{t.contact.iban}</Label>
                  <p className="text-gray-700">ES7431590010522677499721</p>
                </div>
                <div>
                  <Label className="font-semibold text-gray-900">Bizum</Label>
                  <p className="text-gray-700">CÓDIGO BIZUM 07731</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}