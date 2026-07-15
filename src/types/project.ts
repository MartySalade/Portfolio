import { StaticImageData } from "next/image";

export interface IProject {
  title: string;
  description: React.ReactNode;
  images: StaticImageData[];
  /** Optional public-path mp4s (e.g. "/projects/pricing-fast/x.mp4"), shown instead of images when present. */
  videos?: string[];
  tags: string[];
  url?: string;
  completed: boolean;
  repo?: string;
}
