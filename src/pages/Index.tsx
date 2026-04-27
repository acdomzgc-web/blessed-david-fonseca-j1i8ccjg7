import { Hero } from '@/components/sections/Hero'
import { About } from '@/components/sections/About'
import { Method } from '@/components/sections/Method'
import { Certifications } from '@/components/sections/Certifications'
import { Features } from '@/components/sections/Features'
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
      <Features />
      <Services />
      <Testimonials />
      <Faq />
      <Contact />
    </>
  )
}
