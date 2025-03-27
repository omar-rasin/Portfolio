import Hero from "@/components/hero"
import About from "@/components/about"
import Projects from "@/components/projects"
import Resume from "@/components/resume"
import Skills from "@/components/skills"
import Contact from "@/components/contact"

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-4 py-8">
        <Hero />
        <About />
        <Projects />
        <Resume />
        <Skills />
        <Contact />
      </div>
    </main>
  )
}

