import { motion } from "framer-motion";
import Image from "next/image";

import profilePicture from "@/assets/images/martinMalleinPP.jpeg";
import { BentoBlock, Card } from "@/components";

export function Bento() {
  const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.35,
        staggerChildren: 0.35,
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
    <div className="relative flex items-center justify-center w-full">
      {/* <div className="z-0 absolute w-[900px] h-[900px] bg-gradient-to-br from-blue-500 opacity-30 to-pink-500 rounded-full filter blur-3xl" /> */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={container}
        className="w-fit relative z-10 grid grid-cols-3 grid-rows-6 gap-4 h-96 md:h-auto"
      >
        <Card variants={item} className="col-span-2 row-span-2">
          <BentoBlock title="Frontend" description="Software Engineer" />
        </Card>
        <Card
          variants={item}
          className="row-span-2 col-start-3 relative h-full"
        >
          <Image
            alt="martin.mallein"
            src={profilePicture}
            fill
            sizes="300px"
            className="absolute object-cover rounded-lg"
          />
        </Card>
        <Card variants={item} className=" row-span-2 row-start-3">
          <BentoBlock title="5" description="projects" />
        </Card>
        <Card variants={item} className="col-span-2 row-span-2 row-start-3">
          <BentoBlock title="Martin" description="Mallein" />
        </Card>
        <Card variants={item} className="col-span-2 row-span-2 row-start-5">
          <BentoBlock title="Toulouse" description="31300 - France" />
        </Card>
        <Card
          variants={item}
          className="h-full flex flex-col justify-center md:flex-row col-start-3 row-start-5 row-span-2 md:row-span-1 gap-2 py-2"
        >
          <span className="bg-green-400 rounded-full h-4 w-4 animate-pulse" />
          <h3 className="font-bold text-xl md:text-2xl">Available</h3>
        </Card>
        <Card
          variants={item}
          className="hidden md:flex col-start-3 row-start-6 py-2"
        >
          <h3 className="w-full font-bold text-5xl">...</h3>
        </Card>
      </motion.div>
    </div>
  );
}
