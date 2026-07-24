import { motion } from 'framer-motion'

// ============================================================
// SVG ICONS
// ============================================================
const WhatsAppIcon = () => (
  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 640" className="inline-block h-4 w-4 flex-shrink-0 text-[#25D366]">
    <path fill="currentColor" d="M530.8 134.1C545.1 144.5 548.3 164.5 537.9 178.8L281.9 530.8C276.4 538.4 267.9 543.1 258.5 543.9C249.1 544.7 240 541.2 233.4 534.6L105.4 406.6C92.9 394.1 92.9 373.8 105.4 361.3C117.9 348.8 138.2 348.8 150.7 361.3L252.2 462.8L486.2 141.1C496.6 126.8 516.6 123.6 530.9 134z" />
  </svg>
)

const ArrowIcon = () => (
  <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
)

// ============================================================
// COMPONENTE PRINCIPAL
// ============================================================
export function FinalCTA() {
  const whatsappLink =
    'https://wa.me/5491157653009?text=Hola%20Emanuel%2C%20quiero%20impulsar%20mi%20clínica%20con%20una%20landing%20page'

  return (
    <section className="relative border-b border-white/5 bg-[#0A0A0F] px-6 py-24 md:px-8 lg:py-28">
      <div className="mx-auto max-w-[1000px]">
        {/* ===== TARJETA / BANNER PRINCIPAL ===== */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          whileHover={{ boxShadow: '0px 0px 60px rgba(124, 58, 237, 0.35)' }}
          className="relative overflow-hidden rounded-3xl border border-[#7C3AED] bg-gradient-to-br from-[#161324] to-[#12121A] p-8 text-center shadow-2xl shadow-[#7C3AED]/25 transition-all duration-300 ease-in-out sm:p-10 md:p-16"
          style={{ boxShadow: '0px 0px 50px rgba(124, 58, 237, 0.25)' }}
        >
          {/* Badge superior con efecto de pulso */}
          <motion.div
            animate={{
              boxShadow: [
                '0px 0px 0px rgba(124, 58, 237, 0.2)',
                '0px 0px 20px rgba(124, 58, 237, 0.5)',
                '0px 0px 0px rgba(124, 58, 237, 0.2)',
              ],
            }}
            transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
            className="mb-5 inline-flex items-center rounded-full border border-[#7C3AED]/40 bg-[#7C3AED]/15 px-4 py-1.5 text-[11px] font-bold uppercase tracking-wider text-[#C4B5FD]"
          >
            🚀 IMPULSA TU CLÍNICA HOY
          </motion.div>

          {/* Título H2 */}
          <h2 className="mx-auto max-w-[720px] font-outfit text-3xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl">
            ¿Listo para transformar la agenda de tu consultorio y dejar de perder pacientes?
          </h2>

          {/* Subtítulo */}
          <p className="mx-auto mt-4 max-w-[600px] text-base font-normal leading-relaxed text-[#D1D5DB] sm:text-lg">
            Empieza hoy con la Prueba Gratis de 7 días del Plan Esencial o aprovecha el 20% OFF en el Plan Pro con el código PROMO280. Sin contratos de permanencia ni trámites complejos.
          </p>

          {/* Bloque de botones CTA */}
          <div className="mt-8 flex flex-col items-center gap-4">
            <motion.a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{
                y: -3,
                boxShadow: '0px 0px 35px rgba(37, 211, 102, 0.6)',
              }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.2, ease: 'easeOut' }}
              className="inline-flex items-center justify-center gap-3 rounded-xl bg-[#25D366] px-8 py-4 text-lg font-bold text-white shadow-lg shadow-[#25D366]/40 transition-all duration-300 ease-in-out hover:bg-[#20b85f] sm:px-10 sm:py-4"
            >
              <WhatsAppIcon />
              Hablar con un Asesor por WhatsApp
              <ArrowIcon />
            </motion.a>

            {/* Micro-copy de garantía */}
            <p className="text-sm font-medium text-[#9CA3AF]">
              ⚡ Respuesta inmediata en menos de 15 minutos • Sin compromiso de compra
            </p>
          </div>

          {/* Sellos de confianza */}
          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm font-semibold text-[#25D366]">
            <span className="flex items-center gap-2">
              <CheckIcon />
              Entrega rápida de 5 a 10 días
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              Configuración 100% personalizada
            </span>
            <span className="flex items-center gap-2">
              <CheckIcon />
              Soporte técnico directo post-entrega
            </span>
          </div>

          {/* Efecto de brillo sutil en el borde (decorativo) */}
          <div className="absolute -top-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-60" />
          <div className="absolute -bottom-px left-1/4 right-1/4 h-px bg-gradient-to-r from-transparent via-[#7C3AED] to-transparent opacity-30" />
        </motion.div>
      </div>
    </section>
  )
}