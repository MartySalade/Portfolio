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
        "flex items-center bg-card-gradient p-4 rounded-lg border border-solid border-gray-600",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
