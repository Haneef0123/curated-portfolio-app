"use client";

import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    company: "Upstox",
    role: "Front End Developer",
    period: "Jan 2023 – Present",
    location: "India",
    color: "border-l-mustard",
    achievements: [
      "Engineered a real-time gold rate tracking platform using React, Redux, and SSR; optimized data fetching and UI rendering to boost user engagement by 40%",
      "Revamped the IPO application platform using Next.js and TypeScript; implemented conditional form logic and user-centric validation workflows, resulting in a 70% increase in successful applications",
      "Developed interactive educational platforms (UpLearn, Webinars) with Tailwind CSS; leveraged Mixpanel event tracking to improve feature engagement and increase retention by 30%",
      "Implemented Account Aggregator onboarding flows by integrating external APIs; led to a 50% reduction in drop-off rates",
    ],
  },
  {
    company: "MSys Technologies",
    role: "Front End Developer",
    period: "Jul 2021 – Jan 2023",
    location: "India",
    color: "border-l-forest-green",
    achievements: [
      "Engineered analytics and recovery modules using React and Ant Design, improving client data processing efficiency",
      "Constructed a real-time operational dashboard using Redux Saga and React Hooks; optimized data polling and UI state updates to enable instant data visibility",
      "Debugged and optimized UI components via Chrome DevTools and React Profiler; eliminated layout shifts and JavaScript errors, improving stability",
      "Refactored asynchronous data logic using Redux Thunk and Mobx; minimized redundant network calls, resulting in a 30% reduction in API latency",
    ],
  },
  {
    company: "Tata Consultancy Services",
    role: "Front End Developer",
    period: "Oct 2018 – Jun 2021",
    location: "India",
    color: "border-l-coral",
    achievements: [
      "Delivered dynamic airline web interfaces using React and RESTful API integration; implemented lazy loading and request throttling to streamline data flow",
      "Diagnosed and resolved layout and rendering issues using Chrome DevTools; reduced CLS (Cumulative Layout Shift) and improved page load performance by 15%",
      "Crafted responsive user interfaces using mobile-first CSS3 and modular SCSS; increased engagement on tablets and smartphones by 25%",
      "Produced reusable marketing components within Agile 2-week sprints; collaborated with QA and content teams for timely campaign launches",
    ],
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-card">
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

          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4">
            Where I've
            <br />
            <span className="text-warm-brown">made an impact</span>
          </h2>

          <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
            A timeline of my professional growth and key contributions
          </p>

          {/* Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative pl-8 border-l-4 ${exp.color} pb-8 last:pb-0`}
              >
                {/* Timeline dot */}
                <div className="absolute left-[-13px] top-0 w-6 h-6 rounded-full bg-background border-4 border-current" />

                <div className="bg-background rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <Briefcase className="h-5 w-5 text-muted-foreground" />
                        <h3 className="font-bold text-2xl">{exp.company}</h3>
                      </div>
                      <p className="text-lg font-semibold text-muted-foreground">
                        {exp.role}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground bg-muted px-4 py-2 rounded-full">
                      <Calendar className="h-4 w-4" />
                      {exp.period}
                    </div>
                  </div>

                  {/* Achievements */}
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li
                        key={i}
                        className="flex items-start text-muted-foreground"
                      >
                        <span className="inline-block w-2 h-2 rounded-full bg-current mt-2 mr-3 flex-shrink-0 opacity-60" />
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div className="mt-16 p-8 bg-background rounded-2xl border-2 border-border">
            <h3 className="font-bold text-2xl mb-4 flex items-center gap-2">
              <span className="text-3xl">🎓</span>
              Education
            </h3>
            <div className="flex flex-wrap justify-between items-start gap-4">
              <div>
                <p className="font-semibold text-lg">
                  B.Tech – Computer Science and Engineering
                </p>
                <p className="text-muted-foreground">
                  G. PullaReddy Engineering College, Kurnool
                </p>
              </div>
              <div className="text-muted-foreground bg-muted px-4 py-2 rounded-full text-sm">
                Sept 2014 – May 2018
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
