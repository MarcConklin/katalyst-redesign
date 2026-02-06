import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import ValueProp from '@/components/home/ValueProp'
import Capabilities from '@/components/home/Capabilities'
import FeaturedProject from '@/components/home/FeaturedProject'
import SocialProof from '@/components/home/SocialProof'
import FinalCTA from '@/components/home/FinalCTA'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      <ValueProp />
      <Capabilities />
      <FeaturedProject />
      <SocialProof />
      <FinalCTA />
      <Footer />
    </main>
  )
}
