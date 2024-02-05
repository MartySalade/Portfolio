"use client";
import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import Image from "next/image";

import { PROJECTS } from "@/data";

function shuffleArray<T>(array: T[]): T[] {
  const shuffledArray = [...array];

  for (let i = shuffledArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
  }

  return shuffledArray;
}

export function ProjectParallax() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };
  const translateX = useSpring(
    useTransform(scrollYProgress, [0, 1], [-600, 400]),
    springConfig
  );
  const translateXReverse = useSpring(
    useTransform(scrollYProgress, [0, 1], [0, -400]),
    springConfig
  );
  const rotateX = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [15, 0]),
    springConfig
  );
  const opacity = useSpring(
    useTransform(scrollYProgress, [0, 0.5], [0.2, 1]),
    springConfig
  );
  const rotateZ = useSpring(
    useTransform(scrollYProgress, [0, 0.2], [10, 0]),
    springConfig
  );
  const translateY = useSpring(
    useTransform(scrollYProgress, [0, 0.17], [-600, -100]),
    springConfig
  );

  const allImages = shuffleArray(
    PROJECTS.map((project) => project.images).flat()
  );
  const firstRow = allImages.slice(0, 5);
  const secondRow = allImages.slice(5, 10);

  return (
    <div
      ref={ref}
      className="overflow-hidden antialiased relative flex flex-col  [perspective:1000px] [transform-style:preserve-3d] pt-72"
    >
      <div className="text-center lg:text-left max-w-7xl relative mx-auto h-fit py-32 w-full">
        <h2 id="projects">
          Transforming ideas into practical,
          <br /> user-friendly apps.
        </h2>
        <p className="max-w-none lg:max-w-2xl text-base md:text-xl mt-8">
          Browse through my portfolio featuring apps with complex user
          interactions, meeting various business demands.
        </p>
      </div>
      <motion.ul
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className="flex flex-col relative gap-8 w-full"
      >
        <motion.div className="w-[1500px] xl:w-screen flex flex-row-reverse space-x-reverse space-x-8">
          {firstRow.map((img, index) => (
            <motion.li
              key={index}
              style={{
                x: translateX,
              }}
            >
              <Image src={img} alt="" width={900} height={400} />
            </motion.li>
          ))}
        </motion.div>
        <motion.div className="w-[1500px] xl:w-screen flex flex-row gap-8">
          {secondRow.map((img, index) => (
            <motion.li
              key={index}
              style={{
                x: translateXReverse,
              }}
            >
              <Image src={img} alt="" width={900} height={400} />
            </motion.li>
          ))}
        </motion.div>
      </motion.ul>
    </div>
  );
}
