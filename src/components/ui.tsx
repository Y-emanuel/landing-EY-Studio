import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'
import { whatsappLink } from '../content/constants'
import { easePremium } from '../lib/motion'

export function SectionLabel({ children }: { children: string }) {
  return (
    <p className="inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.34em] text-[#00E5FF]">
      <span aria-hidden="true" className="inline-block h-3 w-[2px] -skew-x-[22deg] bg-[#00E5FF] shadow-[0_0_8px_#00E5FF]" />
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
    <div className="mx-auto max-w-3xl text-center mb-12">
      <SectionLabel>{label}</SectionLabel>
      <h2 className="mt-3 font-outfit text-3xl font-extrabold text-white sm:text-5xl leading-tight">
        {title}
      </h2>
      {text ? (
        <p className="mt-4 text-sm sm:text-base text-[#94A3B8] leading-relaxed">
          {text}
        </p>
      ) : null}
    </div>
  )
}

function MagneticLink({
  href,
  target,
  rel,
  className = '',
  children,
}: {
  href: string
  target?: string
  rel?: string
  className?: string
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
      className={`relative inline-flex items-center justify-center overflow-hidden cursor-pointer ${className}`}
    >
      <span className="relative z-10">{children}</span>
      <motion.span
        aria-hidden="true"
        initial={{ x: '-130%' }}
        whileHover={{ x: '130%' }}
        transition={{ duration: 0.65, ease: easePremium }}
        className="absolute inset-y-0 left-0 z-0 w-1/3 -skew-x-12 bg-white/20 pointer-events-none"
      />
    </motion.a>
  )
}

export function CTAButtons({
  compact = false,
  primaryLabel = 'Consultar Disponibilidad',
}: {
  compact?: boolean
  primaryLabel?: string
}) {
  const size = compact ? 'min-h-11 px-6 py-2.5 text-xs' : 'min-h-14 px-8 py-4 text-xs md:text-sm'

  return (
    <div className="flex flex-col gap-3 sm:flex-row justify-center items-center">
      <MagneticLink
        href={
          whatsappLink && whatsappLink.startsWith('http')
            ? whatsappLink
            : "https://wa.me/5491157653009"
        }
        target="_blank"
        rel="noreferrer"
        className={`rounded-xl bg-[#00FF87] hover:bg-[#00e578] font-extrabold uppercase tracking-wider text-[#090A0F] shadow-[0_0_25px_rgba(0,255,135,0.35)] transition-all duration-300 ${size}`}
      >
        {primaryLabel}
      </MagneticLink>
      <MagneticLink
        href="#precios"
        className={`rounded-xl border border-[#222838] bg-[#12151E] font-extrabold uppercase tracking-wider text-white hover:border-[#7C3AED] hover:text-[#A855F7] transition-all duration-300 ${size}`}
      >
        Ver Planes
      </MagneticLink>
    </div>
  )
}