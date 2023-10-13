import { ProjectCard } from "@/components";

interface IProjects {
  src: string;
  name: string;
  url: string;
}

const projects: IProjects[] = [
  {
    name: "Web App for real estate agent",
    src: "/work/real-estate-agent.jpg",
    url: "/works/real-estate-agent",
  },
];

export const Work = () => {
  return (
    <section
      className="flex flex-col justify-center gap-5 w-full md:max-w-5xl container mx-auto px-2 mb-10"
      id="projects"
    >
      <div className="flex flex-col gap-2">
        <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
          Work/Freelance
        </h3>
        <p className="text-zinc-500">Projects that I made as a freelancer.</p>
      </div>
      <hr className="border-[0.5px] border-zinc-700 w-full" />
      <div className="flex items-center justify-center lg:justify-normal gap-2 flex-wrap">
        {projects.map(({ name, src, url }) => (
          <ProjectCard img={src} name={name} url={url} key={name} />
        ))}
      </div>
    </section>
  );
};
