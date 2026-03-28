import Image from 'next/image'
import { SectionWrapper } from '@/components/ui/SectionWrapper'

const services = [
  {
    name: 'Espacios comunes',
    description: 'Pisos, hall, escaleras y áreas compartidas del edificio.',
    icon: '🏢',
  },
  {
    name: 'Vidrios interiores',
    description: 'Limpieza profesional de vidrios y superficies de vidrio.',
    icon: '🪟',
  },
  {
    name: 'Garajes',
    description: 'Limpieza profunda de pisos y áreas de estacionamiento.',
    icon: '🅿️',
  },
  {
    name: 'Gestión de residuos',
    description: 'Control y retiro de residuos en espacios comunes.',
    icon: '♻️',
  },
  {
    name: 'Barbacoas y SUM',
    description: 'Limpieza y reposición de insumos en parrilleros y salones.',
    icon: '🔥',
  },
  {
    name: 'Mantenimiento a demanda',
    description: 'Servicios de mantenimiento bajo cotización y coordinación.',
    icon: '🔧',
  },
  {
    name: 'Reposición de insumos',
    description: 'Proveemos y reponemos materiales de limpieza necesarios.',
    icon: '📦',
  },
  {
    name: 'Baños y gimnasios',
    description: 'Desinfección completa de baños, vestuarios y gimnasios.',
    icon: '🧼',
  },
]

export function Servicios() {
  return (
    <section id="servicios" style={{ backgroundColor: '#F8FAFC' }}>
      {/* Image banner */}
      <div className="relative h-52 md:h-72 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1563453392212-326f5e854473?w=1600&q=80&auto=format&fit=crop"
          alt="Equipo de limpieza profesional en acción"
          fill
          className="object-cover object-center"
          sizes="100vw"
        />
        <div
          className="absolute inset-0 flex items-center justify-center"
          style={{ background: 'rgba(10,37,64,0.6)' }}
        >
          <div className="text-center px-4">
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87B2A' }}>
              Lo que hacemos
            </span>
            <h2
              className="mt-2 text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: 'var(--font-dm-serif)' }}
            >
              Nuestros servicios
            </h2>
          </div>
        </div>
      </div>

      <div className="py-16 md:py-24 px-4">
        <div className="max-w-5xl mx-auto">
          <p className="text-center text-gray-500 max-w-lg mx-auto mb-12 text-lg">
            Adaptamos la frecuencia y el alcance del servicio a las necesidades de cada cliente.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {services.map((service) => (
              <div
                key={service.name}
                className="bg-white rounded-2xl p-6 flex flex-col gap-3 hover:shadow-md transition-shadow duration-200 group"
                style={{ border: '1px solid #E2E8F0' }}
              >
                <span className="text-3xl" aria-hidden="true">{service.icon}</span>
                <div>
                  <h3
                    className="font-bold text-base leading-snug"
                    style={{ color: '#0A2540' }}
                  >
                    {service.name}
                  </h3>
                  <p className="text-gray-500 text-sm mt-1 leading-relaxed">{service.description}</p>
                </div>
                <div
                  className="w-8 h-0.5 mt-auto group-hover:w-full transition-all duration-300"
                  style={{ backgroundColor: '#1787C4' }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
