import { Phone, Mail, User } from 'lucide-react';

export default function About() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Om Dala Byggare
            </h2>
            <div className="prose prose-lg text-slate-600 space-y-4">
              <p className="leading-relaxed">
                Dala Byggare är din lokala byggfirma med djupa rötter i Dalarna. Vi är stolta över att vara dina grannar och att få förtroendet att förverkliga dina byggdrömmar.
              </p>
              <p className="leading-relaxed">
                Med mångårig erfarenhet av både nybyggnation och renovering, kombinerar vi traditionellt hantverk med moderna tekniker. Vi tar hand om projekt av alla storlekar – från mindre renoveringar till kompletta nybyggen.
              </p>
              <p className="leading-relaxed">
                Vårt mål är alltid detsamma: att leverera högsta kvalitet, hålla oss inom budget och skapa långsiktiga relationer med våra kunder. Vi är inte nöjda förrän du är det.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-emerald-600 rounded-full flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-slate-900">Nicklas</h3>
                <p className="text-slate-600">Samordnare</p>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-slate-600 leading-relaxed">
                Hör gärna av dig så berättar vi mer om hur vi kan hjälpa dig med ditt projekt.
              </p>

              <div className="space-y-3">
                <a
                  href="tel:+46105558966"
                  className="flex items-center gap-3 text-slate-900 hover:text-emerald-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 transition-colors border border-slate-200">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">Telefon</div>
                    <div className="font-semibold">010-555 89 66</div>
                  </div>
                </a>

                <a
                  href="mailto:offert@dalabyggare.se"
                  className="flex items-center gap-3 text-slate-900 hover:text-emerald-600 transition-colors group"
                >
                  <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center group-hover:bg-emerald-50 transition-colors border border-slate-200">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-slate-500">E-post</div>
                    <div className="font-semibold">offert@dalabyggare.se</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
