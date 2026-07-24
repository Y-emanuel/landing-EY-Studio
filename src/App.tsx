import { MotionConfig } from 'framer-motion'
import { FAQ } from './components/FAQ'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { SocialProof } from './components/SocialProof'
import { PainVsSolution } from './components/PainVsSolution'
import { Features } from './components/Features'
import { Demos } from './components/Demos'
import { FinalCTA } from './components/FinalCTA'
import { ComparisonTable } from './components/ComparisonTable'
import { ScrollProgress } from './components/motion/ScrollProgress'
import { GlowSpotlight } from './components/motion/GlowSpotlight'
import { Pricing } from './components/Pricing'
import { BackToTop } from './components/BackToTop'

function App() {
  return (
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-ink text-white">
        {/* Efectos globales */}
        <GlowSpotlight />
        <ScrollProgress />
        <Header />
        <Hero />
        <SocialProof />
        <PainVsSolution />
        <Features />
        <Demos />
        <ComparisonTable />
        <Pricing />
        <FAQ />
        <FinalCTA />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </main>
    </MotionConfig>
  )
}

export default App