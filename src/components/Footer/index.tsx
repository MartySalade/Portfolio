import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import linkedinIcon from "@/assets/icons/linkedin.webp";

export function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer className="mx-auto mt-32 w-full max-w-7xl px-4 sm:mt-48 md:px-8">
      <div className="flex flex-col items-center justify-between gap-4 border-t border-white/5 py-8 sm:flex-row">
        <p className="label-mono">© {actualYear} — Martin Mallein</p>
        <div className="flex items-center gap-4">
          <Link
            href={"https://www.linkedin.com/in/martinmallein"}
            target="_blank"
            aria-label="LinkedIn"
            className="opacity-70 transition-opacity hover:opacity-100"
          >
            <Image src={linkedinIcon} alt="" width={20} height={20} />
          </Link>
          <Link
            href={"https://github.com/MartySalade"}
            target="_blank"
            aria-label="GitHub"
            className="text-cream/70 transition-colors hover:text-cream"
          >
            <Github className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
