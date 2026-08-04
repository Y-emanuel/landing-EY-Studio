import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from './ui'

interface MetricComparison {
  title: string
  metricWithout: string
  metricWith: string
  labelWithout: string
  labelWith: string
  descriptionWithout: string
  descriptionWith: string
}

const COMPARISONS: MetricComparison[] = [
  {
    title: 'Filtrado de Pacientes',
    metricWithout: '~20%',
    metricWith: '85%',
    labelWithout: 'Consultas frías o sin intención',
    labelWith: 'Pacientes listos para agendar',
    descriptionWithout:
      'DMs e idas y vueltas constantes preguntando solo "precios" que rara vez coordinan turno.',
    descriptionWith:
      'El paciente ve la especialidad, selecciona su disponibilidad y confirma la cita de forma autónoma.',
  },
  {
    title: 'Tasa de Asistencia (No-Shows)',
    metricWithout: '50% - 60%',
    metricWith: '80% - 85%',
    labelWithout: 'Sillones vacíos por olvidos',
    labelWith: 'Asistencia real a la consulta',
    descriptionWithout:
      'Sin confirmaciones estructuradas ni compromiso previo, el paciente se olvida y no avisa.',
    descriptionWith:
      'El proceso de agendamiento profesional y el flujo pre-turno reducen los huecos en la agenda.',
  },
  {
    title: 'Carga de Trabajo en Recepción',
    metricWithout: '+15 hs/sem',
    metricWith: '-70%',
    labelWithout: 'Perdidas en chat repetitivo',
    labelWith: 'Tiempo liberado para atención',
    descriptionWithout:
      'La secretaria responde manualmente los mismos mensajes en lugar de enfocarse en los pacientes del consultorio.',
    descriptionWith:
      'A la recepción solo le ingresa la ficha limpia con la cita ya calificada para agregar al sistema.',
  },
]

export function PainVsSolution() {
  const [isWithStudio, setIsWithStudio] = useState(true)

  return (
    <section id="problema" className="relative border-b border-[#222838] bg-[#090A0F] px-4 py-20 sm:px-6 md:py-28 lg:px-8">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Encabezado */}
        <div className="mb-12 text-center">
          <div className="mb-3">
            <SectionLabel>COMPARATIVA OPERATIVA REAL</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-2xl font-outfit text-3xl font-extrabold leading-tight text-white sm:text-4xl lg:text-5xl">
            El impacto real en la agenda de tu clínica
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-sm text-[#94A3B8] sm:text-base">
            Resultados medibles y realistas al pasar de una gestión manual por redes a un embudo directo de agendamiento.
          </p>
        </div>

        {/* Toggle Switch */}
        <div className="mb-12 flex items-center justify-center gap-4">
          <span
            className={`text-xs font-bold transition-colors ${
              !isWithStudio ? 'text-red-400' : 'text-[#94A3B8]'
            }`}
          >
            Operación Manual (Sin Landing)
          </span>

          <button
            type="button"
            onClick={() => setIsWithStudio(!isWithStudio)}
            className="relative h-8 w-16 rounded-full border border-[#222838] bg-[#12151E] p-1 transition-colors focus:outline-none cursor-pointer"
          >
            <motion.div
              className={`h-6 w-6 rounded-full shadow-md ${
                isWithStudio ? 'bg-[#7C3AED]' : 'bg-red-500'
              }`}
              animate={{ x: isWithStudio ? 32 : 0 }}
              transition={{ type: 'spring', stiffness: 500, damping: 30 }}
            />
          </button>

          <span
            className={`text-xs font-bold transition-colors ${
              isWithStudio ? 'text-[#A855F7]' : 'text-[#94A3B8]'
            }`}
          >
            Embudo Directo (EyStudio)
          </span>
        </div>

        {/* Grid de Métricas Comparativas */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {COMPARISONS.map((comp, idx) => (
            <div
              key={idx}
              className={`relative flex flex-col justify-between rounded-2xl border p-6 transition-all duration-300 backdrop-blur-xl ${
                isWithStudio
                  ? 'border-[#7C3AED]/40 bg-[#12151E] shadow-2xl shadow-[#7C3AED]/10'
                  : 'border-red-500/30 bg-[#130B0F]'
              }`}
            >
              <div>
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-[#94A3B8]">
                  {comp.title}
                </h3>

                <AnimatePresence mode="wait">
                  <motion.div
                    key={isWithStudio ? 'with' : 'without'}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    transition={{ duration: 0.2 }}
                    className="my-6"
                  >
                    <span
                      className={`block font-outfit text-4xl font-extrabold sm:text-5xl ${
                        isWithStudio ? 'text-white' : 'text-red-400'
                      }`}
                    >
                      {isWithStudio ? comp.metricWith : comp.metricWithout}
                    </span>
                    <span
                      className={`mt-1 block text-xs font-bold ${
                        isWithStudio ? 'text-[#00FF87]' : 'text-red-400/80'
                      }`}
                    >
                      {isWithStudio ? comp.labelWith : comp.labelWithout}
                    </span>
                  </motion.div>
                </AnimatePresence>
              </div>

              <AnimatePresence mode="wait">
                <motion.p
                  key={isWithStudio ? 'desc-with' : 'desc-without'}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="border-t border-[#222838] pt-4 text-xs leading-relaxed text-[#94A3B8]"
                >
                  {isWithStudio ? comp.descriptionWith : comp.descriptionWithout}
                </motion.p>
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Nota al pie realista */}
        <p className="mt-8 text-center text-[11px] text-[#94A3B8]">
          * Estimaciones basadas en la optimización del tiempo de recepción y mejora en la calificación del paciente previo al agendamiento.
        </p>
      </div>
    </section>
  )
}

export default PainVsSolution