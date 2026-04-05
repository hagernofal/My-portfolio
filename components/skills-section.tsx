import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGitAlt,
  FaGithub,
  FaNodeJs,
  FaAngular
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiMongodb,
  SiMysql
} from "react-icons/si";

import { DiPython } from "react-icons/di";

const skills = [
  { name: "HTML", icon: <FaHtml5 />, category: "Frontend" },
  { name: "CSS", icon: <FaCss3Alt />, category: "Frontend" },
  { name: "JavaScript", icon: <FaJs />, category: "Frontend" },
  { name: "Bootstrap", icon: <FaBootstrap />, category: "Framework" },
  { name: "Git", icon: <FaGitAlt />, category: "Tools" },
  { name: "GitHub", icon: <FaGithub />, category: "Tools" },
  { name: "Python", icon: <DiPython />, category: "Backend" },
  { name: "Node.js", icon: <FaNodeJs />, category: "Backend" },
  { name: "Next.js", icon: <SiNextdotjs />, category: "Framework" },
  { name: "Angular", icon: <FaAngular />, category: "Framework" },
  { name: "SQL", icon: <SiMysql />, category: "Database" },
  { name: "MongoDB", icon: <SiMongodb />, category: "Database" }
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
            <div className="text-3xl mb-2 text-primary group-hover:text-primary-foreground transition-colors duration-300">
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
