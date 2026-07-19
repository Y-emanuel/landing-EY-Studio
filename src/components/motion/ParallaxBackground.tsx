import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef } from 'react'

interface ParallaxBackgroundProps {
  image: string
  className?: string
  speed?: number // 0-1, donde 0 = estático, 1 = máximo movimiento
}

export function ParallaxBackground({ 
  image, 
  className = '',
  speed = 0.4
}: ParallaxBackgroundProps) {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  })
  const y = useTransform(scrollYProgress, [0, 1], ['0%', `${speed * 100}%`])
  
  return (
    <motion.div 
      ref={ref} 
      style={{ y }} 
      className={`absolute inset-0 ${className}`}
    >
      <img src={image} alt="" className="h-full w-full object-cover" />
    </motion.div>
  )
}