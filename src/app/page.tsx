"use client";

import { Bento } from "@/components";
import { Contact } from "@/components/Contact";
import { Hero } from "@/components/Hero";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

export default function Home() {
  return (
    <div className="max-w-7xl w-full flex flex-col mx-auto">
      <Hero />
      <Bento />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
}
