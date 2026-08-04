import { motion } from 'framer-motion'
import { whatsappLink } from '../content/constants'

const clinicaMockupImage = '/assets/images/landing-clinica.webp'
const clinicaMockupImageMobile = '/assets/images/landing-clinica-movil.webp'

function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[630px] animate-float">
      {/* VERSIÓN MÓVIL */}
      <div className="block sm:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-[#222838] bg-[#12151E]">
          <div className="relative aspect-[370/647] w-full bg-[#090A0F]">
            <img
              src={clinicaMockupImageMobile}
              alt="Demo de sistema para Clínica Dental - EyStudio (móvil)"
              className="h-full w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={370}
              height={647}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F]/80 via-transparent to-transparent" />
            
            <div className="absolute left-2 top-2 rounded-xl border border-[#7C3AED]/30 bg-[#090A0F]/80 px-2 py-1 backdrop-blur-sm">
              <p className="text-[8px] font-bold text-[#A855F7]">🦷 Sistema EyStudio · Dental</p>
            </div>
            
            <div className="absolute bottom-2 left-2 rounded-xl border border-[#00FF87]/30 bg-[#12151E]/80 px-2 py-1.5 backdrop-blur-sm flex items-center gap-1">
              <svg className="h-3 w-3 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-[10px] font-extrabold text-white">+60%</span>
              <span className="text-[8px] text-[#94A3B8]">Cierre Presupuestos</span>
            </div>
            
            <div className="absolute bottom-2 right-2 rounded-xl border border-[#00FF87]/30 bg-[#12151E]/80 px-2 py-1.5 backdrop-blur-sm flex items-center gap-1">
              <svg className="h-3 w-3 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-[10px] font-extrabold text-white">-80%</span>
              <span className="text-[8px] text-[#94A3B8]">Ausentismo</span>
            </div>
          </div>
          
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">🦷 Clínica Dental · Demo</p>
              <span className="rounded-full bg-[#7C3AED]/20 px-3 py-1 text-xs font-bold text-[#A855F7]">Ver sistema</span>
            </div>
            <p className="mt-1 text-xs leading-5 text-[#94A3B8]">Atención rápida por IA y secuencias de seguimiento por WhatsApp.</p>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {['Captura 24/7', 'Secuencia IA', 'Antiausentismo'].map((item) => (
                <span key={item} className="rounded-xl bg-[#090A0F] px-2 py-1 text-center text-[10px] text-[#94A3B8] border border-[#222838]">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VERSIÓN DESKTOP */}
      <div className="hidden sm:block">
        <div className="absolute -inset-8 rounded-full bg-[#7C3AED]/20 blur-3xl pointer-events-none" />

        <div className="absolute -right-4 -top-4 z-20 rounded-xl border border-[#222838] bg-[#12151E]/90 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/50 flex items-center gap-2 animate-fadeInRight">
          <svg className="w-5 h-5 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm font-bold text-white">+60%</span>
          <span className="text-xs text-[#94A3B8]">Conversión de Presupuestos</span>
        </div>

        <div className="absolute -bottom-4 -left-4 z-20 rounded-xl border border-[#222838] bg-[#12151E]/90 px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/50 flex items-center gap-2 animate-fadeInLeft">
          <svg className="w-5 h-5 text-[#00FF87]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm font-bold text-white">-80%</span>
          <span className="text-xs text-[#94A3B8]">Ausentismo</span>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-[#222838] bg-[#12151E]/80 p-3 shadow-2xl shadow-black/80 backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[1.5rem] aspect-[800/420] bg-[#090A0F]">
            <img
              src={clinicaMockupImage}
              alt="Demo del sistema de conversión para Clínica Dental - EyStudio"
              className="h-full w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={800}
              height={420}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#090A0F] via-transparent to-transparent" />

            <div className="absolute left-6 top-6 flex flex-row gap-3 animate-fadeInDown">
              <div className="rounded-2xl border border-[#7C3AED]/30 bg-[#090A0F]/80 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#A855F7]">🦷 Sistema EyStudio Dental</p>
              </div>
              <div className="rounded-2xl border border-[#00FF87]/30 bg-[#090A0F]/80 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#00FF87]">⚡ Sistema Activo</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 rounded-xl border border-[#222838] bg-[#090A0F]/90 p-2.5 shadow-lg backdrop-blur-md animate-fadeInUp">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-semibold text-white sm:text-xs">🦷 Sistema Dental · Captura & Cierre por IA</p>
              <span className="rounded-full bg-[#7C3AED]/20 px-2 py-0.5 text-[8px] font-bold text-[#A855F7] sm:px-3 sm:py-1 sm:text-[10px]">Ver demostración</span>
            </div>
            <p className="mt-1 text-[10px] leading-4 text-[#94A3B8] sm:text-xs sm:leading-5">Atención rápida y secuencias automáticas de WhatsApp para presupuestos no cerrados.</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1">
              {['Atención 24/7', 'Seguimiento por IA', 'Antiausentismo'].map((item) => (
                <span key={item} className="rounded-lg bg-[#12151E] px-1.5 py-0.5 text-center text-[7px] text-[#94A3B8] border border-[#222838] sm:px-2 sm:py-1 sm:text-[9px]">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-[#222838] bg-[#090A0F]">
      {/* Resplandor Púrpura Neón de Fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(124,58,237,0.15),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(0,229,255,0.08),transparent_50%),#090A0F]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#090A0F] to-transparent" />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="max-w-4xl animate-fadeInUp">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/10 px-4 py-2 text-[10px] font-bold uppercase tracking-[0.28em] text-[#A855F7] backdrop-blur sm:text-xs">
            EXCLUSIVO PARA CLÍNICAS Y CENTROS ODONTOLÓGICOS
          </div>

          <h1 className="max-w-5xl font-outfit text-3xl font-extrabold leading-[1.08] tracking-[-0.01em] text-white sm:text-4xl lg:text-5xl">
            Tu clínica está perdiendo miles de dólares al mes en presupuestos de implantes y ortodoncia{' '}
            <span className="bg-gradient-to-r from-[#A855F7] via-[#00E5FF] to-[#00FF87] bg-clip-text text-transparent">
              que jamás se concretan
            </span>
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#94A3B8] sm:text-lg sm:leading-8">
            Implementamos un sistema automatizado de atención rápida y seguimiento por IA para captar consultas, cerrar presupuestos de alto valor y automatizar los recordatorios de turnos sin recargar a tu recepción.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
            {[
              'Respuesta Inmediata (IA 24/7)',
              'Recuperación de Presupuestos',
              'Recordatorios Antiausentismo',
              'Integrado a tu flujo de trabajo'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-xs font-semibold text-white sm:text-sm">
                <svg className="h-4 w-4 text-[#00FF87] flex-shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="mt-8 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <motion.a
              href={
                whatsappLink && whatsappLink.startsWith('http')
                  ? whatsappLink
                  : "https://wa.me/5491157653009?text=Hola,%20quiero%20agendar%20un%20diagnóstico%20estratégico"
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center rounded-xl bg-[#00FF87] hover:bg-[#00e578] px-6 py-3.5 text-xs sm:text-sm font-extrabold uppercase tracking-wider text-[#090A0F] transition-all shadow-lg shadow-[#00FF87]/20 text-center"
            >
              Agendar Diagnóstico Estratégico
            </motion.a>

            <a
              href="#calculadora"
              className="inline-flex items-center justify-center rounded-xl border border-[#222838] bg-[#12151E] hover:border-[#7C3AED] hover:text-[#A855F7] px-6 py-3.5 text-xs sm:text-sm font-bold text-white transition-all text-center"
            >
              Calcular Pérdida de Ingresos →
            </a>
          </div>

          <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-[#12151E] border border-[#222838] px-3.5 py-2 text-xs text-[#94A3B8]">
            <span className="flex h-2 w-2 rounded-full bg-[#00FF87] shrink-0 animate-pulse" />
            <span>
              <strong className="text-white font-semibold">Garantía de rendimiento:</strong> Si no aumentamos la conversión de tus presupuestos en 60 días, trabajamos gratis.
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}

export default Hero