import runstack1 from "@/assets/images/projects/runstack/1.png";
import runstack2 from "@/assets/images/projects/runstack/2.png";
import runstack3 from "@/assets/images/projects/runstack/3.png";
import runstack4 from "@/assets/images/projects/runstack/4.png";
import runstack5 from "@/assets/images/projects/runstack/5.png";
import haze1 from "@/assets/images/projects/haze/1.png";
import haze2 from "@/assets/images/projects/haze/2.png";
import haze3 from "@/assets/images/projects/haze/3.png";
import haze4 from "@/assets/images/projects/haze/4.png";
import haze5 from "@/assets/images/projects/haze/5.png";
import haze6 from "@/assets/images/projects/haze/6.png";
import ctzn1 from "@/assets/images/projects/ctzn/1.png";
import ctzn3 from "@/assets/images/projects/ctzn/3.png";
import ctzn4 from "@/assets/images/projects/ctzn/4.png";
import ctzn5 from "@/assets/images/projects/ctzn/5.png";
import multisigx1 from "@/assets/images/projects/multisigx/1.png";
import multisigx2 from "@/assets/images/projects/multisigx/2.png";
import multisigx3 from "@/assets/images/projects/multisigx/3.png";
import { IProject } from "@/types";

export const PROJECTS: IProject[] = [
  {
    title: "Pricing Fast",
    description: (
      <p>
        Let SaaS founders <strong>A/B test their Stripe prices</strong> with a
        single script tag. It connects through Stripe OAuth, imports products
        automatically, and surfaces real revenue, conversion and ARPU data —
        then auto-applies the winning price.
      </p>
    ),
    images: [],
    videos: [
      "/projects/pricing-fast/connect-stripe.mp4",
      "/projects/pricing-fast/add-your-products.mp4",
      "/projects/pricing-fast/create-experiment.mp4",
      "/projects/pricing-fast/collect-data.mp4",
      "/projects/pricing-fast/end-experiment.mp4",
    ],
    tags: ["SaaS", "Next.js", "Stripe"],
    url: "https://pricingfa.st/",
    completed: true,
  },
  {
    title: "Runstack",
    description: (
      <p>
        A visual platform for building and running{" "}
        <strong>LLM workflows without orchestration code</strong>. Design flows
        with drag &amp; drop, test prompt and model variants side by side across
        OpenAI, Claude, Gemini and more, and ship new versions in two clicks via
        a simple API.
      </p>
    ),
    images: [runstack1, runstack2, runstack3, runstack4, runstack5],
    tags: ["AI", "Next.js", "LLM"],
    url: "https://getrunstack.com/",
    completed: true,
  },
  {
    title: "Haze",
    description: (
      <p>
        An AI SaaS analyzer that validates startup ideas with{" "}
        <strong>brutally honest revenue modeling</strong>. It scouts
        competitors, shreds your revenue assumptions across low / expected /
        high scenarios, flags risks, and returns an objective score before you
        write a line of code.
      </p>
    ),
    images: [haze1, haze2, haze3, haze4, haze5, haze6],
    tags: ["AI", "SaaS"],
    url: "https://builditornot.com",
    completed: true,
  },
  {
    title: "ctzn.",
    description: (
      <p>
        A web3 project on the MultiversX blockchain where I built{" "}
        <strong>frontend decentralized apps serving hundreds of daily users</strong>
        . From marketplace releases to complex staking solutions, it was a rich
        learning experience.
      </p>
    ),
    images: [ctzn1, ctzn4, ctzn5, ctzn3],
    tags: ["React", "Typescript", "Blockchain"],
    url: "https://ctzn.vercel.app/",
    completed: true,
  },
  {
    title: "MultisigX",
    description: (
      <p>
        A <strong>secure crypto vault</strong> designed for companies to
        safeguard their assets. Funds can only be moved with a specified number
        of signatures on the blockchain, ensuring a high level of security.
      </p>
    ),
    images: [multisigx1, multisigx2, multisigx3],
    tags: ["React", "Typescript", "Blockchain"],
    url: "https://multisig-x.vercel.app/",
    completed: true,
  },
];
