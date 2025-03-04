import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
import Team from "@/components/team"
import Testimonials from "@/components/testimonials"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Header from "@/components/header"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Header />
      <Hero />
      <Services />
      <Projects />
      <Team />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  )
}

