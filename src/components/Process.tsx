import { motion } from 'framer-motion'
import { process } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Process() {
  return (
    <section id="proceso" className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader label="Proceso" title="De la idea al lanzamiento en pocos días." text="Entrega estimada: 5 a 10 días según alcance." />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="relative mt-10 grid gap-5 sm:mt-14 md:grid-cols-4"
        >
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-to-r from-violet-haze/60 via-white/16 to-violet-haze/20 md:block" />
          {process.map((step, index) => (
            <motion.article
              key={step.title}
              variants={slideUp}
              whileHover={{ y: -4 }}
              className="relative rounded-[1.35rem] bg-[#0b0b12] p-6 shadow-2xl shadow-black/20 ring-1 ring-white/[0.07]"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-deep text-sm font-semibold text-white shadow-glow ring-1 ring-violet-haze/28">
                {String(index + 1).padStart(2, '0')}
              </span>
              <h3 className="mt-8 text-xl font-semibold text-white">{step.title}</h3>
              <p className="mt-4 text-base leading-8 text-white/64">{step.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
