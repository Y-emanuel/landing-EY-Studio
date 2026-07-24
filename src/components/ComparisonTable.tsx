import { motion } from 'framer-motion'
import { SectionLabel } from './ui'

// ============================================================
// SVG ICONS
// ============================================================
const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className="inline-block h-4 w-4 flex-shrink-0 text-red-400"
  >
    <path
      fill="currentColor"
      d="M504.6 148.5C515.9 134.9 514.1 114.7 500.5 103.4C486.9 92.1 466.7 93.9 455.4 107.5L320 270L184.6 107.5C173.3 93.9 153.1 92.1 139.5 103.4C125.9 114.7 124.1 134.9 135.4 148.5L278.3 320L135.4 491.5C124.1 505.1 125.9 525.3 139.5 536.6C153.1 547.9 173.3 546.1 184.6 532.5L320 370L455.4 532.5C466.7 546.1 486.9 547.9 500.5 536.6C514.1 525.3 515.9 505.1 504.6 491.5L361.7 320L504.6 148.5z"
    />
  </svg>
)

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className="inline-block h-4 w-4 flex-shrink-0 text-[#25D366]"
  >
    <path
      fill="currentColor"
      d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
    />
  </svg>
)

// ============================================================
// DATOS DE LA TABLA
// ============================================================
const comparisonData = [
  {
    id: 1,
    criterion: 'Captación de Pacientes',
    traditional: 'Depende solo de recomendación o publicaciones casuales en redes.',
    optimized: 'Canal propio en Google y web activa captando solicitudes 24/7.',
  },
  {
    id: 2,
    criterion: 'Gestión de Citas',
    traditional: 'Chats largos por DM de Instagram preguntando precios sin concretar.',
    optimized: 'Flujo directo a WhatsApp con datos clave (nombre, horario y tratamiento).',
  },
  {
    id: 3,
    criterion: 'Ausentismo (No-Shows)',
    traditional: 'Alto porcentaje de olvidos y huecos en la agenda sin previo aviso.',
    optimized: 'Recordatorio pre-definido 24 horas antes que asegura asistencia.',
  },
  {
    id: 4,
    criterion: 'Percepción de Marca',
    traditional: 'Presencia informal que compite por precio bajo.',
    optimized: 'Imagen médica de alta gama que justifica honorarios profesionales.',
  },
  {
    id: 5,
    criterion: 'Tiempo de Administración',
    traditional: 'Horas perdidas respondiendo mensajes repetitivos manualmente.',
    optimized: 'Atención automatizada y filtrada desde la primera interacción.',
  },
]

// ============================================================
// COMPONENTE DE FILA
// ============================================================
function ComparisonRow({
  criterion,
  traditional,
  optimized,
  index,
}: {
  criterion: string
  traditional: string
  optimized: string
  index: number
}) {
  const isEven = index % 2 === 0

  return (
    <motion.tr
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08, duration: 0.3, ease: 'easeOut' }}
      whileHover={{ backgroundColor: 'rgba(124, 58, 237, 0.06)' }}
      className={`group transition-colors duration-300 ${isEven ? 'bg-white/5' : 'bg-transparent'}`}
    >
      {/* Columna 1: Criterio */}
      <td className="border-b border-white/5 px-4 py-4 text-sm font-semibold text-white sm:px-6 sm:py-5">
        {criterion}
      </td>

      {/* Columna 2: Tradicional */}
      <td className="border-b border-white/5 px-4 py-4 text-sm leading-relaxed text-[#9CA3AF] sm:px-6 sm:py-5">
        <span className="mr-2 inline-block">
          <CrossIcon />
        </span>
        {traditional}
      </td>

      {/* Columna 3: Optimizado (EyStudio) */}
      <td className="border-b border-white/5 px-4 py-4 text-sm font-medium leading-relaxed text-[#E5E7EB] sm:px-6 sm:py-5">
        <span className="mr-2 inline-block">
          <CheckIcon />
        </span>
        {optimized}
      </td>
    </motion.tr>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function ComparisonTable() {
  return (
    <section className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-12 text-center">
          <div className="mb-4">
            <SectionLabel>COMPARATIVA DIRECTA</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[720px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            El impacto real en la gestión diaria de tu consultorio.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Compara cómo cambia la operativa, la captación de pacientes y el uso de tu tiempo
            al implementar nuestro sistema.
          </p>
        </div>

        {/* ===== TABLA COMPARATIVA ===== */}
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#12121A] shadow-xl">
          {/* Scroll horizontal para móvil */}
          <div className="overflow-x-auto">
            <table className="min-w-full table-auto border-collapse">
              {/* Cabecera */}
              <thead>
                <tr>
                  <th className="w-[35%] border-b border-white/5 px-4 py-4 text-left text-xs font-medium uppercase tracking-wider text-[#9CA3AF] sm:px-6 sm:py-5">
                    Criterio
                  </th>
                  <th className="w-[32.5%] border-b border-red-500/20 bg-red-500/5 px-4 py-4 text-left text-sm font-bold text-[#EF4444] sm:px-6 sm:py-5">
                    Sin Landing / Redes
                  </th>
                  <th className="relative w-[32.5%] border-b border-[#7C3AED] bg-[#7C3AED]/15 px-4 py-4 text-left text-sm font-bold text-white sm:px-6 sm:py-5">
                    <div className="flex items-center gap-3">
                      <span>Con EyStudio</span>
                      <span className="rounded-full bg-[#25D366] px-2 py-0.5 text-[10px] font-bold text-white">
                        RECOMENDADO
                      </span>
                    </div>
                    {/* Sombra interna para destacar la columna */}
                    <div className="absolute inset-y-0 left-0 w-full shadow-[inset_0_0_20px_rgba(124,58,237,0.08)] pointer-events-none" />
                  </th>
                </tr>
              </thead>

              {/* Cuerpo */}
              <tbody>
                {comparisonData.map((row, index) => (
                  <ComparisonRow
                    key={row.id}
                    criterion={row.criterion}
                    traditional={row.traditional}
                    optimized={row.optimized}
                    index={index}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}