import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { SectionLabel } from './ui'

// ============================================================
// SVG ICONS
// ============================================================
const ExternalLinkIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
)

const WhatsAppIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
)

// ============================================================
// DATOS DE LAS DEMOS
// ============================================================
const demos = [
  {
    id: 'clinica',
    title: 'Clínica Dental & Odontología General',
    badge: 'DEMO COMERCIAL • LUZ / MEDICO',
    description:
      'Diseño limpio y luminoso enfocado en transmitir higiene, profesionalismo y cercanía. Ideal para consultorios familiares y medicina prepaga.',
    image: '/assets/images/landing-clinica.webp',
    link: 'https://clinica-odontologica-demo.vercel.app/',
    tags: ['Limpieza', 'Conducto', 'Extracciones'],
    tag: 'Clínica Dental / General',
    features: ['Menú rápido de tratamientos', 'Botón flotante de WhatsApp siempre visible'],
    whatsappLink: 'https://wa.me/5491111111111?text=Hola%2C%20quiero%20probar%20el%20sistema%20de%20turnos',
  },
  {
    id: 'elite',
    title: 'Estética Dental & Ortodoncia Invisible',
    badge: 'DEMO COMERCIAL • PREMIUM / DARK',
    description:
      'Diseño de alta gama con estética oscura y elegante. Pensado para clínicas especializadas en carillas, blanqueamiento y alineadores invisibles de alto valor.',
    image: '/assets/images/landing-barber.webp',
    link: 'https://barber-demo-dusky.vercel.app/',
    tags: ['Carillas', 'Blanqueamiento', 'Invisalign'],
    tag: 'Estética Dental',
    features: ['Galería interactiva Antes / Después', 'Formulario de evaluación estética inicial'],
    whatsappLink: 'https://wa.me/5491111111111?text=Hola%2C%20quiero%20probar%20el%20sistema%20de%20turnos',
  },
]

// ============================================================
// COMPONENTE DE VENTANA DE NAVEGADOR (Mockup)
// ============================================================
function BrowserWindow({ image, title }: { image: string; title: string }) {
  return (
    <div className="group relative overflow-hidden rounded-xl border border-white/10 bg-[#1A1A24] shadow-xl">
      {/* Barra superior del navegador */}
      <div className="flex items-center gap-2 border-b border-white/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#FF5F56]" />
          <span className="h-3 w-3 rounded-full bg-[#FFBD2E]" />
          <span className="h-3 w-3 rounded-full bg-[#27C93F]" />
        </div>
        <span className="ml-2 text-xs font-medium text-white/30">{title}</span>
      </div>

      {/* Contenido de la página (imagen con scroll) */}
      <div className="relative overflow-hidden bg-[#0A0A0F] aspect-[800/420]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-[3000ms] ease-in-out group-hover:translate-y-[-20%]"
          loading="lazy"
        />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-[#12121A] to-transparent" />
      </div>
    </div>
  )
}

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export default function Demos() {
  const [activeTab, setActiveTab] = useState('all')

  const tabs = [
    { id: 'all', label: 'Todos los Diseños' },
    { id: 'clinica', label: 'Clínica Dental / General' },
    { id: 'ortodoncia', label: 'Ortodoncia e Implantes' },
    { id: 'estetica', label: 'Estética Dental' },
  ]

  const filteredDemos = demos.filter((demo) => {
    if (activeTab === 'all') return true
    if (activeTab === 'clinica') return demo.id === 'clinica'
    if (activeTab === 'ortodoncia') return demo.id === 'clinica'
    if (activeTab === 'estetica') return demo.id === 'elite'
    return true
  })

  return (
    <section className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28" id="casos">
      <div className="mx-auto max-w-[1200px]">
        {/* ===== ENCABEZADO ===== */}
        <div className="mb-12 text-center">
          <div className="mb-4">
            <SectionLabel>DEMOS EN VIVO</SectionLabel>
          </div>
          <h2 className="mx-auto max-w-[720px] font-outfit text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-[36px]">
            Diseños probados que inspiran confianza y generan consultas.
          </h2>
          <p className="mx-auto mt-4 max-w-[640px] text-base font-normal leading-relaxed text-[#9CA3AF] sm:text-lg">
            Explorá nuestras plantillas interactivas diseñadas específicamente para el sector
            odontológico. Probá el sistema de turnos tal como lo experimentarán tus pacientes.
          </p>
        </div>

        {/* ===== TABS ===== */}
        <div className="mb-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-300 ${activeTab === tab.id
                ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/25'
                : 'border border-white/10 bg-white/5 text-[#9CA3AF] hover:bg-white/10 hover:text-white'
                }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* ===== GRID DE DEMOS ===== */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2"
          >
            {filteredDemos.map((demo, index) => (
              <motion.div
                key={demo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4, ease: 'easeOut' }}
                whileHover={{
                  y: -4,
                  borderColor: '#7C3AED',
                  boxShadow: '0px 10px 30px rgba(124, 58, 237, 0.15)',
                }}
                className="group flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-[#12121A] transition-all duration-300 ease-in-out hover:border-[#7C3AED]"
              >
                <BrowserWindow image={demo.image} title={demo.title} />

                <div className="flex flex-1 flex-col p-6 sm:p-8">
                  <span className="mb-3 inline-flex items-center rounded-full bg-[#7C3AED]/15 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#C4B5FD]">
                    {demo.badge}
                  </span>
                  <h3 className="mb-2 text-xl font-bold text-white">{demo.title}</h3>
                  <p className="mb-4 text-sm font-normal leading-relaxed text-[#9CA3AF]">{demo.description}</p>
                  <ul className="mb-6 space-y-1.5">
                    {demo.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-sm text-[#D1D5DB]">
                        <span className="h-1.5 w-1.5 rounded-full bg-[#7C3AED]" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <div className="mb-6 flex flex-wrap gap-2">
                    {demo.tags.map((tag) => (
                      <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-[#9CA3AF]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto flex flex-wrap gap-3">
                    <a
                      href={demo.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg bg-[#635BFF] px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#7C3AED] hover:shadow-lg hover:shadow-[#635BFF]/25"
                    >
                      Ver Demo Completa
                      <ExternalLinkIcon />
                    </a>
                    <a
                      href={demo.whatsappLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/50 bg-transparent px-5 py-2.5 text-sm font-semibold text-[#25D366] transition-all duration-300 hover:bg-[#25D366]/10 hover:border-[#25D366]"
                    >
                      <WhatsAppIcon />
                      Probar Turno WhatsApp
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredDemos.length === 0 && (
          <div className="mt-12 text-center text-[#9CA3AF]">
            <p>No hay demos disponibles para esta categoría.</p>
          </div>
        )}
      </div>
    </section>
  )
}