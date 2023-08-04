import { Card, ProjectCard } from "@/components";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <section className="relative p-3 lg:p-14">
      <Link href={"/"}>
        <ChevronLeft className="h-8 w-8 text-zinc-400 absolute top-5 left-3 cursor-pointer hover:text-white" />
      </Link>
      <div className="container mx-auto px-2 pt-28 flex flex-col gap-2">
        <div className="flex flex-col gap-2">
          <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
            Projects
          </h3>
          <p className="text-zinc-500">
            Some projects that I made in my free time.
          </p>
          <hr className="border-[0.5px] border-zinc-700 w-full" />
        </div>
        <div className="grid grid-cols-1 gap-2 lg:grid-cols-2">
          {projects.map(({ image, slug, title }) => (
            <ProjectCard
              img={image}
              name={title}
              url={`/projects/${slug}`}
              key={slug}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
