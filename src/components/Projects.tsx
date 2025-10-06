"use client";

import { ArrowUpRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { SectionBadge } from "@/components/common/SectionBadge";
import {
  DecorativeUnderline,
  UnderlineVariants,
} from "@/components/svg/DecorativeUnderline";
import { PROJECTS, OTHER_ACHIEVEMENTS } from "@/lib/constants/projects";

export const Projects = () => {
  return (
    <section id="projects" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6">
            <SectionBadge variant="accent">Featured Work</SectionBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Projects that
            <br />
            <span className="relative inline-block">
              drive results
              <DecorativeUnderline
                pathData={UnderlineVariants.straight}
                color="hsl(var(--mustard))"
              />
            </span>
          </h2>

          <p className="text-center text-sm md:text-base text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            Highlighting key projects that demonstrate my expertise in building
            scalable, user-focused applications
          </p>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            {PROJECTS.map((project, index) => (
              <Card
                key={index}
                className="group p-5 md:p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-2 border-border hover:border-current cursor-pointer"
              >
                <div
                  className={`inline-flex p-2.5 md:p-3 rounded-xl ${project.color} mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <project.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>

                <div className="flex items-start justify-between gap-2 mb-2 md:mb-3">
                  <h3 className="font-bold text-lg md:text-xl group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform flex-shrink-0" />
                </div>

                <p className="text-xs md:text-sm font-semibold text-muted-foreground mb-2 md:mb-3">
                  {project.company}
                </p>

                <p className="text-sm md:text-base text-muted-foreground mb-3 md:mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="inline-block px-3 md:px-4 py-1.5 md:py-2 bg-accent/10 text-accent rounded-full text-xs md:text-sm font-semibold">
                  ✨ {project.impact}
                </div>
              </Card>
            ))}
          </div>

          {/* Additional highlights */}
          <div className="mt-8 md:mt-12 p-6 md:p-8 bg-muted/50 rounded-3xl">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
              Other Notable Achievements
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 text-xs md:text-sm text-muted-foreground">
              {OTHER_ACHIEVEMENTS.map((achievement, index) => (
                <div key={index} className="flex items-start gap-2">
                  <span className="text-forest-green text-base md:text-lg flex-shrink-0">
                    ✓
                  </span>
                  <span>{achievement}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
