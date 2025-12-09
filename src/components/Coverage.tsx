import { MapPin } from 'lucide-react';

const cities = [
  'Borlänge',
  'Mora',
  'Falun',
  'Avesta',
  'Hedemora',
  'Ludvika',
  'Leksand',
  'Rättvik',
  'Säter',
  'Gagnef',
  'Vansbro',
  'Malung-Sälen',
];

export default function Coverage() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-emerald-100 rounded-full mb-4">
            <MapPin className="w-8 h-8 text-emerald-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Vi verkar i hela Dalarna
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Oavsett var i länet du bor, så är vi redo att hjälpa dig med ditt byggprojekt.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 border border-slate-200">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {cities.map((city) => (
              <div
                key={city}
                className="flex items-center gap-2 text-slate-700 py-2 px-3 bg-slate-50 rounded-lg hover:bg-emerald-50 hover:text-emerald-700 transition-colors"
              >
                <div className="w-2 h-2 bg-emerald-600 rounded-full flex-shrink-0"></div>
                <span className="font-medium text-sm">{city}</span>
              </div>
            ))}
          </div>

          <p className="text-center text-slate-500 mt-8 text-sm">
            ...och fler orter i Dalarnas län
          </p>
        </div>
      </div>
    </section>
  );
}
