import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionLabel } from './ui'

interface FunnelDemo {
  id: string
  label: string
  stepTitle: string
  landingPreview: {
    title: string
    subtitle: string
    actionText: string
  }
  whatsappNotification: {
    patientName: string
    treatment: string
    timeSlot: string
    summary: string
  }
}

const FUNNEL_DEMOS: FunnelDemo[] = [
  {
    id: 'implantes',
    label: 'Implantes',
    stepTitle: 'Reserva de Evaluación para Implantes',
    landingPreview: {
      title: 'Evaluación y Diagnóstico de Implante',
      subtitle: 'Seleccioná el día para tu consulta y evaluación con escaneo previo.',
      actionText: 'Confirmar Turno Directo',
    },
    whatsappNotification: {
      patientName: 'Roberto Gómez',
      treatment: 'Implante Dental (Evaluación)',
      timeSlot: 'Jueves 14:30 hs',
      summary: 'Turno agendado desde la Web. Datos de contacto y ficha listos.',
    },
  },
  {
    id: 'ortodoncia',
    label: 'Ortodoncia Invisible',
    stepTitle: 'Agendamiento de Escaneo 3D',
    landingPreview: {
      title: 'Diagnóstico de Alineadores Invisibles',
      subtitle: 'Elegí la fecha para tu escaneo 3D inicial sin compromiso.',
      actionText: 'Reservar Lugar en Agenda',
    },
    whatsappNotification: {
      patientName: 'Mariana López',
      treatment: 'Ortodoncia Invisible (Escaneo 3D)',
      timeSlot: 'Viernes 11:00 hs',
      summary: 'Turno confirmado. Recordatorio pre-consulta programado.',
    },
  },
  {
    id: 'limpieza',
    label: 'Limpieza / General',
    stepTitle: 'Selección de Turno Preventivo',
    landingPreview: {
      title: 'Profilaxis y Limpieza Ultrazónica',
      subtitle: 'Seleccioná tu turno disponible para la sesión de higiene dental.',
      actionText: 'Agendar Turno Limpieza',
    },
    whatsappNotification: {
      patientName: 'Carlos Ruiz',
      treatment: 'Limpieza Dental',
      timeSlot: 'Miércoles 17:00 hs',
      summary: 'Cita agendada automáticamente en agenda del consultorio.',
    },
  },
]

export function SocialProof() {
  const [activeId, setActiveId] = useState<string>('implantes')

  const currentFunnel = FUNNEL_DEMOS.find((f) => f.id === activeId) || FUNNEL_DEMOS[0]

  return (
    <section id="sistema" className="relative border-y border-[#222838] bg-[#090A0F] px-4 py-16 sm:px-6 sm:py-20 lg:py-24">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.08),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="mb-10 text-center">
          <div className="mb-2">
            <SectionLabel>DEL CLIC AL TURNO CONFIRMADO</SectionLabel>
          </div>
          <h2 className="font-outfit text-2xl font-bold text-white sm:text-3xl lg:text-4xl">
            La landing hace el filtro, vos recibís el turno
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-[#94A3B8] sm:text-sm">
            Sin idas y vueltas de mensajes. El paciente completa su solicitud en la web y a la recepción solo le llega la confirmación del turno agendado.
          </p>
        </div>

        {/* Contenedor del Simulador del Embudo */}
        <div className="rounded-2xl border border-[#222838] bg-[#12151E] p-5 shadow-2xl shadow-black/60 backdrop-blur-xl sm:p-7">
          {/* Selector de Especialidades */}
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-[#222838] pb-4">
            <div className="flex flex-wrap gap-2">
              {FUNNEL_DEMOS.map((demo) => (
                <button
                  key={demo.id}
                  type="button"
                  onClick={() => setActiveId(demo.id)}
                  className={`rounded-xl px-4 py-2 text-xs font-bold transition-all cursor-pointer ${
                    activeId === demo.id
                      ? 'bg-[#7C3AED] text-white shadow-lg shadow-[#7C3AED]/30 border border-[#A855F7]/30'
                      : 'bg-[#090A0F] text-[#94A3B8] hover:bg-white/5 hover:text-white border border-[#222838]'
                  }`}
                >
                  {demo.label}
                </button>
              ))}
            </div>
            <span className="rounded-full bg-[#00E5FF]/10 border border-[#00E5FF]/30 px-3 py-1 text-[10px] font-extrabold text-[#00E5FF] uppercase tracking-wider">
              EMBUDO DIRECTO
            </span>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentFunnel.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
              className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-stretch"
            >
              {/* Paso 1: Lo que hace el paciente en la Landing */}
              <div className="flex flex-col justify-between rounded-xl border border-[#7C3AED]/30 bg-[#090A0F]/80 p-5 shadow-inner">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#A855F7]">
                      1. Paso en la Web
                    </span>
                    <span className="text-[10px] font-medium text-[#94A3B8]">Vista del Paciente</span>
                  </div>
                  <h3 className="mt-3 text-sm font-bold text-white">
                    {currentFunnel.landingPreview.title}
                  </h3>
                  <p className="mt-1.5 text-xs text-[#94A3B8]">
                    {currentFunnel.landingPreview.subtitle}
                  </p>
                </div>

                <div className="mt-6 rounded-lg border border-[#222838] bg-[#12151E] p-3 text-center">
                  <span className="block text-[11px] font-bold text-[#00E5FF]">
                    [ Formulario de Agendamiento Activo ]
                  </span>
                  <div className="mt-2 rounded-md bg-[#00FF87] hover:bg-[#00e578] py-2 text-xs font-extrabold text-[#090A0F] uppercase tracking-wider shadow-md shadow-[#00FF87]/20 transition-all cursor-pointer">
                    {currentFunnel.landingPreview.actionText}
                  </div>
                </div>
              </div>

              {/* Paso 2: Lo que le llega a la clínica */}
              <div className="flex flex-col justify-between rounded-xl border border-[#00FF87]/30 bg-[#00FF87]/5 p-5">
                <div>
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#00FF87]">
                      2. Notificación a Recepción
                    </span>
                    <span className="text-[10px] font-bold text-[#00FF87] bg-[#00FF87]/10 px-2 py-0.5 rounded border border-[#00FF87]/20">
                      Turno Listo
                    </span>
                  </div>

                  <div className="mt-4 rounded-lg border border-[#00FF87]/20 bg-[#090A0F]/90 p-3 text-xs text-white shadow-lg">
                    <p className="font-extrabold text-[#00FF87] tracking-wider uppercase text-[10px]">
                      ⚡ NUEVO TURNO AGENDADO
                    </p>
                    <div className="mt-2 space-y-1.5 text-[11px] text-[#94A3B8]">
                      <p>
                        <strong className="text-white font-semibold">Paciente:</strong> {currentFunnel.whatsappNotification.patientName}
                      </p>
                      <p>
                        <strong className="text-white font-semibold">Tratamiento:</strong> {currentFunnel.whatsappNotification.treatment}
                      </p>
                      <p>
                        <strong className="text-white font-semibold">Horario:</strong> {currentFunnel.whatsappNotification.timeSlot}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="mt-4 text-[11px] leading-relaxed text-[#94A3B8]">
                  {currentFunnel.whatsappNotification.summary}
                </p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pie explicativo */}
          <p className="mt-6 text-center text-xs text-[#94A3B8]">
            La landing captura los datos, filtra la consulta y entrega la cita agendada sin chatear.
          </p>
        </div>
      </div>
    </section>
  )
}

export default SocialProof