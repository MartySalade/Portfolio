"use client";

import { motion } from "framer-motion";

import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";

type Props = {
  index: string; // e.g. "01"
  label: string; // e.g. "WORK"
  title?: React.ReactNode; // optional large display title
  className?: string;
};

// Editorial section header: a mono "01 — LABEL" index line (which pins to the
// top while the section scrolls), optionally followed by a large display title.
export function SectionHeading({ index, label, title, className }: Props) {
  return (
    <div className={cn("flex flex-col gap-4", className)}>
      {/* Mono index line pins to the top while the section scrolls. */}
      <div className="sticky top-24 z-30 flex items-center gap-3 bg-ink/0 py-1">
        <span className="font-mono text-sm text-lamp">{index}</span>
        <span className="h-px w-8 bg-lamp/40" />
        <span className="label-mono">{label}</span>
      </div>

      {title && (
        <div className="overflow-hidden pb-[0.1em]">
          <motion.h2
            initial={{ y: "110%" }}
            whileInView={{ y: "0%" }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.9, ease: EASE }}
          >
            {title}
          </motion.h2>
        </div>
      )}
    </div>
  );
}
