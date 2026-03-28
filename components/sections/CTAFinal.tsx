import { Button } from '@/components/ui/Button'
import { WA_LINK, PHONE_DISPLAY, PHONE_INTL, EMAIL, CITY, COMPANY_NAME, RAZON_SOCIAL, RUT } from '@/lib/constants'

export function CTAFinal() {
  return (
    <section id="contacto" className="bg-white">
      {/* Main CTA area */}
      <div className="py-20 md:py-28 px-4">
        <div className="max-w-2xl mx-auto text-center flex flex-col items-center gap-8">
          <div>
            <span
              className="text-xs font-bold tracking-[0.25em] uppercase"
              style={{ color: '#E87B2A' }}
            >
              Contacto
            </span>
            <h2
              className="mt-3 text-3xl md:text-5xl font-bold leading-tight"
              style={{ color: '#0A2540', fontFamily: 'var(--font-dm-serif)' }}
            >
              Solicitá tu presupuesto sin compromiso
            </h2>
            <p className="mt-4 text-gray-500 text-lg max-w-lg mx-auto leading-relaxed">
              Si tu edificio o empresa necesita mejorar el servicio de limpieza, estamos para
              ayudarte.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
            <Button href={WA_LINK} variant="primary" size="lg">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escribir por WhatsApp
            </Button>
            <Button href={`tel:+${PHONE_INTL}`} variant="ghost" size="lg">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Llamar al {PHONE_DISPLAY}
            </Button>
          </div>

          {/* Contact details */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-sm text-gray-400 pt-4">
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">📍</span> {CITY}
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">📞</span>
              <a href={`tel:+${PHONE_INTL}`} className="hover:text-[#1787C4] transition-colors">
                {PHONE_DISPLAY}
              </a>
            </span>
            <span className="flex items-center gap-1.5">
              <span aria-hidden="true">📧</span>
              <a href={`mailto:${EMAIL}`} className="hover:text-[#1787C4] transition-colors">
                {EMAIL}
              </a>
            </span>
          </div>
        </div>
      </div>

      {/* Footer bar */}
      <div className="border-t border-gray-100 py-6 px-4 text-center">
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} {COMPANY_NAME} · {CITY}
        </p>
        <p className="text-xs text-gray-300 mt-1">
          {RAZON_SOCIAL} · RUT {RUT}
        </p>
      </div>
    </section>
  )
}
