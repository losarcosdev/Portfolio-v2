import { ProjectCard } from "@/components";
import Link from "next/link";

interface IProjects {
  src: string;
  name: string;
  url: string;
}

const projects: IProjects[] = [
  {
    name: "AudioRealm",
    src: "/projects/audiorealm.jpeg",
    url: "/projects/audiorealm",
  },
  {
    name: "Reader",
    src: "/projects/reader.jpeg",
    url: "/projects/reader",
  },
  {
    name: "Article Summarizer",
    src: "/projects/article-summarizer.jpeg",
    url: "/projects/summarizer",
  },
  {
    name: "Luxocar",
    src: "/projects/luxocar.jpeg",
    url: "/projects/luxocar",
  },
];

export const Projects = () => {
  return (
    <section
      className="flex flex-col justify-center gap-5 w-full md:max-w-5xl container mx-auto px-2"
      id="projects"
    >
      <div className="flex flex-col gap-2">
        <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
          Projects
        </h3>
        <p className="text-zinc-500">
          Some projects that I made in my free time.
        </p>
      </div>
      <hr className="border-[0.5px] border-zinc-700 w-full" />
      <div className="flex items-center justify-center lg:justify-normal gap-2 flex-wrap">
        {projects.map(({ name, src, url }) => (
          <ProjectCard img={src} name={name} url={url} key={name} />
        ))}
      </div>
      <div className="flex items-center justify-center">
        <Link
          href={"/projects"}
          className="text-zinc-500 hover:text-white hover:underline text-center duration-300 w-fit"
        >
          See all projects
        </Link>
      </div>
    </section>
  );
};
