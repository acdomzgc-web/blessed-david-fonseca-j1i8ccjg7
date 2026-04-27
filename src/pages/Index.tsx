import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Method } from '@/components/sections/Method'
import { Certifications } from '@/components/sections/Certifications'
import { Locations } from '@/components/sections/Locations'
import { Social } from '@/components/sections/Social'
import { WhyChoose } from '@/components/sections/WhyChoose'
import { Benefits } from '@/components/sections/Benefits'
import { Services } from '@/components/sections/Services'
import { Testimonials } from '@/components/sections/Testimonials'
import { Faq } from '@/components/sections/Faq'
import { Contact } from '@/components/sections/Contact'

export default function Index() {
  return (
    <>
      <Hero />
      <About />
      <Method />
      <Certifications />
      <Locations />
      <Social />
      <WhyChoose />
      <Benefits />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
