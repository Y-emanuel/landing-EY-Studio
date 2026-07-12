import { motion, useScroll, useTransform } from 'framer-motion'
import { useState } from 'react'
import { navLinks, whatsappLink } from '../content/data'
import { easePremium } from '../lib/motion'

export function Header() {
  const [open, setOpen] = useState(false)
  const { scrollY } = useScroll()

  // Transición suave de un header "flotante" a uno con más presencia (blur/fondo) al scrollear.
  const headerBg = useTransform(scrollY, [0, 120], ['rgba(5,5,7,0.35)', 'rgba(5,5,7,0.82)'])
  const headerBorder = useTransform(scrollY, [0, 120], ['rgba(255,255,255,0.02)', 'rgba(255,255,255,0.07)'])
  const headerBlur = useTransform(scrollY, [0, 120], ['blur(6px)', 'blur(20px)'])
  const headerPadding = useTransform(scrollY, [0, 120], ['18px', '12px'])

  return (
    <motion.header
      style={{
        backgroundColor: headerBg,
        borderColor: headerBorder,
        backdropFilter: headerBlur,
        WebkitBackdropFilter: headerBlur,
      }}
      className="fixed inset-x-0 top-0 z-50 border-b"
    >
      <motion.div
        style={{ paddingTop: headerPadding, paddingBottom: headerPadding }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
      >
        <a href="#top" className="text-sm font-semibold tracking-[0.28em] text-white" onClick={() => setOpen(false)}>
          EY STUDIO
        </a>

        <nav className="hidden items-center gap-8 text-sm text-white/68 md:flex">
          {navLinks.map(([label, href]) => (
            <a
              key={label}
              className="rounded transition hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
              href={href}
            >
              {label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            whileHover={{ y: -1 }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border border-violet-haze/35 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white backdrop-blur transition-colors hover:border-violet-haze hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            Presupuesto
          </motion.a>

          <button
            type="button"
            aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.1] bg-white/[0.045] text-white transition hover:border-violet-haze/50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink md:hidden"
          >
            <span className="relative block h-3.5 w-4">
              <motion.span
                animate={{ y: open ? 6 : 0, rotate: open ? 45 : 0 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="absolute left-0 top-0 h-[1.5px] w-4 bg-white"
              />
              <motion.span
                animate={{ opacity: open ? 0 : 1 }}
                transition={{ duration: 0.2 }}
                className="absolute left-0 top-1/2 h-[1.5px] w-4 -translate-y-1/2 bg-white"
              />
              <motion.span
                animate={{ y: open ? -6 : 0, rotate: open ? -45 : 0 }}
                transition={{ duration: 0.25, ease: easePremium }}
                className="absolute bottom-0 left-0 h-[1.5px] w-4 bg-white"
              />
            </span>
          </button>
        </div>
      </motion.div>

      <nav
        id="mobile-nav"
        className={`grid overflow-hidden border-t border-white/[0.06] bg-ink/95 px-5 backdrop-blur-2xl transition-[grid-template-rows] duration-300 ease-out md:hidden ${open ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
          }`}
      >
        <div className="min-h-0">
          <motion.div
            animate={{ opacity: open ? 1 : 0 }}
            transition={{ duration: 0.2, delay: open ? 0.08 : 0 }}
            className="flex flex-col py-2"
          >
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                onClick={() => setOpen(false)}
                className="border-b border-white/[0.05] py-3 text-sm text-white/72 last:border-b-0"
              >
                {label}
              </a>
            ))}
          </motion.div>
        </div>
      </nav>
    </motion.header>
  )
}
