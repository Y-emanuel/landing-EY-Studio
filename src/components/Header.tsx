import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import { whatsappLink } from '../content/constants'

interface NavLinkItem {
  label: string
  targetId: string
}

const navLinks: NavLinkItem[] = [
  { label: 'El Problema', targetId: 'problema' },
  { label: 'Calculadora ROI', targetId: 'calculadora' },
  { label: 'Nuestro Sistema', targetId: 'sistema' },
  { label: 'Planes', targetId: 'precios' },
  { label: 'FAQ', targetId: 'faq' },
]

export function Header() {
  const [open, setOpen] = useState(false)
  const [activeLink, setActiveLink] = useState(navLinks[0]?.label || 'El Problema')

  const headerRef = useRef<HTMLElement>(null)

  // Desplazamiento al inicio de la página
  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    setOpen(false)
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  // Desplazamiento suave a las secciones por ID
  const handleScrollToSection = (e: React.MouseEvent, targetId: string, label: string) => {
    e.preventDefault()
    setOpen(false)
    setActiveLink(label)

    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -90 // Offset para evitar que el header flotante tape la sección
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-3 left-0 right-0 z-50 flex justify-center px-3 sm:px-4"
    >
      <div className="w-full max-w-7xl rounded-2xl border border-[#222838] bg-[#090A0F]/80 backdrop-blur-xl shadow-2xl relative overflow-hidden">
        
        <div className="flex items-center justify-between px-3 py-2 sm:px-6 sm:py-2.5">
          {/* LOGO */}
          <a
            href="#hero"
            onClick={handleScrollToTop}
            className="group flex items-center gap-2 text-xs sm:text-sm font-bold tracking-[0.2em] text-white whitespace-nowrap cursor-pointer"
          >
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#A855F7] opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]" />
            </span>
            <span>EY <span className="text-[#A855F7]">STUDIO</span></span>
            <span className="text-[9px] text-[#A855F7] font-extrabold bg-[#7C3AED]/15 px-1.5 py-0.5 rounded border border-[#7C3AED]/30 uppercase">
              DENTAL
            </span>
          </a>

          {/* Menú Desktop */}
          <nav className="hidden md:flex items-center gap-1 relative">
            {navLinks.map(({ label, targetId }) => {
              const isActive = activeLink === label;
              return (
                <a
                  key={label}
                  href={`#${targetId}`}
                  onClick={(e) => handleScrollToSection(e, targetId, label)}
                  className={`relative px-3 py-1.5 text-xs font-semibold transition-colors rounded-lg whitespace-nowrap cursor-pointer ${
                    isActive ? 'text-white' : 'text-[#94A3B8] hover:text-[#00E5FF]'
                  }`}
                >
                  <span className="relative z-10">{label}</span>
                  {isActive && (
                    <motion.span
                      layoutId="activeNavIndicator"
                      className="absolute inset-0 bg-[#12151E] border border-[#7C3AED]/50 rounded-lg z-0 shadow-[0_0_15px_rgba(124,58,237,0.25)]"
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* ACCIONES Y BOTÓN DE MENÚ */}
          <div className="flex items-center gap-2 sm:gap-3">
            <span className="hidden lg:flex items-center gap-1.5 rounded-full bg-[#7C3AED]/10 px-2.5 py-1 text-[11px] font-bold text-[#A855F7] border border-[#7C3AED]/30">
              <span className="h-1.5 w-1.5 rounded-full bg-[#A855F7] animate-pulse" />
              Sistemas Activos · LATAM
            </span>

            <motion.a
              href={
                whatsappLink && whatsappLink.startsWith('http')
                  ? whatsappLink
                  : "https://wa.me/5491157653009?text=Hola,%20quiero%20consultar%20disponibilidad"
              }
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="flex min-h-8 sm:min-h-9 items-center rounded-xl bg-[#00FF87] hover:bg-[#00e578] px-3 sm:px-4 text-[11px] sm:text-xs font-extrabold text-[#090A0F] uppercase tracking-wider transition-all whitespace-nowrap shadow-lg shadow-[#00FF87]/20"
            >
              Consultar Disponibilidad
            </motion.a>

            {/* Menú Hamburguesa en Móvil */}
            <button
              type="button"
              aria-label={open ? 'Cerrar menú' : 'Abrir menú'}
              onClick={() => setOpen((v) => !v)}
              className="flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-xl border border-[#222838] bg-[#12151E] text-white md:hidden shrink-0 cursor-pointer"
            >
              <span className="relative block h-3 w-3.5">
                <motion.span
                  animate={{ y: open ? 5 : 0, rotate: open ? 45 : 0 }}
                  className="absolute left-0 top-0 h-[1.5px] w-full bg-white"
                />
                <motion.span
                  animate={{ opacity: open ? 0 : 1 }}
                  className="absolute left-0 top-1/2 h-[1.5px] w-full -translate-y-1/2 bg-white"
                />
                <motion.span
                  animate={{ y: open ? -5 : 0, rotate: open ? -45 : 0 }}
                  className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white"
                />
              </span>
            </button>
          </div>
        </div>

        {/* Desplegable Móvil */}
        <motion.nav
          initial={false}
          animate={{ height: open ? 'auto' : 0 }}
          className="overflow-hidden border-t border-[#222838] bg-[#090A0F]/95 md:hidden"
        >
          <div className="flex flex-col px-4 py-3 space-y-1">
            {navLinks.map(({ label, targetId }) => (
              <a
                key={label}
                href={`#${targetId}`}
                onClick={(e) => handleScrollToSection(e, targetId, label)}
                className={`px-3 py-2 text-xs sm:text-sm transition-colors rounded-lg cursor-pointer ${
                  activeLink === label
                    ? 'text-white bg-[#12151E] font-bold border border-[#7C3AED]/40'
                    : 'text-[#94A3B8] hover:text-white hover:bg-[#12151E]'
                }`}
              >
                {label}
              </a>
            ))}
          </div>
        </motion.nav>
      </div>
    </header>
  )
}

export default Header