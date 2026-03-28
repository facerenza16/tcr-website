# TCR Website — Guía de proyecto para Claude

## Descripción del proyecto

Sitio web para **Limpieza y Mantenimiento TCR**, empresa de limpieza profesional con base en Montevideo, Uruguay. El propietario es **Tristan Ramirez**.

El objetivo principal del sitio es convertir visitas en consultas por WhatsApp — especialmente administradores de edificios y empresas. No es un sitio "de muestra": es una herramienta de ventas.

## Contacto del cliente

| Canal | Dato |
|-------|------|
| Nombre | Tristan Ramirez |
| WhatsApp / Teléfono | 095416620 |
| Email | tcrserviciointegral@gmail.com |
| Ubicación | Montevideo, Uruguay |

## Stack tecnológico

- **Framework:** Next.js (App Router)
- **Estilos:** Tailwind CSS
- **Deploy:** Vercel (integración nativa con Next.js)
- **Repositorio:** GitHub
- **Dominio:** personalizado, apuntando a Vercel

## Marca e identidad visual

### Logo
Archivo: `brand-assets/649103738_122101492449162874_3745004354527126294_n.jpg`

Logo ilustrativo estilo badge/escudo con balde, spray y escurridor, edificios en el fondo. Texto: "Limpieza y Mantenimiento TCR". Estilo vibrante y profesional.

### Paleta de colores

Extraída del PDF de propuesta comercial y el logo. Usar la paleta del PDF como base principal (más formal/corporativa):

| Nombre | Hex aproximado | Uso |
|--------|---------------|-----|
| Teal principal | `#1A7A7A` | Fondos de sección, headings principales |
| Teal oscuro | `#1A5F6A` | Fondos hero, footers |
| Dorado / Acento | `#C9A870` | Underlines, checkmarks, detalles decorativos |
| Verde logo | `#5BAD2A` | Acentos secundarios, íconos, badges |
| Blanco | `#FFFFFF` | Texto sobre fondos oscuros, fondos de sección |
| Gris claro | `#F5F5F5` | Fondos alternos de sección |

### Tipografía
Sin definir aún — usar sans-serif moderna y limpia (ej. Inter o Poppins via Google Fonts). Prioridad: legibilidad en mobile.

### Tono de comunicación
- Español rioplatense/uruguayo (vos, presupuesto, edificio, etc.)
- Formal pero cercano
- Enfocado en transmitir confianza, seriedad y profesionalismo
- Frases clave a repetir: "socio estratégico", "supervisión semanal", "empresa formal"

## Misión y visión

**Misión:** Brindar servicios eficientes y de alta calidad que garanticen espacios saludables y agradables para los clientes.

**Visión:** Ser la empresa líder del sector, reconocida por la excelencia y la satisfacción del cliente, enfocándonos en la profesionalidad, sostenibilidad y bienestar de las personas actuando como socio estratégico para nuestros clientes.

## Estructura del sitio

1. **Hero / Inicio** — impacto inmediato, CTA a WhatsApp
2. **Servicios** — listado claro de lo que ofrecen
3. **Por qué elegirnos** — diferenciadores clave (BPS, BSE, supervisión, etc.)
4. **Cómo trabajamos** — proceso paso a paso (transmite profesionalismo)
5. **Confianza / Respaldo** — normativa, seguridad laboral, Ley 18.251
6. **Promoción** — 15% descuento primeros 3 meses
7. **Contacto** — WhatsApp, teléfono, email

## Servicios ofrecidos

- Limpieza de pisos, vereda, baños, vidrios interiores, gimnasio y espacios comunes
- Limpieza de garajes
- Gestión de residuos en espacios comunes
- Limpieza y control de barbacoas/SUM (con reposición de insumos)
- Supervisión semanal del servicio por Gerencia
- Reporte mensual de asistencia (entrada/salida diario)
- Servicios de mantenimiento (a demanda, cotización por separado)

## Diferenciadores clave

- Personal uniformado con calzados de seguridad
- Inscriptos en BPS, asegurados por BSE
- Supervisión semanal por Gerencia
- Respuesta a urgencias en menos de 24 hs
- Reporte mensual de asistencia
- Detectan y reportan necesidades de mantenimiento antes de que se conviertan en reclamos
- Planes adaptados a cada cliente
- Cumplen Ley 18.251 (Tercerizaciones Laborales)

## Oferta comercial destacada

**15% de descuento durante los primeros 3 meses** para nuevos clientes. Incluir como CTA destacado en el sitio.

## Principios de diseño y desarrollo

- **Mobile-first** — la mayoría del tráfico vendrá desde Instagram/Facebook en mobile
- **Botón de WhatsApp fijo** — visible en todo momento (esquina inferior derecha)
- **Carga rápida** — SSG/static export, imágenes optimizadas
- **Simple y directo** — no sobrecargar con texto, priorizar conversión
- **CTA principal siempre visible** — "Solicitar presupuesto por WhatsApp"

## Archivos de referencia

- `TCR base.md` — conversación con ChatGPT con ideas base (usar como referencia, no como límite)
- `brand-assets/Servicio de limpieza y mantenimiento profesional..pdf` — propuesta comercial oficial (fuente de verdad para servicios, diferenciadores y paleta)
- `brand-assets/649103738_122101492449162874_3745004354527126294_n.jpg` — logo oficial

## Deploy

1. Repositorio en GitHub
2. Conectar a Vercel (deploy automático en cada push a `main`)
3. Configurar dominio personalizado apuntando a Vercel
