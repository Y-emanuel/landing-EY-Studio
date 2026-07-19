import { emailLink, instagramLink, navLinks, whatsappLink } from '../content/data'
import { Reveal } from './motion/Reveal'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] px-5 py-10 sm:px-8 lg:px-10">
      <Reveal as="div" className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.28em] text-white">EY STUDIO</p>
          <p className="mt-3 max-w-md text-sm leading-7 text-white/50">
            Diseño y desarrollo web para negocios que quieren crecer.
          </p>
          <p className="mt-1 text-xs text-white/30">
            Hecho con ❤️ en Argentina · {currentYear}
          </p>
        </div>

        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-12">
          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30">Navegación</span>
            <div className="mt-3 grid grid-cols-2 gap-x-6 gap-y-2 text-sm text-white/50 sm:flex sm:flex-wrap sm:gap-x-5">
              {[...navLinks, ['FAQ', '#faq'] as [string, string]].map(([label, href]) => (
                <a key={label} className="transition hover:text-white hover:underline" href={href}>
                  {label}
                </a>
              ))}
            </div>
          </div>

          <div>
            <span className="text-xs uppercase tracking-[0.2em] text-white/30">Conecta</span>
            <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm text-white/50">
              <a className="transition hover:text-white hover:underline" href={whatsappLink} target="_blank" rel="noreferrer">
                WhatsApp
              </a>
              <a className="transition hover:text-white hover:underline" href={instagramLink} target="_blank" rel="noreferrer">
                Instagram
              </a>
              <a className="transition hover:text-white hover:underline" href={emailLink}>
                Email
              </a>
            </div>
          </div>
        </div>
      </Reveal>

      {/* Línea divisoria y enlaces legales */}
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/[0.06] pt-6">
        <div className="flex flex-col items-center justify-between gap-4 text-xs text-white/30 sm:flex-row">
          <p>© {currentYear} EY Studio. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white/60 hover:underline">
              Política de Privacidad
            </a>
            <a href="#" className="hover:text-white/60 hover:underline">
              Términos y condiciones
            </a>
          </div>
        </div>
        <div className="mt-3 text-center text-[10px] text-white/20">
          Diseñado con pasión para emprendedores de Argentina y LATAM.
        </div>
      </div>
    </footer>
  )
}