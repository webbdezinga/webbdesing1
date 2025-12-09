import { ArrowDown } from 'lucide-react';

export default function Hero() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=1920')] bg-cover bg-center opacity-20"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32">
        <div className="max-w-3xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Dala Byggare – Din lokala byggfirma i Dalarna
          </h1>

          <p className="text-xl sm:text-2xl text-slate-200 mb-4 font-light">
            Nybyggnation · Renovering · Tillbyggnad · Altan & uterum · Totalentreprenad
          </p>

          <p className="text-lg text-slate-300 mb-8">
            Alltid med certifierade hantverkare, ROT-avdrag och fri offert.
          </p>

          <button
            onClick={scrollToContact}
            className="group bg-emerald-600 hover:bg-emerald-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-xl inline-flex items-center gap-2"
          >
            Få gratis offert
            <ArrowDown className="w-5 h-5 group-hover:translate-y-1 transition-transform" />
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}
