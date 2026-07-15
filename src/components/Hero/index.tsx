"use client";

import { useEffect, useRef } from "react";

import { motion, useMotionValue, useSpring } from "framer-motion";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

// Headline broken into words; the accent word gets the teal→sand gradient.
const LINE_1 = ["I", "turn", "digital", "challenges"];
const LINE_2 = ["into", "polished", "products."];
const ACCENT_WORD = "polished";

const MARQUEE = [
  "SaaS Products",
  "On-chain Apps",
  "Design Systems",
  "Web Performance",
  "AI Tooling",
  "Frontend Craft",
];

function Word({ children, index }: { children: string; index: number }) {
  const isAccent = children === ACCENT_WORD;
  return (
    <span className="mr-[0.22em] inline-block overflow-hidden pb-[0.12em] align-bottom">
      <motion.span
        className={cn("inline-block", isAccent && "accent-text")}
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, ease: EASE, delay: 0.35 + index * 0.07 }}
      >
        {children}
      </motion.span>
    </span>
  );
}

export function Hero() {
  const ref = useRef<HTMLElement>(null);

  // Aurora parallax follows the cursor a little.
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const ax = useSpring(mx, { stiffness: 40, damping: 20 });
  const ay = useSpring(my, { stiffness: 40, damping: 20 });

  useEffect(() => {
    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (reduced) return;
    const onMove = (e: MouseEvent) => {
      const nx = e.clientX / window.innerWidth - 0.5;
      const ny = e.clientY / window.innerHeight - 0.5;
      mx.set(nx * 60);
      my.set(ny * 60);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mx, my]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative flex min-h-screen w-full flex-col justify-between overflow-hidden px-4 pb-10 pt-28 md:px-8 md:pb-14 md:pt-32"
    >
      {/* Aurora backdrop — two drifting teal/sand blobs under the grain. */}
      <motion.div
        aria-hidden
        style={{ x: ax, y: ay }}
        className="pointer-events-none absolute inset-0 -z-10"
      >
        <div className="absolute left-[8%] top-[18%] h-[45vw] w-[45vw] max-h-[620px] max-w-[620px] rounded-full bg-lamp/25 blur-[120px] animate-aurora-1" />
        <div className="absolute right-[6%] bottom-[10%] h-[38vw] w-[38vw] max-h-[520px] max-w-[520px] rounded-full bg-sand/15 blur-[130px] animate-aurora-2" />
        <div className="absolute left-1/2 top-1/2 h-[28vw] w-[28vw] max-h-[400px] max-w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-lamp/10 blur-[90px]" />
      </motion.div>

      {/* Faint grid, no longer the whole show — just texture behind the type. */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, #fff 1px, transparent 1px), linear-gradient(to bottom, #fff 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 30% 40%, black, transparent)",
        }}
      />

      {/* Centered headline + CTAs */}
      <div className="flex flex-1 flex-col items-center justify-center">
        <h1 className="text-center text-[2.75rem] font-bold leading-[0.95] tracking-tight sm:text-6xl lg:text-8xl">
          <span className="block">
            {LINE_1.map((w, i) => (
              <Word key={w} index={i}>
                {w}
              </Word>
            ))}
          </span>
          <span className="block">
            {LINE_2.map((w, i) => (
              <Word key={w} index={LINE_1.length + i}>
                {w}
              </Word>
            ))}
          </span>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE, delay: 1.1 }}
          className="mt-12 flex flex-wrap items-center justify-center gap-4"
        >
          <Button asChild size="sm" className="group">
            <Link href="#work">
              View work
              <span className="ml-2 transition-transform group-hover:translate-x-1">
                →
              </span>
            </Link>
          </Button>
          <Button asChild variant="outline" size="sm">
            <Link href="#contact">Get in touch</Link>
          </Button>
        </motion.div>
      </div>

      {/* Signature marquee strip — full-bleed, pinned to the bottom. */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.3, duration: 0.8 }}
        className="full-bleed select-none border-t border-white/5 py-4"
      >
        <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
          <div className="flex shrink-0 animate-marquee items-center gap-8 pr-8">
            {MARQUEE.concat(MARQUEE).map((word, i) => (
              <span key={i} className="flex items-center gap-8">
                <span className="font-display text-2xl font-medium text-cream/70 sm:text-3xl">
                  {word}
                </span>
                <span className="text-lamp">✦</span>
              </span>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
}
