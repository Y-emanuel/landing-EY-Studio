import { motion } from 'framer-motion'
import { reasons, whatsappLink } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionLabel } from './ui'

export function WhyUs() {
  return (
    <section className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-deep/12 to-transparent" />
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <SectionLabel>Por qué EY Studio</SectionLabel>
          <h2 className="mt-5 font-display text-3xl font-medium leading-tight tracking-[-0.015em] text-white sm:text-5xl">
            Diseño que <span className="text-violet-haze">vende</span>, no solo que se ve bien.
          </h2>
          <p className="mt-6 text-lg leading-9 text-white/66">
            No hacemos páginas para verse lindas solamente. Diseñamos experiencias digitales pensadas para generar confianza, explicar mejor tu oferta y abrir una conversación con la persona correcta.
          </p>
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ x: 4 }}
            className="mt-8 inline-flex items-center gap-2 text-violet-haze hover:underline"
          >
            ¿Listo para dar el salto? →
          </motion.a>
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="grid gap-3 sm:grid-cols-2"
        >
          {reasons.map((reason, index) => (
            <motion.div
              key={reason}
              variants={slideUp}
              whileHover={{ y: -2, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-[1.25rem] bg-white/[0.045] p-6 shadow-sm shadow-black/5 ring-1 ring-white/[0.065] transition-all duration-300 hover:ring-violet-haze/40 hover:shadow-violet-pulse/5"
            >
              <div className="absolute right-4 top-4 text-sm font-bold text-white/10">
                {String(index + 1).padStart(2, '0')}
              </div>
              <div className="mb-6 flex items-center gap-3">
                <div className="h-2 w-2 rounded-full bg-violet-haze shadow-glow" />
                <span className="text-xs font-medium uppercase tracking-wider text-violet-haze/60">Beneficio</span>
              </div>
              <p className="text-lg font-semibold text-white">{reason}</p>
              <div className="mt-4 h-0.5 w-8 rounded-full bg-violet-haze/30 transition-all duration-300 group-hover:w-16 group-hover:bg-violet-haze/70" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}