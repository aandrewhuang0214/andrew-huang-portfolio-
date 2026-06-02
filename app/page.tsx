import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import SelectedWork from '@/components/SelectedWork'
import FullAbout from '@/components/FullAbout'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <HeroSection />
      <SelectedWork />
      <FullAbout />
      <ContactSection />
      <Footer />
    </main>
  )
}
