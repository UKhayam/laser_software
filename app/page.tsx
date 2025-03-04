import Hero from "@/components/hero"
import Services from "@/components/services"
import Projects from "@/components/projects"
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
      <Contact />
      <Footer />
    </main>
  )
}

