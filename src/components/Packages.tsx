import { motion } from 'framer-motion'
import { packages, whatsappLink } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Packages() {
  return (
    <section id="paquetes" className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-violet-deep/14 to-transparent" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Paquetes"
            title="Opciones claras según la etapa de tu negocio."
            text="No vendemos plantillas sueltas. Armamos una solución acorde al objetivo, el contenido y el nivel de presencia que necesitás."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid gap-5 lg:grid-cols-3"
        >
          {packages.map((pack) => (
            <motion.article
              key={pack.name}
              variants={slideUp}
              whileHover={{ y: -6 }}
              className={`relative overflow-hidden rounded-[1.6rem] p-6 shadow-2xl shadow-black/25 ring-1 sm:p-7 ${pack.highlighted
                ? 'bg-gradient-to-br from-violet-pulse/24 via-white/[0.08] to-black ring-violet-haze/35'
                : 'bg-white/[0.04] ring-white/[0.07]'
                }`}
            >
              {pack.highlighted ? (
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7] }}
                  transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-pulse/25 blur-3xl"
                />
              ) : null}
              <div className="relative flex items-center justify-between gap-4">
                <p className="rounded-full border border-white/[0.1] bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.18em] text-violet-haze">
                  {pack.badge}
                </p>
              </div>
              <h3 className="relative mt-7 text-2xl font-semibold text-white">{pack.name}</h3>
              <p className="relative mt-4 min-h-24 text-base leading-8 text-white/62">{pack.description}</p>
              <ul className="relative mt-6 grid gap-3">
                {pack.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/70">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-violet-haze shadow-glow" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <motion.a
                href={whatsappLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`relative mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${pack.highlighted
                  ? 'bg-white text-ink hover:bg-violet-haze'
                  : 'border border-white/[0.1] bg-white/[0.045] text-white hover:border-violet-haze/50 hover:bg-white/[0.08]'
                  }`}
              >
                {pack.cta}
              </motion.a>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
