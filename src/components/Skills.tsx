"use client";

import { SectionBadge } from "@/components/common/SectionBadge";
import { SKILLS } from "@/lib/constants/skills";
import {
  DecorativeUnderline,
  UnderlineVariants,
} from "@/components/svg/DecorativeUnderline";
import { CORE_EXPERTISE } from "@/lib/constants/personal";
import { useDesktopScrollAnimation } from "@/hooks/use-desktop-scroll-animation";

export const Skills = () => {
  const { ref, isVisible } = useDesktopScrollAnimation(0.1);

  return (
    <section id="skills" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6">
            <SectionBadge variant="accent">Technical Skills</SectionBadge>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            My toolkit for
            <br />
            <span className="relative inline-block">
              building greatness
              <DecorativeUnderline
                pathData={UnderlineVariants.smooth}
                color="hsl(var(--coral))"
              />
            </span>
          </h2>

          <p className="text-center text-sm md:text-base text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            A comprehensive set of technologies and tools I use to bring ideas
            to life
          </p>

          {/* Skills Grid */}
          <div
            ref={ref}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className={`group p-5 md:p-6 bg-card rounded-3xl border-2 border-border hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "md:opacity-0 md:translate-y-8"
                }`}
                style={{
                  transitionDelay: isVisible ? `${index * 100}ms` : "0ms",
                  transitionDuration: "600ms",
                }}
              >
                <div
                  className={`inline-flex p-3 md:p-4 rounded-2xl ${skill.color} border-2 mb-3 md:mb-4 group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="h-5 w-5 md:h-6 md:w-6" />
                </div>
                <h3 className="font-bold text-lg md:text-xl mb-3 md:mb-4">
                  {skill.title}
                </h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-xs md:text-sm text-muted-foreground flex items-center"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-current mr-2 flex-shrink-0 opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-8 md:mt-12 p-6 md:p-8 bg-muted/50 rounded-3xl">
            <h3 className="font-bold text-base md:text-lg mb-3 md:mb-4">
              Core Areas of Expertise
            </h3>
            <div className="flex flex-wrap gap-2 md:gap-3">
              {CORE_EXPERTISE.map((item, index) => (
                <span
                  key={index}
                  className="px-3 md:px-4 py-1.5 md:py-2 bg-background rounded-full text-xs md:text-sm font-medium border border-border"
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
