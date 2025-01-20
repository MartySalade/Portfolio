import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { CheckCircle, Code, Eye } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { cn } from "@/lib/utils";
import { IProject } from "@/types";

type Props = {
  project: IProject;
  reverse?: boolean;
  translateY?: any;
};

export function Project({ project, reverse, translateY }: Readonly<Props>) {
  const { title, tags, description, url, repo, images, completed } = project;

  return (
    <div
      className={cn("flex flex-col gap-8 lg:gap-16", {
        "lg:flex-row": !reverse,
        "lg:flex-row-reverse": reverse,
      })}
    >
      <Carousel
        className="rounded w-full lg:w-1/2"
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem key={index}>
              <Image
                src={img}
                alt=""
                width={900}
                height={400}
                className="rounded"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <motion.div
        className="flex flex-col gap-6 w-full lg:w-1/2"
        style={{ opacity: translateY }}
      >
        <div className="flex items-center gap-4">
          <h3>{title}</h3>
          {completed ? (
            <Badge className="bg-transparent mt-1 py-1 border border-lamp text-white">
              <CheckCircle className="mr-1 w-4 h-4" />
              COMPLETED
            </Badge>
          ) : (
            <Badge className="border-orange-500 bg-transparent mt-1 py-1 border text-white">
              <Code className="mr-1 w-4 h-4" />
              IN DEVELOPMENT
            </Badge>
          )}
        </div>
        <ul className="flex gap-2">
          {tags.map((tag) => (
            <Badge key={tag}>{tag}</Badge>
          ))}
        </ul>
        {description}
        <div className="flex gap-4">
          {url && (
            <Button asChild size="sm">
              <Link href={url} target="_blank">
                VISIT
                <Eye className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          )}
          {repo && (
            <Button asChild variant="outline" size="sm">
              <Link href={repo} target="_blank">
                CODE
                <Code className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
