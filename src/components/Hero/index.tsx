import { motion } from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

import { LampContainer } from "@/components/ui/lamp";

export function Hero() {
  return (
    <LampContainer>
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 0.2,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 py-4 text-center text-4xl md:text-7xl"
      >
        I TURN DIGITAL CHALLENGES <br /> INTO POLISHED SOLUTIONS.
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 1.5,
          duration: 0.2,
          ease: "easeInOut",
        }}
        className="absolute h-full top-full mt-24"
      >
        <Link href="#bento">
          <ChevronsDown className="cursor-pointer animate-pulse absolute bottom-24 sm:bottom-16" />
        </Link>
      </motion.div>
    </LampContainer>
  );
}
