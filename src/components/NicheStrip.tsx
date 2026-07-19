import { niches } from '../content/data'
import { Reveal } from './motion/Reveal'
import { SectionLabel } from './ui'

export function NicheStrip() {
  return (
    <section className="relative border-b border-white/[0.08] bg-ink px-5 py-14 sm:px-8 sm:py-18 lg:px-10">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-haze/45 to-transparent" />
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <Reveal>
          <SectionLabel>Para negocios de Argentina y LATAM</SectionLabel>
          <h2 className="mt-5 max-w-2xl font-display text-3xl font-medium leading-tight tracking-[-0.015em] text-white sm:text-5xl">
            Una web profesional cambia cómo te perciben antes de que te <span className="text-violet-haze">escriban</span>.
          </h2>
        </Reveal>
        <Reveal delay={0.1} className="rounded-[1.5rem] border border-white/[0.07] bg-gradient-to-br from-white/[0.07] to-white/[0.025] p-6 shadow-2xl shadow-black/20 backdrop-blur sm:p-8">
          <p className="max-w-2xl text-lg leading-9 text-white/66">
            Si tu negocio depende solo de Instagram, Facebook o recomendaciones, estás dejando oportunidades sobre la mesa. Una landing clara hace que tus servicios se vean profesionales, ordenados y listos para generar consultas.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            {niches.map((item) => (
              <span
                key={item}
                className="group relative rounded-full bg-black/28 px-4 py-2 text-sm text-white/70 ring-1 ring-white/[0.07] transition-all hover:bg-violet-pulse/20 hover:text-white hover:ring-violet-haze/50"
              >
                {item}
                <span className="absolute -right-1 -top-1 h-2 w-2 rounded-full bg-emerald-400 shadow-glow opacity-0 transition-opacity group-hover:opacity-100" />
              </span>
            ))}
          </div>
          <p className="mt-4 text-center text-xs text-white/30">
            ✅ Nichos con alta demanda · Si no ves el tuyo, <a href="#contacto" className="text-violet-haze hover:underline">preguntanos</a>
          </p>
        </Reveal>
      </div>
    </section>
  )
}