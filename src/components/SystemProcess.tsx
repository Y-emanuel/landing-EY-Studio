import { motion } from 'framer-motion'
import { SectionLabel } from './ui'
import { slideUp, staggerContainer } from '../lib/motion'

const steps = [
  {
    number: '01',
    title: 'Diagnóstico & Estrategia',
    description:
      'Analizamos la oferta de tu clínica, especialidades estrella (implantes, ortodoncia, estética) y el perfil del paciente ideal.',
  },
  {
    number: '02',
    title: 'Desarrollo de Infraestructura',
    description:
      'Diseñamos una Landing Page ultra-rápida enfocada en conversión, con arquitectura moderna y optimización para teléfonos móviles.',
  },
  {
    number: '03',
    title: 'Automatización & Captura',
    description:
      'Conectamos los flujos de respuesta instantánea por IA y secuencias de recordatorios para filtrar consultas frías y evitar ausentismos.',
  },
  {
    number: '04',
    title: 'Lanzamiento & Escalamiento',
    description:
      'Pondremos en marcha el sistema, integrando SEO Local y píxeles de medición para garantizar un flujo continuo de turnos calificados.',
  },
]

export function SystemProcess() {
  return (
    <section id="sistema" className="relative border-b border-white/5 bg-[#0B0E17] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Encabezado */}
        <div className="mb-16 text-center">
          <div className="mb-3">
            <SectionLabel>PASO A PASO</SectionLabel>
          </div>
          <h2 className="font-outfit text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Cómo implementamos tu sistema en 4 pasos
          </h2>
          <p className="mt-4 text-base text-brand-muted sm:text-lg">
            Un método estructurado para transformar la recepción digital de tu consultorio en pocos días.
          </p>
        </div>

        {/* Grid de Pasos */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={staggerContainer}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {steps.map((step) => (
            <motion.div
              key={step.number}
              variants={slideUp}
              className="relative flex flex-col rounded-2xl border border-white/10 bg-[#121520] p-6 shadow-lg shadow-black/30 transition-all hover:border-[#7C3AED]/50"
            >
              <div className="mb-4 inline-flex items-center justify-center rounded-xl bg-[#7C3AED]/10 px-3 py-1 text-sm font-extrabold text-[#00E5FF] border border-[#00E5FF]/20 w-fit">
                {step.number}
              </div>
              <h3 className="mb-3 text-lg font-bold text-white">{step.title}</h3>
              <p className="text-xs leading-relaxed text-[#94A3B8] sm:text-sm">{step.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default SystemProcess