import { Project } from "@/components/Project";
import { ProjectParallax } from "@/components/ProjectParallax";
import { PROJECTS } from "@/data";

export function Projects() {
  return (
    <section className="px-4 md:px-8 xl:px-0 flex flex-col gap-8">
      <ProjectParallax />
      <h2 className="text-center lg:text-left mb-4 sm:mb-8">Projects.</h2>
      <ul className="flex flex-col">
        {PROJECTS.map((project, index) => (
          <li key={project.title}>
            <Project project={project} reverse={index % 2 === 1} />
            {index < PROJECTS.length - 1 && (
              <hr className="my-16 lg:my-24 opacity-20 w-1/2 sm:w-48 mx-auto" />
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
