type NicheKind = 'barber' | 'esthetic' | 'gym' | 'electrician'

function Chip({ children }: { children: string }) {
  return (
    <span className="rounded-full bg-white/[0.06] px-3 py-1.5 text-center text-[11px] text-white/60 ring-1 ring-white/[0.05]">
      {children}
    </span>
  )
}

function BarberBody({ chips }: { chips: string[] }) {
  const durations = ['30 min', '20 min', '45 min']
  return (
    <div className="mt-6 grid gap-2">
      {chips.map((chip, i) => (
        <div key={chip} className="flex items-center justify-between rounded-xl bg-white/[0.05] px-3 py-2.5 ring-1 ring-white/[0.05]">
          <span className="text-xs text-white/70">{chip}</span>
          <span className="rounded-full bg-violet-pulse/15 px-2 py-1 text-[10px] text-violet-haze">
            {durations[i] ?? '30 min'}
          </span>
        </div>
      ))}
    </div>
  )
}

function EstheticBody({ chips }: { chips: string[] }) {
  return (
    <div className="mt-6">
      <div className="flex gap-2">
        {chips.map((chip, i) => (
          <span
            key={chip}
            className={`rounded-full px-3 py-1.5 text-[11px] ${i === 0 ? 'bg-white text-ink' : 'bg-white/[0.06] text-white/60 ring-1 ring-white/[0.05]'
              }`}
          >
            {chip}
          </span>
        ))}
      </div>
      <div className="mt-4 flex items-center gap-3 rounded-xl bg-white/[0.05] p-3 ring-1 ring-white/[0.05]">
        <div className="h-10 w-10 shrink-0 rounded-lg bg-gradient-to-br from-violet-pulse/40 to-violet-deep" />
        <div className="min-w-0">
          <p className="truncate text-xs font-medium text-white/80">Tratamiento facial</p>
          <p className="text-[11px] text-white/45">Promo activa este mes</p>
        </div>
      </div>
    </div>
  )
}

function GymBody({ chips }: { chips: string[] }) {
  const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D']
  const activeDays = [1, 2, 4]
  return (
    <div className="mt-6">
      <div className="grid grid-cols-7 gap-1.5">
        {days.map((day, i) => (
          <div key={`${day}-${i}`} className="flex flex-col items-center gap-1.5">
            <span className="text-[10px] text-white/40">{day}</span>
            <span className={`h-1.5 w-1.5 rounded-full ${activeDays.includes(i) ? 'bg-violet-haze shadow-glow' : 'bg-white/10'}`} />
          </div>
        ))}
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
    </div>
  )
}

function ElectricianBody({ chips }: { chips: string[] }) {
  return (
    <div className="mt-6">
      <div className="flex items-center gap-2 rounded-xl bg-violet-pulse/10 px-3 py-2 ring-1 ring-violet-haze/25">
        <span className="h-2 w-2 rounded-full bg-violet-haze shadow-glow" />
        <span className="text-[11px] font-medium text-violet-haze">Urgencias · Disponible</span>
      </div>
      <div className="mt-4 flex flex-wrap gap-2">
        {chips.map((chip) => (
          <Chip key={chip}>{chip}</Chip>
        ))}
      </div>
    </div>
  )
}

export function NicheMock({
  kind,
  cta,
  chips,
  note,
}: {
  kind: NicheKind
  cta: string
  chips: string[]
  note: string
}) {
  return (
    <div className="relative overflow-hidden rounded-[1.35rem] border border-white/[0.08] bg-[#09080f] shadow-2xl shadow-black/25">
      <div className="flex items-center gap-2 border-b border-white/[0.07] bg-white/[0.045] px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-violet-haze" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
        <span className="ml-auto rounded-full bg-black/30 px-3 py-1 text-[11px] text-white/45">
          preview
        </span>
      </div>
      <div className="relative min-h-52 overflow-hidden p-5">
        <div className="absolute -right-12 -top-12 h-44 w-44 rounded-full bg-violet-pulse/25 blur-3xl" />
        <div className="absolute -bottom-12 left-8 h-36 w-36 rounded-full bg-violet-deep/50 blur-3xl" />
        <div className="relative">
          <div className="h-3 w-28 rounded-full bg-violet-haze/65" />
          <div className="mt-4 h-9 w-4/5 rounded-xl bg-white/[0.1]" />
          <div className="mt-3 h-8 w-2/3 rounded-xl bg-white/[0.06]" />

          {kind === 'barber' ? <BarberBody chips={chips} /> : null}
          {kind === 'esthetic' ? <EstheticBody chips={chips} /> : null}
          {kind === 'gym' ? <GymBody chips={chips} /> : null}
          {kind === 'electrician' ? <ElectricianBody chips={chips} /> : null}

          <div className="mt-5 flex flex-wrap items-center gap-3">
            <div className="inline-flex rounded-full bg-white px-4 py-2 text-xs font-semibold text-ink">
              {cta}
            </div>
            <span className="rounded-full border border-violet-haze/30 bg-violet-pulse/10 px-3 py-2 text-xs text-violet-haze">
              {note}
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
