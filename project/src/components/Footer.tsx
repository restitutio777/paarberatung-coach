import { Mail, Phone, MapPin } from 'lucide-react';

const navLinks = [
  { label: 'Angebot', href: '#angebot' },
  { label: 'Über mich', href: '#ueber-mich' },
  { label: 'Für wen', href: '#fuer-wen' },
  { label: 'Stimmen', href: '#stimmen' },
  { label: 'Kontakt', href: '#kontakt' },
];

const legalLinks = [
  { label: 'Impressum', href: '#' },
  { label: 'Datenschutz', href: '#' },
];

export default function Footer() {
  return (
    <footer style={{ backgroundColor: '#2B2623' }}>
      <div className="max-w-content mx-auto px-6 lg:px-10 py-16">
        <div className="grid lg:grid-cols-3 gap-10 lg:gap-16 mb-12">
          <div>
            <div className="mb-4">
              <h3 className="font-serif text-xl font-bold text-white mb-1">
                Kathrin Sommer
              </h3>
              <p className="font-sans text-xs tracking-widest uppercase" style={{ color: '#8A7F76', letterSpacing: '0.15em' }}>
                Paarberatung & Coaching
              </p>
            </div>
            <p className="font-sans text-sm leading-relaxed" style={{ color: '#8A7F76', lineHeight: 1.75 }}>
              Systemische Beratung und Coaching für Paare und Einzelpersonen — ehrlich, mutig und mit Tiefe.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span
                className="font-sans text-xs px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: 'rgba(176,120,86,0.15)', color: '#B07856', fontSize: '10px' }}
              >
                Mitglied DGSF
              </span>
              <span
                className="font-sans text-xs px-2.5 py-1 rounded-sm"
                style={{ backgroundColor: 'rgba(176,120,86,0.15)', color: '#B07856', fontSize: '10px' }}
              >
                Praxis in Köln & Online
              </span>
            </div>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#8A7F76', letterSpacing: '0.15em' }}>
              Navigation
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="font-sans text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.6)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-1 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
                {legalLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className="block font-sans text-xs mt-2 transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.35)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.35)')}
                  >
                    {link.label}
                  </a>
                ))}
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-sans text-xs font-semibold tracking-widest uppercase mb-6" style={{ color: '#8A7F76', letterSpacing: '0.15em' }}>
              Kontakt
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href="mailto:kontakt@kathrin-sommer.de"
                  className="flex items-start gap-3 font-sans text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  <Mail size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#B07856' }} />
                  kontakt@kathrin-sommer.de
                </a>
              </li>
              <li>
                <a
                  href="tel:+4922112345678"
                  className="flex items-start gap-3 font-sans text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.6)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.6)')}
                >
                  <Phone size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#B07856' }} />
                  0221 — 123 456 78
                </a>
              </li>
              <li>
                <div className="flex items-start gap-3 font-sans text-sm" style={{ color: 'rgba(255,255,255,0.45)' }}>
                  <MapPin size={14} className="mt-0.5 flex-shrink-0" style={{ color: '#B07856', opacity: 0.7 }} />
                  Köln & Online
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div
          className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ borderColor: 'rgba(255,255,255,0.08)' }}
        >
          <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Kathrin Sommer Paarberatung · Impressum · Datenschutz
          </p>
          <p className="font-sans text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            Mitglied DGSF · Praxis in Köln & Online
          </p>
        </div>
      </div>
    </footer>
  );
}
