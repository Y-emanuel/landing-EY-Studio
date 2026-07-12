import { emailLink, instagramLink, navLinks, whatsappLink } from '../content/data'
import { Reveal } from './motion/Reveal'

export function Footer() {
  return (
    <footer className="border-t border-white/[0.08] bg-[#050507] px-5 py-10 sm:px-8 lg:px-10">
      <Reveal as="div" className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="text-sm font-semibold tracking-[0.28em] text-white">EY STUDIO</p>
          <p className="mt-4 max-w-md text-base leading-8 text-white/58">Diseño y desarrollo web para negocios que quieren crecer.</p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-3 text-base text-white/64 sm:flex sm:flex-wrap">
          {[...navLinks, ['FAQ', '#faq'] as [string, string]].map(([label, href]) => (
            <a key={label} className="transition hover:text-white" href={href}>{label}</a>
          ))}
        </div>
        <div className="grid grid-cols-1 gap-3 text-base text-white/64 sm:flex sm:flex-wrap sm:gap-x-5 sm:gap-y-3">
          <a className="transition hover:text-white" href={whatsappLink} target="_blank" rel="noreferrer">WhatsApp</a>
          <a className="transition hover:text-white" href={instagramLink} target="_blank" rel="noreferrer">Instagram</a>
          <a className="transition hover:text-white" href={emailLink}>Email</a>
        </div>
      </Reveal>
    </footer>
  )
}
