import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { WA_LINK } from '@/lib/constants'

export function Hero() {
  return (
    <section className="relative min-h-[95svh] flex flex-col items-center justify-center px-4 py-20 overflow-hidden">
      {/* Background photo */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?w=1600&q=80&auto=format&fit=crop"
          alt="Equipo profesional de limpieza trabajando"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
        {/* Dark gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(to bottom, rgba(10,37,64,0.78) 0%, rgba(14,101,154,0.65) 60%, rgba(10,37,64,0.85) 100%)',
          }}
        />
      </div>

      {/* Subtle diagonal lines */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -55deg,
            transparent,
            transparent 60px,
            rgba(255,255,255,0.015) 60px,
            rgba(255,255,255,0.015) 61px
          )`,
        }}
      />

      <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center gap-8">
        {/* Logo */}
        <div className="relative">
          <div
            className="absolute inset-0 rounded-full blur-2xl opacity-30"
            style={{ backgroundColor: '#E87B2A' }}
          />
          <Image
            src="/logo.jpeg"
            alt="Limpieza y Mantenimiento TCR"
            width={160}
            height={160}
            className="relative object-contain"
            priority
          />
        </div>

        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border"
          style={{ borderColor: 'rgba(232,123,42,0.5)', color: '#E87B2A', backgroundColor: 'rgba(232,123,42,0.08)' }}
        >
          Montevideo, Uruguay
        </span>

        {/* Headline */}
        <div className="space-y-4">
          <h1
            className="text-5xl md:text-7xl font-bold text-white leading-[1.05] tracking-tight"
            style={{ fontFamily: 'var(--font-dm-serif)' }}
          >
            Limpieza profesional
            <br />
            <span className="accent-underline" style={{ color: '#E87B2A' }}>
              que marca la diferencia
            </span>
          </h1>
          <p className="text-lg md:text-xl text-white/75 font-light max-w-xl mx-auto leading-relaxed">
            Edificios y empresas en Montevideo. Servicio supervisado, personal uniformado,
            empresa debidamente inscripta.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 mt-2">
          <Button href={WA_LINK} variant="primary" size="lg">
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
            Solicitar presupuesto
          </Button>
          <a
            href="#servicios"
            className="inline-flex items-center justify-center gap-2 px-8 py-4 text-lg font-bold rounded-full border-2 border-white/30 text-white hover:bg-white/10 transition-all duration-200"
          >
            Ver servicios
          </a>
        </div>

        {/* Trust badges */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 mt-4 pt-4 border-t border-white/10 w-full justify-center">
          {[
            { label: 'Inscriptos en BPS y BSE' },
            { label: 'Supervisión semanal' },
            { label: 'Urgencias en 24 hs' },
          ].map((badge) => (
            <div key={badge.label} className="flex items-center gap-2">
              <span
                className="flex items-center justify-center w-5 h-5 rounded-full shrink-0"
                style={{ backgroundColor: '#E87B2A' }}
              >
                <svg viewBox="0 0 20 20" fill="white" className="w-3 h-3" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-sm text-white/85 font-medium">{badge.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none pointer-events-none z-10">
        <svg viewBox="0 0 1440 56" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
          <path d="M0 56C360 20 1080 20 1440 56V56H0V56Z" fill="white" />
        </svg>
      </div>
    </section>
  )
}
