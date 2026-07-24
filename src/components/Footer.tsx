import { Reveal } from './motion/Reveal'
import { whatsappLink, instagramLink, emailLink } from '../content/constants'

// ============================================================
// ENLACES DE NAVEGACIÓN PARA EL FOOTER (mapeo a secciones reales)
// ============================================================
const footerNavLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Beneficios', href: '#servicios' },
  { label: 'Casos de Éxito', href: '#trabajos' },
  { label: 'Precios', href: '#paquetes' },
  { label: 'FAQ', href: '#faq' },
]

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/10 bg-[#050507] px-5 py-10 sm:px-8 lg:px-10">
      <div className="mx-auto max-w-7xl">
        {/* Bloque principal (Reveal animado) */}
        <Reveal as="div" className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Columna izquierda: Marca */}
          <div>
            <p className="text-sm font-semibold tracking-[0.28em] text-white">EY STUDIO</p>
            <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
              Diseño y desarrollo web enfocado en conversión para clínicas y consultorios odontológicos.
            </p>
            <p className="mt-1 text-xs text-white/30">
              Hecho con ❤️ en Argentina · {currentYear}
            </p>
          </div>

          {/* Columna derecha: Navegación y Contactos */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-12">
            {/* Grupo 1: Navegación */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Navegación
              </span>
              <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/50 sm:flex sm:flex-wrap sm:gap-x-5">
                {footerNavLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="transition duration-200 hover:text-white hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Grupo 2: Conecta / Redes Sociales */}
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-white/30">
                Conecta
              </span>
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-200 hover:text-white hover:underline"
                >
                  WhatsApp
                </a>
                <a
                  href={instagramLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition duration-200 hover:text-white hover:underline"
                >
                  Instagram
                </a>
                <a
                  href={emailLink}
                  className="transition duration-200 hover:text-white hover:underline"
                >
                  Email
                </a>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Franja inferior (Copyright & Legal) */}
        <div className="mx-auto mt-10 max-w-7xl border-t border-white/10 pt-6">
          <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/30 sm:flex-row">
            <p>© {currentYear} EY Studio. Todos los derechos reservados.</p>
            <div className="flex gap-6">
              <a href="#" className="transition hover:text-white hover:underline">
                Política de Privacidad
              </a>
              <a href="#" className="transition hover:text-white hover:underline">
                Términos y condiciones
              </a>
            </div>
          </div>
          <div className="mt-3 text-center text-[10px] text-white/20">
            Diseñado con pasión para emprendedores y profesionales de Argentina y LATAM.
          </div>
        </div>
      </div>
    </footer>
  )
}