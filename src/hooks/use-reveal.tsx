"use client";

import { useEffect, useRef, useState } from "react";

interface RevealOptions {
  threshold?: number;
  rootMargin?: string;
}

/**
 * Reveals an element once it enters the viewport.
 *
 * The hidden state is applied by CSS only under
 * `prefers-reduced-motion: no-preference`, so content is never left
 * invisible when motion is reduced, scripting is off, or the observer
 * cannot be created.
 */
export const useReveal = <T extends HTMLElement = HTMLDivElement>(
  options?: RevealOptions
) => {
  const ref = useRef<T>(null);
  const [isVisible, setIsVisible] = useState(false);

  // Reveal as soon as any part enters, so an element can never be stranded
  // below a percentage-based dead zone on very tall viewports. The stagger
  // delays, not the threshold, provide the timing.
  const threshold = options?.threshold ?? 0;
  const rootMargin = options?.rootMargin ?? "0px 0px -24px 0px";

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    if (typeof IntersectionObserver === "undefined") {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.disconnect();
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return { ref, isVisible };
};
