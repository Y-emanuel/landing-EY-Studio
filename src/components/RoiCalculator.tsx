import { useState } from 'react'
import { motion } from 'framer-motion'
import { SectionLabel } from './ui'
import { slideUp } from '../lib/motion'

type Currency = 'USD' | 'ARS'

const CURRENCY_CONFIG: Record<Currency, { symbol: string; step: number; min: number; max: number; defaultTicket: number }> = {
  USD: { symbol: 'USD', step: 25, min: 50, max: 1500, defaultTicket: 300 },
  ARS: { symbol: 'ARS', step: 5000, min: 20000, max: 500000, defaultTicket: 120000 },
}

export function RoiCalculator() {
  const [currency, setCurrency] = useState<Currency>('USD')
  const [consultasMes, setConsultasMes] = useState<number>(60)
  const [ticketPromedio, setTicketPromedio] = useState<number>(CURRENCY_CONFIG.USD.defaultTicket)
  const [tasaConversionActual, setTasaConversionActual] = useState<number>(20) // 20% promedio real

  const handleCurrencyChange = (newCurrency: Currency) => {
    setCurrency(newCurrency)
    setTicketPromedio(CURRENCY_CONFIG[newCurrency].defaultTicket)
  }

  // Estimación realista: La Landing optimizada mejora entre un +8% de efectividad de conversión en captura/agendamiento
  const MEJORA_REALISTA = 8 
  const tasaConversionEstimada = Math.min(tasaConversionActual + MEJORA_REALISTA, 100)
  
  const pacientesActuales = Math.round((consultasMes * tasaConversionActual) / 100)
  const pacientesEstimados = Math.round((consultasMes * tasaConversionEstimada) / 100)
  const pacientesNuevosAdicionales = pacientesEstimados - pacientesActuales

  const ingresosEstimadosAdicionales = pacientesNuevosAdicionales * ticketPromedio
  const activeConfig = CURRENCY_CONFIG[currency]

  return (
    <section id="calculadora" className="relative border-b border-[#222838] bg-[#090A0F] px-4 py-12 sm:px-6 sm:py-16 lg:py-20">
      {/* Resplandor de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="mb-8 text-center sm:mb-10">
          <div className="mb-2">
            <SectionLabel>CALCULA TU POTENCIAL</SectionLabel>
          </div>
          <h2 className="font-outfit text-2xl font-extrabold text-white sm:text-3xl lg:text-4xl">
            Calculadora de Retorno de Inversión (ROI)
          </h2>
          <p className="mx-auto mt-2 max-w-xl text-xs text-[#94A3B8] sm:text-sm">
            Proyección basada en la optimización del embudo de agendamiento y respuesta rápida para consultorios.
          </p>

          {/* Selector de Moneda */}
          <div className="mt-4 flex items-center justify-center gap-2">
            <span className="text-xs text-[#94A3B8]">Moneda:</span>
            <div className="inline-flex rounded-lg border border-[#222838] bg-[#12151E] p-1">
              {(['USD', 'ARS'] as Currency[]).map((curr) => (
                <button
                  key={curr}
                  type="button"
                  onClick={() => handleCurrencyChange(curr)}
                  className={`rounded-md px-3 py-1 text-xs font-extrabold transition-all cursor-pointer ${
                    currency === curr
                      ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30'
                      : 'text-[#94A3B8] hover:text-white'
                  }`}
                >
                  {curr}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tarjeta interactiva */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-10% 0px -10% 0px' }}
          variants={slideUp}
          className="grid grid-cols-1 gap-6 rounded-2xl border border-[#222838] bg-[#12151E] p-5 shadow-2xl shadow-black/80 backdrop-blur-xl lg:grid-cols-12 lg:gap-8 lg:p-7"
        >
          {/* Controles */}
          <div className="flex flex-col justify-center space-y-5 lg:col-span-7">
            {/* Input 1: Consultas por mes */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm">
                <label htmlFor="consultas-mes" className="font-semibold text-white">Consultas recibidas al mes</label>
                <span className="font-bold text-[#00E5FF]">{consultasMes} mensajes/turnos</span>
              </div>
              <input
                id="consultas-mes"
                type="range"
                min="20"
                max="300"
                step="10"
                value={consultasMes}
                onChange={(e) => setConsultasMes(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#090A0F] accent-[#7C3AED]"
              />
            </div>

            {/* Input 2: Ticket Promedio */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm">
                <label htmlFor="ticket-promedio" className="font-semibold text-white">
                  Tratamiento promedio ({activeConfig.symbol})
                </label>
                <span className="font-bold text-[#00E5FF]">
                  ${ticketPromedio.toLocaleString()} {activeConfig.symbol}
                </span>
              </div>
              <input
                id="ticket-promedio"
                type="range"
                min={activeConfig.min}
                max={activeConfig.max}
                step={activeConfig.step}
                value={ticketPromedio}
                onChange={(e) => setTicketPromedio(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#090A0F] accent-[#7C3AED]"
              />
            </div>

            {/* Input 3: Tasa de Conversión Actual */}
            <div>
              <div className="flex justify-between text-xs sm:text-sm">
                <label htmlFor="tasa-conversion" className="font-semibold text-white">Pacientes que agendan actualmente</label>
                <span className="font-bold text-[#00E5FF]">{tasaConversionActual}%</span>
              </div>
              <input
                id="tasa-conversion"
                type="range"
                min="10"
                max="40"
                step="2"
                value={tasaConversionActual}
                onChange={(e) => setTasaConversionActual(Number(e.target.value))}
                className="mt-2 h-2 w-full cursor-pointer appearance-none rounded-lg bg-[#090A0F] accent-[#7C3AED]"
              />
            </div>
          </div>

          {/* Resultado */}
          <div className="flex flex-col justify-between rounded-xl border border-[#7C3AED]/30 bg-[#090A0F]/90 p-5 lg:col-span-5 lg:p-6 shadow-inner">
            <div>
              <p className="text-xs font-bold uppercase tracking-wider text-[#94A3B8]">
                Incremento mensual estimado
              </p>
              <div className="mt-2 text-2xl font-extrabold text-[#00FF87] sm:text-3xl lg:text-4xl">
                +${ingresosEstimadosAdicionales.toLocaleString()}{' '}
                <span className="text-xs font-semibold text-white/70">{activeConfig.symbol}/mes</span>
              </div>
              <p className="mt-1.5 text-[11px] leading-relaxed text-[#94A3B8]">
                Calculado sobre una mejora prudente del <strong className="text-white">+{MEJORA_REALISTA}%</strong> en conversión al optimizar la velocidad de respuesta y claridad de la web (de {tasaConversionActual}% a {tasaConversionEstimada}%).
              </p>
            </div>

            <div className="mt-5 space-y-2 border-t border-[#222838] pt-4 text-xs">
              <div className="flex justify-between text-[#94A3B8]">
                <span>Pacientes concretados hoy:</span>
                <span className="font-semibold text-white">{pacientesActuales} al mes</span>
              </div>
              <div className="flex justify-between text-[#94A3B8]">
                <span>Con sistema EyStudio:</span>
                <span className="font-bold text-[#00FF87]">{pacientesEstimados} al mes (+{pacientesNuevosAdicionales})</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default RoiCalculator