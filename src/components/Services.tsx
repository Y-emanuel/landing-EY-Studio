import { motion } from 'framer-motion'
import { services } from '../content/data'
import { slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Services() {
  return (
    <section id="servicios" className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-violet-deep/28 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader label="Servicios" title="Todo lo que tu negocio necesita para crecer en internet." />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={staggerContainer}
          className="mt-10 grid gap-4 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((item) => (
            <motion.article
              key={item.title}
              variants={slideUp}
              whileHover={{ y: -6 }}
              transition={{ type: 'spring', stiffness: 300, damping: 22 }}
              className="group relative overflow-hidden rounded-[1.5rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.08] via-[#100d18] to-black/45 p-6 shadow-2xl shadow-black/25 hover:border-violet-haze/32 hover:shadow-violet-pulse/10 sm:p-7"
            >
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-haze/55 to-transparent" />
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-pulse/14 blur-2xl transition-colors duration-300 group-hover:bg-violet-pulse/22" />
              <div className="relative flex items-center justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-deep/40 text-sm font-semibold text-violet-haze shadow-glow ring-1 ring-violet-haze/20">
                  {item.mark}
                </div>
                <span className="rounded-full border border-white/[0.08] bg-black/25 px-3 py-1 text-xs text-white/45">
                  {item.focus}
                </span>
              </div>
              <h3 className="relative mt-8 text-xl font-semibold text-white">{item.title}</h3>
              <p className="relative mt-4 text-base leading-8 text-white/64">{item.text}</p>
              <div className="relative mt-7 h-1 w-16 origin-left rounded-full bg-violet-haze/70 shadow-glow transition-transform duration-300 group-hover:scale-x-150" />
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
