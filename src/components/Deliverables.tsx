import { motion } from 'framer-motion'
import { deliverables } from '../content/data'
import { defaultViewport, scaleIn, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Deliverables() {
  return (
    <section className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Qué incluye"
            title="Una entrega clara para salir a vender mejor."
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
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.08] via-white/[0.035] to-violet-deep/12 p-6 shadow-xl shadow-black/20"
            >
              <div className="absolute right-0 top-0 h-24 w-24 rounded-full bg-violet-pulse/12 blur-2xl" />
              <span className="relative text-sm font-semibold text-violet-haze">{String(index + 1).padStart(2, '0')}</span>
              <p className="relative mt-5 text-lg font-semibold text-white">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
