import { motion } from 'framer-motion'
import { SectionLabel } from './ui'

// ============================================================
// SVG INLINE (Cruz y Tilde)
// ============================================================
const CrossIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 640 640"
    className="h-6 w-6 flex-shrink-0"
    style={{ color: '#EF4444' }}
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
    className="h-6 w-6 flex-shrink-0"
    style={{
      color: '#25D366',
      filter: 'drop-shadow(0px 0px 6px rgba(37, 211, 102, 0.6))',
    }}
  >
    <path
      fill="currentColor"
      d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z"
    />
  </svg>
)

// ============================================================
// VARIANTES DE ANIMACIÓN
// ============================================================
const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0 },
}

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0 },
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function PainVsSolution() {
  return (
    <section className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-16 text-center">
          <div className="mb-4">
            <SectionLabel>COMPARATIVA DE OPERACIÓN DENTAL</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[780px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Una web profesional{' '}
            <span className="bg-gradient-to-r from-white via-white to-[#C4B5FD] bg-clip-text text-transparent">
              cambia cómo te perciben
            </span>{' '}
            antes de que te escriban.
          </h2>
          <p className="mx-auto mt-4 max-w-[680px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Si tu clínica depende únicamente de Instagram, Facebook o el boca en boca,
            estás perdiendo pacientes calificados todos los días por falta de un canal
            directo y automático.
          </p>
        </div>

        {/* ===== GRID COMPARATIVO ===== */}
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-8">
          {/* ----- TARJETA 1: PROBLEMA ----- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            variants={fadeInLeft}
            transition={{ duration: 0.5, ease: 'easeOut' }}
            className="flex flex-col rounded-2xl border border-red-500/20 bg-[#0E0E15] p-6 shadow-lg shadow-black/20 transition-all hover:shadow-red-500/5 sm:p-8 lg:p-10"
          >
            {/* Badge */}
            <div className="mb-6 inline-flex items-center rounded-full border border-red-500/25 bg-red-500/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#EF4444]">
              ESTADO ACTUAL / INEFICIENTE
            </div>

            {/* Título */}
            <h3 className="mb-6 text-left text-[22px] font-bold text-[#F3F4F6]">
              Depender solo de Instagram y WhatsApp manual
            </h3>

            {/* Línea divisora */}
            <div className="mb-6 h-px w-full border-b border-white/10" />

            {/* Lista de puntos */}
            <ul className="flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <CrossIcon />
                <div>
                  <p className="text-[15px] font-semibold text-[#E5E7EB]">
                    Atención fragmentada e informal
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#828898]">
                    Los pacientes preguntan "precios" por DM a cualquier hora, generando conversaciones largas que rara vez concretan turnos.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CrossIcon />
                <div>
                  <p className="text-[15px] font-semibold text-[#E5E7EB]">
                    Alto porcentaje de turnos perdidos (No-Shows)
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#828898]">
                    Sin recordatorios estructurados, los pacientes olvidan su cita y dejan huecos vacíos en la agenda del día.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CrossIcon />
                <div>
                  <p className="text-[15px] font-semibold text-[#E5E7EB]">
                    Cero visibilidad en búsquedas con intención comercial
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#828898]">
                    Si alguien busca en Google "implantes dentales cerca de mí", tu clínica no existe y la competencia se queda con el cliente.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CrossIcon />
                <div>
                  <p className="text-[15px] font-semibold text-[#E5E7EB]">
                    Atracción de pacientes por precio, no por valor
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#828898]">
                    Una presencia digital improvisada atrae consultas frías que buscan el tratamiento más barato en lugar de calidad médica.
                  </p>
                </div>
              </li>
            </ul>
          </motion.div>

          {/* ----- TARJETA 2: SOLUCIÓN ----- */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
            variants={fadeInRight}
            transition={{ duration: 0.5, ease: 'easeOut', delay: 0.15 }}
            whileHover={{
              y: -2,
              boxShadow: '0px 0px 40px rgba(124, 58, 237, 0.28)',
              borderColor: '#9333EA',
            }}
            className="relative flex flex-col rounded-2xl border border-[#7C3AED] bg-[#12121C] p-6 shadow-2xl shadow-[#7C3AED]/15 transition-all duration-300 ease-in-out hover:shadow-[#7C3AED]/30 sm:p-8 lg:p-10"
            style={{ boxShadow: '0px 0px 30px rgba(124, 58, 237, 0.15)' }}
          >
            {/* Badge */}
            <div className="relative mb-6 inline-flex items-center rounded-full border border-[#7C3AED]/35 bg-[#7C3AED]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wide text-[#C4B5FD]">
              SISTEMA AUTOMATIZADO / EY STUDIO
            </div>

            {/* Título */}
            <h3 className="relative mb-6 text-left text-[22px] font-bold text-white">
              Landing Page EyStudio + Agendamiento Inteligente
            </h3>

            {/* Línea divisora */}
            <div className="relative mb-6 h-px w-full border-b border-[#7C3AED]/20" />

            {/* Lista de beneficios */}
            <ul className="relative flex flex-col gap-5">
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[15px] font-bold text-white">
                    Filtro comercial y reserva en 3 clics
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#A7ACBA]">
                    El paciente revisa especialidades, conoce tu propuesta de valor y solicita su turno directo a WhatsApp de forma ordenada.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[15px] font-bold text-white">
                    Reducción de ausentismo hasta un 80%
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#A7ACBA]">
                    Implementación de un flujo de confirmación pre-turno que asegura la asistencia real del paciente a la consulta.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[15px] font-bold text-white">
                    Captación activa vía SEO Local en Google
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#A7ACBA]">
                    Posicionamiento estratégico para aparecer en los primeros resultados cuando el paciente busque tu especialidad en tu ciudad.
                  </p>
                </div>
              </li>
              <li className="flex items-start gap-4">
                <CheckIcon />
                <div>
                  <p className="text-[15px] font-bold text-white">
                    Posicionamiento de Autoridad y Confianza
                  </p>
                  <p className="mt-1 text-[13.5px] font-normal leading-relaxed text-[#A7ACBA]">
                    Diseño de alta gama que proyecta rigor médico, infraestructura premium y justifica honorarios más altos.
                  </p>
                </div>
              </li>
            </ul>

            {/* Brillo superior */}
            <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-50" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}