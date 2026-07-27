import { memo } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from './ui'
import { whatsappLink } from '../content/constants'

// ============================================================
// SVG ICONS
// ============================================================
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

const ClockIcon = () => (
  <svg className="inline-block h-4 w-4 text-[#9CA3AF]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
)

// ============================================================
// TIPOS
// ============================================================
type BadgeType = 'esencial' | 'pro'

interface PricingBadgeProps {
  badge: {
    label: string
    subLabel: string
    type: BadgeType
  }
}

interface PricingPlan {
  id: string
  name: string
  badge: {
    label: string
    subLabel: string
    type: BadgeType
  }
  description: string
  price: string
  priceNote: string
  originalPrice?: string
  deliveryTime: string
  features: string[]
  maintenance: {
    price: string
    details: string
    trialNote?: string
  }
  cta: string
  ctaLink: string
  highlighted: boolean
}

// ============================================================
// DATOS DE PRECIOS
// ============================================================
const pricingData: PricingPlan[] = [
  {
    id: 'esencial',
    name: 'Plan Esencial — Sistema de Captación Directa',
    badge: {
      label: '🚀 Entrega Exprés',
      subLabel: 'Cupos limitados por mes',
      type: 'esencial',
    },
    description: 'Ideal para consultorios que buscan su primera presencia digital profesional con enfoque en conversión móvil.',
    price: '$290 USD',
    priceNote: 'Pago único',
    deliveryTime: '3 a 5 días hábiles',
    features: [
      'Landing Page Móvil Ultra-Rápida: hasta 5 bloques enfocados en conversión móvil (+85% del tráfico dental/médico).',
      'Derivación Directa a WhatsApp: formulario corto con redirección automática y mensaje pre-armado.',
      'Módulo de Confianza: integración de Google Maps, fotos de las instalaciones y redes sociales.',
      'Optimización de Carga Exprés: compresión de imágenes para apertura en menos de 2 segundos.',
      'Soporte & Garantía: 14 días de asistencia post-entrega para ajustes técnicos.',
    ],
    maintenance: {
      price: '+$20 USD / mes',
      details: 'Hosting de alta velocidad, 2 actualizaciones mensuales, monitoreo 24/7.',
    },
    cta: 'Solicitar Plan Esencial',
    ctaLink: `${whatsappLink}?text=Hola%20Emanuel%2C%20quiero%20solicitar%20el%20Plan%20Esencial%20para%20mi%20cl%C3%ADnica%20dental.`,
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Plan PRO — Sistema de Agendamiento y Triaje',
    badge: {
      label: '⭐ Más Elegido por Clínicas',
      subLabel: 'Garantía de Satisfacción',
      type: 'pro',
    },
    description: 'Para clínicas que buscan maximizar la conversión de pacientes de alto ticket (Ortodoncia, Implantes, Estética).',
    price: '$450 USD',
    priceNote: 'Pago único',
    deliveryTime: '5 a 7 días hábiles',
    features: [
      'Estructura de Alto Impacto: hasta 8 bloques con arquitectura de información para vender tratamientos de alto ticket.',
      'Copywriting Comercial: redacción enfocada en derribar objeciones y resaltar el diferencial de la clínica.',
      'Formulario de Triaje y Agendamiento: filtro previo por especialidad y rango horario antes de derivar a WhatsApp.',
      'Módulo Interactivo Antes/Después: galería visual optimizada para mostrar casos de éxito sin lentificar la página.',
      'SEO Local Avanzado: optimización inicial para búsquedas geolocalizadas en tu ciudad/zona.',
      'Garantía de Rendimiento Google Speed (90+): optimización extrema de código.',
      'Soporte Prioritario: 30 días de acompañamiento post-lanzamiento.',
    ],
    maintenance: {
      price: '+$35 USD / mes',
      details: 'Hosting prioritario, 4 cambios de contenido mensuales, respaldos semanales y mantenimiento SEO.',
    },
    cta: 'Postular a Plan PRO',
    ctaLink: `${whatsappLink}?text=Hola%20Emanuel%2C%20quiero%20postular%20al%20Plan%20PRO%20para%20mi%20cl%C3%ADnica%20dental.`,
    highlighted: true,
  },
]

// ============================================================
// COMPONENTE DE BADGE
// ============================================================
function PricingBadge({ badge }: PricingBadgeProps) {
  const isPro = badge.type === 'pro'

  return (
    <div
      className={`relative mb-4 inline-flex flex-col items-start rounded-lg px-4 py-2 text-left ${
        isPro
          ? 'border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-amber-500/5 shadow-[0_0_20px_rgba(234,179,8,0.08)]'
          : 'border border-violet-500/30 bg-gradient-to-r from-violet-500/10 to-indigo-500/5 shadow-[0_0_20px_rgba(139,92,246,0.08)]'
      }`}
    >
      <div
        className={`absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full ${
          isPro ? 'bg-yellow-500' : 'bg-violet-500'
        } shadow-lg ${isPro ? 'shadow-yellow-500/50' : 'shadow-violet-500/50'}`}
      />
      <span className={`text-sm font-bold tracking-tight ${isPro ? 'text-yellow-400' : 'text-violet-400'}`}>
        {badge.label}
      </span>
      <span className="text-[10px] font-medium uppercase tracking-wider text-white/50">
        {badge.subLabel}
      </span>
    </div>
  )
}

// ============================================================
// TARJETA DE PRECIO
// ============================================================
function PricingCard({ plan, index }: { plan: PricingPlan; index: number }) {
  const isPro = plan.highlighted

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.15, duration: 0.4, ease: 'easeOut' }}
      whileHover={
        isPro
          ? {
              boxShadow: '0px 0px 40px rgba(124, 58, 237, 0.35)',
            }
          : {
              y: -4,
              borderColor: 'rgba(139, 92, 246, 0.3)',
            }
      }
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ease-in-out sm:p-8 lg:p-10 ${
        isPro
          ? 'bg-[#161324] border border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20 lg:-translate-y-2'
          : 'bg-[#12121A] border border-white/10'
      }`}
    >
      <PricingBadge badge={plan.badge} />

      <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>
      <p className="mb-4 text-sm font-normal leading-relaxed text-[#9CA3AF]">{plan.description}</p>

      <div className="mb-1 flex items-baseline gap-2">
        {plan.originalPrice && (
          <span className="text-lg font-medium text-[#9CA3AF] line-through">
            {plan.originalPrice}
          </span>
        )}
        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
      </div>
      <p className="mb-4 text-xs text-[#6B7280]">{plan.priceNote}</p>

      <div className="mb-6 flex items-center gap-2 text-sm text-[#9CA3AF]">
        <ClockIcon />
        <span>⏱ {plan.deliveryTime}</span>
      </div>

      <div className="mb-6 h-px w-full bg-white/10" />

      <ul className="mb-6 flex flex-col gap-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-2 text-sm leading-relaxed text-[#D1D5DB]">
            <span className="mt-0.5">
              <CheckIcon />
            </span>
            {feature}
          </li>
        ))}
      </ul>

      <div
        className={`mb-6 rounded-lg border p-4 ${
          isPro
            ? 'border-[#7C3AED]/30 bg-[#7C3AED]/10'
            : 'border-white/5 bg-white/5'
        }`}
      >
        <div className="flex items-baseline justify-between">
          <span className="text-sm font-medium text-white">Mantenimiento</span>
          <span className="text-sm font-bold text-[#25D366]">{plan.maintenance.price}</span>
        </div>
        <p className="mt-1 text-xs leading-relaxed text-[#9CA3AF]">
          {plan.maintenance.details}
        </p>
      </div>

      <motion.a
        href={plan.ctaLink}
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={`mt-auto w-full rounded-full px-6 py-3 text-center text-sm font-bold transition-all duration-300 ${
          isPro
            ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/40 hover:bg-[#6D28D9] hover:shadow-[#7C3AED]/60'
            : 'bg-white/10 text-white ring-1 ring-white/20 hover:bg-white/20'
        }`}
      >
        {plan.cta}
      </motion.a>
    </motion.div>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL (con memo)
// ============================================================
const Pricing = memo(function Pricing() {
  return (
    <section id="precios" className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        <div className="mb-12 text-center">
          <div className="mb-4">
            <SectionLabel>INVERSIÓN TRANSPARENTE</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[720px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Planes diseñados para la escala de tu consultorio.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Elegí la solución que mejor se adapte a la etapa actual de tu clínica. Sin costos ocultos.
          </p>
        </div>

        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
})

export { Pricing }