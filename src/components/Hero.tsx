import { motion } from 'framer-motion'
import studioHero from '../assets/ey-studio-hero.png'
import { proofStats } from '../content/data'
import { AnimatedCounter } from './motion/AnimatedCounter'
import { staggerContainer, slideUp, scaleIn } from '../lib/motion'
import { CTAButtons } from './ui'
import { ParallaxBackground } from './motion/ParallaxBackground'
import { FloatingOrbs } from './motion/FloatingOrbs'

// Iconos SVG para los stats
const statIcons: Record<string, React.ReactNode> = {
  calendar: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-haze">
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  ),
  mobile: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-violet-haze">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" fill="none" className="h-6 w-6">
      <path
        d="M12 2C6.48 2 2 6.48 2 12c0 1.93.56 3.72 1.55 5.25L2 22l4.75-1.55A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z"
        fill="#25D366"
      />
      <path
        d="M17.1 14.4c-.3-.15-1.7-.85-1.95-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.95 1.15-.2.2-.4.2-.7.05-1.2-.6-2.2-1.5-2.9-2.5-.2-.3-.3-.6-.3-.8 0-.2.1-.4.2-.6.1-.2.2-.4.25-.6.05-.2 0-.4-.05-.6-.05-.2-.45-1.1-.65-1.5-.2-.4-.35-.4-.5-.4h-.45c-.15 0-.4.05-.6.25-.2.2-.8.8-.8 1.95s.85 2.3.95 2.45c.1.15 1.65 2.5 4 3.45.55.2 1.05.35 1.45.45.6.2 1.15.15 1.6.1.5-.05 1.5-.6 1.7-1.2.2-.6.2-1.1.15-1.2-.05-.1-.15-.15-.3-.2z"
        fill="white"
      />
    </svg>
  ),
  seo: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-cyan-400">
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
      <path d="M11 8v3l2 2" />
    </svg>
  ),
}

function HeroVisual() {
  return (
    <motion.div variants={scaleIn} className="relative mx-auto w-full max-w-[630px]">
      <motion.div
        animate={{ opacity: [0.55, 0.85, 0.55] }}
        transition={{ duration: 9, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -left-10 top-10 h-48 w-48 rounded-full bg-violet-pulse/20 blur-3xl"
      />
      <motion.div
        animate={{ opacity: [0.85, 0.55, 0.85] }}
        transition={{ duration: 11, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -right-6 bottom-8 h-64 w-64 rounded-full bg-violet-deep/55 blur-3xl"
      />

      <div className="relative overflow-hidden rounded-[2rem] border border-white/[0.08] bg-[#0b0a12]/90 p-3 shadow-2xl shadow-violet-pulse/20 backdrop-blur-xl">
        <div className="relative overflow-hidden rounded-[1.5rem]">
          <img
            src={studioHero}
            alt="Mockup de landing page profesional"
            className="h-[420px] w-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.08),rgba(5,5,7,0.84)),radial-gradient(circle_at_72%_20%,rgba(167,139,250,0.22),transparent_18rem)]" />
          
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="absolute left-6 top-6 rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-violet-haze">📱 100% Responsive</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            className="absolute right-6 top-6 rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl"
          >
            <p className="text-xs uppercase tracking-[0.22em] text-green-400">💬 WhatsApp Directo</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
          className="absolute bottom-6 left-6 right-6 rounded-[1.35rem] border border-white/[0.09] bg-[#08070d]/82 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white">📄 Landing Page Profesional</p>
            <span className="rounded-full bg-violet-pulse/20 px-3 py-1 text-xs text-violet-haze">Entrega 5–10 días</span>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/70">Diseño que guía al cliente directo a tu WhatsApp.</p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Diseño Premium', 'SEO Básico', 'Sin comisiones'].map((item) => (
              <span key={item} className="rounded-xl bg-white/[0.06] px-3 py-2 text-center text-xs text-white/70">{item}</span>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/[0.08]">
      {/* Fondo con parallax */}
      <ParallaxBackground image={studioHero} speed={0.3} className="opacity-100" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(139,92,246,0.34),transparent_32rem),linear-gradient(90deg,#050507_0%,rgba(5,5,7,0.96)_48%,rgba(5,5,7,0.74)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
      
      {/* Orbes flotantes decorativos */}
      <FloatingOrbs />

      <motion.div
        id="top"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
        className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10"
      >
        <div className="max-w-4xl">
          <motion.div
            variants={slideUp}
            className="mb-8 inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.045] px-4 py-2 text-xs uppercase tracking-[0.28em] text-violet-haze backdrop-blur"
          >
            ⚡ DISEÑO WEB PREMIUM · ARGENTINA Y LATAM
          </motion.div>

          <motion.h1
            variants={slideUp}
            className="max-w-5xl font-display text-4xl font-medium leading-[1.05] tracking-[-0.01em] text-white sm:text-6xl lg:text-7xl"
          >
            Convertí cada visita en <span className="italic text-violet-haze">un mensaje de WhatsApp</span>
          </motion.h1>

          <motion.p
            variants={slideUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9"
          >
            Diseño profesional, integración directa con WhatsApp y entrega en 5 días.
            <span className="font-semibold text-white"> Desde USD 150</span>, sin costos ocultos.
          </motion.p>

          <motion.div variants={slideUp} className="mt-10">
            <CTAButtons primaryLabel="Quiero mi landing →" />
          </motion.div>

          <motion.p variants={slideUp} className="mt-4 text-sm text-white/40">
            ✅ Sin permanencia · Precio fijo · Garantía de satisfacción
          </motion.p>

          {/* Stats en grid 2x2 */}
          <motion.div variants={slideUp} className="mt-11 grid grid-cols-2 gap-3 max-w-2xl">
            {proofStats.map((stat) => {
              const bgColor = stat.icon === 'whatsapp' ? 'bg-emerald-500/20' : stat.icon === 'seo' ? 'bg-cyan-500/20' : 'bg-violet-haze/20'
              return (
                <div
                  key={stat.label}
                  className="group flex items-center gap-3 rounded-xl border border-white/[0.07] bg-white/[0.04] px-3 py-2.5 transition-all hover:bg-white/[0.07] hover:border-violet-haze/40 hover:shadow-lg hover:shadow-violet-pulse/5"
                >
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor}`}>
                    {statIcons[stat.icon as keyof typeof statIcons] || null}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white sm:text-base">
                      {stat.value === '100%' ? <AnimatedCounter value={100} suffix="%" /> : stat.value}
                    </p>
                    <p className="text-[10px] uppercase tracking-wider text-white/50 sm:text-xs">{stat.label}</p>
                  </div>
                </div>
              )
            })}
          </motion.div>
        </div>

        <HeroVisual />
      </motion.div>
    </section>
  )
}