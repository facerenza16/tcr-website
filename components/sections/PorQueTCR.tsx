import Image from 'next/image'

const differentiators = [
  {
    title: 'Empresa formal y responsable',
    description: 'Inscriptos en BPS, asegurados por BSE. Cumplimos toda la normativa vigente.',
  },
  {
    title: 'Personal uniformado y capacitado',
    description: 'Presentación profesional en cada visita. Personal entrenado para cada tarea.',
  },
  {
    title: 'Supervisión semanal por Gerencia',
    description: 'No delegamos el control. Un supervisor visita el edificio cada semana.',
  },
  {
    title: 'Respuesta a urgencias en < 24 hs',
    description: 'Siempre disponibles cuando nos necesitás. Resolvemos rápido.',
  },
  {
    title: 'Reporte mensual de asistencia',
    description: 'Transparencia total con la administración. Registro diario de entrada y salida.',
  },
  {
    title: 'Detectamos problemas antes',
    description: 'Identificamos necesidades de mantenimiento antes de que se vuelvan reclamos.',
  },
]

export function PorQueTCR() {
  return (
    <section id="por-que-tcr" style={{ backgroundColor: '#0A2540' }}>
      <div className="max-w-6xl mx-auto px-4 py-20 md:py-28">
        {/* Header */}
        <div className="text-center mb-14">
          <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#E87B2A' }}>
            Nuestros diferenciales
          </span>
          <h2
            className="mt-3 text-3xl md:text-5xl font-bold text-white"
            style={{ fontFamily: 'var(--font-dm-serif)' }}
          >
            ¿Por qué elegir TCR?
          </h2>
        </div>

        {/* Two column: differentiators + image */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left: list */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {differentiators.map((item, i) => (
              <div
                key={item.title}
                className="flex gap-4 p-5 rounded-2xl"
                style={{ backgroundColor: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.08)' }}
              >
                <span
                  className="flex items-center justify-center w-7 h-7 rounded-full shrink-0 mt-0.5 font-bold text-xs"
                  style={{ backgroundColor: '#E87B2A', color: 'white' }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-bold text-white text-sm">{item.title}</h3>
                  <p className="text-white/60 text-xs mt-1 leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right: image */}
          <div className="relative h-80 lg:h-full min-h-[420px] rounded-3xl overflow-hidden">
            <Image
              src="/uniformada2.jpeg"
              alt="Personal uniformado de Limpieza y Mantenimiento TCR"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div
              className="absolute inset-0 rounded-3xl"
              style={{ background: 'linear-gradient(to top, rgba(10,37,64,0.6) 0%, transparent 60%)' }}
            />
            <div className="absolute bottom-6 left-6 right-6">
              <div
                className="inline-block px-4 py-2 rounded-xl text-sm font-bold text-white"
                style={{ backgroundColor: 'rgba(232,123,42,0.9)', backdropFilter: 'blur(8px)' }}
              >
                Personal uniformado en cada visita
              </div>
            </div>
          </div>
        </div>

        {/* Callout */}
        <div className="text-center pt-10 border-t" style={{ borderColor: 'rgba(255,255,255,0.08)' }}>
          <p
            className="text-2xl md:text-4xl font-bold italic leading-snug max-w-2xl mx-auto text-white"
            style={{ fontFamily: 'var(--font-dm-serif)' }}
          >
            No somos un proveedor más.
            <br />
            <span style={{ color: '#E87B2A' }}>Somos su socio estratégico.</span>
          </p>
        </div>
      </div>
    </section>
  )
}
