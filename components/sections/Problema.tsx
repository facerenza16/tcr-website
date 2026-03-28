import { SectionWrapper } from '@/components/ui/SectionWrapper'

const painPoints = [
  { label: 'Falta de limpieza', icon: '🚫' },
  { label: 'Personal que no cumple', icon: '❌' },
  { label: 'Sin supervisión real', icon: '👻' },
  { label: 'Reclamos constantes de propietarios', icon: '📢' },
]

export function Problema() {
  return (
    <SectionWrapper id="problema" bg="#ffffff">
      <div className="max-w-2xl mx-auto text-center mb-12">
        <h2
          className="text-3xl md:text-5xl font-bold leading-tight"
          style={{ color: '#0A2540', fontFamily: 'var(--font-dm-serif)' }}
        >
          ¿Problemas con el servicio de limpieza actual?
        </h2>
        <p className="mt-5 text-gray-500 text-lg max-w-xl mx-auto leading-relaxed">
          Si administrás un edificio o empresa, quizás te resultan familiares estas situaciones:
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
        {painPoints.map((point) => (
          <div
            key={point.label}
            className="flex flex-col items-center text-center p-6 rounded-2xl gap-3"
            style={{ backgroundColor: '#FEF2F2', border: '1px solid #FEE2E2' }}
          >
            <span className="text-3xl" aria-hidden="true">{point.icon}</span>
            <p className="text-sm font-semibold leading-snug" style={{ color: '#991B1B' }}>
              {point.label}
            </p>
          </div>
        ))}
      </div>

      {/* Punch line */}
      <div className="text-center">
        <div className="inline-block">
          <div className="w-16 h-0.5 mx-auto mb-5" style={{ backgroundColor: '#E87B2A' }} />
          <p
            className="text-2xl md:text-4xl font-bold italic"
            style={{ color: '#0A2540', fontFamily: 'var(--font-dm-serif)' }}
          >
            Es momento de cambiarlo.
          </p>
          <div className="w-16 h-0.5 mx-auto mt-5" style={{ backgroundColor: '#E87B2A' }} />
        </div>
      </div>
    </SectionWrapper>
  )
}
