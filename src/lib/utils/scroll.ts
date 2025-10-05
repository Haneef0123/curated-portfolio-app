/**
 * Smooth scroll to an element by ID
 */
export const scrollToSection = (sectionId: string): void => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

/**
 * Scroll to top of the page
 */
export const scrollToTop = (): void => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
