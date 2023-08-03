import React from "react";
import { ChevronsDown } from "lucide-react";
import Link from "next/link";

export const About = () => {
  return (
    <div className="flex flex-col items-center h-screen overflow-hidden from-black via-zinc-600/20 to-black md:max-w-5xl container mx-auto px-2 md:p-0">
      <div className="my-16">
        <p className="text-zinc-500">Buenos Aires | Argentina</p>
      </div>
      <h1 className="z-10 text-4xl duration-1000 text-white cursor-default text-center font-display sm:text-6xl md:text-9xl">
        Lucas Los Arcos
      </h1>
      <div className="my-16 text-center p-1">
        <h2 className="text-zinc-500 w-full md:w-[700px]">
          I&apos;m a Full Stack Developer based in Argentina, fueled by a deep
          passion for crafting captivating and visually appealing web
          interactions. I continuously aim to deliver top-notch code while
          designing user-friendly interfaces that are easy to navigate.
        </h2>
      </div>
      <Link href={"#projects"}>
        <ChevronsDown className="h-14 w-8 text-white rounded-full p-1 bg-zinc-700 hover:bg-zinc-800 hover:text-zinc-500 duration-300 cursor-pointer" />
      </Link>
    </div>
  );
};
