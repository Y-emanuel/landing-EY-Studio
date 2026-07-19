import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import { whatsappLink } from '../content/data'
import { easePremium } from '../lib/motion'

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" className="h-10 w-10" aria-hidden="true">
      <path d="M12 2C6.48 2 2 6.48 2 12c0 1.93.56 3.72 1.55 5.25L2 22l4.75-1.55A9.96 9.96 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2z" fill="#25D366" />
      <path d="M17.1 14.4c-.3-.15-1.7-.85-1.95-.95-.25-.1-.45-.15-.65.15-.2.3-.75.95-.95 1.15-.2.2-.4.2-.7.05-1.2-.6-2.2-1.5-2.9-2.5-.2-.3-.3-.6-.3-.8 0-.2.1-.4.2-.6.1-.2.2-.4.25-.6.05-.2 0-.4-.05-.6-.05-.2-.45-1.1-.65-1.5-.2-.4-.35-.4-.5-.4h-.45c-.15 0-.4.05-.6.25-.2.2-.8.8-.8 1.95s.85 2.3.95 2.45c.1.15 1.65 2.5 4 3.45.55.2 1.05.35 1.45.45.6.2 1.15.15 1.6.1.5-.05 1.5-.6 1.7-1.2.2-.6.2-1.1.15-1.2-.05-.1-.15-.15-.3-.2z" fill="white" />
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