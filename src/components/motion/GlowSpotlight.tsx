import { motion, useMotionValue, useSpring } from 'framer-motion'
import { useEffect } from 'react'

export function GlowSpotlight() {
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const springX = useSpring(x, { stiffness: 80, damping: 25, mass: 0.5 })
  const springY = useSpring(y, { stiffness: 80, damping: 25, mass: 0.5 })

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      x.set(e.clientX)
      y.set(e.clientY)
    }
    window.addEventListener('mousemove', handleMove)
    return () => window.removeEventListener('mousemove', handleMove)
  }, [x, y])

  return (
    <motion.div
      className="pointer-events-none fixed inset-0 z-0"
      style={{
        background: `radial-gradient(circle 400px at ${springX.get()}px ${springY.get()}px, rgba(139,92,246,0.12), transparent 65%)`,
      }}
    />
  )
}