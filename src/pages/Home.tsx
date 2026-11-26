import Seo from '../components/Seo'
import Hero from '../components/Hero'
import TrustMarquee from '../components/TrustMarquee'
import BigStatement from '../components/BigStatement'
import Services from '../components/Services'
import Clients from '../components/Clients'
import Rescue from '../components/Rescue'
import Process from '../components/Process'
import QuoteMarquee from '../components/QuoteMarquee'
import WhyUs from '../components/WhyUs'
import Team from '../components/Team'
import FAQ from '../components/FAQ'
import ContactSection from '../components/ContactSection'
import { HOME_FAQS } from '../data/content'

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: HOME_FAQS.map((f) => ({
    '@type': 'Question',
    name: f.q,
    acceptedAnswer: { '@type': 'Answer', text: f.a },
  })),
}

export default function Home() {
  return (
    <>
      <Seo
        title="DflexPro Studios | Software Development Company & Project Rescue"
        description="DflexPro Studios is an MSME-registered software development company. We build enterprise software, SaaS platforms & MVPs, and rescue stuck projects other teams couldn't finish."
        path="/"
        jsonLd={faqSchema}
      />
      <Hero />
      <TrustMarquee />
      <BigStatement />
      <Services />
      <Clients />
      <Rescue />
      <Process />
      <QuoteMarquee />
      <WhyUs />
      <Team />
      <FAQ />
      <ContactSection />
    </>
  )
}
