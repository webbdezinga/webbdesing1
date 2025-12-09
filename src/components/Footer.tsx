import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Dala Byggare</h3>
            <p className="text-slate-400 leading-relaxed">
              Din pålitliga byggpartner i Dalarna. Vi levererar kvalitet, trygghet och professionellt hantverk.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Kontakt</h4>
            <div className="space-y-3 text-slate-400">
              <a href="tel:+46105558966" className="flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>010-555 89 66</span>
              </a>
              <a href="mailto:offert@dalabyggare.se" className="flex items-center gap-2 hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
                <span>offert@dalabyggare.se</span>
              </a>
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 mt-1 flex-shrink-0" />
                <span>Verksamma i hela Dalarnas län</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Våra tjänster</h4>
            <ul className="space-y-2 text-slate-400">
              <li>Nybyggnation</li>
              <li>Renovering</li>
              <li>Tillbyggnad</li>
              <li>Altan & uterum</li>
              <li>ROT-avdrag</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-slate-400">
            <p>
              © {currentYear} Dala Byggare. Alla rättigheter förbehållna.
            </p>
            <p className="text-center sm:text-right">
              Offertförfrågan är gratis och utan förpliktelser
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
