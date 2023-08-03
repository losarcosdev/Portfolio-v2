import { Card } from "@/components";
import Link from "next/link";

const articles = [
  {
    title: "Two Factor Authentication with Nest.js",
    description:
      "Two-factor authentication is a security method that adds an additional layer of protection to online accounts. Instead of relying solely on a password, a second authentication factor is required to verify the user's identity.",
    year: "2023",
    slug: "two-factor-authentication",
  },
  {
    title:
      "Implement dark mode with Tailwind CSS and Next.js 13 (app directory) in 5 simple steps",
    description:
      "Embracing dark mode has become a prominent design trend, offering users a visually appealing and comfortable browsing experience. Combining the power of Tailwind CSS and Next.js, we can seamlessly integrate dark mode functionality into our web applications. In this article, I will guide you through the steps required to implement dark mode and create a toggle button component using the next-themes library.",
    year: "2023",
    slug: "dark-mode-tailwindcss-nextjs-13",
  },
];

export const Articles = () => {
  return (
    <section className="flex flex-col justify-center gap-5 w-full md:max-w-5xl container mx-auto px-2 pt-12">
      <div className="flex flex-col gap-2">
        <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
          Articles
        </h3>
        <p className="text-zinc-500">
          I also like to share things that I learned along the way
        </p>
      </div>
      <hr className="border-[0.5px] border-zinc-700 w-full" />
      {articles.map(({ title, year, description, slug }) => (
        <Card key={title}>
          <Link href={`/articles/${slug}`}>
            <article className="relative w-full h-full p-4 md:p-8 bg-gradient">
              <div className="flex items-center justify-between gap-2">
                <div className="text-xs text-zinc-100">{year}</div>
              </div>

              <h2
                id="featured-post"
                className="mt-4 text-3xl font-bold text-zinc-100 group-hover:text-white font-display"
              >
                {title}
              </h2>
              <p className="mt-4 leading-8 duration-150 text-zinc-400 group-hover:text-zinc-300">
                {description}
              </p>
              <div>
                <p className="hidden text-zinc-50 lg:block mt-2">
                  Read more <span aria-hidden="true">&rarr;</span>
                </p>
              </div>
            </article>
          </Link>
        </Card>
      ))}
    </section>
  );
};
