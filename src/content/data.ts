const whatsappMessage =
  'Hola Emanuel, vi tu web y quiero una landing page profesional para mi negocio. Me gustaría saber opciones, tiempos y presupuesto.'

export const whatsappLink = `https://wa.me/5491157653009?text=${encodeURIComponent(whatsappMessage)}`
export const emailLink = 'mailto:emanuelybalo.contacto@gmail.com'
export const instagramLink = 'https://instagram.com/emanuelybalo.tech'

export const navLinks: [string, string][] = [
  ['Servicios', '#servicios'],
  ['Casos', '#trabajos'],
  ['Paquetes', '#paquetes'],
  ['Proceso', '#proceso'],
  ['Contacto', '#contacto'],
]

export const proofStats = [
  { value: '5 a 10 días', label: 'Entrega rápida', icon: 'calendar' },
  { value: '100%', label: 'Adaptado a celular', icon: 'mobile' },
  { value: 'WhatsApp Directo', label: 'Sin pasos intermedios', icon: 'whatsapp' },
  { value: 'SEO Incluido', label: 'Google te encuentra', icon: 'seo' },
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
    text: 'Página de una sola vista diseñada para que el cliente entienda tu oferta en 5 segundos y te escriba por WhatsApp.',
    mark: 'LP',
    focus: 'Conversión',
  },
  {
    title: 'Sitios Web Profesionales',
    text: 'Presencia digital completa con varias secciones (quienes somos, servicios, contacto) para dar una imagen sólida y confiable.',
    mark: 'WEB',
    focus: 'Credibilidad',
  },
  {
    title: 'Tiendas Online',
    text: 'Catálogo visual y carrito de compras sencillo. Ideal para empezar a vender productos sin complicaciones técnicas.',
    mark: 'SHOP',
    focus: 'Ventas',
  },
  {
    title: 'Aplicaciones Web',
    text: 'Sistemas a medida para gestionar turnos, reservas o procesos internos. Automatizamos tu operación diaria.',
    mark: 'APP',
    focus: 'Gestión',
  },
  {
    title: 'Automatizaciones con IA',
    text: 'Chatbots y flujos automáticos que responden consultas 24/7, filtran clientes y te ahorran horas de atención.',
    mark: 'IA',
    focus: 'Escalabilidad',
  },
  {
    title: 'Optimización SEO',
    text: 'Mejoras de velocidad, estructura de datos y palabras clave para que tu web aparezca en las búsquedas de tu zona.',
    mark: 'SEO',
    focus: 'Visibilidad',
  },
]

export const deliverables = [
  'Diseño visual premium y moderno',
  'Estructura armada para convertir (orientada a CTA)',
  '100% responsive (celular, tablet y escritorio)',
  'Botones directos con mensaje predefinido a WhatsApp',
  'Mensaje comercial claro y ordenado',
  'Configuración SEO básica (títulos, descripciones, meta tags)',
  'Publicación online (te guiamos o lo hacemos nosotros)',
  'Soporte y ajustes iniciales post-entrega',
]

export const projects = [
  // ✅ Barbería Élite
  {
    kind: 'barber' as const,
    title: 'Barbería Élite',
    tag: 'Demo comercial',
    text: 'Landing page para una barbería de élite, con agendamiento de turnos integrado vía WhatsApp. Diseño oscuro y elegante con acentos dorados.',
    cta: 'Ver sitio',
    chips: ['Corte', 'Barba', 'Estilo'],
    note: 'Demo funcional',
    link: 'https://barber-demo-dusky.vercel.app/',
    image: '/assets/images/landing-barber.webp', // ✅ Ruta corregida
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
  // ✅ Clínica Dental Sonrisa
  {
    kind: 'landing' as const,
    title: 'Clínica Dental Sonrisa',
    tag: 'Demo comercial',
    text: 'Landing page profesional para una clínica odontológica, con agendamiento de turnos integrado vía WhatsApp. Diseño moderno y orientado a la conversión.',
    cta: 'Ver sitio',
    chips: ['Diseño UI/UX', 'Landing Page', 'WhatsApp API'],
    note: 'Demo funcional',
    link: 'https://clinica-odontologica-demo.vercel.app/',
    image: '/assets/images/landing-clinica.webp', // ✅ Ruta corregida
  },
]

export const packages = [
  {
    name: 'Landing Esencial',
    badge: 'Para arrancar',
    price: 'USD 150',
    description:
      'Presencia profesional sin complicaciones. Ideal para negocios que están en redes y quieren su primer punto de venta propio.',
    items: [
      '1 página (hasta 5 secciones)',
      'Diseño responsive (celular/tablet/escritorio)',
      'WhatsApp integrado con mensaje automático',
      'Publicación online y SEO básico',
      '1 ronda de revisiones',
    ],
    cta: 'Quiero mi Esencial',
    highlighted: false,
  },
  {
    name: 'Landing Pro',
    badge: '⭐ Más elegida',
    price: 'USD 350',
    description:
      'Para negocios que quieren destacar, mostrar más servicios y tener un embudo de conversión pensado para redes sociales o Google Ads.',
    items: [
      '1 página extendida (hasta 8 secciones)',
      'Copy comercial redactado para vender',
      'Galería de imágenes o servicios destacados',
      'Formulario de contacto + WhatsApp',
      'Optimización SEO avanzada (local)',
      '2 rondas de revisiones',
      'Entrega en 7 días',
    ],
    cta: 'Quiero el Pro',
    highlighted: true,
  },
  {
    name: 'Web Premium',
    badge: 'Máxima calidad',
    price: 'Desde USD 600',
    description:
      'Para marcas que necesitan una presencia digital robusta, con múltiples páginas y funcionalidades a medida para crecer.',
    items: [
      'Hasta 5 páginas (Inicio, Nosotros, Servicios, Blog, Contacto)',
      'Diseño 100% personalizado y exclusivo',
      'Integración con redes sociales y Google Maps',
      'Panel de administración sencillo (para editar textos)',
      'Configuración de Google Analytics',
      'Soporte prioritario por 30 días',
      '3 rondas de revisiones',
    ],
    cta: 'Consultar Premium',
    glitch: true,
    highlighted: false,
  },
]

export const process = [
  {
    title: '1. Nos contás',
    text: 'Una breve charla para entender tu negocio, tu público y qué necesitas transmitir. Definimos el estilo y la estructura ideal.',
  },
  {
    title: '2. Diseñamos',
    text: 'Construimos la web con diseño atractivo, copy persuasivo y desarrollo técnico. Te mostramos avances para que estés al tanto.',
  },
  {
    title: '3. Publicamos',
    text: 'Conectamos WhatsApp, dejamos la página online en tu dominio y hacemos los ajustes finos para que quede impecable.',
  },
  {
    title: '4. Acompañamos',
    text: 'Después de la entrega, damos soporte inicial y te orientamos para que puedas sacarle el máximo provecho a tu nueva web.',
  },
]

export const reasons = [
  'Diseño pensado estratégicamente para que el cliente te escriba',
  'Web rápida, liviana y perfecta en cualquier dispositivo',
  'WhatsApp y contacto directo sin pérdidas de tiempo',
  'SEO básico incluido para que aparezcas en tu ciudad',
  'Cumplimos los plazos acordados sin excusas',
  'Código limpio que permite crecer sin tener que rehacer todo',
]

export const comparison = [
  ['Web improvisada', 'Web profesional'],
  ['El cliente no entiende rápido qué ofrecés', 'Tu oferta queda clara en segundos'],
  ['Dependes solo de Instagram o Facebook', 'Tenés un punto de venta propio 24/7'],
  ['Poca confianza antes del contacto', 'Generás más percepción de marca y seriedad'],
  ['Consultas desordenadas por privado', 'CTA directo con mensaje listo para WhatsApp'],
  ['Precios ocultos o sorpresas', 'Precio claro y sin costos extra'],
]

export const faqs = [
  {
    question: '¿Cuánto cuesta una landing page?',
    answer:
      'Nuestro paquete Esencial parte desde USD 150. Incluye hasta 5 secciones, diseño responsive, WhatsApp integrado y publicación online. Si necesitas más páginas o funcionalidades, tenemos planes Pro y Premium con precios fijos (USD 350 y desde USD 600). Te asesoramos sin compromiso.',
  },
  {
    question: '¿Cuánto tarda el desarrollo?',
    answer:
      'La entrega estimada es de 5 a 10 días hábiles. Para el plan Pro solemos entregar en 7 días, y para Premium en 10 días, siempre dependiendo de la complejidad del contenido.',
  },
  {
    question: '¿Incluye dominio y hosting?',
    answer:
      'El desarrollo no incluye el costo del dominio ni hosting, pero te guiamos paso a paso para contratarlos (son servicios externos, aproximadamente USD 5-10/mes). Si necesitas, podemos encargarnos de la compra y configuración por un costo adicional mínimo.',
  },
  {
    question: '¿La web funciona en celular?',
    answer:
      '¡Por supuesto! Todas nuestras páginas se diseñan con enfoque "mobile first", lo que significa que se ven increíbles y son fáciles de usar en celular, tablet y escritorio.',
  },
  {
    question: 'No sé nada de diseño ni tecnología. ¿Puedo igual?',
    answer:
      'Claro que sí. Nosotros nos encargamos de todo: desde redactar los textos comerciales hasta elegir las imágenes y colores. Vos solo tenés que contarnos sobre tu negocio y nosotros hacemos el resto.',
  },
  {
    question: '¿Puedo pedir cambios?',
    answer:
      'Sí. El proceso incluye rondas de revisiones (1 para Esencial, 2 para Pro y 3 para Premium) para ajustar textos, secciones y detalles visuales antes de la publicación final. Queremos que quedes 100% conforme.',
  },
  {
    question: '¿Se puede integrar WhatsApp?',
    answer:
      'Es nuestro fuerte. Sumamos botones estratégicos, mensajes predefinidos y llamados a la acción para que recibas consultas directas sin que el cliente tenga que buscar tu número.',
  },
]

export const contactCards = [
  {
    title: 'WhatsApp',
    value: '+54 9 11 5765-3009',
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