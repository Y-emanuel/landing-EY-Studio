import { motion } from 'framer-motion'
import { reasons } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionLabel } from './ui'

export function WhyUs() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-deep/12 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <SectionLabel>Por qué EY Studio</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">Elegancia visual con foco comercial.</h2>
          <p className="mt-6 text-lg leading-9 text-white/66">
            No hacemos páginas para verse lindas solamente. Diseñamos experiencias digitales pensadas para generar confianza, explicar mejor tu oferta y abrir una conversación con la persona correcta.
          </p>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-3 sm:grid-cols-2"
        >
          {reasons.map((reason) => (
            <motion.div
              key={reason}
              variants={slideUp}
              whileHover={{ y: -3 }}
              className="rounded-[1.25rem] bg-white/[0.045] p-6 shadow-xl shadow-black/15 ring-1 ring-white/[0.065]"
            >
              <div className="mb-6 h-2 w-2 rounded-full bg-violet-haze shadow-glow" />
              <p className="text-lg font-semibold text-white">{reason}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
