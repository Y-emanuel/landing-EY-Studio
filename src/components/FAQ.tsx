import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SectionLabel } from './ui'

// ============================================================
// SVG ICON: Chevron Down / Up
// ============================================================
const ChevronIcon = ({ isOpen }: { isOpen: boolean }) => (
  <svg
    className={`h-5 w-5 transition-colors duration-300 ${
      isOpen ? 'text-[#7C3AED]' : 'text-[#9CA3AF]'
    }`}
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points={isOpen ? '18 15 12 9 6 15' : '6 9 12 15 18 9'} />
  </svg>
)

// ============================================================
// DATOS DE FAQ
// ============================================================
const faqData = [
  {
    id: 1,
    question: '¿Cómo funciona la prueba gratis de 7 días del Plan Esencial?',
    answer:
      'Diseñamos y entregamos tu Landing Page en 5 a 7 días hábiles. Una vez publicada, cuentas con 7 días de prueba completa sin costo inicial para recibir solicitudes de pacientes en tu WhatsApp y comprobar la calidad del sistema antes de realizar el pago base de $150 USD.',
  },
  {
    id: 2,
    question: '¿Cómo aplico el código de descuento PROMO280 en el Plan Pro?',
    answer:
      'Al solicitar el Plan Pro vía WhatsApp, mencionas el código PROMO280. Esto aplica automáticamente un 20% de descuento directo sobre la tarifa base de $350 USD, quedando la implementación en un pago único de $280 USD. Ten en cuenta que esta oferta tiene cupos limitados por mes.',
  },
  {
    id: 3,
    question: '¿Tengo que pagar un mantenimiento mensual de forma obligatoria?',
    answer:
      'No. Tu Landing Page es 100% de tu propiedad tras la entrega. El servicio de mantenimiento mensual ($15 USD/mes en Esencial o $30 USD/mes en Pro) es opcional y sirve para cubrir hosting de alta velocidad, cambios de contenido periódicos y automatizaciones. Puedes activarlo o cancelarlo cuando quieras.',
  },
  {
    id: 4,
    question: '¿Qué información o material necesito entregarles para empezar?',
    answer:
      'Solo necesitamos tu logo (si dispones de uno), la lista de tratamientos que ofrece tu clínica, tus datos de contacto/ubicación y fotos del consultorio. Si no cuentas con fotografías profesionales, seleccionamos imágenes médicas de alta calidad de nuestro banco.',
  },
  {
    id: 5,
    question: '¿Cómo llegan las solicitudes de los pacientes a mi WhatsApp?',
    answer:
      'Integramos botones y formularios inteligentes. Cuando el paciente hace clic en "Solicitar Turno", se abre automáticamente un chat de WhatsApp con un mensaje estructurado que incluye su nombre, el tratamiento consultado y su preferencia de horario.',
  },
  {
    id: 6,
    question: '¿Qué sucede si necesito realizar ajustes después de la entrega?',
    answer:
      'El Plan Esencial incluye 14 días de soporte post-entrega y el Plan Pro incluye 30 días de soporte prioritario. Durante ese período realizamos todos los ajustes necesarios. Si además cuentas con el mantenimiento mensual, tienes cambios continuos incluidos todos los meses.',
  },
]

// ============================================================
// COMPONENTE DE ITEM DE FAQ (Acordeón)
// ============================================================
function FAQItem({
  question,
  answer,
  isOpen,
  onClick,
}: {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}) {
  return (
    <motion.div
      initial={false}
      animate={{
        borderColor: isOpen ? '#7C3AED' : 'rgba(255, 255, 255, 0.08)',
        backgroundColor: isOpen ? '#161324' : '#12121A',
      }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className="overflow-hidden rounded-xl border transition-colors duration-300 hover:bg-white/5"
    >
      {/* Encabezado clickeable */}
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

      {/* Cuerpo desplegable con animación de altura */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-0 text-sm font-normal leading-relaxed text-[#9CA3AF]">
              {answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[800px]">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-12 text-center">
          <div className="mb-4">
            <SectionLabel>RESOLVEMOS TUS DUDAS</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[640px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Todo lo que necesitas saber sobre los tiempos, la prueba gratis de 7 días, la oferta PROMO280 y la entrega de tu sitio web.
          </p>
        </div>

        {/* ===== LISTA DE FAQ ===== */}
        <div className="flex flex-col gap-4">
          {faqData.map((item) => (
            <FAQItem
              key={item.id}
              question={item.question}
              answer={item.answer}
              isOpen={openId === item.id}
              onClick={() => toggle(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}