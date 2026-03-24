import Image from "next/image"

export function HeroCard() {
  return (
    <div className="bg-card rounded-xl overflow-hidden shadow-lg flex flex-col md:flex-row">
      {/* Profile Image - Left Side */}
      <div className="md:w-2/5 relative">
        <Image
          src="/images/profile3.jpeg"
          alt="Hager Nofal - Full Stack Developer"
          width={300}
          height={100}
          className="w-full h-64 md:h-full object-cover"
          priority
        />
      </div>
      
      {/* Content - Right Side */}
      <div className="md:w-3/5 p-6 md:p-10 flex flex-col justify-center">
        <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-4">
          Full Stack Developer
        </p>
        
        <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
          Hager Nofal
        </h1>
        
        <p className="text-sm uppercase tracking-[0.2em] text-primary font-medium mb-4">
          ITI Trainee
        </p>
        
        <p className="text-muted-foreground leading-relaxed mb-6 text-pretty">
          Passionate about building responsive and user-friendly web applications. 
          I combine creativity with technical skills to deliver exceptional digital experiences.
        </p>
        
        <div className="flex flex-wrap gap-3">
          <a 
            href="#contact" 
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-accent hover:scale-105 hover:shadow-md"
          >
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            Get in Touch
          </a>
          <a 
            href="#projects" 
            className="inline-flex items-center justify-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-105"
          >
            View Projects
          </a>
        </div>
      </div>
    </div>
  )
}
