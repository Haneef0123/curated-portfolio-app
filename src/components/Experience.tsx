"use client";

import { EDUCATION, EXPERIENCES } from "@/lib/constants";
import { Briefcase, Calendar } from "lucide-react";

export const Experience = () => {
  return (
    <section id="experience" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto">
          {/* Section badge */}
          <div className="text-center mb-6">
            <div className="inline-block px-4 py-2 bg-warm-brown/10 border border-warm-brown/30 rounded-full">
              <span className="text-sm font-semibold text-warm-brown">
                Professional Journey
              </span>
            </div>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-4">
            Where I've
            <br />
            <span className="text-warm-brown">made an impact</span>
          </h2>

          <p className="text-center text-sm md:text-base text-muted-foreground mb-12 md:mb-16 max-w-2xl mx-auto px-4">
            A timeline of my professional growth and key contributions
          </p>

          {/* Timeline */}
          <div className="space-y-6 md:space-y-8">
            {EXPERIENCES.map((exp, index) => (
              <div
                key={index}
                className={`relative md:pl-8 md:border-l-4 ${
                  exp.color
                } md:pb-8 ${
                  index !== EXPERIENCES.length - 1 ? "pb-6 md:pb-0" : ""
                } md:last:pb-0`}
              >
                {/* Timeline dot - hidden on mobile */}
                <div className="hidden md:block absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-background border-4 border-current" />

                <div className="bg-background rounded-2xl p-4 md:p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 md:gap-4 mb-3 md:mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-4 w-4 md:h-5 md:w-5 text-muted-foreground flex-shrink-0" />
                        <h3 className="font-bold text-xl md:text-2xl">
                          {exp.company}
                        </h3>
                      </div>
                      <p className="text-base md:text-lg font-semibold text-muted-foreground">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-muted-foreground bg-muted px-3 md:px-4 py-1.5 md:py-2 rounded-full whitespace-nowrap self-start">
                      <Calendar className="h-3 w-3 md:h-4 md:w-4 flex-shrink-0" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-2 md:space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-sm md:text-base text-muted-foreground"
                      >
                        <span className="inline-block w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-current mt-1.5 md:mt-2 mr-2 md:mr-3 flex-shrink-0 opacity-60" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-12 md:mt-16 p-6 md:p-8 bg-background rounded-2xl border-2 border-border">
            <h3 className="font-bold text-xl md:text-2xl mb-3 md:mb-4 flex items-center gap-2">
              <span className="text-2xl md:text-3xl">🎓</span>
              Education
            </h3>
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-3 md:gap-4">
              <div>
                <p className="font-semibold text-base md:text-lg">
                  {EDUCATION.degree}
                </p>
                <p className="text-sm md:text-base text-muted-foreground">
                  {EDUCATION.institution}
                </p>
              </div>
              <div className="text-muted-foreground bg-muted px-3 md:px-4 py-1.5 md:py-2 rounded-full text-xs md:text-sm whitespace-nowrap self-start">
                {EDUCATION.period}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
