import { motion } from 'framer-motion'
import { deliverables } from '../content/data'
import { defaultViewport, scaleIn, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Deliverables() {
  return (
    <section className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Qué incluye"
            title="Todo lo que necesitas para vender mejor."
            text="Cada proyecto se arma con lo necesario para publicar una presencia profesional, rápida y orientada a recibir consultas."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {deliverables.map((item, index) => (
            <motion.div
              key={item}
              variants={scaleIn}
              whileHover={{ y: -3, scale: 1.01 }}
              className="group relative overflow-hidden rounded-[1.35rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-violet-deep/12 p-6 shadow-sm shadow-black/5 transition-all hover:border-violet-haze/30 hover:shadow-violet-pulse/5"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-pulse/12 blur-2xl transition-opacity group-hover:opacity-50" />
              <span className="relative inline-flex h-5 w-5 items-center justify-center rounded-full bg-violet-haze/20 text-xs font-bold text-violet-haze">
                {String(index + 1).padStart(2, '0')}
              </span>
              <p className="relative mt-4 text-lg font-semibold text-white group-hover:text-violet-haze transition-colors">
                {item}
              </p>
              <div className="relative mt-3 h-0.5 w-8 rounded-full bg-violet-haze/30 transition-all group-hover:w-16 group-hover:bg-violet-haze/70" />
            </motion.div>
          ))}
        </motion.div>

        <Reveal delay={0.2} className="mt-12 text-center">
          <span className="inline-block rounded-full border border-white/[0.06] bg-white/[0.04] px-6 py-3 text-sm text-white/50 shadow-sm shadow-black/5">
            ✅ Entregamos en <span className="font-semibold text-violet-haze">5–10 días</span> · Sin costos ocultos
          </span>
        </Reveal>
      </div>
    </section>
  )
}