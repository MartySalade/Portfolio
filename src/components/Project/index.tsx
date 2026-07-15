"use client";

import { useEffect, useRef, useState } from "react";

import Autoplay from "embla-carousel-autoplay";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { EASE } from "@/lib/motion";
import { cn } from "@/lib/utils";
import { IProject } from "@/types";

// Plays clips one after another, advancing the carousel when each video ends.
function VideoCarousel({ videos, title }: { videos: string[]; title: string }) {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);

  // Keep `current` in sync with the active slide.
  useEffect(() => {
    if (!api) return;
    const onSelect = () => setCurrent(api.selectedScrollSnap());
    api.on("select", onSelect);
    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  // Play only the active clip; reset & pause the others.
  useEffect(() => {
    videoRefs.current.forEach((v, i) => {
      if (!v) return;
      if (i === current) {
        v.currentTime = 0;
        v.play().catch(() => {});
      } else {
        v.pause();
      }
    });
  }, [current]);

  return (
    <Carousel className="w-full" opts={{ loop: true }} setApi={setApi}>
      <CarouselContent>
        {videos.map((src, i) => (
          <CarouselItem key={src}>
            <video
              ref={(el) => {
                videoRefs.current[i] = el;
              }}
              src={src}
              muted
              playsInline
              autoPlay={i === 0}
              onEnded={() => api?.scrollNext()}
              aria-label={`${title} demo ${i + 1}`}
              className="w-full object-cover"
            />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}

type Props = {
  project: IProject;
  index: number;
  reverse?: boolean;
};

export function Project({ project, index, reverse }: Readonly<Props>) {
  const { title, tags, description, url, repo, images, videos } = project;
  const hasVideos = !!videos && videos.length > 0;

  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  // Subtle parallax on the image block.
  const y = useTransform(scrollYProgress, [0, 1], ["-6%", "6%"]);

  const Media = (
    <div
      className={cn(
        "group/media relative w-full overflow-hidden rounded-xl border border-white/10 lg:w-[58%]",
        reverse && "lg:order-2"
      )}
    >
      <motion.div style={{ y }} className="scale-[1.12]">
        {hasVideos ? (
          <VideoCarousel videos={videos!} title={title} />
        ) : (
          <Carousel
            className="w-full"
            plugins={images.length > 1 ? [Autoplay({ delay: 2600 })] : []}
          >
            <CarouselContent>
              {images.map((img, i) => (
                <CarouselItem key={i}>
                  <Image
                    src={img}
                    alt={`${title} preview`}
                    width={1200}
                    height={750}
                    className="w-full object-cover"
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        )}
      </motion.div>
      {/* teal wash on hover */}
      <div className="pointer-events-none absolute inset-0 bg-lamp/0 transition-colors duration-500 group-hover/media:bg-lamp/5" />
    </div>
  );

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.8, ease: EASE }}
      className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14"
    >
      {Media}

      <div
        className={cn(
          "flex w-full flex-col gap-6 lg:w-[42%]",
          reverse && "lg:order-1"
        )}
      >
        <div className="flex items-baseline gap-4">
          <span className="font-mono text-sm text-lamp">
            {String(index + 1).padStart(2, "0")}
          </span>
          <h3 className="leading-none">{title}</h3>
        </div>

        <ul className="flex flex-wrap items-center gap-2">
          {tags.map((tag) => (
            <li
              key={tag}
              className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-xs text-cream/70 transition-colors hover:border-lamp/40 hover:text-cream"
            >
              {tag}
            </li>
          ))}
        </ul>

        <div className="text-base leading-relaxed [&_strong]:text-cream [&_strong]:font-semibold">
          {description}
        </div>

        <div className="mt-2 flex flex-wrap gap-6">
          {url && (
            <Link
              href={url}
              target="_blank"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-cream transition-colors hover:text-lamp"
            >
              Visit site
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
          {repo && (
            <Link
              href={repo}
              target="_blank"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-mute transition-colors hover:text-cream"
            >
              Source
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          )}
        </div>
      </div>
    </motion.div>
  );
}
