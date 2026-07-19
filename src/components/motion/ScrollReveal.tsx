import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'
import type { ReactNode } from 'react'

interface ScrollRevealProps {
  children: ReactNode
  className?: string
  from?: 'top' | 'bottom' | 'left' | 'right'
  opacityOnly?: boolean
}

export function ScrollReveal({ 
  children, 
  className = '', 
  from = 'bottom',
  opacityOnly = false
}: ScrollRevealProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start 0.85', 'end 0.15'],
  })

  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0])
  
  const translateMap = {
    top: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['-30px', '0px', '0px', '30px']),
    bottom: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['30px', '0px', '0px', '-30px']),
    left: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['-30px', '0px', '0px', '30px']),
    right: useTransform(scrollYProgress, [0, 0.2, 0.8, 1], ['30px', '0px', '0px', '-30px']),
  }

  const translate = opacityOnly ? '0px' : translateMap[from]

  return (
    <motion.div
      ref={ref}
      style={{
        opacity,
        y: typeof translate === 'string' ? 0 : translate,
        x: typeof translate === 'string' ? 0 : from === 'left' || from === 'right' ? translate : 0,
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}