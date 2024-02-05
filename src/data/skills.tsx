import { Code, Cog, ScanSearch, SprayCan } from "lucide-react";

export const SKILLS = [
  {
    title: "Design",
    description:
      "Transform your ideas into visually stunning concepts. I specialize in creating designs that seamlessly blend creativity and functionality, setting the stage for a stellar development journey.",
    icon: <SprayCan className="w-8 h-8 text-lamp" />,
    shadow: "shadow-lamp",
  },
  {
    title: "Dev",
    description:
      "Bring your vision to life through meticulous development. With a keen eye for detail, I code with precision, turning your ideas into robust and efficient digital solutions.",
    icon: <Code className="w-8 h-8 text-lamp" />,
    shadow: "shadow-skill-blue",
  },
  {
    title: "SEO",
    description:
      "Optimize your digital presence for search engines. From keyword strategies to analytics, I enhance your website's visibility, ensuring it stands out in the digital landscape.",
    icon: <ScanSearch className="w-8 h-8 text-lamp" />,
    shadow: "shadow-skill-yellow",
  },
  {
    title: "Deploy",
    description:
      "Smoothly transition from development to deployment. I manage the technical intricacies, ensuring your project is seamlessly launched and ready to make an impact.",
    icon: <Cog className="w-8 h-8 text-lamp" />,
    shadow: "shadow-skill-red",
  },
];
