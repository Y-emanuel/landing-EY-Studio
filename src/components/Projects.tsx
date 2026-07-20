import { motion } from 'framer-motion'
import { projects, whatsappLink } from '../content/data'
import { defaultViewport, slideUp, staggerContainer } from '../lib/motion'
import { NicheMock } from './NicheMock'
import { Reveal } from './motion/Reveal'
import { SectionHeader } from './ui'

export function Projects() {
  return (
    <section id="trabajos" className="relative border-b border-white/[0.08] bg-[#08080c] px-5 py-16 sm:px-8 sm:py-24 lg:px-10 lg:py-28">
      <div className="absolute left-0 top-1/3 h-80 w-80 rounded-full bg-violet-pulse/12 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal>
          <SectionHeader
            label="Casos y demos"
            title="Diseños que inspiran confianza y ventas."
            text="Ejemplos comerciales creados para mostrar posibles enfoques. Cada uno está pensado para un nicho específico."
          />
        </Reveal>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={staggerContainer}
          className="mt-10 grid gap-5 sm:mt-14 md:grid-cols-2"
        >
          {projects.map((project) => (
            <motion.article
              key={project.title}
              variants={slideUp}
              whileHover={{ y: -3, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 280, damping: 22 }}
              className="group overflow-hidden rounded-[1.6rem] border border-white/[0.065] bg-gradient-to-br from-white/[0.065] via-[#0e0b14] to-black/45 shadow-sm shadow-black/5 transition-all hover:border-violet-haze/40 hover:shadow-violet-pulse/5"
            >
              <div className="p-4">
                <NicheMock
                  kind={project.kind}
                  cta={project.cta}
                  chips={project.chips}
                  note={project.note}
                  image={project.image}
                />
              </div>
              <div className="p-6 pt-2 sm:p-7 sm:pt-3">
                <p className="text-xs uppercase tracking-[0.22em] text-violet-haze">{project.tag}</p>
                <h3 className="mt-4 text-2xl font-semibold text-white group-hover:text-violet-haze transition-colors">
                  {project.title}
                </h3>
                <p className="mt-4 max-w-xl text-base leading-8 text-white/64">{project.text}</p>

                <motion.a
                  href={project.link || whatsappLink}
                  target="_blank"
                  rel="noreferrer"
                  whileHover={{ x: 4 }}
                  className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-violet-haze/80 hover:text-violet-haze transition-colors"
                >
                  {project.cta || 'Ver proyecto completo →'}
                </motion.a>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}