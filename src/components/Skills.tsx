"use client";

import { SectionBadge } from "@/components/common/SectionBadge";
import { SKILLS } from "@/lib/constants/skills";
import {
  DecorativeUnderline,
  UnderlineVariants,
} from "@/components/svg/DecorativeUnderline";
import { CORE_EXPERTISE } from "@/lib/constants/personal";

export const Skills = () => {
  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6">
            <SectionBadge variant="accent">Technical Skills</SectionBadge>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
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

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A comprehensive set of technologies and tools I use to bring ideas
            to life
          </p>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {SKILLS.map((skill, index) => (
              <div
                key={index}
                className="group p-6 bg-card rounded-3xl border-2 border-border hover:border-current transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
              >
                <div
                  className={`inline-flex p-4 rounded-2xl ${skill.color} border-2 mb-4 group-hover:scale-110 transition-transform`}
                >
                  <skill.icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-xl mb-4">{skill.title}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, i) => (
                    <li
                      key={i}
                      className="text-sm text-muted-foreground flex items-center"
                    >
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
              {CORE_EXPERTISE.map((item, index) => (
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
