import { HeroCard } from "@/components/hero-card"
import { AboutSection } from "@/components/about-section"
import { SkillsSection } from "@/components/skills-section"
import { ProjectsSection } from "@/components/projects-section"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background py-8 px-4 md:py-12">
      <div className="container mx-auto max-w-5xl space-y-8">
        {/* Hero Card */}
        <HeroCard />
        
        {/* About Section */}
        <AboutSection />
        
        {/* Skills Section */}
        <SkillsSection />
        
        {/* Projects Section */}
        <ProjectsSection />
        
        {/* Contact Section */}
        <ContactSection />
      </div>
    </main>
  )
}
