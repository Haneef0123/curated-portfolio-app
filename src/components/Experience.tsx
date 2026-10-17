"use client";

import { Calendar, GraduationCap } from "lucide-react";
import { SectionBadge } from "@/components/common/SectionBadge";
import { EDUCATION, EXPERIENCES } from "@/lib/constants";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

/** Accent tile per role — the monogram reads like an app icon. */
const MONOGRAMS = [
  "border-mustard/40 bg-mustard/15",
  "border-forest-green/40 bg-forest-green/15",
  "border-coral/40 bg-coral/15",
] as const;

export const Experience = () => {
  const timeline = useReveal();
  const education = useReveal();

  return (
    <section id="experience" className="section bg-secondary">
      <div className="shell">
        <SectionBadge>Professional Journey</SectionBadge>

        <h2 className="type-title mt-6 max-w-[20ch] text-foreground">
          Where I've made an impact.
        </h2>

        <p className="type-lead mt-6 max-w-[44rem] text-muted-foreground">
          A timeline of my professional growth and key contributions.
        </p>

        <div ref={timeline.ref} className="mt-14 space-y-5">
          {EXPERIENCES.map((experience, index) => (
            <article
              key={`${experience.company}-${experience.period}`}
              className={cn(
                "reveal surface p-6 md:p-8",
                timeline.isVisible && "is-visible"
              )}
              style={{
                transitionDelay: timeline.isVisible
                  ? `${index * 90}ms`
                  : "0ms",
              }}
            >
              <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                <div className="flex min-w-0 items-start gap-4">
                  <span
                    aria-hidden="true"
                    className={cn(
                      "inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border text-[17px] font-semibold text-foreground",
                      MONOGRAMS[index % MONOGRAMS.length]
                    )}
                  >
                    {experience.company.charAt(0)}
                  </span>

                  <div className="min-w-0">
                    <h3 className="type-title-sm text-foreground">
                      {experience.company}
                    </h3>
                    <p className="type-small mt-1.5 text-muted-foreground">
                      {experience.role} · {experience.location}
                    </p>
                  </div>
                </div>

                <span className="type-caption inline-flex w-fit shrink-0 items-center gap-2 rounded-full bg-muted px-3.5 py-2 text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" aria-hidden="true" />
                  {experience.period}
                </span>
              </header>

              <ul className="mt-7 grid gap-x-12 gap-y-3.5 lg:grid-cols-2">
                {experience.achievements.map((achievement) => (
                  <li
                    key={achievement}
                    className="type-body flex gap-3 text-muted-foreground"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-[0.65rem] h-1 w-1 shrink-0 rounded-full bg-foreground/35"
                    />
                    <span>{achievement}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div
          ref={education.ref}
          className={cn(
            "reveal surface-muted mt-5 flex flex-col gap-4 p-6 md:flex-row md:items-center md:justify-between md:p-8",
            education.isVisible && "is-visible"
          )}
        >
          <div className="flex items-start gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border border-forest-green/40 bg-forest-green/15 text-forest-green">
              <GraduationCap className="h-5 w-5" aria-hidden="true" />
            </span>
            <div>
              <h3 className="type-title-sm text-foreground">
                {EDUCATION.degree}
              </h3>
              <p className="type-small mt-1.5 text-muted-foreground">
                {EDUCATION.institution}
              </p>
            </div>
          </div>

          <span className="type-caption w-fit shrink-0 rounded-full border border-border/60 bg-background px-3.5 py-2 text-muted-foreground">
            {EDUCATION.period}
          </span>
        </div>
      </div>
    </section>
  );
};
