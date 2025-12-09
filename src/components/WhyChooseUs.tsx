import { Shield, Users, Receipt, Briefcase, MapPin, Clock } from 'lucide-react';

const benefits = [
  {
    icon: Shield,
    title: 'Certifierade medarbetare',
    description: 'Våra hantverkare är utbildade och certifierade inom sina respektive områden.',
  },
  {
    icon: Briefcase,
    title: 'Totalentreprenad',
    description: 'Vi sköter allt från planering till färdigt projekt – du behöver bara en kontakt.',
  },
  {
    icon: Receipt,
    title: 'ROT-avdrag möjligt',
    description: 'Vi hjälper dig med all dokumentation för att maximera ditt ROT-avdrag.',
  },
  {
    icon: Users,
    title: 'Projekt stora som små',
    description: 'Alla uppdrag är lika viktiga för oss – från mindre reparationer till nybyggnation.',
  },
  {
    icon: MapPin,
    title: 'Verksamma i hela Dalarna',
    description: 'Vi arbetar i Falun, Borlänge, Mora, Avesta och övriga delar av länet.',
  },
  {
    icon: Clock,
    title: 'Tydlig tidsplanering',
    description: 'Vi håller vad vi lovar – med realistiska tidsplaner och regelbunden uppföljning.',
  },
];

const guarantees = [
  'Högsta kvalitet i material och utförande',
  'Tydlig kommunikation genom hela projektet',
  'Fast budget utan dolda kostnader',
  'Trygghet för dig som kund – alltid'
];

export default function WhyChooseUs() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Varför välja oss?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi är din lokala partner för alla byggbehov – med erfarenhet, kompetens och ett genuint engagemang.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <div key={benefit.title} className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-slate-600 leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 md:p-10 border border-slate-200">
          <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">
            Vår garanti till dig
          </h3>
          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl mx-auto">
            {guarantees.map((guarantee, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-6 h-6 bg-emerald-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
                </div>
                <p className="text-slate-700">{guarantee}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
