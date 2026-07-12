const whatsappMessage =
  'Hola Emanuel, quiero una web para mi negocio. Me gustaría recibir información sobre opciones, tiempos y presupuesto.'

export const whatsappLink = `https://wa.me/5491154827168?text=${encodeURIComponent(whatsappMessage)}`
export const emailLink = 'mailto:emanuelybalo.contacto@gmail.com'
export const instagramLink = 'https://instagram.com/emanuelybalo.tech'

export const navLinks: [string, string][] = [
  ['Servicios', '#servicios'],
  ['Demos', '#trabajos'],
  ['Paquetes', '#paquetes'],
  ['Proceso', '#proceso'],
  ['Contacto', '#contacto'],
]

export const proofStats = [
  { value: '5–10 días', label: 'Entrega estimada' },
  { value: '100%', label: 'Responsive' },
  { value: 'WhatsApp', label: 'Consulta directa' },
  { value: 'SEO básico', label: 'Incluido' },
]

export const niches = [
  'Emprendimientos',
  'Locales comerciales',
  'Profesionales',
  'Gimnasios',
  'Estéticas',
  'Servicios técnicos',
  'Barberías',
  'Servicios a domicilio',
]

export const services = [
  {
    title: 'Landing Pages',
    text: 'Páginas de alto impacto para explicar tu oferta, generar confianza y convertir visitas en consultas.',
    mark: 'LP',
    focus: 'Captación',
  },
  {
    title: 'Sitios Web Profesionales',
    text: 'Presencia digital completa para negocios que necesitan verse sólidos, ordenados y confiables.',
    mark: 'WEB',
    focus: 'Imagen',
  },
  {
    title: 'Tiendas Online',
    text: 'Catálogos simples y experiencias de compra iniciales para mostrar productos y vender por internet.',
    mark: 'SHOP',
    focus: 'Venta',
  },
  {
    title: 'Aplicaciones Web',
    text: 'Herramientas a medida para reservas, gestión interna, turnos o procesos comerciales específicos.',
    mark: 'APP',
    focus: 'Sistema',
  },
  {
    title: 'Automatizaciones con IA',
    text: 'Flujos automáticos para ordenar consultas, responder mejor y ahorrar tiempo operativo.',
    mark: 'IA',
    focus: 'Escala',
  },
  {
    title: 'Optimización y Mantenimiento',
    text: 'Mejoras de velocidad, SEO básico, soporte, ajustes y evolución continua de la web.',
    mark: 'SEO',
    focus: 'Mejora',
  },
]

export const deliverables = [
  'Diseño visual premium',
  'Estructura orientada a conversión',
  'Versión celular, tablet y escritorio',
  'Botones directos a WhatsApp',
  'Mensaje comercial claro',
  'SEO técnico básico',
  'Publicación online',
  'Soporte inicial post-entrega',
]

export const projects = [
  {
    kind: 'barber' as const,
    title: 'Barbería Premium',
    tag: 'Demo comercial',
    text: 'Landing enfocada en reservas, ubicación, servicios, estilo visual y contacto rápido por WhatsApp.',
    cta: 'Reservar turno',
    chips: ['Corte', 'Barba', 'Combo'],
    note: 'Turnos con horario visible',
  },
  {
    kind: 'esthetic' as const,
    title: 'Estética Premium',
    tag: 'Demo comercial',
    text: 'Sitio elegante para tratamientos, confianza visual, beneficios, promociones y consultas desde celular.',
    cta: 'Ver tratamientos',
    chips: ['Facial', 'Corporal', 'Promos'],
    note: 'Promociones destacadas',
  },
  {
    kind: 'gym' as const,
    title: 'Gym Premium',
    tag: 'Demo comercial',
    text: 'Experiencia directa para planes, clases, horarios, ubicación y captación de nuevos socios.',
    cta: 'Ver planes',
    chips: ['Funcional', 'Musculación', 'Clases'],
    note: 'Horarios de clase a la vista',
  },
  {
    kind: 'electrician' as const,
    title: 'Electricista Pro',
    tag: 'Demo comercial',
    text: 'Página orientada a urgencias, zonas de trabajo, servicios principales y contacto inmediato.',
    cta: 'Pedir urgencia',
    chips: ['Urgencias', 'Zonas', 'Servicios'],
    note: 'Contacto inmediato por WhatsApp',
  },
]

export const packages = [
  {
    name: 'Landing Esencial',
    badge: 'Para empezar',
    description: 'Ideal para negocios que necesitan presencia profesional y una forma clara de recibir consultas.',
    items: ['Hasta 5 secciones', 'Diseño responsive', 'WhatsApp integrado', 'Publicación online'],
    cta: 'Consultar opción esencial',
  },
  {
    name: 'Landing Pro',
    badge: 'Más elegida',
    description: 'Pensada para negocios que quieren verse más sólidos y convertir mejor desde redes o anuncios.',
    items: ['Hasta 8 secciones', 'Copy comercial', 'Demos/galería simple', 'SEO básico', 'CTA optimizados'],
    highlighted: true,
    cta: 'Quiero la opción pro',
  },
  {
    name: 'Web Premium',
    badge: 'A medida',
    description: 'Para marcas que necesitan una presencia más completa, escalable y con mayor percepción de valor.',
    items: ['Arquitectura personalizada', 'Más vistas o secciones', 'Integraciones iniciales', 'Soporte evolutivo'],
    cta: 'Consultar web premium',
  },
]

export const process = [
  {
    title: 'Diagnóstico',
    text: 'Entendemos tu negocio, objetivo, público y qué debe comunicar la web para generar confianza.',
  },
  {
    title: 'Dirección visual',
    text: 'Definimos estética, jerarquía, tono y estructura para que la página no parezca genérica.',
  },
  {
    title: 'Desarrollo',
    text: 'Construimos una web rápida, responsive y preparada para funcionar bien en celular y escritorio.',
  },
  {
    title: 'Publicación',
    text: 'Conectamos WhatsApp, dejamos la página online y revisamos los detalles finales antes de entregar.',
  },
]

export const reasons = [
  'Diseño pensado para vender',
  'Web rápida y responsive',
  'WhatsApp y contacto directo',
  'SEO básico incluido',
  'Entrega clara y rápida',
  'Código limpio y escalable',
]

export const comparison = [
  ['Web improvisada', 'Web profesional'],
  ['El cliente no entiende rápido qué ofrecés', 'Tu oferta queda clara en segundos'],
  ['Depende solo de Instagram o Facebook', 'Tenés un punto de venta propio'],
  ['Poca confianza antes del contacto', 'Más percepción de marca y seriedad'],
  ['Consultas desordenadas', 'CTA directo con mensaje listo'],
]

export const faqs = [
  {
    question: '¿Cuánto cuesta una landing page?',
    answer:
      'Depende del alcance, cantidad de secciones y funcionalidades. Primero entendemos tu negocio y después enviamos una propuesta clara.',
  },
  {
    question: '¿Cuánto tarda el desarrollo?',
    answer:
      'La entrega estimada es de 5 a 10 días según alcance. Si hay tienda, integraciones o contenido extra, lo definimos antes de empezar.',
  },
  {
    question: '¿Incluye dominio y hosting?',
    answer:
      'Podemos orientarte para elegir dominio y hosting, y también dejar la web publicada. Los costos externos se informan por separado.',
  },
  {
    question: '¿La web funciona en celular?',
    answer:
      'Sí. Cada página se diseña responsive para verse clara y profesional en celular, tablet y escritorio.',
  },
  {
    question: '¿Puedo pedir cambios?',
    answer:
      'Sí. El proceso incluye una instancia de ajustes para ordenar textos, secciones y detalles visuales antes de publicar.',
  },
  {
    question: '¿Se puede integrar WhatsApp?',
    answer:
      'Sí. Sumamos botones, mensajes predefinidos y llamados a la acción para recibir consultas directas.',
  },
]

export const testimonials = [
  {
    quote:
      'La página quedó espléndida. Profesional, clara y muy bien diseñada. Transmitió exactamente la imagen que quería para mi negocio.',
    name: 'Liliana',
  },
  {
    quote:
      'Me encantó el resultado. La web se ve moderna, elegante y facilita mucho que los clientes puedan conocer nuestros servicios y contactarnos.',
    name: 'Luna',
  },
]

export const contactCards = [
  {
    title: 'WhatsApp',
    value: '+54 9 11 5482-7168',
    text: 'Pedir presupuesto con mensaje listo.',
    href: whatsappLink,
  },
  {
    title: 'Instagram',
    value: '@emanuelybalo.tech',
    text: 'Ver trabajos, novedades y escribir por redes.',
    href: instagramLink,
  },
  {
    title: 'Email',
    value: 'emanuelybalo.contacto@gmail.com',
    text: 'Enviar una consulta con más detalle.',
    href: emailLink,
  },
]
