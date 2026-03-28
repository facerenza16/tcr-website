import { SectionWrapper } from '@/components/ui/SectionWrapper'

const badges = [
  {
    title: 'BPS',
    subtitle: 'Banco de Previsión Social',
    description: 'Todo nuestro personal está inscripto y al día con aportes al BPS.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
  {
    title: 'BSE',
    subtitle: 'Banco de Seguros del Estado',
    description: 'Personal asegurado por BSE frente a accidentes laborales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
  },
  {
    title: 'DGI',
    subtitle: 'Dirección General Impositiva',
    description: 'Empresa debidamente constituida e inscripta ante DGI en Uruguay.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    title: 'Ley 18.251',
    subtitle: 'Tercerizaciones Laborales',
    description: 'Cumplimos la normativa uruguaya de tercerizaciones laborales.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
]

export function Confianza() {
  return (
    <SectionWrapper id="confianza" bg="#F8FAFC">
      <div className="text-center mb-12">
        <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87B2A' }}>
          Respaldo legal
        </span>
        <h2
          className="mt-3 text-3xl md:text-5xl font-bold"
          style={{ color: '#0A2540', fontFamily: 'var(--font-dm-serif)' }}
        >
          Compromiso y responsabilidad
        </h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          Cumplimos toda la normativa laboral vigente en Uruguay. Eso nos diferencia.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="bg-white rounded-2xl p-7 flex flex-col items-center text-center gap-4"
            style={{ border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}
          >
            <span
              className="flex items-center justify-center w-16 h-16 rounded-2xl"
              style={{ backgroundColor: '#EBF5FB', color: '#1787C4' }}
            >
              {badge.icon}
            </span>
            <div>
              <p className="font-black text-2xl" style={{ color: '#0A2540' }}>
                {badge.title}
              </p>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mt-0.5">
                {badge.subtitle}
              </p>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed">{badge.description}</p>
          </div>
        ))}
      </div>

      <p className="text-center text-sm text-gray-400 mt-10">
        Brindamos tranquilidad tanto a la administración como a los propietarios del edificio.
      </p>
    </SectionWrapper>
  )
}
