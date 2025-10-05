import { Experience } from "@/types";

export const EXPERIENCES: Experience[] = [
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
