import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { WhyUs } from "@/components/why-us"
import { Pricing } from "@/components/pricing"
import { Team } from "@/components/team"
import { Testimonials } from "@/components/testimonials"
import { Partnership } from "@/components/partnership"
import { Blog } from "@/components/blog"
import { FAQ } from "@/components/faq"
import { Contact } from "@/components/contact"
import { Navbar } from "@/components/navbar"
import { Loader } from "@/components/loader"
import { Footer } from "@/components/footer"
import { WhatsAppWidget } from "@/components/whatsapp-widget"

export default function Page() {
  return (
    <>
      <Loader />
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
        <Services />
        <About />
        <WhyUs />
        <Pricing />
        <Team />
        <Testimonials />
        <Partnership />
        <Blog />
        <FAQ />
        <Contact />
      </main>
      <Footer />
      <WhatsAppWidget />
    </>
  )
}
