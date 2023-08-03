import Image from "next/image";
import Link from "next/link";

const technologies = [
  {
    name: "React",
    description:
      "JavaScript library for building interactive and reusable user interfaces in web applications.",
    url: "https://reactjs.org/",
    img: "/technologies/react.svg",
  },
  {
    name: "Next.js",
    description:
      "React framework for web applications with server-side rendering (SSR) and static site generation.",
    url: "https://nextjs.org/",
    img: "/technologies/next.svg",
  },
  {
    name: "JavaScript",
    description:
      "Versatile and interpreted programming language widely used in web development and client-side applications.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    img: "/technologies/javascript.svg",
  },
  {
    name: "TypeScript",
    description:
      "Superset of JavaScript that adds optional static typing, facilitating development and maintenance of large projects.",
    url: "https://www.typescriptlang.org/",
    img: "/technologies/typescript.svg",
  },
  {
    name: "Tailwind CSS",
    description:
      "CSS framework that simplifies UI design and creation using utility classes.",
    url: "https://tailwindcss.com/",
    img: "/technologies/tailwindcss.svg",
  },
  {
    name: "Nest.js",
    description:
      "Node.js framework for building scalable and maintainable web applications with a modular architecture.",
    url: "https://nestjs.com/",
    img: "/technologies/nestjs.png",
  },
  {
    name: "MongoDB",
    description:
      "Document-oriented NoSQL database that allows storing flexible and scalable data.",
    url: "https://www.mongodb.com/",
    img: "/technologies/mongodb.svg",
  },
  {
    name: "PostgreSQL",
    description:
      "Open-source relational database management system with a focus on performance and extensibility.",
    url: "https://www.postgresql.org/",
    img: "/technologies/postgresql.svg",
  },
  {
    name: "Docker",
    description:
      "Platform that enables creating, deploying, and running applications in containers, easing software management and distribution.",
    url: "https://www.docker.com/",
    img: "/technologies/docker.svg",
  },
];

export const Stack = () => {
  return (
    <section
      className="flex flex-col gap-5 w-full md:max-w-5xl container mx-auto px-2 pt-16"
      id="stack"
    >
      <div className="flex flex-col gap-2">
        <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
          Stack
        </h3>
        <p className="text-zinc-500">Technologies that I enjoy to use.</p>
      </div>
      <hr className="border-[0.5px] border-zinc-700 w-full" />
      {/* Tech list */}
      <div className="flex items-center justify-evenly flex-wrap gap-5">
        {/* Tech card */}
        {technologies.map(({ description, name, img, url }) => (
          <Link
            target="_blank"
            href={url}
            key={name}
            className={`rounded-md w-full md:w-80 h-80 p-5 bg-zinc-950 border-zinc-800 border-[2px] 
          flex flex-col gap-5 items-center justify-center bg-gradient 
          hover:border-t-blue-300 hover:border-r-blue-600 hover:border-b-purple-600 hover:border-l-purple-300 duration-150`}
          >
            <Image alt={name} src={img} height={70} width={70} />
            <h4 className="z-10 duration-1000 text-white font-display text-xl sm:text-2xl md:text-4xl text-gradient">
              {name}
            </h4>
            <p className="text-zinc-500 text-center">{description}</p>
          </Link>
        ))}
      </div>
    </section>
  );
};
