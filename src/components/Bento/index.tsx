"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import profilePicture from "@/assets/images/martinMalleinPP.jpeg";
import { Card } from "@/components";
import { SectionHeading } from "@/components/SectionHeading";
import { EASE } from "@/lib/motion";

function getAge(birthday: Date) {
  const ageDifMs = Date.now() - birthday.getTime();
  const ageDate = new Date(ageDifMs);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

const STACK = ["React", "TypeScript", "Next.js", "Node", "Figma"];

export function Bento() {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delayChildren: 0.1, staggerChildren: 0.07 },
    },
  };
  const item = {
    hidden: { y: 24, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: EASE } },
  };

  return (
    <section
      id="about"
      className="relative mx-auto mt-32 w-full max-w-7xl px-4 sm:mt-48 md:px-8"
    >
      <SectionHeading index="02" label="About" />

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
        variants={container}
        className="mt-12 grid grid-cols-2 gap-3 sm:mt-16 lg:grid-cols-4 lg:grid-rows-2"
      >
        {/* Statement — the anchor. Spans wide, oversized display type. */}
        <motion.div
          variants={item}
          className="col-span-2 flex flex-col justify-between gap-8 rounded-2xl border border-white/10 bg-panel/60 p-8 backdrop-blur-sm lg:col-span-3 lg:row-span-1"
        >
          <p className="font-display text-2xl font-medium leading-[1.15] text-cream sm:text-3xl lg:text-[2.5rem]">
            Frontend &amp; software engineer obsessed with{" "}
            <span className="accent-text">speed</span>,{" "}
            <span className="accent-text">craft</span> and the small{" "}
            <span className="accent-text">details</span> that make a product
            feel right.
          </p>
          <div className="flex items-center justify-between">
            <span className="label-mono flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lamp opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-lamp" />
              </span>
              Available for work
            </span>
            <Link
              href="#contact"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:text-lamp"
            >
              Get in touch
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </motion.div>

        {/* Portrait — tall, fills the right edge of row 1. */}
        <motion.div
          variants={item}
          className="relative col-span-2 row-span-1 min-h-[220px] overflow-hidden rounded-2xl border border-white/10 lg:col-span-1 lg:row-span-2 lg:min-h-0"
        >
          <Image
            alt="Martin Mallein"
            src={profilePicture}
            fill
            sizes="(max-width: 1024px) 100vw, 300px"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink/70 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <MapPin className="h-4 w-4 text-lamp" />
            <span className="label-mono text-cream">Toulouse, FR</span>
          </div>
        </motion.div>

        {/* Age */}
        <motion.div variants={item}>
          <Card className="h-full flex-col items-start justify-between gap-4 rounded-2xl p-6">
            <span className="label-mono">Age</span>
            <span className="font-display text-4xl font-semibold text-cream lg:text-5xl">
              {getAge(new Date("1999-11-10"))}
            </span>
          </Card>
        </motion.div>

        {/* Experience */}
        <motion.div variants={item}>
          <Card className="h-full flex-col items-start justify-between gap-4 rounded-2xl p-6">
            <span className="label-mono">Building since</span>
            <span className="font-display text-4xl font-semibold text-cream lg:text-5xl">
              2021
            </span>
          </Card>
        </motion.div>

        {/* Stack — mono chips */}
        <motion.div variants={item} className="col-span-2 lg:col-span-1">
          <Card className="h-full flex-col items-start justify-between gap-4 rounded-2xl p-6">
            <span className="label-mono">Stack</span>
            <ul className="flex flex-wrap gap-x-3 gap-y-1">
              {STACK.map((s) => (
                <li
                  key={s}
                  className="font-mono text-sm text-cream/80 transition-colors hover:text-lamp"
                >
                  {s}
                </li>
              ))}
            </ul>
          </Card>
        </motion.div>
      </motion.div>
    </section>
  );
}
