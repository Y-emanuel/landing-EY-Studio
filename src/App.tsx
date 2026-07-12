import { MotionConfig } from 'framer-motion'
import { Comparison } from './components/Comparison'
import { Contact } from './components/Contact'
import { Deliverables } from './components/Deliverables'
import { FAQ } from './components/FAQ'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { ScrollProgress } from './components/motion/ScrollProgress'
import { NicheStrip } from './components/NicheStrip'
import { Packages } from './components/Packages'
import { Process } from './components/Process'
import { Projects } from './components/Projects'
import { Services } from './components/Services'
import { Testimonials } from './components/Testimonials'
import { WhyUs } from './components/WhyUs'

function App() {
  return (
    // reducedMotion="user": si el sistema operativo tiene activado "reducir movimiento",
    // Framer Motion recorta automáticamente las animaciones de transform/layout en toda la app.
    <MotionConfig reducedMotion="user">
      <main className="min-h-screen overflow-hidden bg-ink text-white">
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
        <Testimonials />
        <FAQ />
        <Contact />
        <Footer />
      </main>
    </MotionConfig>
  )
}

export default App
