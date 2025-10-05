import { Code2, Layout, Palette, Zap } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skills = [
  {
    icon: Code2,
    title: "Frontend Development",
    color: "bg-mustard/20 text-mustard border-mustard/30",
    items: ["React", "Next.js", "TypeScript", "JavaScript"]
  },
  {
    icon: Palette,
    title: "Styling & Design",
    color: "bg-coral/20 text-coral border-coral/30",
    items: ["Tailwind CSS", "CSS3", "SCSS", "Responsive Design"]
  },
  {
    icon: Zap,
    title: "State Management",
    color: "bg-forest-green/20 text-forest-green border-forest-green/30",
    items: ["Redux", "Mobx", "Redux Saga", "Context API"]
  },
  {
    icon: Layout,
    title: "Tools & Testing",
    color: "bg-warm-brown/20 text-warm-brown border-warm-brown/30",
    items: ["Git", "Jest", "Chrome DevTools", "Jira"]
  }
];

export const Skills = () => {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div 
          ref={ref}
          className={`max-w-6xl mx-auto transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Section badge */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-coral/10 border border-coral/30 rounded-full">
              <span className="text-sm font-semibold text-coral">Technical Skills</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            My toolkit for
            <br />
            <span className="relative inline-block">
              building greatness
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 300 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 6C50 10 100 2 150 6C200 10 250 4 298 8" 
                  stroke="hsl(var(--coral))" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas to life
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className={`group p-6 bg-card rounded-3xl border-2 border-border hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`inline-flex p-4 rounded-2xl ${skill.color} border-2 mb-4 group-hover:scale-110 transition-transform`}>
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-12 p-8 bg-muted/50 rounded-3xl">
            <h3 className="font-bold text-lg mb-4">Core Areas of Expertise</h3>
            <div className="flex flex-wrap gap-3">
              {["RESTful APIs", "UI/UX Optimization", "Performance Tuning", "Agile Development", 
                "Responsive Design", "Cross-browser Compatibility", "SEO Best Practices"].map((item, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-background rounded-full text-sm font-medium border border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
