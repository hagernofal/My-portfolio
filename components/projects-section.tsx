const projects = [
  {
    title: "Crowdfunding Platform",
    description:
      "My first full-stack crowdfunding platform using HTML, CSS, JavaScript, JSON Server Package, and JSON Server Auth Package.",
    tags: ["Html", "css","JavaScript"],
    github: "https://github.com/hagernofal/crowdfunding-platform-project.git",
  },
  {
    title: "Healthcare landing page",
    description:
      "A responsive healthcare landing page using HTML, CSS, and Bootstrap",
    tags: ["HTML", "CSS", "Bootstrap"],
    github: "https://github.com/hagernofal/Modern-healthcare-landing-page.git",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="bg-card rounded-xl p-6 md:p-10 shadow-lg">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
        Projects
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {projects.map((project) => (
          <article
            key={project.title}
            className="group bg-secondary rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border border-transparent hover:border-primary/20"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-serif text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                {project.title}
              </h3>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300"
              >
                <path d="M7 7h10v10" />
                <path d="M7 17 17 7" />
              </svg>
            </div>

            <p className="text-muted-foreground text-sm leading-relaxed mb-4">
              {project.description}
            </p>

            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-xs bg-primary/10 text-primary px-3 py-1 rounded-full font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-4">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-sm text-primary hover:underline"
              >
                View on GitHub →
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
