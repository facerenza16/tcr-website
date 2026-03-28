import Image from 'next/image'
import { Button } from '@/components/ui/Button'
import { WA_LINK } from '@/lib/constants'

export function Promocion() {
  return (
    <section id="promocion" className="relative py-28 md:py-40 px-4 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&q=80&auto=format&fit=crop"
          alt="Limpieza profesional de edificio"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(135deg, rgba(10,37,64,0.92) 0%, rgba(23,135,196,0.85) 100%)' }}
        />
      </div>

      {/* Decorative circle */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none z-0"
        style={{ background: 'radial-gradient(circle, rgba(232,123,42,0.15) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 max-w-2xl mx-auto text-center flex flex-col items-center gap-6">
        {/* Badge */}
        <span
          className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-bold tracking-[0.2em] uppercase border"
          style={{ borderColor: 'rgba(232,123,42,0.5)', color: '#E87B2A', backgroundColor: 'rgba(232,123,42,0.08)' }}
        >
          Oferta para nuevos clientes
        </span>

        {/* The big number */}
        <div className="flex items-start justify-center">
          <span
            className="font-black leading-none select-none"
            style={{
              fontSize: 'clamp(6rem, 20vw, 10rem)',
              color: '#E87B2A',
              lineHeight: '0.9',
              fontFamily: 'var(--font-dm-serif)',
            }}
            aria-hidden="true"
          >
            15%
          </span>
        </div>

        <div className="space-y-2 -mt-2">
          <p className="text-2xl md:text-3xl font-semibold text-white">
            de descuento durante los primeros 3 meses
          </p>
          <p className="text-white/60 text-lg">Ideal para probar el servicio sin compromiso.</p>
        </div>

        <Button href={WA_LINK} variant="primary" size="lg" className="mt-4">
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5" aria-hidden="true">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
          </svg>
          Solicitar presupuesto ahora
        </Button>
      </div>
    </section>
  )
}
