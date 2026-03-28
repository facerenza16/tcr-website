import type { Metadata } from 'next'
import { Outfit, DM_Serif_Display } from 'next/font/google'
import './globals.css'
import { WhatsAppFloat } from '@/components/ui/WhatsAppFloat'
import { COMPANY_NAME } from '@/lib/constants'

const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  display: 'swap',
})

const dmSerif = DM_Serif_Display({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-dm-serif',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Limpieza y Mantenimiento TCR | Montevideo, Uruguay',
  description:
    'Servicio profesional de limpieza de edificios y empresas en Montevideo. Personal uniformado, supervisión semanal, empresa formal con BPS y BSE. Solicitá tu presupuesto sin compromiso.',
  keywords: [
    'limpieza de edificios montevideo',
    'limpieza profesional uruguay',
    'mantenimiento edificios',
    'empresa de limpieza montevideo',
    'TCR limpieza',
  ],
  authors: [{ name: COMPANY_NAME }],
  openGraph: {
    title: 'Limpieza y Mantenimiento TCR — Servicio profesional en Montevideo',
    description:
      'Limpieza de edificios y empresas con supervisión semanal, personal uniformado y empresa formal. 15% de descuento para nuevos clientes.',
    type: 'website',
    locale: 'es_UY',
    siteName: COMPANY_NAME,
  },
  robots: { index: true, follow: true },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={`${outfit.variable} ${dmSerif.variable}`}>
      <body>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  )
}
