import { motion } from "framer-motion";
import { ArrowDown, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import profilePicture from "@/assets/images/martinMalleinPP.jpeg";
import { BentoBlock, Card } from "@/components";
import { BackgroundGradient } from "@/components/ui/background-gradient";
import { Button } from "@/components/ui/button";
import { PROJECTS } from "@/data";

export function Bento() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
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
    <section
      id="bento"
      className="px-4 md:px-8 relative flex flex-col items-center justify-center w-full gap-16 h-full pt-24"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="w-full lg:w-1/2 relative z-10 grid grid-cols-3 grid-rows-7 gap-2 sm:gap-4"
      >
        <Card
          variants={item}
          className="h-full flex justify-center col-span-3 gap-2 py-1"
        >
          <span className="bg-lamp rounded-full h-4 w-4 animate-pulse" />
          <h3 className="font-semibold text-lg md:text-xl">Available</h3>
        </Card>
        <Card variants={item} className="col-span-2 row-span-2 row-start-2">
          <BentoBlock title="Frontend" description="Software Engineer" />
        </Card>
        <Card
          variants={item}
          className="row-span-2 col-start-3 row-start-2 relative h-full"
        >
          <Image
            alt="martin.mallein"
            src={profilePicture}
            fill
            sizes="300px"
            className="absolute object-cover rounded-lg"
          />
        </Card>
        <Card variants={item} className="row-span-2 row-start-4">
          <BentoBlock
            title={PROJECTS.length.toString()}
            description="projects"
          />
        </Card>
        <Card variants={item} className="col-span-2 row-span-2 row-start-4">
          <BentoBlock title="Martin" description="Mallein" />
        </Card>
        <Card variants={item} className="col-span-3 row-span-2 row-start-6">
          <BentoBlock title="Toulouse" description="31300 - France" />
        </Card>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{
          delay: 2,
          duration: 0.2,
        }}
        className="flex gap-4 items-center justify-center"
      >
        <Button asChild>
          <Link href="#projects">
            Explore my work <ArrowDown className="ml-2 h-6 w-6" />
          </Link>
        </Button>
        <BackgroundGradient>
          <Button asChild variant="icon" className="p-4">
            <Link href="#contact">
              <MessageCircle className="h-6 w-6" />
            </Link>
          </Button>
        </BackgroundGradient>
      </motion.div>
    </section>
  );
}
