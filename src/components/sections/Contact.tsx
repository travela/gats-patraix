import { MapPin, Phone, Mail, Clock } from 'lucide-react';
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
      value: 'Carrer de València, 123\n46003 Valencia, Spain'
    },
    {
      icon: Phone,
      label: t.contact.phone,
      value: '+34 963 123 456'
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: 'info@valenciacats.org'
    },
    {
      icon: Clock,
      label: t.contact.hours,
      value: 'Mon-Fri: 9:00-18:00\nSat-Sun: 10:00-16:00'
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
            <div className="bg-gray-200 rounded-xl h-64 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-gray-400 mx-auto mb-2" />
                <p className="text-gray-500">Interactive Map</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <Card className="border-0 shadow-lg">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">{t.contact.form.name}</Label>
                    <Input id="name" name="name" className="mt-1" />
                  </div>
                  <div>
                    <Label htmlFor="email">{t.contact.form.email}</Label>
                    <Input id="email" name="email" type="email" className="mt-1" />
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="subject">{t.contact.form.subject}</Label>
                  <Input id="subject" name="subject" className="mt-1" />
                </div>
                
                <div>
                  <Label htmlFor="message">{t.contact.form.message}</Label>
                  <Textarea 
                    id="message" 
                    name="message" 
                    rows={5} 
                    className="mt-1 resize-none" 
                  />
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-orange-500 hover:bg-orange-600 py-3 text-lg font-semibold"
                >
                  {t.contact.form.send}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}