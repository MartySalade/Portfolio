"use client";

import { useEffect, useState } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";

// Small custom cursor for fine-pointer (desktop) devices. It grows and turns
// teal when hovering interactive elements. Disabled on touch devices and when
// the user prefers reduced motion — in those cases the native cursor stays.
export function Cursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { stiffness: 1200, damping: 50, mass: 0.2 });
  const springY = useSpring(y, { stiffness: 1200, damping: 50, mass: 0.2 });

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!fine.matches || reduced.matches) return;

    setEnabled(true);
    document.documentElement.classList.add("has-custom-cursor");

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as Element | null;
      setHovering(
        !!target?.closest('a, button, input, textarea, [role="button"]')
      );
    };

    window.addEventListener("mousemove", move);
    return () => {
      window.removeEventListener("mousemove", move);
      document.documentElement.classList.remove("has-custom-cursor");
    };
  }, [x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-[120] hidden md:block"
      style={{ x: springX, y: springY }}
    >
      <motion.span
        className="block -translate-x-1/2 -translate-y-1/2 rounded-full border border-lamp"
        animate={{
          width: hovering ? 44 : 12,
          height: hovering ? 44 : 12,
          backgroundColor: hovering
            ? "rgba(0,204,177,0.12)"
            : "rgba(0,204,177,1)",
        }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
}
