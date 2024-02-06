import { useEffect, useRef, useState } from "react";

import {
  AnimatePresence,
  motion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

import { LampContainer } from "@/components/ui/lamp";
import { cn } from "@/lib/utils";

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 100, damping: 10, bounce: 0 };
  const scale = useSpring(
    useTransform(scrollYProgress, [0, 1], [1, 3.5]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.8], [0.2, 0]),
    springConfig
  );

  return (
    <div ref={ref}>
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
      <motion.div
        style={{ scale, opacity }}
        className="z-[-1] grid grid-cols-12 gap-0 absolute top-0 left-0 w-screen h-screen opacity-10"
      >
        {[...Array(120)].map((_, index) => (
          <div key={index} className="border border-gray-500" />
        ))}
      </motion.div>
    </div>
  );
}

export const Illustration = ({ mouseEnter }: { mouseEnter: boolean }) => {
  const stars = 1000;
  const columns = 50;

  const [glowingStars, setGlowingStars] = useState<number[]>([]);

  const highlightedStars = useRef<number[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      highlightedStars.current = Array.from({ length: 5 }, () =>
        Math.floor(Math.random() * stars)
      );
      setGlowingStars([...highlightedStars.current]);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="h-48 p-1 w-full"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: `1px`,
      }}
    >
      {[...Array(stars)].map((_, starIdx) => {
        const isGlowing = glowingStars.includes(starIdx);
        const delay = (starIdx % 10) * 0.1;
        const staticDelay = starIdx * 0.01;
        return (
          <div
            key={`matrix-col-${starIdx}}`}
            className="relative flex items-center justify-center"
          >
            <Star
              isGlowing={mouseEnter ? true : isGlowing}
              delay={mouseEnter ? staticDelay : delay}
            />
            {mouseEnter && <Glow delay={staticDelay} />}
            <AnimatePresence mode="wait">
              {isGlowing && <Glow delay={delay} />}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

const Star = ({ isGlowing, delay }: { isGlowing: boolean; delay: number }) => {
  return (
    <motion.div
      key={delay}
      initial={{
        scale: 1,
      }}
      animate={{
        scale: isGlowing ? [1, 1.2, 2.5, 2.2, 1.5] : 1,
        background: isGlowing ? "#fff" : "#666",
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      className={cn("bg-[#666] h-[1px] w-[1px] rounded-full relative z-20")}
    ></motion.div>
  );
};

const Glow = ({ delay }: { delay: number }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 2,
        ease: "easeInOut",
        delay: delay,
      }}
      exit={{
        opacity: 0,
      }}
      className="absolute  left-1/2 -translate-x-1/2 z-10 h-[4px] w-[4px] rounded-full bg-blue-500 blur-[1px] shadow-2xl shadow-blue-400"
    />
  );
};
