import { Project } from "@/components/Project";
import { SectionHeading } from "@/components/SectionHeading";
import { PROJECTS } from "@/data";

export function Projects() {
  return (
    <section
      id="work"
      className="relative mx-auto mt-32 w-full max-w-7xl px-4 sm:mt-48 md:px-8"
    >
      <SectionHeading index="01" label="Projects" />

      {/* Project list — generous rhythm, alternating sides. */}
      <ul className="mt-12 flex flex-col gap-28 sm:gap-40 sm:mt-16">
        {PROJECTS.map((project, index) => (
          <li key={project.title}>
            <Project
              project={project}
              index={index}
              reverse={index % 2 === 1}
            />
          </li>
        ))}
      </ul>
    </section>
  );
}
