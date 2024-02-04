import { Code, Cog, ScanSearch, SprayCan } from "lucide-react";

export const SKILLS = [
  {
    title: "Design",
    description:
      "You have an idea and you want it to be designed before the development starts. Great idea, I’ll be happy to help you through this step.",
    icon: <SprayCan className="w-8 h-8 text-lamp" />,
    shadow: "shadow-lamp",
  },
  {
    title: "Dev",
    description:
      "You have an idea and you want it to be designed before the development starts. Great idea, I’ll be happy to help you through this step.",
    icon: <Code className="w-8 h-8 text-skill-blue" />,
    shadow: "shadow-skill-blue",
  },
  {
    title: "Seo",
    description:
      "You have an idea and you want it to be designed before the development starts. Great idea, I’ll be happy to help you through this step.",
    icon: <ScanSearch className="w-8 h-8 text-skill-yellow" />,
    shadow: "shadow-skill-yellow",
  },
  {
    title: "Deploy",
    description:
      "You have an idea and you want it to be designed before the development starts. Great idea, I’ll be happy to help you through this step.",
    icon: <Cog className="w-8 h-8 text-skill-red" />,
    shadow: "shadow-skill-red",
  },
];
