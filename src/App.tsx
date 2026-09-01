import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TrustMarquee from './components/TrustMarquee'
import BigStatement from './components/BigStatement'
import Services from './components/Services'
import Clients from './components/Clients'
import Rescue from './components/Rescue'
import Process from './components/Process'
import QuoteMarquee from './components/QuoteMarquee'
import WhyUs from './components/WhyUs'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-ink">
      <Navbar />
      <main>
        <Hero />
        <TrustMarquee />
        <BigStatement />
        <Services />
        <Clients />
        <Rescue />
        <Process />
        <QuoteMarquee />
        <WhyUs />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

export default App
