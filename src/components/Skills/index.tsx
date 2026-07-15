"use client";

import { motion } from "framer-motion";

import { Card } from "@/components";
import { SectionHeading } from "@/components/SectionHeading";
import { SKILLS } from "@/data";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <section className="relative mx-auto mt-32 w-full max-w-7xl px-4 sm:mt-48 md:px-8">
      <SectionHeading index="03" label="Capabilities" />
      <motion.ul
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2"
      >
        {SKILLS.map((skill) => (
          <li key={skill.title}>
            <Card
              variants={item}
              className="group h-full flex-col items-start gap-4 p-8"
            >
              <div className="flex items-center gap-4">
                {skill.icon}
                <h3 className="text-2xl">{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
            </Card>
          </li>
        ))}
      </motion.ul>
    </section>
  );
}
