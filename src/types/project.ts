import { StaticImageData } from "next/image";

export interface IProject {
  title: string;
  description: React.ReactNode;
  images: StaticImageData[];
  tags: string[];
  url: string;
  completed: boolean;
  repo?: string;
}
