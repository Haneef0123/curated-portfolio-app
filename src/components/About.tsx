"use client";

import { SectionBadge } from "@/components/common/SectionBadge";
import { ABOUT_STATS } from "@/lib/constants/personal";
import { useCountUp } from "@/hooks/use-count-up";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

const Stat = ({
  value,
  label,
  visible,
}: {
  value: number;
  label: string;
  visible: boolean;
}) => {
  const count = useCountUp(value, 1800, visible);

  return (
    <div>
      <div className="tabular text-[2.5rem] font-semibold leading-none tracking-[-0.03em] text-foreground md:text-[3.25rem]">
        {count}
      </div>
      <div className="type-small mt-3 text-muted-foreground">{label}</div>
    </div>
  );
};

export const About = () => {
  const content = useReveal();
  const stats = useReveal();

  return (
    <section id="about" className="section bg-secondary">
      <div className="shell">
        <SectionBadge variant="secondary">About</SectionBadge>

        <h2 className="type-title mt-6 max-w-[20ch] text-foreground">
          Turning ideas into pixel-perfect reality.
        </h2>

        <div
          ref={content.ref}
          className={cn(
            "reveal mt-8 max-w-[48rem] space-y-5",
            content.isVisible && "is-visible"
          )}
        >
          <p className="type-body text-muted-foreground">
            I'm a{" "}
            <span className="font-medium text-foreground">
              Front End Developer
            </span>{" "}
            with over 8 years of experience building scalable, high-performance
            web applications and financial-product experiences. My expertise
            spans{" "}
            <span className="font-medium text-foreground">
              React, Next.js, TypeScript, real-time data UI, platform
              performance, SEO, analytics, and privacy-aware engineering
            </span>
            .
          </p>

          <p className="type-body text-muted-foreground">
            I create reusable frontend foundations for data-heavy financial
            products — API integrations, caching, responsive components, and
            clear loading and error states — while improving page speed and
            reliability through server-side rendering, lazy loading, and
            frontend architecture improvements.
          </p>

          <p className="type-body text-muted-foreground">
            Currently at{" "}
            <span className="font-medium text-foreground">Upstox</span>, I've
            built real-time trading and investment-research experiences with
            live market prices, charts, and interactive tables, shipped
            account-opening and IPO workflows, implemented technical SEO for
            financial content, and mentored junior engineers through code
            reviews and knowledge sharing.
          </p>
        </div>

        <div
          ref={stats.ref}
          className={cn(
            "reveal mt-16 grid grid-cols-1 gap-10 border-t border-border pt-10 sm:grid-cols-3 sm:gap-8",
            stats.isVisible && "is-visible"
          )}
        >
          {ABOUT_STATS.map((stat) => (
            <Stat
              key={stat.label}
              value={stat.value}
              label={stat.label}
              visible={stats.isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
