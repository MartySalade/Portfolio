"use client";

import { useEffect, useState } from "react";

import { AnimatePresence, motion } from "framer-motion";
import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import linkedinIcon from "@/assets/icons/linkedin.webp";

const LINKS = [
  { href: "#work", label: "Work" },
  { href: "#about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Reveal the nav once the hero is mostly scrolled past.
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.header
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -80, opacity: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="fixed inset-x-0 top-4 z-[90] flex justify-center px-4"
        >
          <nav className="flex items-center gap-6 rounded-full border border-white/10 bg-ink/70 px-6 py-3 backdrop-blur-md">
            <ul className="flex items-center gap-6">
              {LINKS.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="label-mono transition-colors hover:text-cream"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="h-4 w-px bg-white/10" />

            <div className="flex items-center gap-3">
              <Link
                href="https://www.linkedin.com/in/martinmallein"
                target="_blank"
                aria-label="LinkedIn"
                className="opacity-70 transition-opacity hover:opacity-100"
              >
                <Image src={linkedinIcon} alt="" width={18} height={18} />
              </Link>
              <Link
                href="https://github.com/MartySalade"
                target="_blank"
                aria-label="GitHub"
                className="text-cream/70 transition-colors hover:text-cream"
              >
                <Github className="h-[18px] w-[18px]" />
              </Link>
            </div>
          </nav>
        </motion.header>
      )}
    </AnimatePresence>
  );
}
