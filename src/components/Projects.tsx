import { ArrowUpRight, Check } from "lucide-react";
import { SectionBadge } from "@/components/common/SectionBadge";
import { OTHER_ACHIEVEMENTS, PROJECTS } from "@/lib/constants/projects";
import { cn } from "@/lib/utils";

export const Projects = () => {
  return (
    <section id="projects" className="section">
      <div className="shell">
        <SectionBadge variant="accent">Featured Work</SectionBadge>

        <h2 className="type-title mt-6 max-w-[20ch] text-foreground">
          Projects that drive results.
        </h2>

        <p className="type-lead mt-6 max-w-[44rem] text-muted-foreground">
          Key projects that demonstrate my expertise in building scalable,
          user-focused applications.
        </p>

        <div className="mt-14 grid gap-5 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <article
              key={project.title}
              className="surface flex h-full flex-col p-6 md:p-8"
            >
              <span
                className={cn(
                  "inline-flex h-11 w-11 items-center justify-center rounded-2xl",
                  project.color
                )}
              >
                <project.icon className="h-5 w-5" aria-hidden="true" />
              </span>

              <div className="mt-6 flex items-start justify-between gap-4">
                <h3 className="type-title-sm text-foreground">
                  {project.title}
                </h3>
                <ArrowUpRight
                  className="mt-1 h-5 w-5 shrink-0 text-muted-foreground"
                  aria-hidden="true"
                />
              </div>

              <p className="type-caption mt-2 font-semibold text-primary">
                {project.company}
              </p>

              <p className="type-body mt-4 text-muted-foreground">
                {project.description}
              </p>

              <span className="type-caption mt-6 inline-flex w-fit items-center gap-2 rounded-full bg-accent/10 px-3.5 py-2 font-semibold text-accent">
                {project.impact}
              </span>
            </article>
          ))}
        </div>

        <div className="surface-muted mt-5 p-6 md:p-8">
          <h3 className="type-title-sm text-foreground">
            Other notable achievements
          </h3>

          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {OTHER_ACHIEVEMENTS.map((achievement) => (
              <li
                key={achievement}
                className="type-body flex items-start gap-3 text-muted-foreground"
              >
                <Check
                  className="mt-1 h-4 w-4 shrink-0 text-forest-green"
                  aria-hidden="true"
                />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
