import { motion } from 'framer-motion'
import { comparison } from '../content/data'
import { defaultViewport, slideUp } from '../lib/motion'
import { Reveal } from './motion/Reveal'
import { SectionLabel } from './ui'

export function Comparison() {
  return (
    <section className="relative border-b border-white/[0.08] bg-ink px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:items-start">
        <Reveal>
          <SectionLabel>Antes vs después</SectionLabel>
          <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.03em] text-white sm:text-5xl">
            Tu web no tiene que decorar. Tiene que vender confianza.
          </h2>
          <p className="mt-6 text-lg leading-9 text-white/66">
            La diferencia entre “tengo una página” y “tengo una herramienta comercial” está en el mensaje, la estructura y el camino hacia el contacto.
          </p>
        </Reveal>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={defaultViewport}
          variants={slideUp}
          transition={{ delay: 0.1 }}
          className="overflow-hidden rounded-[1.5rem] border border-white/[0.08] bg-white/[0.04] shadow-2xl shadow-black/25"
        >
          {comparison.map((row, index) => (
            <div
              key={row.join('-')}
              className={`grid gap-0 sm:grid-cols-2 ${index !== comparison.length - 1 ? 'border-b border-white/[0.07]' : ''}`}
            >
              <div className={`p-5 ${index === 0 ? 'text-sm font-semibold uppercase tracking-[0.18em] text-white' : 'text-base leading-7 text-white/50'}`}>
                {row[0]}
              </div>
              <div className={`border-t border-white/[0.07] p-5 sm:border-l sm:border-t-0 ${index === 0 ? 'text-sm font-semibold uppercase tracking-[0.18em] text-violet-haze' : 'text-base font-medium leading-7 text-white/78'}`}>
                {row[1]}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
