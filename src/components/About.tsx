"use client";

import { useScrollAnimation } from "@/hooks/use-scroll-animation";
import { useCountUp } from "@/hooks/use-count-up";
import { SectionBadge } from "@/components/common/SectionBadge";
import { ABOUT_STATS } from "@/lib/constants/personal";

export const About = () => {
  const { ref, isVisible } = useScrollAnimation();
  const stats = [
    useCountUp(ABOUT_STATS[0].value, 2000, isVisible),
    useCountUp(ABOUT_STATS[1].value, 2000, isVisible),
    useCountUp(ABOUT_STATS[2].value, 2000, isVisible),
  ];

  return (
    <section id="about" className="py-12 md:py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section badge */}
          <SectionBadge variant="secondary">About Me</SectionBadge>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 md:mb-8">
            Turning ideas into
            <br />
            <span className="text-forest-green">pixel-perfect reality</span>
          </h2>

          <div className="space-y-4 md:space-y-6 text-base md:text-lg text-muted-foreground leading-relaxed">
            <p>
              I'm a{" "}
              <span className="font-semibold text-foreground">
                Front End Developer
              </span>{" "}
              with over 6 years of experience building dynamic, responsive web
              applications. My expertise spans across{" "}
              <span className="font-semibold text-foreground">
                React, Next.js, JavaScript, TypeScript, and Redux
              </span>
              , with a proven track record in delivering user-focused fintech
              and educational platforms from design to deployment.
            </p>

            <p>
              I specialize in creating scalable frontend architectures,
              implementing efficient state management solutions, and integrating
              RESTful APIs. My work focuses on performance optimization,
              exceptional user experiences, and seamless collaboration with
              cross-functional teams in Agile environments.
            </p>

            <p>
              Currently at{" "}
              <span className="font-semibold text-foreground">Upstox</span>,
              I've engineered real-time tracking platforms, revamped IPO
              applications, and developed interactive educational platforms that
              have significantly improved user engagement and retention rates.
            </p>
          </div>

          {/* Stats */}
          <div
            ref={ref}
            className="grid grid-cols-3 gap-4 md:gap-8 mt-8 md:mt-12 pt-8 md:pt-12 border-t border-border"
          >
            {ABOUT_STATS.map((stat, index) => (
              <div key={stat.label} className="text-center">
                <div
                  className={`text-3xl sm:text-4xl md:text-5xl font-bold mb-1 md:mb-2 ${stat.color}`}
                >
                  {stats[index]}+
                </div>
                <div className="text-xs sm:text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
