import { Users, Award, Calendar, Heart } from 'lucide-react';

interface AboutProps {
  t: any;
}

export function About({ t }: AboutProps) {
  const stats = [
    { icon: Heart, value: '2,500+', label: t.about.stats.rescued },
    { icon: Users, value: '2,100+', label: t.about.stats.adopted },
    { icon: Users, value: '150+', label: t.about.stats.volunteers },
    { icon: Calendar, value: '25+', label: t.about.stats.years }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            {t.about.title}
          </h2>
          <p className="text-xl text-orange-600 font-medium">
            {t.about.subtitle}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              {t.about.description}
            </p>
            
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => {
                const IconComponent = stat.icon;
                return (
                  <div key={index} className="text-center">
                    <div className="inline-flex items-center justify-center w-12 h-12 bg-orange-100 rounded-full mb-3">
                      <IconComponent className="w-6 h-6 text-orange-600" />
                    </div>
                    <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="relative">
            <img
              src="https://images.pexels.com/photos/2061057/pexels-photo-2061057.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Cat being cared for"
              className="rounded-2xl shadow-2xl"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg">
              <div className="text-center">
                <Award className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                <div className="text-sm font-semibold text-gray-900">Non-Profit</div>
                <div className="text-xs text-gray-600">Certified</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}