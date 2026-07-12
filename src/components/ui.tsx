import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { whatsappLink } from '../content/data'
import { easePremium } from '../lib/motion'

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-xs font-semibold uppercase tracking-[0.34em] text-violet-haze">
      {children}
    </p>
  )
}

export function SectionHeader({
  label,
  title,
  text,
}: {
  label: string
  title: string
  text?: string
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-[-0.035em] text-white sm:text-5xl">
        {title}
      </h2>
      {text ? (
        <p className="mt-5 text-base leading-8 text-white/62 sm:text-lg">
          {text}
        </p>
      ) : null}
    </div>
  )
}

/**
 * Link con dos microinteracciones sutiles:
 * - "Magnético": sigue levemente al cursor dentro del propio botón (desktop, mouse).
 * - "Shine": un brillo diagonal cruza el botón al pasar el mouse.
 * Ambas usan transform/opacity (no width/height/top/left) para no afectar performance.
 */
function MagneticLink({
  href,
  target,
  rel,
  className = '',
  shineTone = 'light',
  children,
}: {
  href: string
  target?: string
  rel?: string
  className?: string
  shineTone?: 'light' | 'dark'
  children: ReactNode
}) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 220, damping: 20, mass: 0.3 })
  const springY = useSpring(y, { stiffness: 220, damping: 20, mass: 0.3 })

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect()
    x.set((event.clientX - rect.left - rect.width / 2) * 0.16)
    y.set((event.clientY - rect.top - rect.height / 2) * 0.35)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      style={{ x: springX, y: springY }}
      className={`relative inline-flex items-center justify-center overflow-hidden ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        initial={{ x: '-130%' }}
        whileHover={{ x: '130%' }}
        transition={{ duration: 0.65, ease: easePremium }}
        className={`absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 ${shineTone === 'light' ? 'bg-white/25' : 'bg-black/10'
          }`}
      />
    </motion.a>
  )
}

export function CTAButtons({ compact = false }: { compact?: boolean }) {
  const size = compact ? 'min-h-12 px-6 py-3 text-sm' : 'min-h-14 px-7 py-4 text-base'

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <MagneticLink
        href={whatsappLink}
        target="_blank"
        rel="noreferrer"
        shineTone="dark"
        className={`rounded-full bg-white font-semibold text-ink shadow-glow transition-colors duration-300 hover:bg-violet-haze focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${size}`}
      >
        Quiero una web para mi negocio
      </MagneticLink>
      <MagneticLink
        href="#trabajos"
        shineTone="light"
        className={`rounded-full border border-white/[0.11] bg-white/[0.045] font-semibold text-white backdrop-blur transition-colors duration-300 hover:border-violet-haze/55 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink ${size}`}
      >
        Ver demos
      </MagneticLink>
    </div>
  )
}
