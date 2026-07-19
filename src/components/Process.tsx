import { motion } from 'framer-motion'
import { process } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

const stepIcons = ['💬', '🎨', '🚀', '🤝']

export function Process() {
  return (
    <section id="proceso" className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Proceso"
            title="De la idea al lanzamiento en pocos días."
            text="Entrega estimada: 5 a 10 días según alcance. Te acompañamos en cada paso."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative mt-10 grid gap-6 sm:mt-14 md:grid-cols-3"
        >
          <div className="absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-violet-haze/30 via-white/20 to-violet-haze/30 md:block" />

          {process.map((step, index) => (
            <motion.article
              key={step.title}
              variants={slideUp}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-[1.35rem] bg-[#0b0b12] p-6 shadow-sm shadow-black/5 ring-1 ring-white/[0.07] transition-all duration-300 hover:ring-violet-haze/40 hover:shadow-violet-pulse/5"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-violet-deep to-violet-haze/20 text-2xl shadow-glow ring-1 ring-violet-haze/30">
                  {stepIcons[index] || '📌'}
                </span>
                <span className="text-xs font-bold tracking-widest text-violet-haze/60">
                  PASO {String(index + 1).padStart(2, '0')}
                </span>
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-white/64">{step.text}</p>

              <div className="absolute bottom-4 right-4 flex items-center gap-1">
                {process.map((_, i) => (
                  <span
                    key={i}
                    className={`h-1.5 w-1.5 rounded-full transition-colors ${
                      i <= index ? 'bg-violet-haze' : 'bg-white/10'
                    }`}
                  />
                ))}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}