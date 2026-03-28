import { Hero } from '@/components/sections/Hero'
import { Problema } from '@/components/sections/Problema'
import { Servicios } from '@/components/sections/Servicios'
import { PorQueTCR } from '@/components/sections/PorQueTCR'
import { ComoTrabajamos } from '@/components/sections/ComoTrabajamos'
import { Confianza } from '@/components/sections/Confianza'
import { Constitucion } from '@/components/sections/Constitucion'
import { Promocion } from '@/components/sections/Promocion'
import { CTAFinal } from '@/components/sections/CTAFinal'

export default function Home() {
  return (
    <main>
      <Hero />
      <Problema />
      <Servicios />
      <PorQueTCR />
      <ComoTrabajamos />
      <Confianza />
      <Constitucion />
      <Promocion />
      <CTAFinal />
    </main>
  )
}
