import { StaticImageData } from "next/image";

export interface IProject {
  title: string;
  description: string;
  images: StaticImageData[];
  tags: string[];
  url: string;
  repo?: string;
}
