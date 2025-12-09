import { Home, Hammer, Plus, Fence, PaintBucket, Warehouse } from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Nybyggnation',
    description: 'Från drömmen till verklighet – vi bygger ditt nya hem med precision och omsorg.',
  },
  {
    icon: PaintBucket,
    title: 'Badrum & köksrenovering',
    description: 'Moderna, funktionella badrum och kök som höjer standarden i ditt hem.',
  },
  {
    icon: Hammer,
    title: 'Fasadrenovering',
    description: 'Skydda och förnya ditt hus med professionell fasadrenovering.',
  },
  {
    icon: Plus,
    title: 'Tillbyggnad',
    description: 'Behöver du mer plats? Vi hjälper dig med tillbyggnader som passar perfekt.',
  },
  {
    icon: Fence,
    title: 'Altan & uterum',
    description: 'För mer livskvalitet och högre värde på huset – njut av utemiljön året runt.',
  },
  {
    icon: Warehouse,
    title: 'Garage & attefallshus',
    description: 'Praktiska lösningar för extra utrymme utan komplicerade bygglov.',
  },
];

export default function Services() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Våra tjänster
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Vi erbjuder kompletta bygg- och renoveringslösningar för både privatpersoner och företag i hela Dalarna.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.title}
                className="p-6 border border-slate-200 rounded-xl hover:shadow-lg transition-shadow duration-200 bg-white"
              >
                <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center mb-4">
                  <Icon className="w-6 h-6 text-emerald-600" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
