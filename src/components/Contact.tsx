import { motion } from 'framer-motion'
import { contactCards } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { CTAButtons, SectionLabel } from './ui'

const channelIcons: Record<string, string> = {
  WhatsApp: '💬',
  Instagram: '📸',
  Email: '✉️',
}

export function Contact() {
  return (
    <section id="contacto" className="relative bg-ink px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <motion.div
        animate={{ opacity: [0.7, 1, 0.7] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute inset-x-5 top-10 mx-auto h-72 max-w-5xl rounded-full bg-violet-pulse/16 blur-3xl"
      />
      <Reveal
        as="div"
        className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-gradient-to-br from-white/[0.095] via-violet-deep/24 to-black p-6 shadow-sm shadow-violet-pulse/5 ring-1 ring-white/[0.08] sm:p-10 lg:p-12"
      >
        <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-violet-pulse/18 blur-3xl" />
        <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div className="relative">
            <SectionLabel>Contacto</SectionLabel>
            <h2 className="mt-5 max-w-4xl font-display text-3xl font-medium leading-tight tracking-[-0.015em] text-white sm:text-6xl">
              ¿Listo para empezar a recibir <span className="text-violet-haze">más clientes</span>?
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-9 text-white/70">
              Contanos qué necesitás y te respondemos con una propuesta clara, sin vueltas y sin compromiso.
            </p>

            <div className="mt-4 flex flex-wrap items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-3 py-1 text-sm text-emerald-400">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Respuesta en &lt; 24h
              </span>
              <span className="inline-flex items-center gap-2 rounded-full bg-violet-pulse/15 px-3 py-1 text-sm text-violet-haze">
                🔒 Sin compromiso
              </span>
            </div>

            <div className="mt-8"><CTAButtons primaryLabel="Quiero mi landing →" /></div>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={defaultViewport}
            variants={staggerContainer}
            className="relative rounded-[1.5rem] bg-black/34 p-5 shadow-sm shadow-black/5 ring-1 ring-white/[0.08] backdrop-blur"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-violet-haze">Canales directos</p>
            <div className="mt-6 grid gap-3 text-base text-white/72">
              {contactCards.map((card) => (
                <motion.a
                  key={card.title}
                  variants={slideUp}
                  whileHover={{ x: 4, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className="group flex items-center gap-4 rounded-2xl bg-white/[0.045] p-4 ring-1 ring-white/[0.075] transition-all hover:bg-white/[0.07] hover:ring-violet-haze/40"
                  href={card.href}
                  target={card.title === 'Email' ? undefined : '_blank'}
                  rel={card.title === 'Email' ? undefined : 'noreferrer'}
                >
                  <span className="text-2xl">{channelIcons[card.title] || '📌'}</span>
                  <div className="flex-1">
                    <span className="block text-xs uppercase tracking-[0.22em] text-violet-haze">{card.title}</span>
                    <span className="mt-1 block font-semibold text-white">{card.value}</span>
                    <span className="mt-0.5 block text-sm text-white/48">{card.text}</span>
                  </div>
                  <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-white/20 transition-colors group-hover:text-violet-haze">
                    <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </motion.a>
              ))}
            </div>

            <div className="mt-4 rounded-xl border border-white/[0.05] bg-white/[0.04] p-3 text-center text-xs text-white/40">
              📍 Buenos Aires, Argentina · Atendemos para toda LATAM
            </div>
          </motion.div>
        </div>
      </Reveal>
    </section>
  )
}