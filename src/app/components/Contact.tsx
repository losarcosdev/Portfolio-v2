import { Card } from "@/components";
import { Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";
import React from "react";

const socialMedias = [
  {
    label: "Linkedln",
    url: "https://www.linkedin.com/in/lucaslosarcos/",
    icon: <Linkedin size={20} />,
  },
  {
    label: "Github",
    url: "https://github.com/losarcosdev",
    icon: <Github size={20} />,
  },
  {
    label: "Email",
    url: `mailto:lucas.losarcos@gmail.com?subject=${encodeURIComponent(
      ""
    )}&body=${encodeURIComponent("")}`,
    icon: <Mail size={20} />,
  },
];

export const Contact = () => {
  return (
    <section
      className="flex flex-col gap-5 justify-center w-full md:max-w-5xl container mx-auto px-2 py-10"
      id="contact"
    >
      <div className="flex flex-col gap-2">
        <h3 className="z-10 duration-1000 text-white cursor-default font-display text-xl sm:text-2xl md:text-4xl">
          Contact
        </h3>
        <p className="text-zinc-500">
          Let&apos;s create somethig amazing together
        </p>
      </div>
      <hr className="border-[0.5px] border-zinc-700 w-full" />
      {/* Tech list */}
      <div className="flex items-center justify-center flex-wrap gap-5">
        {/* Tech card */}
        {socialMedias.map(({ label, url, icon }) => (
          <Card key={label}>
            <Link
              href={url}
              target="_blank"
              className="p-4 relative flex flex-col items-center gap-4 duration-500 group md:gap-8 md:py-24 lg:pb-48 md:p-16 w-80 bg-gradient opacity-70 hover:opacity-100"
            >
              <span
                className="absolute w-px h-2/3 bg-gradient-to-b from-zinc-500 via-zinc-500/50 to-transparent"
                aria-hidden="true"
              />
              <span className="relative z-10 flex items-center justify-center w-12 h-12 text-sm duration-500 border rounded-full text-zinc-200 group-hover:text-white group-hover:bg-zinc-900 border-zinc-500 bg-zinc-900 group-hover:border-zinc-200 drop-shadow-orange">
                {icon}
              </span>
              <div className="z-10 flex flex-col items-center">
                <span className="mt-4 text-lg text-center duration-500 text-zinc-400 group-hover:text-white font-display">
                  {label}
                </span>
              </div>
            </Link>
          </Card>
        ))}
      </div>
    </section>
  );
};
