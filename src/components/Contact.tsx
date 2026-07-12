import { motion } from 'framer-motion'
import { contactCards } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { CTAButtons, SectionLabel } from './ui'

export function Contact() {
  return (
    <section id="contacto" className="relative bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-5 top-10 mx-auto h-72 max-w-5xl rounded-full bg-violet-pulse/16 blur-3xl"
      />
      <Reveal
        as="div"
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.095] via-violet-deep/24 to-black p-6 shadow-2xl shadow-violet-pulse/10 ring-1 ring-white/[0.08] sm:p-10 lg:p-12"
      >
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-pulse/18 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="relative">
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-5 max-w-4xl text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-6xl">¿Listo para que tu negocio se vea más profesional?</h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">Contanos qué necesitás y te respondemos con una propuesta clara, sin vueltas y sin compromiso.</p>
            <div className="mt-9"><CTAButtons /></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="relative rounded-[1.5rem] bg-black/34 p-5 shadow-2xl shadow-black/25 ring-1 ring-white/[0.08] backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-violet-haze">Canales directos</p>
            <div className="mt-6 grid gap-3 text-base text-white/72">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  variants={slideUp}
                  whileHover={{ x: 3 }}
                  className="group rounded-2xl bg-white/[0.045] p-4 ring-1 ring-white/[0.075] transition-colors hover:bg-white/[0.07] hover:text-white hover:ring-violet-haze/35"
                  href={card.href}
                  target={card.title === 'Email' ? undefined : '_blank'}
                  rel={card.title === 'Email' ? undefined : 'noreferrer'}
                >
                  <span className="block text-xs uppercase tracking-[0.22em] text-violet-haze">{card.title}</span>
                  <span className="mt-2 block break-words font-semibold">{card.value}</span>
                  <span className="mt-1 block text-sm text-white/48">{card.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}
