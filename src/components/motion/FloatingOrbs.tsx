import { motion } from 'framer-motion'

export function FloatingOrbs() {
  return (
    <>
      {/* Orb 1 */}
      <motion.div
        animate={{ y: [-30, 30, -30], x: [-20, 20, -20] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute left-[5%] top-[15%] h-32 w-32 rounded-full bg-violet-pulse/8 blur-3xl"
      />
      {/* Orb 2 */}
      <motion.div
        animate={{ y: [40, -40, 40], x: [30, -30, 30] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        className="absolute right-[10%] top-[40%] h-48 w-48 rounded-full bg-violet-deep/10 blur-3xl"
      />
      {/* Orb 3 */}
      <motion.div
        animate={{ y: [-20, 40, -20], x: [50, -20, 50] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
        className="absolute left-[20%] bottom-[20%] h-40 w-40 rounded-full bg-violet-haze/8 blur-3xl"
      />
    </>
  )
}