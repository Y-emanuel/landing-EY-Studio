import { motion, type Variants } from 'framer-motion'
import type { ReactNode } from 'react'
import { defaultViewport, slideUp } from '../../lib/motion'

type MotionTagName = 'div' | 'section' | 'article' | 'li' | 'footer' | 'header'

const tagMap = {
  div: motion.div,
  section: motion.section,
  article: motion.article,
  li: motion.li,
  footer: motion.footer,
  header: motion.header,
} as const

export function Reveal({
  children,
  className,
  variants = slideUp,
  delay = 0,
  as = 'div',
}: {
  children: ReactNode
  className?: string
  variants?: Variants
  delay?: number
  as?: MotionTagName
}) {
  const MotionTag = tagMap[as]

  return (
    <MotionTag
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
      transition={{ delay }}
    >
      {children}
    </MotionTag>
  )
}

/** Contenedor con stagger: sus hijos directos deben ser motion.* con variants (ej: slideUp). */
export function StaggerGroup({
  children,
  className,
  variants,
}: {
  children: ReactNode
  className?: string
  variants: Variants
}) {
  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={defaultViewport}
      variants={variants}
    >
      {children}
    </motion.div>
  )
}
