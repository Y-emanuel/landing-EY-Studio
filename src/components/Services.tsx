import { motion } from 'framer-motion'
import { services, whatsappLink } from '../content/data'
import { slideUp, staggerContainer } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'
import { TiltCard } from './motion/TiltCard'

const focusColors: Record<string, string> = {
  Captación: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Imagen: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Venta: 'bg-amber-500/20 text-amber-300 border-amber-500/30',
  Sistema: 'bg-purple-500/20 text-purple-300 border-purple-500/30',
  Escala: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
  Mejora: 'bg-cyan-500/20 text-cyan-300 border-cyan-500/30',
  Conversión: 'bg-green-500/20 text-green-300 border-green-500/30',
  Credibilidad: 'bg-indigo-500/20 text-indigo-300 border-indigo-500/30',
  Gestión: 'bg-fuchsia-500/20 text-fuchsia-300 border-fuchsia-500/30',
  Escalabilidad: 'bg-orange-500/20 text-orange-300 border-orange-500/30',
  Visibilidad: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
}

const highlightMap: Record<string, string> = {
  'Landing Pages': 'alto impacto',
  'Sitios Web Profesionales': 'sólida',
  'Tiendas Online': 'sencilla',
  'Aplicaciones Web': 'a medida',
  'Automatizaciones con IA': 'automáticos',
  'Optimización SEO': 'mejoras',
}

export function Services() {
  return (
    <section id="servicios" className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="absolute right-0 top-12 h-80 w-80 rounded-full bg-violet-deep/28 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Servicios"
            title="Todo lo que tu negocio necesita para crecer en internet."
            text="Soluciones digitales pensadas para cada etapa de tu negocio, desde la presencia inicial hasta la automatización avanzada."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={staggerContainer}
          className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((item) => {
            const focusClass = focusColors[item.focus] || 'bg-white/10 text-white/60 border-white/10'
            const highlight = highlightMap[item.title] || ''
            const parts = highlight ? item.text.split(highlight) : [item.text]
            
            return (
              <TiltCard key={item.title} intensity={6} className="h-full">
                <motion.article
                  variants={slideUp}
                  whileHover={{ y: -3 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                  className="group relative h-full overflow-hidden rounded-[1.8rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.06] via-[#100d18] to-black/45 p-6 shadow-sm shadow-black/5 transition-all duration-300 hover:border-violet-haze/40 hover:shadow-violet-pulse/5 sm:p-7"
                >
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-haze/55 to-transparent opacity-60 transition-opacity group-hover:opacity-100" />
                  <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-violet-pulse/12 blur-2xl transition-colors duration-300 group-hover:bg-violet-pulse/25" />

                  <div className="relative flex items-start justify-between gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-deep/50 to-violet-haze/20 text-lg font-bold text-violet-haze shadow-glow ring-1 ring-violet-haze/30 transition-all duration-300 group-hover:scale-110 group-hover:ring-violet-haze/60">
                      {item.mark}
                    </div>
                    <span className={`rounded-full border px-3 py-1 text-xs font-medium uppercase tracking-wider ${focusClass}`}>
                      {item.focus}
                    </span>
                  </div>

                  <h3 className="relative mt-7 text-xl font-semibold text-white">{item.title}</h3>

                  <p className="relative mt-4 text-base leading-7 text-white/70">
                    {highlight ? (
                      <>
                        {parts[0]}
                        <strong className="text-violet-haze/90 font-medium">{highlight}</strong>
                        {parts[1] || ''}
                      </>
                    ) : (
                      item.text
                    )}
                  </p>

                  <motion.a
                    href={whatsappLink}
                    target="_blank"
                    rel="noreferrer"
                    whileHover={{ x: 4 }}
                    className="relative mt-6 inline-flex items-center gap-1 text-sm font-medium text-violet-haze/80 transition-colors hover:text-violet-haze"
                  >
                    Consultar
                    <svg viewBox="0 0 20 20" fill="none" className="h-4 w-4 transition-transform group-hover:translate-x-1">
                      <path d="M4 10h12M12 6l4 4-4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.a>

                  <div className="relative mt-4 h-0.5 w-12 rounded-full bg-violet-haze/40 transition-all duration-300 group-hover:w-20 group-hover:bg-violet-haze/70" />
                </motion.article>
              </TiltCard>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}