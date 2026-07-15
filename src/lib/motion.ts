import { useEffect, useState } from "react";

import type { Variants } from "framer-motion";

// Shared easing + reveal variants so every section animates consistently.
export const EASE = [0.16, 1, 0.3, 1] as const; // easeOutExpo-ish

// A single element sliding up from behind a mask.
export const revealUp: Variants = {
  hidden: { y: "110%" },
  visible: (i: number = 0) => ({
    y: "0%",
    transition: { duration: 0.9, ease: EASE, delay: 0.05 * i },
  }),
};

// Container that staggers its children in.
export const stagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.1 },
  },
};

// A soft fade + rise for generic content blocks.
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE },
  },
};

// Client hook: true when the user asked for reduced motion.
export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onChange = () => setReduced(mq.matches);
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, []);
  return reduced;
}
