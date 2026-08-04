import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { getWhatsAppCustomLink } from '../content/constants';

interface FaqItem {
  question: string;
  answer: string;
}

const FAQ_DATA: FaqItem[] = [
  {
    question: '¿Qué pasa si tengo varias sedes o consultorios con precios diferentes?',
    answer:
      'Para esos casos ofrecemos el módulo Multisede (incluido en el Plan Enterprise o como adicional por +$150 USD por sede en el Plan Esencial/PRO). Permite que el usuario seleccione su ubicación más cercana y ajuste automáticamente la lista de precios, la dirección y el número de WhatsApp receptor correspondiente a esa sede.',
  },
  {
    question: '¿Necesito pagar mantenimiento mensual obligatoriamente?',
    answer:
      'No, el mantenimiento es totalmente opcional. Una vez terminada y entregada la plataforma, es 100% tuya y no hay cobros recurrentes obligatorios. Los planes de mantenimiento opcionales (desde $49 USD/mes) están diseñados para clínicas que prefieren que nosotros nos encarguemos de actualizar contenidos, monitorear el servidor y gestionar backups.',
  },
  {
    question: '¿En qué se diferencia esta plataforma de una página web tradicional?',
    answer:
      'Una web tradicional suele funcionar como un folleto digital lento que no convierte. Nuestras infraestructuras están optimizadas para cargar en menos de 2 segundos (Google Speed 90+), incluyen módulos interactivos (simuladores, cotizadores, triaje) y dirigen al paciente directamente a una conversación estructurada por WhatsApp, reduciendo la pérdida de prospectos.',
  },
  {
    question: '¿Cuánto tiempo tarda el desarrollo y qué necesitan de mi parte?',
    answer:
      'El tiempo de entrega va de 3 a 14 días hábiles, dependiendo del plan seleccionado. Para empezar solo necesitamos la información básica de la clínica (logo, lista de tratamientos/precios, fotos del equipo o instalaciones y los números de contacto). Del diseño, redacción comercial y maquetación nos encargamos nosotros.',
  },
  {
    question: '¿Cómo se gestionan los pagos del proyecto?',
    answer:
      'Trabajamos con un esquema de 50% de anticipo para iniciar el desarrollo y el 50% restante a la entrega y aprobación final del proyecto antes de la puesta en marcha.',
  },
];

export const Faq: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleCtaClick = () => {
    const mensaje = 'Hola EyStudio, quiero hablar con un especialista para evaluar la disponibilidad de mi clínica.';
    window.open(getWhatsAppCustomLink(mensaje), '_blank');
  };

  return (
    <section id="faq" className="relative border-b border-[#222838] bg-[#090A0F] px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(124,58,237,0.05),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl">
        {/* Encabezado */}
        <div className="mb-14 text-center">
          <span className="inline-block px-4 py-1 mb-3 text-xs font-extrabold text-[#00E5FF] bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/30 tracking-wider uppercase">
            RESOLVEMOS TUS DUDAS
          </span>
          <h2 className="font-outfit text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Preguntas Frecuentes
          </h2>
          <p className="mt-4 text-sm text-[#94A3B8] sm:text-base max-w-2xl mx-auto">
            Todo lo que necesitas saber antes de digitalizar y escalar la captación de tu clínica dental.
          </p>
        </div>

        {/* Lista de Preguntas */}
        <div className="flex flex-col gap-4 mb-20">
          {FAQ_DATA.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`overflow-hidden rounded-2xl border transition-all duration-300 backdrop-blur-xl ${
                  isOpen
                    ? 'border-[#7C3AED] bg-[#12151E] shadow-[0_0_25px_rgba(124,58,237,0.2)]'
                    : 'border-[#222838] bg-[#12151E] hover:border-[#222838]/80'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleAccordion(idx)}
                  className="flex w-full items-center justify-between p-5 text-left text-sm font-bold text-white sm:p-6 sm:text-base cursor-pointer"
                >
                  <span className="font-outfit pr-4">{item.question}</span>
                  <span
                    className={`ml-4 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                      isOpen
                        ? 'border-[#7C3AED] bg-[#7C3AED]/10 text-[#7C3AED] rotate-180'
                        : 'border-[#222838] bg-[#090A0F] text-[#94A3B8]'
                    }`}
                  >
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="border-t border-[#222838] px-5 pb-6 pt-4 text-xs leading-relaxed text-[#94A3B8] sm:px-6 sm:text-sm">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

        {/* Banner de Cierre (CTA Final) */}
        <div className="relative rounded-3xl border border-[#222838] bg-[#12151E] p-8 md:p-12 text-center overflow-hidden shadow-2xl">
          {/* Aura Radial Neón */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.2),transparent_70%)] pointer-events-none" />

          <div className="relative z-10 max-w-2xl mx-auto">
            <h3 className="font-outfit text-2xl md:text-4xl font-extrabold text-white mb-4">
              ¿Listo para transformar la captación de pacientes en tu clínica?
            </h3>
            <p className="text-xs md:text-sm text-[#94A3B8] mb-8 leading-relaxed">
              Agenda una llamada o escríbenos por WhatsApp para evaluar la disponibilidad de tu especialidad.
            </p>
            <button
              onClick={handleCtaClick}
              className="px-8 py-4 rounded-xl font-extrabold text-xs md:text-sm tracking-wider uppercase transition-all duration-300 cursor-pointer bg-[#00FF87] hover:bg-[#00e578] text-[#090A0F] shadow-[0_0_25px_rgba(0,255,135,0.35)] hover:scale-105"
            >
              Hablar con un Especialista
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;