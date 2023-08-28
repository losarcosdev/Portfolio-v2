interface Project {
  image: string;
  tools: string[];
  description: string;
  title: string;
  siteUrl?: string;
  codeUrl?: string;
  articleUrl?: string;
  slug: string;
}

export const projects: Project[] = [
  {
    description:
      "This is a social interaction platform where users can create an account, posts and communities. They can also add comments, and recursively reply to  those comments. Users can browse posts and communities created by others users and there is also the option to add or remove votes.It was a challenging project, but at the end Im proud of the final product.",
    image: "/projects/reader.jpeg",
    tools: [
      "Typescript",
      "Next",
      "TailwindCSS",
      "Nest",
      "PostgreSQL",
      "Docker",
      "Redis",
    ],
    title: "Reader",
    siteUrl: "https://reader-dun.vercel.app",
    codeUrl: "https://github.com/losarcosdev/reader-frontend",
    slug: "reader",
  },
  {
    description:
      "This is an ecommerce platform that offers customers features like browsing products, adding to cart, and easy checkout. It includes PayPal as a payment option. The platform also has an admin panel for managing products, viewing orders, and tracking inventory. Admins can create, publish, and edit listings. The panel provides sales insights, inventory tracking, sales reports, and order management.",
    image: "/projects/audiorealm.jpeg",
    tools: [
      "Typescript",
      "Next.js",
      "React Context API",
      "TailwindCSS",
      "MongoDB",
      "Docker",
    ],
    title: "Audiorealm",
    siteUrl: "https://audiorealm-v2.vercel.app/",
    codeUrl: "https://github.com/losarcosdev/Audiorealm",
    slug: "audiorealm",
  },
  {
    description:
      "This project is a command-line interface (CLI) tool for writing and executing code in a built-in code editor. Users can view real-time output. It also includes a text editor for saving code and text together. Useful for documenting coding process or taking notes. Supports JavaScript and React, with plans to add more languages.",
    image: "/projects/notescript.jpeg",
    tools: [
      "Typescript",
      "React",
      "Redux Toolkit",
      "Vite",
      "MUI",
      "Node",
      "Lerna",
    ],
    title: "NoteScript",
    codeUrl: "https://github.com/losarcosdev/Notescript",
    slug: "notescript",
  },
  {
    image: "/projects/luxocar.jpeg",
    title: "Luxocar",
    codeUrl: "https://github.com/losarcosdev/Luxocar",
    siteUrl: "https://luxocar.vercel.app/",
    slug: "luxocar",
    description: "",
    tools: ["Typescript", "Next.js", "TailwindCSS", "MongoDB"],
  },
  {
    image: "/projects/article-summarizer.jpeg",
    title: "Summarizer",
    codeUrl: "https://github.com/losarcosdev/Posts-Summarizer",
    siteUrl: "https://posts-summarizer.vercel.app/",
    slug: "summarizer",
    description:
      "Accelerate and enhance your reading experience with this summarization tool, a freely available article summarizer that converts extensive articles into easily understandable and brief summaries.",
    tools: ["Typescript", "Next.js", "TailwindCSS"],
  },
  {
    image: "/projects/two-factor-authentication.webp",
    title: "2 Factor Authentication",
    codeUrl: "https://github.com/losarcosdev/Two-Factor-Authentication",
    articleUrl:
      "https://dev.to/losarcosdev/autenticacion-en-2-factores-via-sms-con-nestjs-postgresql-y-twilio-1mmd",
    slug: "two-factor-authentication",
    description: "Checkout my article to see all the details on how I did it!",
    tools: [
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "TypeOrm",
      "Docker",
      "Twilio",
    ],
  },
];
