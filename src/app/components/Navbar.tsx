import Link from "next/link";
import React from "react";

const navigation = [
  { label: "Projects", href: "#projects" },
  { label: "Work With Me", href: "#contact" },
  { label: "Stack", href: "#stack" },
];

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-center md:max-w-5xl container mx-auto px-2 py-5 animate-fade-in">
      <ul className="flex gap-5 items-center">
        {navigation.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-zinc-500 hover:text-white duration-300"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
