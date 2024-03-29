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
        className="w-full lg:w-1/2 rounded"
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
        <div className="flex gap-4 items-center">
          <h3>{title}</h3>
          {completed ? (
            <Badge className="mt-1 border-lamp border bg-transparent text-white py-1">
              <CheckCircle className="h-4 w-4 mr-1" />
              COMPLETED
            </Badge>
          ) : (
            <Badge className="mt-1 border-orange-500 border bg-transparent text-white py-1">
              <Code className="h-4 w-4 mr-1" />
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
                <Eye className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          )}
          {repo && (
            <Button asChild variant="outline" size="sm">
              <Link href={repo} target="_blank">
                CODE
                <Code className="h-5 w-5 ml-2" />
              </Link>
            </Button>
          )}
        </div>
      </motion.div>
    </div>
  );
}
