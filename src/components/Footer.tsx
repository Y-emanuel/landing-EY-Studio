import React from 'react'
import { Reveal } from './motion/Reveal'
import { whatsappLink, instagramLink, emailLink } from '../content/constants'

const footerNavLinks = [
  { label: 'El Problema', targetId: 'problema' },
  { label: 'Calculadora ROI', targetId: 'calculadora' },
  { label: 'Nuestro Sistema', targetId: 'sistema' },
  { label: 'Planes', targetId: 'precios' },
  { label: 'FAQ', targetId: 'faq' },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollToTop = (e: React.MouseEvent) => {
    e.preventDefault()
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  const handleScrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      const yOffset = -90
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset
      window.scrollTo({ top: y, behavior: 'smooth' })
    }
  }

  return (
    <footer className="relative border-t border-[#222838] bg-[#090A0F] px-5 py-12 sm:px-8 lg:px-10">
      {/* Resplandor decorativo de fondo */}
      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-full max-w-4xl -translate-x-1/2 bg-[#7C3AED]/10 blur-[120px]" />

      <div className="mx-auto max-w-7xl">
        <Reveal as="div" className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between">
          
          {/* Marca */}
          <div className="max-w-md">
            <a
              href="#hero"
              onClick={handleScrollToTop}
              className="group inline-flex items-center gap-2 font-outfit text-lg font-extrabold tracking-[0.18em] text-white transition-opacity hover:opacity-80"
            >
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7C3AED] opacity-75" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#7C3AED]" />
              </span>
              <span>EY STUDIO</span>
              <span className="text-[10px] text-[#A855F7] font-extrabold bg-[#7C3AED]/15 px-2 py-0.5 rounded-full border border-[#7C3AED]/40 shadow-[0_0_10px_rgba(124,58,237,0.3)]">
                DENTAL
              </span>
            </a>

            <p className="mt-4 text-xs sm:text-sm leading-relaxed text-[#94A3B8]">
              Diseño y desarrollo de embudos digitales automatizados para clínicas y consultorios odontológicos enfocados en captación directa y alta conversión.
            </p>

            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-[#00FF87]/10 px-3 py-1 text-[11px] font-bold text-[#00FF87] border border-[#00FF87]/20">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00FF87] animate-pulse" />
              Sistemas Activos · Argentina & LATAM
            </div>
          </div>

          {/* Navegación y Conexiones */}
          <div className="grid grid-cols-2 gap-8 sm:gap-12 md:flex md:items-start md:gap-16">
            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]/60">
                Navegación
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                {footerNavLinks.map((link) => (
                  <li key={link.targetId}>
                    <a
                      href={`#${link.targetId}`}
                      onClick={(e) => handleScrollToSection(e, link.targetId)}
                      className="text-[#94A3B8] transition-colors duration-200 hover:text-white cursor-pointer"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-[#94A3B8]/60">
                Canales
              </span>
              <ul className="mt-4 space-y-2.5 text-xs sm:text-sm">
                <li>
                  <a
                    href={
                      whatsappLink && whatsappLink.startsWith('http')
                        ? whatsappLink
                        : "https://wa.me/5491157653009"
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] transition-colors duration-200 hover:text-white"
                  >
                    WhatsApp Directo
                  </a>
                </li>
                <li>
                  <a
                    href={instagramLink || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#94A3B8] transition-colors duration-200 hover:text-white"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href={emailLink || 'mailto:contacto@eystudio.com'}
                    className="text-[#94A3B8] transition-colors duration-200 hover:text-white"
                  >
                    Email Comercial
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </Reveal>

        {/* Copyright */}
        <div className="mt-12 border-t border-[#222838] pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-[11px] text-[#94A3B8]/80 sm:flex-row">
            <p>© {currentYear} EY Studio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white">
                Política de Privacidad
              </a>
              <a href="#" className="transition hover:text-white">
                Términos del Servicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer