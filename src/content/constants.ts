// src/content/constants.ts

export const whatsappLink = "5491157653009";
export const emailLink = "emanuelybalo.contacto@gmail.com";
export const instagramLink = "https://instagram.com/eystudio.tech";

export interface Plan {
  id: string;
  nombre: string;
  precioUSD: number;
  popular?: boolean;
  descripcion: string;
  caracteristicas: string[];
}

export const PLANES_EYSTUDIO: Plan[] = [
  {
    id: 'esencial',
    nombre: 'Plan Esencial',
    precioUSD: 450,
    descripcion: 'Ideal para consultorios o dentistas independientes que buscan presencia profesional rápida.',
    caracteristicas: [
      'Landing Page Ultra-rápida (React + Vite)',
      'Diseño Responsivo Mobile-First',
      'Enrutamiento directo a WhatsApp',
      'Entrega estimada: 3 a 5 días'
    ]
  },
  {
    id: 'pro',
    nombre: 'Plan PRO ⭐',
    precioUSD: 850,
    popular: true,
    descripcion: 'Infraestructura completa de alta conversión optimizada para tratamientos de alto valor.',
    caracteristicas: [
      'Todo lo del Plan Esencial',
      'Calculadora de Pérdida Silenciosa / Citas',
      'Showcase de Tratamientos con Vista Previa (Modal)',
      'Animaciones e Interacciones UI Avanzadas',
      'Entrega estimada: 5 a 7 días'
    ]
  },
  {
    id: 'enterprise',
    nombre: 'Plan Enterprise',
    precioUSD: 1500,
    descripcion: 'Para clínicas avanzadas, franquicias o centros con múltiples especialidades.',
    caracteristicas: [
      'Diseño 100% Personalizado a Medida',
      'Sistema de Agendamiento Avanzado',
      'Integración con CRM o Base de Datos',
      'Soporte y Mantenimiento Prioritario'
    ]
  }
];

// Generador de enlace directo a WhatsApp con mensaje personalizado
export const getWhatsAppPlanLink = (nombrePlan: string, precio: number) => {
  const mensaje = `Hola EyStudio, quiero consultar disponibilidad para el *${nombrePlan}* ($${precio} USD) para mi clínica odontológica.`;
  return `https://wa.me/${whatsappLink}?text=${encodeURIComponent(mensaje)}`;
};

export const getWhatsAppCustomLink = (mensajeCustom: string) => {
  return `https://wa.me/${whatsappLink}?text=${encodeURIComponent(mensajeCustom)}`;
};