import React, { useState } from 'react';
import { getWhatsAppCustomLink } from '../content/constants';

interface DemoItem {
  id: string;
  title: string;
  category: string;
  description: string;
  features: string[];
  image: string;
  demoUrl?: string;
}

const DEMOS_DATA: DemoItem[] = [
  {
    id: 'implantes',
    title: 'Clínica de Implantes & Estética',
    category: 'Alta Conversión',
    description: 'Estructura optimizada para tratamientos de alto ticket con calculadora de financiación y captura de lead prioritaria.',
    features: ['Agendamiento prioritario', 'Carga ultra-rápida', 'Prueba social integrada'],
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'ortodoncia',
    title: 'Ortodoncia & Alineadores Invisibles',
    category: 'Diseño Premium',
    description: 'Enfocada en jóvenes y adultos con showcase visual del tratamiento paso a paso y testimonios en video.',
    features: ['Galería de Antes/Después', 'Enrutamiento a WhatsApp', 'Diseño visual Neón'],
    image: 'https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'general',
    title: 'Consultorio Odontológico Integral',
    category: 'Esencial Multi-Sede',
    description: 'Plantilla versátil para clínicas con múltiples especialidades y staff de profesionales.',
    features: ['Filtro por especialista', 'Ubicación e integración Maps', 'FAQ interactivo'],
    image: 'https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800'
  }
];

export const Demos: React.FC = () => {
  const [selectedDemo, setSelectedDemo] = useState<DemoItem | null>(null);

  const handleConsultDemo = (demoTitle: string) => {
    const mensaje = `Hola EyStudio, estuve viendo la demo de *${demoTitle}* en la web y me gustaría implementar una estructura similar para mi clínica.`;
    window.open(getWhatsAppCustomLink(mensaje), '_blank');
  };

  return (
    <section id="demos" className="relative border-b border-[#222838] bg-[#090A0F] py-20 px-6">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_40%,rgba(124,58,237,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header Sección */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1 mb-3 text-xs font-extrabold text-[#00E5FF] bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/30 tracking-wider uppercase">
            Showcase Interactivo
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-outfit">
            Prototipos de Alta Conversión
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Explora los diseños de infraestructura web desarrollados específicamente para maximizar la reserva de turnos en odontología.
          </p>
        </div>

        {/* Grid de Demos */}
        <div className="grid md:grid-cols-3 gap-8">
          {DEMOS_DATA.map((demo) => (
            <div
              key={demo.id}
              className="bg-[#12151E] border border-[#222838] hover:border-[#7C3AED]/60 rounded-2xl overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_30px_rgba(124,58,237,0.25)] flex flex-col justify-between backdrop-blur-xl"
            >
              <div>
                {/* Imagen / Preview Header */}
                <div className="relative h-48 overflow-hidden bg-[#090A0F]">
                  <img
                    src={demo.image}
                    alt={demo.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <span className="absolute top-3 left-3 bg-[#090A0F]/90 backdrop-blur-md border border-[#7C3AED]/40 text-[#00E5FF] text-[11px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                    {demo.category}
                  </span>
                </div>

                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-[#A855F7] transition-colors font-outfit">
                    {demo.title}
                  </h3>
                  <p className="text-[#94A3B8] text-xs leading-relaxed mb-4">
                    {demo.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {demo.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#94A3B8] flex items-center gap-2 font-medium">
                        <span className="text-[#00FF87] font-bold">✓</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Acciones */}
              <div className="p-6 pt-0 flex gap-3">
                <button
                  onClick={() => setSelectedDemo(demo)}
                  className="flex-1 py-2.5 bg-[#090A0F] border border-[#222838] hover:border-[#7C3AED] hover:text-[#A855F7] text-xs font-bold rounded-xl text-white transition-all cursor-pointer"
                >
                  Ver Detalle
                </button>
                <button
                  onClick={() => handleConsultDemo(demo.title)}
                  className="py-2.5 px-4 bg-[#7C3AED] hover:bg-[#6D28D9] text-white text-xs font-extrabold rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.3)] transition-all cursor-pointer"
                >
                  Solicitar
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Modal de Vista Previa */}
        {selectedDemo && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4">
            <div className="bg-[#12151E] border border-[#7C3AED] rounded-3xl max-w-2xl w-full p-6 md:p-8 relative shadow-[0_0_50px_rgba(124,58,237,0.3)] animate-in fade-in zoom-in duration-200">
              {/* Botón Cerrar */}
              <button
                onClick={() => setSelectedDemo(null)}
                className="absolute top-4 right-4 text-[#94A3B8] hover:text-white text-lg font-bold w-8 h-8 rounded-full bg-[#090A0F] flex items-center justify-center border border-[#222838] cursor-pointer transition-colors"
              >
                ✕
              </button>

              <span className="text-xs font-extrabold text-[#00E5FF] uppercase tracking-wider block mb-1">
                {selectedDemo.category}
              </span>
              <h3 className="text-2xl font-extrabold text-white mb-4 font-outfit">{selectedDemo.title}</h3>

              <div className="h-56 rounded-xl overflow-hidden mb-6 border border-[#222838] bg-[#090A0F]">
                <img src={selectedDemo.image} alt={selectedDemo.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-[#94A3B8] text-xs md:text-sm mb-6 leading-relaxed">
                {selectedDemo.description}
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  onClick={() => {
                    handleConsultDemo(selectedDemo.title);
                    setSelectedDemo(null);
                  }}
                  className="flex-1 py-3.5 bg-[#00FF87] hover:bg-[#00e578] text-[#090A0F] font-extrabold uppercase tracking-wider text-xs rounded-xl shadow-[0_0_20px_rgba(0,255,135,0.3)] transition-all cursor-pointer"
                >
                  Pedir Demo por WhatsApp
                </button>
                <button
                  onClick={() => setSelectedDemo(null)}
                  className="py-3.5 px-6 bg-[#090A0F] border border-[#222838] text-white font-bold text-xs rounded-xl hover:bg-[#12151E] hover:border-[#7C3AED] transition-all cursor-pointer"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Demos;