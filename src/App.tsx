import { MotionConfig } from 'framer-motion'
import { Comparison } from './components/Comparison'
import { Contact } from './components/Contact'
import { Deliverables } from './components/Deliverables'
import { FAQ } from './components/FAQ'
import { FloatingWhatsApp } from './components/FloatingWhatsApp'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ScrollProgress } from './components/motion/ScrollProgress'
import { GlowSpotlight } from './components/motion/GlowSpotlight'
import { NicheStrip } from './components/NicheStrip'
import { Packages } from './components/Packages'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { WhyUs } from './components/WhyUs'
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
        <NicheStrip />
        <Services />
        <Deliverables />
        <Projects />
        <Packages />
        <Process />
        <Comparison />
        <WhyUs />
        <FAQ />
        <Contact />
        <Footer />
        <FloatingWhatsApp />
        <BackToTop />
      </main>
    </MotionConfig>
  )
}

export default App