import { SectionBadge } from "@/components/common/SectionBadge";
import { SKILLS } from "@/lib/constants/skills";
import { CORE_EXPERTISE } from "@/lib/constants/personal";
import { cn } from "@/lib/utils";

export const Skills = () => {
  return (
    <section id="skills" className="section">
      <div className="shell">
        <SectionBadge variant="accent">Technical Skills</SectionBadge>

        <h2 className="type-title mt-6 max-w-[22ch] text-foreground">
          My toolkit for building greatness.
        </h2>

        <p className="type-lead mt-6 max-w-[44rem] text-muted-foreground">
          A focused set of technologies and tools I use to bring ideas to life.
        </p>

        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <article key={skill.title} className="surface h-full p-6">
              <h3 className="type-title-sm flex items-start gap-2.5 text-foreground lg:min-h-[2.32em]">
                <span
                  aria-hidden="true"
                  className={cn(
                    "mt-[0.47em] h-1.5 w-1.5 shrink-0 rounded-full",
                    skill.dot
                  )}
                />
                {skill.title}
              </h3>

              <ul className="mt-6 space-y-3">
                {skill.items.map((item) => (
                  <li key={item.name} className="flex items-center gap-3">
                    <span
                      aria-hidden="true"
                      className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[10px] border border-border/60 bg-muted"
                    >
                      <item.icon
                        className={cn("h-[17px] w-[17px]", item.color)}
                      />
                    </span>
                    <span className="type-small text-muted-foreground">
                      {item.name}
                    </span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <div className="surface-muted mt-12 p-6 md:p-8">
          <h3 className="type-small font-semibold text-foreground">
            Core areas of expertise
          </h3>

          <ul className="mt-5 flex flex-wrap gap-2.5">
            {CORE_EXPERTISE.map((item) => (
              <li
                key={item}
                className="type-caption rounded-full border border-border/70 bg-background px-4 py-2 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
