import { motion } from 'framer-motion'
import { slideUp, staggerContainer } from '../lib/motion'
import { SectionLabel } from './ui'

// Lista de integraciones con rutas a tus SVGs
const integrations = [
  { name: 'Google Search', icon: '/assets/images/google-color-svgrepo-com.svg', alt: 'Google' },
  { name: 'WhatsApp API', icon: '/assets/images/whatsapp-color-svgrepo-com.svg', alt: 'WhatsApp' },
  { name: 'Google Calendar', icon: '/assets/images/calendar-svgrepo-com.svg', alt: 'Calendar' },
  { name: 'Meta Ads', icon: '/assets/images/meta-svgrepo-com.svg', alt: 'Meta' },
  { name: 'SSL Secure', icon: '/assets/images/security-protection-ssl-certificate-svgrepo-com.svg', alt: 'SSL' },
  // duplicados para efecto infinito
  { name: 'Google Search', icon: '/assets/images/google-color-svgrepo-com.svg', alt: 'Google' },
  { name: 'WhatsApp API', icon: '/assets/images/whatsapp-color-svgrepo-com.svg', alt: 'WhatsApp' },
  { name: 'Google Calendar', icon: '/assets/images/calendar-svgrepo-com.svg', alt: 'Calendar' },
  { name: 'Meta Ads', icon: '/assets/images/meta-svgrepo-com.svg', alt: 'Meta' },
  { name: 'SSL Secure', icon: '/assets/images/security-protection-ssl-certificate-svgrepo-com.svg', alt: 'SSL' },
]

export function SocialProof() {
  return (
    <section className="relative border-y border-white/5 bg-[#0E0E14] px-5 py-16 sm:px-8 sm:py-20 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <SectionLabel>TECNOLOGÍA E INTEGRACIONES COMPATIBLES CON TU CLÍNICA</SectionLabel>
        </div>

        {/* Marquesina */}
        <div className="relative overflow-hidden">
          <div className="flex animate-marquee whitespace-nowrap py-4">
            {integrations.map((item, idx) => (
              <div
                key={`${item.name}-${idx}`}
                className="mx-8 flex items-center gap-3 text-sm font-medium text-white/50 transition hover:text-white/90"
              >
                <img
                  src={item.icon}
                  alt={item.alt}
                  className="h-6 w-auto opacity-50 transition hover:opacity-100"
                  width="24"   // 👈 Añadido para CLS
                  height="24"  // 👈 Añadido para CLS
                />
                <span>{item.name}</span>
              </div>
            ))}
          </div>
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#0E0E14] to-transparent pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#0E0E14] to-transparent pointer-events-none" />
        </div>

        {/* Grid de métricas */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={staggerContainer}
          className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {metrics.map((metric) => (
            <motion.div
              key={metric.label}
              variants={slideUp}
              whileHover={{ y: -4, scale: 1.01 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
              className="group relative rounded-2xl border border-white/10 bg-[rgba(26,26,38,0.4)] p-6 backdrop-blur-sm shadow-lg shadow-black/20 transition-all hover:border-white/20 hover:shadow-violet-pulse/10"
            >
              <div className="flex items-start justify-between">
                <span className={`text-5xl font-extrabold font-outfit ${metric.color}`}>
                  {metric.value}
                </span>
                <img
                  src={metric.icon}
                  alt={metric.iconAlt}
                  className="h-8 w-8 opacity-30"
                />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-white">{metric.label}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[#9CA3AF]">{metric.description}</p>
              <div className="absolute -bottom-px left-6 right-6 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            </motion.div>
          ))}
        </motion.div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  )
}

// Métricas con tus iconos de apoyo
const metrics = [
  {
    value: '+30%',
    label: 'Aumento en Captación',
    description: 'Pacientes nuevos que agendan directamente desde búsquedas en Google y redes sociales sin rodeos.',
    color: 'text-[#25D366]',
    icon: '/assets/images/graph-svgrepo-com.svg',
    iconAlt: 'Gráfico de crecimiento',
  },
  {
    value: '-80%',
    label: 'Reducción de Plantones',
    description: 'Minimiza los turnos vacíos gracias a las confirmaciones y recordatorios por WhatsApp.',
    color: 'text-[#A855F7]',
    icon: '/assets/images/graph-bar-svgrepo-com.svg',
    iconAlt: 'Gráfico de descenso',
  },
  {
    value: '24/7',
    label: 'Agendamiento Automático',
    description: 'Tu clínica sigue recibiendo solicitudes de turnos mientras duermes o estás en consulta.',
    color: 'text-[#06B6D4]',
    icon: '/assets/images/calendar-svgrepo-com.svg',
    iconAlt: 'Calendario',
  },
]