import { ArrowUpRight, TrendingUp, Users, Zap } from "lucide-react";
import { Card } from "@/components/ui/card";

const projects = [
  {
    title: "Real-Time Gold Rate Tracker",
    company: "Upstox",
    description: "Engineered a real-time gold rate tracking platform with React, Redux, and Server-Side Rendering. Optimized data fetching and UI rendering for seamless user experience.",
    impact: "40% increase in user engagement",
    icon: TrendingUp,
    color: "bg-mustard/20 text-mustard"
  },
  {
    title: "IPO Application Platform",
    company: "Upstox",
    description: "Revamped the IPO application platform using Next.js and TypeScript with conditional form logic and user-centric validation workflows.",
    impact: "70% increase in successful applications",
    icon: Users,
    color: "bg-forest-green/20 text-forest-green"
  },
  {
    title: "Educational Platforms (UpLearn, Webinars)",
    company: "Upstox",
    description: "Developed interactive educational platforms with Tailwind CSS, leveraging Mixpanel event tracking and user segmentation for better engagement.",
    impact: "30% improvement in retention",
    icon: Zap,
    color: "bg-coral/20 text-coral"
  },
  {
    title: "Real-Time Operational Dashboard",
    company: "MSys Technologies",
    description: "Built a comprehensive dashboard using Redux Saga and React Hooks, optimizing data polling and UI state updates for instant data visibility.",
    impact: "Enabled instant decision-making",
    icon: TrendingUp,
    color: "bg-warm-brown/20 text-warm-brown"
  }
];

export const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-mustard/10 border border-mustard/30 rounded-full">
              <span className="text-sm font-semibold text-mustard">Featured Work</span>
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Projects that
            <br />
            <span className="relative inline-block">
              drive results
              <svg 
                className="absolute -bottom-2 left-0 w-full" 
                viewBox="0 0 250 12" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M2 8C40 4 80 10 120 6C160 2 200 8 248 4" 
                  stroke="hsl(var(--mustard))" 
                  strokeWidth="3" 
                  strokeLinecap="round"
                />
              </svg>
            </span>
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            Highlighting key projects that demonstrate my expertise in building scalable, user-focused applications
          </p>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-current cursor-pointer"
              >
                <div className={`inline-flex p-3 rounded-xl ${project.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <project.icon className="h-6 w-6" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-3">
                  <h3 className="font-bold text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>

                <p className="text-sm font-semibold text-muted-foreground mb-3">{project.company}</p>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-semibold">
                  ✨ {project.impact}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional highlights */}
          <div className="mt-12 p-8 bg-muted/50 rounded-3xl">
            <h3 className="font-bold text-lg mb-4">Other Notable Achievements</h3>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-muted-foreground">
              <div className="flex items-start gap-2">
                <span className="text-forest-green text-lg">✓</span>
                <span>50% reduction in drop-off rates through optimized onboarding flows</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-forest-green text-lg">✓</span>
                <span>30% reduction in API latency through smart caching strategies</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-forest-green text-lg">✓</span>
                <span>15% improvement in page load performance across airline interfaces</span>
              </div>
              <div className="flex items-start gap-2">
                <span className="text-forest-green text-lg">✓</span>
                <span>35% boost in user satisfaction through responsive design enhancements</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
