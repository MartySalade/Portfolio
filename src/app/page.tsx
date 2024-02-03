"use client";
import { Bento } from "@/components/Bento";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <div className="absolute opacity-15 h-full w-full bg-gradient-to-r bg-opacity-10 from-black via-blue-500 to-black" />
      <div className="flex flex-col items-center p-4 sm:p-8 text-center">
        <h1>I TURN DIGITAL CHALLENGES INTO POLISHED SOLUTIONS.</h1>
        <Bento />
      </div>
    </main>
  );
}
