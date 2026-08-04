import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { PainVsSolution } from './components/PainVsSolution'
import { RoiCalculator } from './components/RoiCalculator' // <--- NUEVO MÓDULO 4
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { BackToTop } from './components/BackToTop'


// Lazy loading para módulos pesados
const Demos = lazy(() => import('./components/Demos'))
const Pricing = lazy(() => import('./components/Pricing'))
const FAQ = lazy(() => import('./components/FAQ'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-[#090A0F] text-white">
        <Header />
        <Hero />
        <SocialProof />
        <PainVsSolution />
        <RoiCalculator />
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <Demos />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <FAQ />
        </Suspense>

        <Footer />
        <FloatingWhatsApp />
        <BackToTop />

        {/* Vercel Telemetry */}
        <Analytics />
        <SpeedInsights />
      </main>
    </MotionConfig>
  )
}

export default App