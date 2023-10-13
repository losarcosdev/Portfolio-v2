import { Header } from "@/app/projects/components";
import { works } from "@/data";
import Link from "next/link";
import { ChevronLeft, ExternalLink } from "lucide-react";
import Image from "next/image";

interface Props {
  params: {
    slug: string;
  };
}

const WorkPage = ({ params: { slug } }: Props) => {
  const workProject = works.find((project) => project.slug === slug);

  if (!workProject) {
    return (
      <div className="text-white flex flex-col items-center justify-center text-6xl font-display h-screen relative">
        <Link href={"/"}>
          <ChevronLeft className="h-8 w-8 text-zinc-400 absolute top-5 left-3 cursor-pointer hover:text-white" />
        </Link>
        <p>Project found...I mean, not found 😅</p>
      </div>
    );
  }

  return (
    <section className="bg-zinc-900 relative">
      <Header
        githubUrl={`${workProject.codeUrl}`}
        siteUrl={workProject.siteUrl}
        articleUrl={workProject.articleUrl}
        title={workProject.title}
        description={workProject.description}
      />
      <main className="max-w-4xl mx-auto py-14">
        <div className="flex flex-col gap-5 items-center justify-center md:h-screen px-2">
          <div className="relative">
            <Image
              alt={`${workProject.title}`}
              src={`${workProject.image}`}
              width={1200}
              height={800}
              className="rounded-sm md:h-[420px] object-contain"
            />
            {workProject.articleUrl ? (
              <Link
                href={`${workProject.articleUrl}`}
                target="_blank"
                className="hidden bg-white rounded-md text-black text-sm p-2 absolute bottom-3 left-32 w-36 md:flex items-center justify-center gap-1 hover:bg-zinc-200 duration-200 shadow-lg"
              >
                <ExternalLink />
                View Article
              </Link>
            ) : workProject.siteUrl ? (
              <Link
                href={`${workProject.siteUrl}`}
                target="_blank"
                className="hidden bg-white rounded-md text-black text-sm p-2 absolute bottom-5 left-3 w-36 md:flex items-center justify-center gap-1 hover:bg-zinc-200 duration-200 shadow-lg"
              >
                <ExternalLink />
                View Site
              </Link>
            ) : (
              <Link
                href={`${workProject.codeUrl}`}
                target="_blank"
                className="hidden bg-white rounded-md text-black text-sm p-2 absolute bottom-5 left-3 w-36 md:flex items-center justify-center gap-1 hover:bg-zinc-200 duration-200 shadow-lg"
              >
                <ExternalLink />
                View Repo
              </Link>
            )}
          </div>
          <p className="text-white text-left text-sm md:text-base">
            {workProject.description}
          </p>
        </div>
        <div className="md:hidden px-2 pt-2">
          {workProject.articleUrl ? (
            <Link
              href={`${workProject.articleUrl}`}
              target="_blank"
              className="bg-white rounded-md text-black text-sm p-2 flex items-center justify-center"
            >
              <ExternalLink />
              View Article
            </Link>
          ) : workProject.siteUrl ? (
            <Link
              href={`${workProject.siteUrl}`}
              target="_blank"
              className="bg-white rounded-md text-black text-sm p-2 flex items-center justify-center"
            >
              <ExternalLink />
              View Site
            </Link>
          ) : (
            <Link
              href={`${workProject.codeUrl}`}
              target="_blank"
              className="bg-white rounded-md text-black text-sm p-2 flex items-center justify-center"
            >
              <ExternalLink />
              View Repo
            </Link>
          )}
        </div>
        <div className="flex flex-col gap-5 px-2 md:px-0 pt-10 md:pt-0">
          <div>
            <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
              Stack
            </h3>
            <hr className="border-[0.5px] border-zinc-700 w-full mt-1" />
          </div>
          <ul className="pl-5 md:pl-0">
            {workProject.tools.map((tool) => (
              <li className="text-white list-disc" key={tool}>
                {tool}
              </li>
            ))}
          </ul>
        </div>
      </main>
    </section>
  );
};

export default WorkPage;
