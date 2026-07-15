import { ReactNode } from "react";

import { motion, Variants } from "framer-motion";

import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  variants?: Variants;
};

export function Card({ children, className, variants }: Readonly<Props>) {
  return (
    <motion.div
      variants={variants}
      className={cn(
        "flex items-center rounded-xl border border-white/10 bg-panel/60 p-4 backdrop-blur-sm transition-colors hover:border-white/20",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
