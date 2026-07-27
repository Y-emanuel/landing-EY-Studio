import { CTAButtons } from './ui'
import { FloatingOrbs } from './motion/FloatingOrbs'

// ============================================================
// IMÁGENES DEL MOCKUP
// ============================================================
const clinicaMockupImage = '/assets/images/landing-clinica.webp'
const clinicaMockupImageMobile = '/assets/images/landing-clinica-movil.webp'

// ============================================================
// COMPONENTE HERO VISUAL (con animaciones CSS)
// ============================================================
function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[630px] animate-float">
      {/* VERSIÓN MÓVIL */}
      <div className="block sm:hidden">
        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[rgba(26,26,38,0.4)]">
          <div className="relative aspect-[370/647] w-full bg-[#0A0A0F]">
            <img
              src={clinicaMockupImageMobile}
              alt="Demo de landing page para Clínica Dental Sonrisa - EyStudio (móvil)"
              className="h-full w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={370}
              height={647}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F]/60 via-transparent to-transparent" />
            <div className="absolute left-2 top-2 rounded-xl border border-white/10 bg-black/60 px-2 py-1 backdrop-blur-sm">
              <p className="text-[8px] font-medium text-violet-haze">🦷 Demo · Clínica Dental</p>
            </div>
            <div className="absolute bottom-2 left-2 rounded-xl border border-white/10 bg-[rgba(26,26,38,0.7)] px-2 py-1.5 backdrop-blur-sm flex items-center gap-1">
              <svg className="h-3 w-3 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
              </svg>
              <span className="text-[10px] font-bold text-white">+30%</span>
              <span className="text-[8px] text-[#9CA3AF]">Pacientes</span>
            </div>
            <div className="absolute bottom-2 right-2 rounded-xl border border-white/10 bg-[rgba(26,26,38,0.7)] px-2 py-1.5 backdrop-blur-sm flex items-center gap-1">
              <svg className="h-3 w-3 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              <span className="text-[10px] font-bold text-white">-80%</span>
              <span className="text-[8px] text-[#9CA3AF]">No-shows</span>
            </div>
          </div>
          <div className="p-3">
            <div className="flex items-center justify-between">
              <p className="text-sm font-semibold text-white">🦷 Clínica Dental · Demo</p>
              <span className="rounded-full bg-violet-pulse/20 px-3 py-1 text-xs text-violet-haze">Ver proyecto</span>
            </div>
            <p className="mt-1 text-sm leading-5 text-white/70">Landing con sistema de turnos por WhatsApp para el sector odontológico.</p>
            <div className="mt-2 grid grid-cols-3 gap-1">
              {['Turnos 24/7', 'Recordatorios', 'Diseño premium'].map((item) => (
                <span key={item} className="rounded-xl bg-white/5 px-2 py-1 text-center text-[10px] text-[#9CA3AF] border border-white/5">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* VERSIÓN DESKTOP */}
      <div className="hidden sm:block">
        <div className="absolute -inset-8 rounded-full bg-[#7C3AED]/15 blur-3xl pointer-events-none" />

        <div className="absolute -right-4 -top-4 z-20 rounded-xl border border-white/10 bg-[rgba(26,26,38,0.7)] px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/30 flex items-center gap-2 animate-fadeInRight">
          <svg className="w-5 h-5 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
          </svg>
          <span className="text-sm font-bold text-white">+30%</span>
          <span className="text-xs text-[#9CA3AF]">Pacientes</span>
        </div>

        <div className="absolute -bottom-4 -left-4 z-20 rounded-xl border border-white/10 bg-[rgba(26,26,38,0.7)] px-4 py-2.5 backdrop-blur-xl shadow-lg shadow-black/30 flex items-center gap-2 animate-fadeInLeft">
          <svg className="w-5 h-5 text-[#25D366]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
          <span className="text-sm font-bold text-white">-80%</span>
          <span className="text-xs text-[#9CA3AF]">No-shows</span>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-[rgba(26,26,38,0.6)] p-3 shadow-2xl shadow-black/50 backdrop-blur-xl">
          <div className="relative overflow-hidden rounded-[1.5rem] aspect-[800/420] bg-[#0A0A0F]">
            <img
              src={clinicaMockupImage}
              alt="Demo de landing page para Clínica Dental Sonrisa - EyStudio"
              className="h-full w-full object-cover object-top"
              loading="eager"
              fetchPriority="high"
              width={800}
              height={420}
            />
            <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,7,0.08),rgba(5,5,7,0.84)),radial-gradient(circle_at_72%_20%,rgba(167,139,250,0.22),transparent_18rem)]" />

            <div className="absolute left-6 top-6 flex flex-row gap-3 animate-fadeInDown">
              <div className="rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-violet-haze">🦷 Demo · Clínica Dental</p>
              </div>
              <div className="rounded-2xl border border-white/[0.08] bg-black/60 px-4 py-3 backdrop-blur-xl">
                <p className="text-xs font-medium uppercase tracking-[0.22em] text-amber-400">⚡ Proyecto demo</p>
              </div>
            </div>
          </div>

          <div className="absolute bottom-2 left-2 right-2 rounded-xl border border-white/10 bg-[#08070d]/40 p-2.5 shadow-lg shadow-black/20 backdrop-blur-sm animate-fadeInUp">
            <div className="flex items-center justify-between gap-2">
              <p className="text-[10px] font-semibold text-white sm:text-xs">🦷 Clínica Dental · Demo</p>
              <span className="rounded-full bg-violet-pulse/20 px-2 py-0.5 text-[8px] text-violet-haze sm:px-3 sm:py-1 sm:text-[10px]">Ver proyecto</span>
            </div>
            <p className="mt-1 text-[10px] leading-4 text-white/70 sm:text-xs sm:leading-5">Landing con sistema de turnos por WhatsApp para el sector odontológico.</p>
            <div className="mt-1.5 grid grid-cols-3 gap-1">
              {['Turnos 24/7', 'Recordatorios', 'Diseño premium'].map((item) => (
                <span key={item} className="rounded-lg bg-white/5 px-1.5 py-0.5 text-center text-[7px] text-[#9CA3AF] border border-white/5 sm:px-2 sm:py-1 sm:text-[9px]">{item}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// ============================================================
// COMPONENTE HERO PRINCIPAL
// ============================================================
export function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#0A0A0F]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(99,91,255,0.15),transparent_50%),radial-gradient(circle_at_30%_70%,rgba(124,58,237,0.08),transparent_50%),#0A0A0F]" />
      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-[#0A0A0F] to-transparent" />
      <FloatingOrbs />

      <div className="relative z-10 mx-auto grid min-h-screen w-full max-w-7xl items-center gap-12 px-5 pb-16 pt-28 sm:px-8 lg:grid-cols-[0.95fr_1.05fr] lg:px-10">
        <div className="max-w-4xl animate-fadeInUp">
          <div className="mb-8 inline-flex items-center rounded-full border border-[#7C3AED]/30 bg-[rgba(99,91,255,0.15)] px-4 py-2 text-[10px] font-medium uppercase tracking-[0.28em] text-white backdrop-blur sm:text-xs">
            ⚡ ESPECIAL PARA ODONTÓLOGOS Y CLÍNICAS DENTALES EN ARGENTINA Y LATAM
          </div>

          <h1 className="max-w-5xl font-outfit text-3xl font-bold leading-[1.05] tracking-[-0.01em] text-white sm:text-4xl lg:text-6xl">
            Convertí tu clínica dental en{' '}
            <span className="bg-gradient-to-r from-[#635BFF] via-[#7C3AED] to-[#3B82F6] bg-clip-text text-transparent">
              la primera opción
            </span>{' '}
            de tu zona
          </h1>

          <p className="mt-7 max-w-2xl text-base leading-7 text-[#9CA3AF] sm:text-lg sm:leading-9">
            Landing Page profesional diseñada específicamente para odontólogos. Incluye sistema de agendamiento directo a WhatsApp, recordatorios automáticos de turnos y SEO Local para posicionar en Google.{' '}
            <span className="font-semibold text-white"> Desde USD 290</span>, sin costos ocultos.
          </p>

          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
            {[
              'Atención 24/7',
              'Cero ausentismo',
              'Posicionamiento Local',
              'Recordatorios automáticos'
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-2 text-xs text-[#D1D5DB] sm:text-sm">
                <svg className="h-4 w-4 text-[#635BFF] flex-shrink-0 sm:h-5 sm:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                {benefit}
              </div>
            ))}
          </div>

          <div className="mt-8">
            <CTAButtons primaryLabel="Quiero mi Landing Page" />
          </div>

          <p className="mt-3 text-xs text-[#6B7280] flex items-center gap-2">
            <svg className="h-3 w-3 text-emerald-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Entrega express en 3 a 7 días • Sin conocimientos técnicos requeridos
          </p>

          <div className="flex items-center gap-2 pt-4 text-xs text-[#9CA3AF] sm:text-sm">
            <svg className="h-4 w-4 text-[#635BFF] flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
            </svg>
            <span>
              Probá la experiencia interactiva de agendamiento como si fueras un paciente.
              <a href="#agendamiento" className="text-[#635BFF] hover:underline ml-1">Probar ahora →</a>
            </span>
          </div>
        </div>

        <HeroVisual />
      </div>
    </section>
  )
}