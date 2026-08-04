import React, { useState, useEffect } from 'react';
import { getWhatsAppCustomLink } from '../content/constants';

interface PricingPlan {
  id: string;
  name: string;
  badge?: string;
  popular?: boolean;
  priceUSD: number;
  deliveryTime: string;
  structure: string;
  features: string[];
  multisiteAddon?: string;
  maintenancePrice: number;
  ctaText: string;
}

const PLANS: PricingPlan[] = [
  {
    id: 'esencial',
    name: 'Plan Esencial',
    priceUSD: 450,
    deliveryTime: '3 a 5 días hábiles',
    structure: 'Single Page Application (SPA) ultra-rápida de hasta 5 bloques estratégicos.',
    features: [
      'Formulario directo con derivación a 1 WhatsApp con mensaje pre-estructurado',
      'Maquetación responsive (100% Mobile First)',
      'Optimización de velocidad y carga rápida'
    ],
    multisiteAddon: '+$150 USD por sede extra (permite cambiar dinámicamente precios, dirección y el WhatsApp receptor según la ubicación elegida).',
    maintenancePrice: 49,
    ctaText: 'Elegir Plan Esencial'
  },
  {
    id: 'pro',
    name: 'Plan PRO',
    badge: 'MÁS ELEGIDO',
    popular: true,
    priceUSD: 850,
    deliveryTime: '5 a 7 días hábiles',
    structure: 'Arquitectura de Alto Impacto de hasta 8 bloques con Copywriting comercial persuasivo.',
    features: [
      'Formulario de Triaje / Filtrado previo de pacientes',
      'Módulo interactivo de Casos de Éxito (Deslizador Antes / Después)',
      'Garantía de rendimiento Google Speed Index 90+',
      'Derivación inteligente a WhatsApp y correo electrónico'
    ],
    maintenancePrice: 99,
    ctaText: 'Elegir Plan PRO'
  },
  {
    id: 'enterprise',
    name: 'Plan Enterprise',
    priceUSD: 1500,
    deliveryTime: '10 a 14 días hábiles',
    structure: 'Plataforma multisección escalable diseñada para múltiples profesionales, especialidades o sedes.',
    features: [
      'Sistema Multisede completo integrado',
      'Simulador / Cotizador dinámico de tratamientos',
      'Medición & Tracking completo (Meta Pixel, GA4 y Google Tag Manager)',
      'Integración vía Webhooks / APIs a CRM o bases de datos externas'
    ],
    maintenancePrice: 199,
    ctaText: 'Elegir Plan Enterprise'
  }
];

export const Pricing: React.FC = () => {
  const [moneda, setMoneda] = useState<'USD' | 'ARS'>('USD');
  const [tasaCambioARS, setTasaCambioARS] = useState<number>(1200); // Fallback inicial

  useEffect(() => {
    // Obtener cotización en tiempo real del dólar oficial
    fetch('https://dolarapi.com/v1/dolares/oficial')
      .then((res) => res.json())
      .then((data) => {
        if (data && data.venta) {
          setTasaCambioARS(data.venta);
        }
      })
      .catch((err) => console.error('Error al obtener la cotización del dólar:', err));
  }, []);

  const formatPrice = (usd: number) => {
    const val = moneda === 'USD' ? usd : usd * tasaCambioARS;
    return new Intl.NumberFormat('es-AR', {
      style: 'currency',
      currency: moneda,
      maximumFractionDigits: 0,
    }).format(val);
  };

  const handleSelectPlan = (planName: string, priceFormatted: string) => {
    const mensaje = `Hola EyStudio, quiero solicitar información para contratar el *${planName}* (${priceFormatted}).`;
    window.open(getWhatsAppCustomLink(mensaje), '_blank');
  };

  return (
    <section id="precios" className="relative border-b border-[#222838] bg-[#090A0F] py-20 px-6">
      {/* Resplandor ambiental de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(124,58,237,0.06),transparent_60%)] pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1 mb-3 text-xs font-extrabold text-[#00E5FF] bg-[#00E5FF]/10 rounded-full border border-[#00E5FF]/30 tracking-wider uppercase">
            Inversión Transparente
          </span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white font-outfit">
            Planes de Infraestructura
          </h2>
          <p className="text-[#94A3B8] text-sm md:text-base mt-3 max-w-2xl mx-auto">
            Sin tarifas ocultas. Elige la solución que se adapte al volumen actual de tu clínica.
          </p>

          {/* Switch de Moneda */}
          <div className="flex justify-center mt-6">
            <div className="bg-[#12151E] p-1 rounded-xl border border-[#222838] flex gap-1 shadow-md">
              <button
                onClick={() => setMoneda('USD')}
                className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${moneda === 'USD'
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                USD ($)
              </button>
              <button
                onClick={() => setMoneda('ARS')}
                className={`px-4 py-1.5 rounded-lg text-xs font-extrabold transition-all cursor-pointer ${moneda === 'ARS'
                    ? 'bg-[#7C3AED] text-white shadow-md shadow-[#7C3AED]/30'
                    : 'text-[#94A3B8] hover:text-white'
                  }`}
              >
                ARS ($)
              </button>
            </div>
          </div>
        </div>

        {/* Grid de Planes */}
        <div className="grid md:grid-cols-3 gap-8 items-stretch">
          {PLANS.map((plan) => {
            const precioFormateado = formatPrice(plan.priceUSD);
            const mantenimientoFormateado = formatPrice(plan.maintenancePrice);

            return (
              <div
                key={plan.id}
                className={`relative bg-[#12151E] ${plan.popular
                    ? 'border-2 border-[#7C3AED] shadow-[0_0_35px_rgba(124,58,237,0.35)]'
                    : 'border border-[#222838]'
                  } rounded-3xl p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 backdrop-blur-xl`}
              >
                {plan.badge && (
                  <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 text-[10px] font-extrabold uppercase tracking-widest px-3 py-1 rounded-full bg-[#7C3AED] text-[#FFFFFF] border border-[#7C3AED] shadow-md">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-xl font-bold text-[#FFFFFF] mb-2 font-outfit">{plan.name}</h3>
                  <p className="text-xs text-[#94A3B8] mb-6 min-h-[36px] leading-relaxed">{plan.structure}</p>

                  {/* Precio */}
                  <div className="mb-6 pb-6 border-b border-[#222838]">
                    <span className={`text-4xl md:text-5xl font-extrabold font-outfit ${plan.popular ? 'text-[#7C3AED]' : 'text-white'}`}>
                      {precioFormateado}
                    </span>
                    <span className="text-xs text-[#94A3B8] block mt-1">Pago único • Tiempo: {plan.deliveryTime}</span>
                  </div>

                  {/* Características */}
                  <ul className="space-y-3 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="text-xs text-[#94A3B8] flex items-start gap-2 font-medium">
                        <span className="text-[#7C3AED] shrink-0 font-bold">✓</span>
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Adicional Multisede si aplica */}
                  {plan.multisiteAddon && (
                    <div className="mb-6 rounded-xl bg-[#7C3AED]/10 border border-[#7C3AED]/30 p-3 text-xs text-[#7C3AED]">
                      <strong className="block font-bold mb-0.5 text-white">Adicional Multisede:</strong>
                      {plan.multisiteAddon}
                    </div>
                  )}
                </div>

                <div>
                  {/* Mantenimiento Opcional */}
                  <div className="mb-6 pt-4 border-t border-[#222838] flex items-center justify-between text-xs text-[#94A3B8]">
                    <span>Mantenimiento Opcional:</span>
                    <strong className="text-white font-bold">{mantenimientoFormateado} / mes</strong>
                  </div>

                  {/* Botón CTA */}
                  <button
                    onClick={() => handleSelectPlan(plan.name, precioFormateado)}
                    className={`w-full py-3.5 rounded-xl font-extrabold text-xs tracking-wider uppercase transition-all cursor-pointer ${plan.popular
                        ? 'bg-[#7C3AED] hover:bg-[#9333EA] text-[#FFFFFF] shadow-[0_0_20px_rgba(124,58,237,0.4)]'
                        : 'bg-[#090A0F] hover:bg-[#12151E] border border-[#222838] hover:border-[#7C3AED] hover:text-[#7C3AED] text-white'
                      }`}
                  >
                    {plan.ctaText}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Pricing;