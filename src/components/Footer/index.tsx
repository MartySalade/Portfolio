import { Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import linkedinIcon from "@/assets/icons/linkedin.webp";

export function Footer() {
  const actualYear = new Date().getFullYear();

  return (
    <footer>
      <div className="mt-16 flex flex-col gap-4 justify-center items-center py-4 text-sm text-gray-500">
        <div className="flex gap-4 items-center">
          <Link
            href={"https://www.linkedin.com/in/martinmallein"}
            target="_blank"
          >
            <Image src={linkedinIcon} alt="LinkedIn" width={24} height={24} />
          </Link>
          <Link href={"https://github.com/MartySalade"} target="_blank">
            <Github className="bg-white text-black w-6 h-6 rounded-[2px]" />
          </Link>
        </div>
        <p>© {actualYear} - Martin Mallein</p>
      </div>
    </footer>
  );
}
