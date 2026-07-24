import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { whatsappLink } from '../content/constants'
import { easePremium } from '../lib/motion'

// ============================================================
// SVG MINIMALISTA DE WHATSAPP (burbuja de chat con tres puntos)
// ============================================================
function WhatsAppIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className="h-10 w-10"
      aria-hidden="true"
    >
      {/* Burbuja de chat */}
      <path
        d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      {/* Tres puntos (mensaje) */}
      <path
        d="M8 12h.01M12 12h.01M16 12h.01"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

export function FloatingWhatsApp() {
  const { scrollY } = useScroll()
  const [visible, setVisible] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setVisible(latest > 400)
  })

  return (
    <div className="fixed bottom-5 right-5 z-40 md:hidden">
      <AnimatePresence>
        {visible && (
          <motion.a
            href={whatsappLink}
            target="_blank"
            rel="noreferrer"
            aria-label="Escribir por WhatsApp"
            initial={{ opacity: 0, scale: 0.7, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.7, y: 16 }}
            transition={{ duration: 0.3, ease: easePremium }}
            whileTap={{ scale: 0.92 }}
            className="relative flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-sm shadow-black/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-haze focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {/* Efecto de pulso / ring */}
            <motion.span
              aria-hidden="true"
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: 'easeOut' }}
              className="absolute inset-0 rounded-full bg-[#25D366]"
            />
            <WhatsAppIcon />
          </motion.a>
        )}
      </AnimatePresence>
    </div>
  )
}