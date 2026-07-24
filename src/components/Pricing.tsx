import { motion } from 'framer-motion'
import { SectionLabel } from './ui'

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
type BadgeType = 'trial' | 'promo'

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
// DATOS DE PRECIOS (con `as const` para forzar literales)
// ============================================================
const pricingData: PricingPlan[] = [
  {
    id: 'esencial',
    name: 'Esencial',
    badge: {
      label: '🎁 7 Días de Prueba Gratis',
      subLabel: 'Sin costo inicial',
      type: 'trial' as const,
    },
    description: 'La solución ideal para profesionales o consultorios que buscan su primera presencia digital profesional sin riesgos.',
    price: '$150 USD',
    priceNote: 'Aplica la prueba gratis de 7 días sin costo inicial',
    deliveryTime: '5 a 7 días hábiles (tras recibir el material)',
    features: [
      'Landing Page optimizada de 1 página (hasta 5 secciones).',
      'Diseño 100% Mobile Responsive (adaptado a celulares y tablets).',
      'Formulario de Agendamiento directo al WhatsApp de la clínica.',
      'Carga ultra rápida y SEO básico estructurado.',
      'Integración de redes sociales, mapa de ubicación y botón flotante de WhatsApp.',
      '14 días de soporte post-entrega.',
    ],
    maintenance: {
      price: '+$15 USD / mes',
      details: 'Hosting de alta velocidad + 2 cambios de contenido al mes (textos, fotos, horarios) + Monitoreo 24/7.',
    },
    cta: 'Probá 7 Días Gratis',
    ctaLink: 'https://wa.me/5491157653009?text=Hola%20Emanuel%2C%20quiero%20el%20Plan%20Esencial%20con%20prueba%20gratis',
    highlighted: false,
  },
  {
    id: 'pro',
    name: 'Pro',
    badge: {
      label: '⚡ 20% OFF',
      subLabel: 'Código: PROMO280 · Cupos limitados',
      type: 'promo' as const,
    },
    description: 'Para clínicas que buscan maximizar la conversión de pacientes, mejorar su posicionamiento local e impactar visualmente.',
    originalPrice: '$350 USD',
    price: '$280 USD',
    priceNote: 'Pago único',
    deliveryTime: '7 a 10 días hábiles (tras recibir el material)',
    features: [
      'Landing Page de alto impacto (hasta 8 secciones estratégicas).',
      'Copywriting comercial enfocado en ventas y captura de pacientes.',
      'Galería interactiva de tratamientos y casos (Antes / Después).',
      'Formulario de reserva con selección de especialidad, fecha y franja horaria.',
      'SEO Local avanzado para destacar en las búsquedas de tu ciudad/zona.',
      'Optimización de rendimiento (100/100 en Google Lighthouse).',
      '30 días de soporte prioritario post-entrega.',
    ],
    maintenance: {
      price: '+$30 USD / mes',
      details: 'Hosting prioritario + 4 cambios de contenido al mes + Sistema de recordatorios automáticos por WhatsApp para reducir ausentismos de pacientes + Mantenimiento SEO.',
      trialNote: 'Con 7 días de prueba gratis de la automatización',
    },
    cta: 'Reclamar Oferta PRO',
    ctaLink: 'https://wa.me/5491157653009?text=Hola%20Emanuel%2C%20quiero%20el%20Plan%20Pro%20con%20el%2020%25%20OFF',
    highlighted: true,
  },
]

// ============================================================
// COMPONENTE DE BADGE MEJORADO
// ============================================================
function PricingBadge({ badge }: PricingBadgeProps) {
  const isPromo = badge.type === 'promo'

  return (
    <div
      className={`relative mb-4 inline-flex flex-col items-start rounded-lg px-4 py-2 text-left ${
        isPromo
          ? 'border border-yellow-500/30 bg-gradient-to-r from-yellow-500/10 to-amber-500/5 shadow-[0_0_20px_rgba(234,179,8,0.08)]'
          : 'border border-green-500/30 bg-gradient-to-r from-green-500/10 to-emerald-500/5 shadow-[0_0_20px_rgba(37,211,102,0.08)]'
      }`}
    >
      {/* Línea decorativa lateral */}
      <div
        className={`absolute left-0 top-1/2 h-8 w-0.5 -translate-y-1/2 rounded-full ${
          isPromo ? 'bg-yellow-500' : 'bg-green-500'
        } shadow-lg ${isPromo ? 'shadow-yellow-500/50' : 'shadow-green-500/50'}`}
      />

      {/* Etiqueta principal */}
      <span
        className={`text-sm font-bold tracking-tight ${
          isPromo ? 'text-yellow-400' : 'text-[#25D366]'
        }`}
      >
        {badge.label}
      </span>

      {/* Sub-etiqueta (micro-copy) */}
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
              borderColor: 'rgba(124, 58, 237, 0.3)',
            }
      }
      className={`relative flex flex-col rounded-2xl p-6 transition-all duration-300 ease-in-out sm:p-8 lg:p-10 ${
        isPro
          ? 'bg-[#161324] border border-[#7C3AED] shadow-2xl shadow-[#7C3AED]/20 lg:-translate-y-2'
          : 'bg-[#12121A] border border-white/10'
      }`}
    >
      {/* Badge mejorado */}
      <PricingBadge badge={plan.badge} />

      {/* Nombre */}
      <h3 className="mb-2 text-2xl font-bold text-white">{plan.name}</h3>

      {/* Descripción */}
      <p className="mb-4 text-sm font-normal leading-relaxed text-[#9CA3AF]">{plan.description}</p>

      {/* Precio */}
      <div className="mb-1 flex items-baseline gap-2">
        {plan.originalPrice && (
          <span className="text-lg font-medium text-[#9CA3AF] line-through">
            {plan.originalPrice}
          </span>
        )}
        <span className="text-4xl font-extrabold text-white">{plan.price}</span>
      </div>
      <p className="mb-4 text-xs text-[#6B7280]">{plan.priceNote}</p>

      {/* Tiempo de entrega */}
      <div className="mb-6 flex items-center gap-2 text-sm text-[#9CA3AF]">
        <ClockIcon />
        <span>⏱ {plan.deliveryTime}</span>
      </div>

      {/* Línea divisora */}
      <div className="mb-6 h-px w-full bg-white/10" />

      {/* Características */}
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

      {/* Bloque de mantenimiento */}
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
        {plan.maintenance.trialNote && (
          <p className="mt-1 text-xs font-medium text-[#25D366]">
            {plan.maintenance.trialNote}
          </p>
        )}
      </div>

      {/* Botón CTA */}
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
// COMPONENTE PRINCIPAL
// ============================================================
export function Pricing() {
  return (
    <section id="precios" className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1100px]">
        {/* ===== ENCABEZADO ===== */}
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

        {/* ===== GRID DE PRECIOS ===== */}
        <div className="mx-auto grid max-w-[960px] grid-cols-1 gap-8 lg:grid-cols-2">
          {pricingData.map((plan, index) => (
            <PricingCard key={plan.id} plan={plan} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}