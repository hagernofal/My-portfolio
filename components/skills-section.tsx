const skills = [
  { name: "HTML", icon: "🌐", category: "Frontend" },
  { name: "CSS", icon: "🎨", category: "Frontend" },
  { name: "JavaScript", icon: "⚡", category: "Frontend" },
  { name: "Bootstrap", icon: "📦", category: "Framework" },
  { name: "Git & GitHub", icon: "🔀", category: "Tools" },
  { name: "Python", icon: "🐍", category: "Backend" },

  { name: "Node.js", icon: "🟢", category: "Backend" },
  { name: "Next.js", icon: "⚫", category: "Framework" },
  { name: "Angular", icon: "🅰️", category: "Framework" },

  { name: "SQL", icon: "🗄️", category: "Database" },
  { name: "NoSQL", icon: "📂", category: "Database" },
  { name: "MongoDB", icon: "🍃", category: "Database" }
];

export function SkillsSection() {
  return (
    <section id="skills" className="bg-card rounded-xl p-6 md:p-10 shadow-lg">
      <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-6">
        Skills
      </h2>
      
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="group bg-secondary rounded-lg p-4 text-center transition-all duration-300 hover:bg-primary hover:scale-105 hover:shadow-md cursor-default"
          >
            <div className="text-2xl mb-2" role="img" aria-label={skill.name}>
              {skill.icon}
            </div>
            <p className="font-medium text-foreground group-hover:text-primary-foreground transition-colors duration-300">
              {skill.name}
            </p>
            <p className="text-xs text-muted-foreground group-hover:text-primary-foreground/80 transition-colors duration-300 mt-1">
              {skill.category}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
