"use client";

import { useEffect, useRef, useState } from "react";

export const useDesktopScrollAnimation = (threshold = 0.1) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Check if we're on desktop (md breakpoint = 768px)
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    // Initial check
    checkDesktop();

    // Listen for resize events
    window.addEventListener("resize", checkDesktop);

    return () => {
      window.removeEventListener("resize", checkDesktop);
    };
  }, []);

  useEffect(() => {
    // Set up observer on both mobile and desktop
    // Animation will only show on desktop via CSS classes
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return { ref, isVisible, isDesktop };
};
