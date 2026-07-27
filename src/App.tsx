import { lazy, Suspense } from 'react'
import { MotionConfig } from 'framer-motion'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { PainVsSolution } from './components/PainVsSolution'
import { Features } from './components/Features'
import { FinalCTA } from './components/FinalCTA'
import { Footer } from './components/Footer'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { BackToTop } from './components/BackToTop'
import { ScrollProgress } from './components/motion/ScrollProgress'
import { GlowSpotlight } from './components/motion/GlowSpotlight'

// ✅ Lazy loading para secciones no críticas
const Demos = lazy(() => import('./components/Demos'))
const FAQ = lazy(() => import('./components/FAQ'))
const ComparisonTable = lazy(() => import('./components/ComparisonTable'))
const Pricing = lazy(() => import('./components/Pricing'))

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-ink text-white">
        <GlowSpotlight />
        <ScrollProgress />
        <Header />
        <Hero />
        <SocialProof />
        <PainVsSolution />
        <Features />
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <Demos />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <ComparisonTable />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <Pricing />
        </Suspense>
        <Suspense fallback={<div className="h-96 animate-pulse bg-white/5" />}>
          <FAQ />
        </Suspense>
        <FinalCTA />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </main>
    </MotionConfig>
  )
}

export default App