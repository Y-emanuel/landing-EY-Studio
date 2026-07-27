import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useState, useRef } from 'react'
import { whatsappLink } from '../content/constants'

// ============================================================
// ENLACES DE NAVEGACIÓN
// ============================================================
const navLinks: [string, string][] = [
  ['Beneficios', '#beneficios'],
  ['Casos de Éxito', '#casos'],
  ['Precios', '#precios'],
  ['FAQ', '#faq'],
]

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function Header() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(navLinks[0]?.[0] || 'Beneficios')

  const headerRef = useRef<HTMLElement>(null)
  const cursorX = useMotionValue(0)
  const cursorY = useMotionValue(0)
  const springConfig = { damping: 25, stiffness: 150 }
  const glowX = useSpring(cursorX, springConfig)
  const glowY = useSpring(cursorY, springConfig)

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect()
    cursorX.set(e.clientX - rect.left)
    cursorY.set(e.clientY - rect.top)
  }

  const handleMouseLeave = () => {
    cursorX.set(-1000)
    cursorY.set(-1000)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4 animate-header animate-border-pulse"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-7xl rounded-2xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-sm shadow-black/5 transition-shadow duration-300 hover:shadow-violet-pulse/5 relative overflow-hidden">
        {/* Glow que sigue al mouse */}
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          style={{
            background: `radial-gradient(circle at ${glowX}px ${glowY}px, rgba(167,139,250, 0.04), transparent 60%)`,
          }}
        />

        <div className="flex items-center justify-between px-3 py-2 md:px-5 md:py-2.5">
          {/* Logo */}
          <a
            href="#hero"
            className="group flex items-center gap-2 text-sm font-semibold tracking-[0.28em] text-white whitespace-nowrap"
            onClick={() => setOpen(false)}
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              <span className="absolute h-3.5 w-3.5 rounded-full bg-violet-haze/20 blur-sm transition-opacity group-hover:opacity-80" />
              <span className="relative h-2 w-2 rounded-full bg-violet-haze shadow-glow" />
            </span>
            EY STUDIO
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-0.5 relative">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setActiveLink(label)}
                className="relative px-3 py-1.5 text-sm font-medium text-white/60 hover:text-white transition-colors z-10 rounded-lg whitespace-nowrap"
              >
                {label}
                {activeLink === label && (
                  <motion.span
                    layoutId="activeNavIndicator"
                    className="absolute inset-0 bg-white/10 rounded-lg -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </nav>

          {/* Acciones derecha */}
          <div className="flex items-center gap-2">
            {/* Badge de disponibilidad */}
            <span className="hidden items-center gap-1.5 rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] text-emerald-400 sm:flex">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Cupos Limitados · Beta
            </span>

            {/* Botón CTA */}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              whileHover={{ y: -1, scale: 1.01 }}
              whileTap={{ scale: 0.97 }}
              className="flex min-h-10 items-center rounded-full bg-gradient-to-r from-violet-haze to-violet-pulse px-4 text-sm font-medium text-white shadow-sm shadow-violet-haze/10 transition-all hover:shadow-violet-haze/20 whitespace-nowrap"
            >
              Solicitar Plan
            </motion.a>

            {/* Hamburguesa (Mobile) */}
            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
              className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.045] text-white transition hover:border-violet-haze/50 hover:bg-white/[0.08] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
            >
              <span className="relative block h-3 w-3.5">
                <motion.span
                  animate={{ y: open ? 5 : 0, rotate: open ? 45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute left-0 top-0 h-[1.5px] w-full bg-white"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                  className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white"
                />
                <motion.span
                  animate={{ y: open ? -5 : 0, rotate: open ? -45 : 0 }}
                  transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
                  className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Menú Mobile */}
        <motion.nav
          initial={false}
          animate={{ height: open ? 'auto' : 0 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="overflow-hidden border-t border-white/[0.06] bg-white/5 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-4 py-4 space-y-2">
            {navLinks.map(([label, href]) => (
              <motion.a
                key={label}
                href={href}
                onClick={() => {
                  setOpen(false)
                  setActiveLink(label)
                }}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10 }}
                transition={{ delay: open ? 0.05 * (navLinks.indexOf([label, href]) + 1) : 0 }}
                className="flex items-center gap-3 rounded-xl px-4 py-3 text-sm text-white/70 hover:bg-white/10 hover:text-white transition-colors"
              >
                <span className="w-1 h-1 rounded-full bg-violet-haze/40" />
                {label}
                {activeLink === label && (
                  <span className="ml-auto text-xs text-violet-haze">●</span>
                )}
              </motion.a>
            ))}
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: open ? 1 : 0, x: open ? 0 : -10 }}
              transition={{ delay: open ? 0.05 * (navLinks.length + 1) : 0 }}
              className="mt-2 flex items-center justify-center rounded-full bg-emerald-500/20 px-4 py-3 text-sm font-medium text-emerald-400 ring-1 ring-emerald-500/30"
              onClick={() => setOpen(false)}
            >
              💬 Contactar por WhatsApp
            </motion.a>
          </div>
        </motion.nav>
      </div>
    </header>
  )
}