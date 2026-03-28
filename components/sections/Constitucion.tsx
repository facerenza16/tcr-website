import { RAZON_SOCIAL, RUT, BPS_NUMERO } from '@/lib/constants'

const credentials = [
  {
    label: 'Razón Social',
    value: RAZON_SOCIAL,
    detail: 'Sociedad Anónima Simplificada',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
      </svg>
    ),
  },
  {
    label: 'RUT',
    value: RUT,
    detail: 'Dirección General Impositiva (DGI)',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
  },
  {
    label: 'Nº de Empresa BPS',
    value: BPS_NUMERO,
    detail: 'Banco de Previsión Social',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    ),
  },
]

export function Constitucion() {
  return (
    <section id="empresa-constituida" style={{ backgroundColor: '#0A2540' }}>
      <div className="max-w-5xl mx-auto px-4 py-16 md:py-20">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-10">
          {/* Left text */}
          <div className="md:max-w-xs">
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87B2A' }}>
              Empresa constituida
            </span>
            <h2
              className="mt-3 text-2xl md:text-3xl font-bold text-white leading-snug"
              style={{ fontFamily: 'var(--font-dm-serif)' }}
            >
              Debidamente inscripta ante DGI, BPS y BSE
            </h2>
            <p className="mt-4 text-white/60 text-sm leading-relaxed">
              Trabajamos con total transparencia. Nuestros datos fiscales y de seguridad social
              son públicos y verificables.
            </p>
            <div className="flex items-center gap-2 mt-5">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: '#1787C4' }}
              >
                <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-white/70 text-sm">Empresa formal, no informal</span>
            </div>
            <div className="flex items-center gap-2 mt-2">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: '#1787C4' }}
              >
                <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-white/70 text-sm">Cumple Ley 18.251 de Tercerizaciones</span>
            </div>
          </div>

          {/* Right: credential cards */}
          <div className="flex-1 grid grid-cols-1 sm:grid-cols-3 gap-4">
            {credentials.map((cred) => (
              <div
                key={cred.label}
                className="rounded-2xl p-5 flex flex-col gap-3"
                style={{
                  backgroundColor: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.1)',
                  borderLeft: '3px solid #1787C4',
                }}
              >
                <span style={{ color: '#1787C4' }}>{cred.icon}</span>
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider" style={{ color: '#E87B2A' }}>
                    {cred.label}
                  </p>
                  <p className="text-white font-bold text-lg mt-1 leading-tight break-all">
                    {cred.value}
                  </p>
                  <p className="text-white/40 text-xs mt-1">{cred.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
