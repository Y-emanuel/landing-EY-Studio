import { motion } from 'framer-motion'
import studioHero from '../assets/ey-studio-hero.png'
import { proofStats } from '../content/data'
import { AnimatedCounter } from './motion/AnimatedCounter'
import { staggerContainer, slideUp, scaleIn } from '../lib/motion'
import { CTAButtons } from './ui'

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
            alt="Visual abstracto de EY Studio"
            className="h-[420px] w-full object-cover opacity-85"
          />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.08),rgba(5,5,7,0.84)),radial-gradient(circle_at_72%_20%,rgba(167,139,250,0.22),transparent_18rem)]" />
        </div>

        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="absolute left-8 top-8 rounded-2xl border border-white/[0.08] bg-black/40 px-4 py-3 backdrop-blur-xl"
        >
          <p className="text-xs uppercase tracking-[0.22em] text-violet-haze">
            Mobile first
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.62, duration: 0.5 }}
          className="absolute bottom-8 left-8 right-8 rounded-[1.35rem] border border-white/[0.09] bg-[#08070d]/82 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl"
        >
          <div className="flex items-center justify-between gap-4">
            <p className="text-sm font-semibold text-white">Sistema de conversión</p>
            <span className="rounded-full bg-violet-pulse/20 px-3 py-1 text-xs text-violet-haze">
              5–10 días
            </span>
          </div>
          <p className="mt-3 text-sm leading-6 text-white/58">
            Diseño premium, mensaje claro y contacto directo por WhatsApp.
          </p>
          <div className="mt-4 grid grid-cols-3 gap-2">
            {['Web', 'WhatsApp', 'SEO'].map((item) => (
              <span
                key={item}
                className="rounded-xl bg-white/[0.06] px-3 py-2 text-center text-xs text-white/64"
              >
                {item}
              </span>
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
      <div className="absolute inset-0">
        <img src={studioHero} alt="" className="h-full w-full object-cover opacity-28" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_82%_15%,rgba(139,92,246,0.34),transparent_32rem),linear-gradient(90deg,#050507_0%,rgba(5,5,7,0.96)_48%,rgba(5,5,7,0.74)_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-ink to-transparent" />
      </div>

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
            DISEÑO WEB PREMIUM · ARGENTINA Y LATAM
          </motion.div>
          <motion.h1
            variants={slideUp}
            className="max-w-5xl text-4xl font-semibold leading-[1.04] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
          >
            Páginas web premium para negocios que quieren vender más.
          </motion.h1>
          <motion.p
            variants={slideUp}
            className="mt-7 max-w-2xl text-lg leading-8 text-white/72 sm:text-xl sm:leading-9"
          >
            Diseñamos landing pages y sitios web que ordenan tu oferta, elevan tu marca y llevan al cliente directo a consultarte por WhatsApp.
          </motion.p>
          <motion.div variants={slideUp} className="mt-10">
            <CTAButtons />
          </motion.div>

          <motion.div
            variants={slideUp}
            className="mt-9 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4"
          >
            {proofStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-2xl border border-white/[0.07] bg-white/[0.045] px-4 py-4 backdrop-blur"
              >
                <p className="text-lg font-semibold text-white">
                  {stat.value === '100%' ? <AnimatedCounter value={100} suffix="%" /> : stat.value}
                </p>
                <p className="mt-1 text-sm text-white/48">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>

        <HeroVisual />
      </motion.div>
    </section>
  )
}
