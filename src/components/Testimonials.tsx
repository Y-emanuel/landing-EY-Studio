import { motion } from 'framer-motion'
import { testimonials } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Testimonials() {
  return (
    <section className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-deep/12 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader label="Testimonios" title="Lo que dicen los clientes que ya trabajaron con nosotros." />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2"
        >
          {testimonials.map((item) => (
            <motion.article
              key={item.name}
              variants={slideUp}
              whileHover={{ y: -4 }}
              className="relative overflow-hidden rounded-[1.5rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.07] via-[#100d18] to-black/45 p-7 shadow-2xl shadow-black/25 sm:p-8"
            >
              <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-violet-pulse/14 blur-2xl" />
              <span className="relative text-5xl font-semibold leading-none text-violet-haze/40">“</span>
              <p className="relative mt-2 text-lg leading-8 text-white/82 sm:text-xl sm:leading-9">
                {item.quote}
              </p>
              <div className="relative mt-7 flex items-center gap-3">
                <div className="h-1 w-10 rounded-full bg-violet-haze shadow-glow" />
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-white/70">{item.name}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
