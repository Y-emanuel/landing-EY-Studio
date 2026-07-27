import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SectionLabel } from './ui'

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

const faqData = [
  {
    id: 1,
    question: '¿Cuánto cuesta una landing page para mi clínica dental?',
    answer:
      'Tenemos dos opciones: el Plan Esencial desde USD 290 (pago único) y el Plan Pro desde USD 450 (pago único). Ambos incluyen diseño responsive, WhatsApp integrado y sistema de turnos básico. El Plan Pro añade copy comercial, SEO local, optimización avanzada y tiempos de entrega exprés (5 a 7 días).',
  },
  {
    id: 2,
    question: '¿Cuánto tarda en estar lista mi web?',
    answer:
      'El Plan Esencial se entrega en 3 a 5 días hábiles, y el Plan Pro en 5 a 7 días hábiles, siempre dependiendo de la complejidad del contenido (especialidades, imágenes, etc.).',
  },
  {
    id: 3,
    question: '¿Incluye el sistema de turnos?',
    answer:
      'Sí, todos nuestros planes incluyen un sistema de turnos básico (formulario con especialidad, fecha, hora y envío por WhatsApp). El Plan Pro incluye además selección de especialidad, fecha y franja horaria, y optimización de conversión.',
  },
  {
    id: 4,
    question: '¿Se puede integrar con mi agenda (Google Calendar, etc.)?',
    answer:
      'Sí, en el Plan Pro podemos sincronizar los turnos con tu agenda de Google Calendar (opcional, con costo adicional de mantenimiento mensual). Consultanos para más detalles.',
  },
  {
    id: 5,
    question: '¿Mis pacientes van a poder pedir turno desde el celular?',
    answer:
      '¡Por supuesto! Todas nuestras páginas se diseñan con enfoque "mobile first". El formulario de turnos está optimizado para que se complete en menos de 60 segundos desde cualquier dispositivo.',
  },
  {
    id: 6,
    question: '¿Puedo cambiar los textos e imágenes después?',
    answer:
      'Sí, te dejamos instrucciones claras para que puedas editar textos, agregar tratamientos o cambiar imágenes fácilmente. También ofrecemos planes de mantenimiento mensual con cambios incluidos.',
  },
  {
    id: 7,
    question: '¿Cómo manejan las obras sociales?',
    answer:
      'Podemos agregar una sección donde listes las obras sociales con las que trabajas, y el formulario de turnos puede incluir un campo para que el paciente indique su cobertura. Así llegás con información personalizada.',
  },
]

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
      <button
        onClick={onClick}
        className="flex w-full items-center justify-between px-5 py-4 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[#7C3AED] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0A0A0F]"
        aria-expanded={isOpen}
      >
        <span className="text-base font-semibold text-white">{question}</span>
        <ChevronIcon isOpen={isOpen} />
      </button>

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

export default function FAQ() {
  const [openId, setOpenId] = useState<number | null>(null)

  const toggle = (id: number) => {
    setOpenId(openId === id ? null : id)
  }

  return (
    <section id="faq" className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[800px]">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <SectionLabel>RESOLVEMOS TUS DUDAS</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[640px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Preguntas Frecuentes
          </h2>
          <p className="mx-auto mt-4 max-w-[580px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Todo lo que necesitas saber sobre los tiempos, precios y la entrega de tu sitio web.
          </p>
        </div>

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