"use client";

import { Bento } from "@/components";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="flex w-full flex-col">
      <Hero />
      <Bento />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
