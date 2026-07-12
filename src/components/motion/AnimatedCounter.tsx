import { motion, useInView, useMotionValue, useSpring } from 'framer-motion'
import { useEffect, useRef, useState } from 'react'

/** Anima de 0 hasta `value` cuando entra en viewport. Conserva el sufijo (ej: "%"). */
export function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: '-20% 0px' })
  const motionValue = useMotionValue(0)
  const spring = useSpring(motionValue, { stiffness: 90, damping: 20, mass: 0.6 })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (isInView) motionValue.set(value)
  }, [isInView, motionValue, value])

  useEffect(() => {
    const unsubscribe = spring.on('change', (latest) => setDisplay(Math.round(latest)))
    return unsubscribe
  }, [spring])

  return (
    <span ref={ref}>
      <motion.span>{display}</motion.span>
      {suffix}
    </span>
  )
}
