import { motion } from "framer-motion";

import { Card } from "@/components";
import { SKILLS } from "@/data";
import { cn } from "@/lib/utils";

export function Skills() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.25,
        staggerChildren: 0.25,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={container}
      id="contact"
      className="mt-24 sm:mt-32 flex flex-col gap-12 px-4 md:px-8 xl:px-0"
    >
      <h2 className="text-center lg:text-left">How can I help ?</h2>
      <ul className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12">
        {SKILLS.map((skill) => (
          <li key={skill.title}>
            <Card
              variants={item}
              className={cn(
                "p-8 flex flex-col items-start gap-4 border-none",
                skill.shadow
              )}
            >
              <div className="flex items-center gap-4">
                {skill.icon}
                <h3>{skill.title}</h3>
              </div>
              <p>{skill.description}</p>
            </Card>
          </li>
        ))}
      </ul>
    </motion.section>
  );
}
