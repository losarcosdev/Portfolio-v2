import { Card, Particles, ProjectCard } from "@/components";
import { ChevronLeft } from "lucide-react";
import Link from "next/link";
import React from "react";
import { projects } from "../../data/projects";

const ProjectsPage = () => {
  return (
    <section className="relative h-fit py-10">
      <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={250}
      />
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
        <div className="flex flex-wrap items-center gap-2 ">
          {projects.map(({ image, slug, title }) => {
            if (!image) {
              return (
                <Card key={slug}>
                  <Link
                    href={`/projects/${slug}`}
                    className="hover:translate-y-[-3px] duration-300"
                  >
                    <article className="relative md:p-8 bg-gradient">
                      <h2
                        id="featured-post"
                        className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white sm:text-4xl font-display"
                      >
                        {title}
                      </h2>
                      <div>
                        <p className="hidden text-zinc-50 lg:block mt-2">
                          Read more <span aria-hidden="true">&rarr;</span>
                        </p>
                      </div>
                    </article>
                  </Link>
                </Card>
              );
            }
            return (
              <ProjectCard
                img={image}
                name={title}
                url={`/projects/${slug}`}
                key={slug}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;
