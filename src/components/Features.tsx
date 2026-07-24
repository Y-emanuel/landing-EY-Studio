import { motion } from 'framer-motion'
import { SectionLabel } from './ui'

// ============================================================
// SVG ICONS (6 funcionalidades)
// ============================================================
const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#25D366]">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

const CalendarCheckIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#A855F7]">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
    <path d="m9 16 2 2 4-4" />
  </svg>
)

const MapPinIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#A855F7]">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
)

const GridIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#A855F7]">
    <rect x="3" y="3" width="7" height="7" />
    <rect x="14" y="3" width="7" height="7" />
    <rect x="3" y="14" width="7" height="7" />
    <rect x="14" y="14" width="7" height="7" />
  </svg>
)

const SmartphoneIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#A855F7]">
    <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
    <path d="M8 2v4h8V2" />
    <path d="M12 14v-4" />
    <path d="M9 11.5 12 14l3-2.5" />
  </svg>
)

const ShieldIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-[#A855F7]">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M9 12 11 14 15 10" />
  </svg>
)

// ============================================================
// DATOS DE LAS TARJETAS
// ============================================================
const features = [
  {
    id: 1,
    title: 'Sistema de Turnos vía WhatsApp',
    description:
      'Botones e integraciones estratégicas para que el paciente solicite su turno con mensaje predefinido (nombre, tratamiento y disponibilidad), evitando idas y vueltas de mensajes.',
    microCopy: '→ Agiliza la atención inicial en un 90%',
    icon: WhatsAppIcon,
    isWhatsApp: true, // color especial
  },
  {
    id: 2,
    title: 'Flujo de Recordatorios Pre-Turno',
    description:
      'Plantilla y protocolo automatizado de confirmación vía WhatsApp 24 horas antes de la consulta para reconfirmar o liberar la agenda a tiempo.',
    microCopy: '→ Minimiza los huecos en la agenda diario',
    icon: CalendarCheckIcon,
  },
  {
    id: 3,
    title: 'Posicionamiento SEO Local en Google',
    description:
      'Estructura optimizada para que tu sitio aparezca en las primeras posiciones cuando pacientes de tu ciudad o zona busquen especialidades odontológicas.',
    microCopy: '→ Tráfico orgánico de alta intención',
    icon: MapPinIcon,
  },
  {
    id: 4,
    title: 'Módulo Claro de Servicios',
    description:
      'Sección visual para presentar ortodoncia, implantes, blanqueamiento o estética dental de forma transparente, transmitiendo confianza antes del primer contacto.',
    microCopy: '→ Eleva la percepción de valor',
    icon: GridIcon,
  },
  {
    id: 5,
    title: 'Experiencia Ultrarrápida en Mobile',
    description:
      'Más del 85% de tus pacientes navegarán desde su smartphone. Tu página cargará en menos de 2 segundos y se adaptará perfectamente a cualquier pantalla.',
    microCopy: '→ Cero fricción al pedir turno',
    icon: SmartphoneIcon,
  },
  {
    id: 6,
    title: 'Publicación y Acompañamiento',
    description:
      'Nos encargamos de la configuración de dominio, servidor, etiquetas meta y seguridad SSL. Te entregamos la web lista para recibir consultas desde el primer día.',
    microCopy: '→ Sin dolores de cabeza técnicos',
    icon: ShieldIcon,
  },
]

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function Features() {
  return (
    <section id="beneficios" className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1200px]">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-16 text-center">
          <div className="mb-4">
            <SectionLabel>LO QUE INCLUYE TU LANDING PAGE</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[720px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Todo lo que tu clínica necesita para captar y agendar pacientes en automático.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Soluciones digitales pensadas para la operativa real de un consultorio dental:
            desde la atracción en Google hasta la confirmación de la cita.
          </p>
        </div>

        {/* ===== GRID DE 6 TARJETAS (3x2) ===== */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon
            const isWhatsApp = feature.isWhatsApp || false
            return (
              <motion.div
                key={feature.id}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{
                  y: -4,
                  borderColor: 'rgba(124, 58, 237, 0.4)',
                  boxShadow: '0px 10px 25px rgba(0, 0, 0, 0.5), 0px 0px 15px rgba(124, 58, 237, 0.15)',
                }}
                transition={{ duration: 0.3, ease: 'easeInOut' }}
                className="group flex flex-col items-start rounded-2xl border border-white/10 bg-[#12121A] p-6 transition-all duration-300 ease-in-out hover:border-[#7C3AED]/40 hover:shadow-2xl hover:shadow-[#7C3AED]/10 sm:p-8"
              >
                {/* Ícono */}
                <div
                  className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl border transition-colors duration-300 group-hover:bg-[#7C3AED]/25 ${
                    isWhatsApp
                      ? 'border-[#25D366]/30 bg-[#25D366]/10 group-hover:bg-[#25D366]/20'
                      : 'border-[#7C3AED]/25 bg-[#7C3AED]/15'
                  }`}
                >
                  <Icon />
                </div>

                {/* Título */}
                <h3 className="mb-3 text-left text-[18px] font-bold text-white">{feature.title}</h3>

                {/* Descripción */}
                <p className="mb-4 text-left text-sm font-normal leading-relaxed text-[#9CA3AF]">
                  {feature.description}
                </p>

                {/* Micro-copy */}
                <span className="mt-auto text-left text-[13px] font-semibold text-[#C4B5FD] transition-colors group-hover:text-[#A855F7]">
                  {feature.microCopy}
                </span>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}