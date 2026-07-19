import { motion } from 'framer-motion'
import { packages, whatsappLink } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Packages() {
  return (
    <section id="paquetes" className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
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
              whileHover={{ y: -3 }}
              className={`relative overflow-hidden rounded-[1.6rem] p-6 shadow-sm shadow-black/5 ring-1 sm:p-7 flex flex-col h-full ${
                pack.highlighted
                  ? 'bg-gradient-to-br from-violet-pulse/20 via-white/[0.06] to-black ring-violet-haze/20'
                  : 'bg-white/[0.04] ring-white/[0.07]'
              }`}
            >
              {pack.highlighted && (
                <motion.div
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
                  className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-pulse/20 blur-3xl"
                />
              )}

              <div className="relative flex flex-col flex-1">
                <div className="flex items-center justify-between">
                  <span className="rounded-full border border-white/[0.1] bg-black/25 px-3 py-1 text-xs uppercase tracking-[0.18em] text-violet-haze">
                    {pack.badge}
                  </span>
                  {pack.price && (
                    <span className="text-sm font-semibold text-white/80">{pack.price}</span>
                  )}
                </div>

                <h3 className="mt-5 font-display text-2xl font-medium text-white">{pack.name}</h3>

                {pack.price && (
                  <p className="mt-1 text-3xl font-bold text-violet-haze">{pack.price}</p>
                )}

                <p className="mt-4 min-h-[6rem] text-base leading-7 text-white/62 flex-1">
                  {pack.description}
                </p>

                <ul className="mt-6 grid gap-2.5">
                  {pack.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-sm leading-6 text-white/75">
                      <svg viewBox="0 0 20 20" fill="none" className="mt-0.5 h-5 w-5 shrink-0 text-violet-haze">
                        <path d="M4 10.5l3.5 3.5L16 6" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botón CTA unificado y alineado al fondo */}
                <motion.a
                  href={whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ y: -1, scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                  className={`relative mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 text-sm font-semibold transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${
                    pack.highlighted
                      ? 'bg-gradient-to-r from-violet-haze to-violet-pulse text-white shadow-sm shadow-violet-haze/10 hover:shadow-violet-haze/20'
                      : 'border border-white/[0.1] bg-white/[0.045] text-white hover:border-violet-haze/50 hover:bg-white/[0.08]'
                  }`}
                >
                  {pack.cta}
                </motion.a>

                {pack.highlighted && (
                  <p className="mt-3 text-center text-xs text-white/40">
                    🔒 Sin permanencia · Precio fijo
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}