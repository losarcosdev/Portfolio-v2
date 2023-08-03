"use client";
import { TypingText } from "@/components/TypingText";
import { ChevronLeft, Github, Globe, Newspaper } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { staggerContainer } from "@/utils";

interface Props {
  title: string;
  githubUrl: string;
  siteUrl?: string;
  articleUrl?: string;
  description: string;
}
export const Header = ({
  title,
  githubUrl,
  siteUrl,
  description,
  articleUrl,
}: Props) => {
  const router = useRouter();

  return (
    <motion.header
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="w-full h-[70vh] bg-black flex flex-col gap-5 items-center justify-center relative"
    >
      <ChevronLeft
        className="h-8 w-8 text-zinc-400 absolute top-5 left-3 cursor-pointer hover:text-white"
        onClick={() => router.back()}
      />
      <div className="flex items-center gap-2 absolute top-5 right-3">
        {!siteUrl ? (
          <>
            <Link href={githubUrl} target="_blank">
              <Github className="h-7 w-7 text-zinc-400 cursor-pointer hover:text-white" />
            </Link>
            {articleUrl && (
              <Link href={articleUrl} target="_blank">
                <Newspaper className="h-7 w-7 text-zinc-400 cursor-pointer hover:text-white" />
              </Link>
            )}
          </>
        ) : (
          <>
            <Link href={githubUrl} target="_blank">
              <Github className="h-7 w-7 text-zinc-400 cursor-pointer hover:text-white" />
            </Link>
            <Link href={siteUrl} target="_blank">
              <Globe className="h-7 w-7 text-zinc-400 cursor-pointer hover:text-white" />
            </Link>
          </>
        )}
      </div>
      <TypingText
        title={title}
        textStyles="font-display text-white text-4xl md:text-6xl text-center"
      />
      <div className="md:w-[60%] w-full text-center ">
        <p className="text-white text-sm md:text-base">{description}</p>
      </div>
      <div className="flex items-center gap-3">
        {articleUrl && (
          <Link
            href={`${articleUrl}`}
            target="_blank"
            className="text-zinc-500 hover:text-white hover:underline duration-200"
          >
            View Article
          </Link>
        )}
        <Link
          href={`${githubUrl}`}
          target="_blank"
          className="text-zinc-500 hover:text-white hover:underline duration-200"
        >
          View Repo
        </Link>
        {siteUrl && (
          <Link
            href={`${siteUrl}`}
            target="_blank"
            className="text-zinc-500 hover:text-white hover:underline duration-200"
          >
            View Site
          </Link>
        )}
      </div>
    </motion.header>
  );
};
