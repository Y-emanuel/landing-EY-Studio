import type { Transition, Variants } from 'framer-motion'

/**
 * Curva de easing "premium": arranque rápido, llegada suave.
 * Se usa en toda la landing para que las animaciones se sientan consistentes.
 */
export const easePremium: Transition['ease'] = [0.16, 1, 0.3, 1]

export const durations = {
  fast: 0.35,
  base: 0.55,
  slow: 0.8,
}

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: durations.base, ease: easePremium },
  },
}

export const slideUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easePremium },
  },
}

export const slideDown: Variants = {
  hidden: { opacity: 0, y: -18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: durations.base, ease: easePremium },
  },
}

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: durations.base, ease: easePremium },
  },
}

/** Alias semántico: mismo comportamiento que slideUp, pensado para reveals de sección. */
export const reveal: Variants = slideUp

/** Contenedor que escalona la entrada de sus hijos directos (deben tener variants propios). */
export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
}

/** Viewport por defecto para whileInView: dispara un poco antes de que el elemento entre del todo. */
export const defaultViewport = { once: true, margin: '-10% 0px -10% 0px' } as const
