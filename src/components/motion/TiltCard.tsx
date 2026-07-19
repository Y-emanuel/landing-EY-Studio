import { motion, useMotionValue, useSpring } from 'framer-motion'
import type { MouseEvent, ReactNode } from 'react'

interface TiltCardProps {
  children: ReactNode
  className?: string
  intensity?: number
}

export function TiltCard({ children, className = '', intensity = 10 }: TiltCardProps) {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 200, damping: 20 })
  const springY = useSpring(y, { stiffness: 200, damping: 20 })

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect()
    const offsetX = (e.clientX - rect.left) / rect.width - 0.5
    const offsetY = (e.clientY - rect.top) / rect.height - 0.5
    x.set(offsetX * intensity)
    y.set(-offsetY * intensity)
  }

  function reset() {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      style={{
        perspective: 600,
        rotateX: springY,
        rotateY: springX,
        transformStyle: 'preserve-3d',
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      className={`transition-shadow duration-200 ${className}`}
    >
      <div style={{ transform: 'translateZ(0px)' }}>
        {children}
      </div>
    </motion.div>
  )
}