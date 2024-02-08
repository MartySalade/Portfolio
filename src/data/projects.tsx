import ctzn1 from "@/assets/images/projects/ctzn/1.png";
import ctzn2 from "@/assets/images/projects/ctzn/2.png";
import ctzn3 from "@/assets/images/projects/ctzn/3.png";
import lol1 from "@/assets/images/projects/lol-classroom/1.png";
import lol2 from "@/assets/images/projects/lol-classroom/2.png";
import lol3 from "@/assets/images/projects/lol-classroom/3.png";
import multisigx1 from "@/assets/images/projects/multisigx/1.png";
import multisigx2 from "@/assets/images/projects/multisigx/2.png";
import { IProject } from "@/types";

export const PROJECTS: IProject[] = [
  {
    title: "ctzn.",
    description: (
      <p>
        <strong>ctzn.</strong> - a web3 project on MultiversX blockchain. I
        developed frontend decentralized apps, gaining hands-on experience
        serving hundreds of daily users. From marketplace releases to complex
        staking solutions, it was a rich learning experience.
      </p>
    ),
    images: [ctzn1, ctzn2, ctzn3],
    tags: ["2024", "React", "Typescript", "Blockchain"],
    // url: "https://ctzn.city",
    // repo: "https://github.com/ElrondCity/dapp",
    completed: false,
  },
  {
    title: "Lol Classroom",
    description: (
      <p>
        <strong>Lol Classroom</strong> is a platform for League Of Legend
        enthusiasts, offering insights on champions, matchups, and more.
        Developed with NextJS, my emphasis was on speed, utilizing server-side
        rendering. Leveraging SEO strategies, the site ranks prominently among
        competitors.
      </p>
    ),
    images: [lol1, lol2, lol3],
    tags: ["2024", "Next", "Typescript", "Gaming"],
    // url: "https://lol-classroom.vercel.app/",
    completed: false,
  },
  {
    title: "MultisigX",
    description: (
      <p>
        <strong>MultisigX</strong> is a secure crypto vault designed for
        companies to safeguard their assets. With a unique mechanism, funds can
        only be moved with a specified number of signatures on the blockchain,
        ensuring a high level of security.
      </p>
    ),
    images: [multisigx1, multisigx2],
    tags: ["2023", "React", "Typescript", "Blockchain"],
    url: "https://multisigx.com/",
    completed: true,
  },
];
