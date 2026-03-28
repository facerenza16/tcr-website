import { SectionWrapper } from '@/components/ui/SectionWrapper'

const steps = [
  {
    number: '01',
    title: 'Evaluamos',
    description: 'Visitamos el edificio o empresa para entender sus necesidades específicas.',
  },
  {
    number: '02',
    title: 'Diseñamos',
    description: 'Creamos un plan de limpieza personalizado, con frecuencia y alcance a medida.',
  },
  {
    number: '03',
    title: 'Asignamos',
    description: 'Seleccionamos personal capacitado y uniformado para el servicio.',
  },
  {
    number: '04',
    title: 'Supervisamos',
    description: 'Gerencia visita el edificio semanalmente para controlar la calidad.',
  },
  {
    number: '05',
    title: 'Mejoramos',
    description: 'Realizamos seguimiento continuo y ajustamos el servicio según feedback.',
  },
]

export function ComoTrabajamos() {
  return (
    <SectionWrapper id="como-trabajamos" bg="#ffffff">
      <div className="text-center mb-16">
        <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87B2A' }}>
          Proceso
        </span>
        <h2
          className="mt-3 text-3xl md:text-5xl font-bold"
          style={{ color: '#0A2540', fontFamily: 'var(--font-dm-serif)' }}
        >
          Nuestro proceso de trabajo
        </h2>
        <p className="mt-4 text-gray-500 max-w-lg mx-auto">
          Simple, efectivo y transparente. Así garantizamos resultados.
        </p>
      </div>

      {/* Mobile: vertical timeline */}
      <div className="flex flex-col gap-8 md:hidden">
        {steps.map((step, index) => (
          <div key={step.number} className="flex gap-5 items-start">
            <div className="flex flex-col items-center shrink-0">
              <div
                className="relative flex items-center justify-center w-12 h-12 rounded-full font-black text-sm z-10"
                style={{ backgroundColor: '#1787C4', color: 'white' }}
              >
                {step.number}
              </div>
              {index < steps.length - 1 && (
                <div className="w-0.5 h-full min-h-8 mt-2" style={{ backgroundColor: '#E2E8F0' }} />
              )}
            </div>
            <div className="pt-2">
              <h3 className="font-bold text-lg" style={{ color: '#0A2540' }}>{step.title}</h3>
              <p className="text-gray-500 text-sm mt-1 leading-relaxed">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop: horizontal row */}
      <div className="hidden md:grid grid-cols-5 gap-4">
        {steps.map((step, index) => (
          <div key={step.number} className="relative flex flex-col items-center text-center">
            {/* Connecting line */}
            {index < steps.length - 1 && (
              <div
                className="absolute top-6 left-[calc(50%+24px)] right-[-50%] h-0.5 z-0"
                style={{ backgroundColor: '#E2E8F0' }}
              />
            )}

            {/* Step circle */}
            <div
              className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full font-black text-sm mb-4 shadow-md"
              style={{ backgroundColor: '#1787C4', color: 'white' }}
            >
              {step.number}
            </div>

            {/* Ghost number */}
            <div
              className="absolute top-[-20px] left-1/2 -translate-x-1/2 step-ghost select-none pointer-events-none"
              aria-hidden="true"
            >
              {step.number}
            </div>

            <h3 className="font-bold text-base mt-6" style={{ color: '#0A2540' }}>{step.title}</h3>
            <p className="text-gray-500 text-xs mt-2 leading-relaxed">{step.description}</p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  )
}
