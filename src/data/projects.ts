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
      "This is a social interaction platform where users can create an account, create/update/delete posts, add comments, and recursively reply to  those comments. Users can browse posts by others, like or remove likes. Initially for a Frontend Mentor challenge, I expanded it into a Full-stack application. It was a challenging project, but at the end Im proud of the final product.",
    image: "/projects/posts-app.jpeg",
    tools: [
      "Typescript",
      "React",
      "Redux Toolkit",
      "Vite",
      "TailwindCSS",
      "Nest",
      "PostgreSQL",
      "Docker",
    ],
    title: "Posts App",
    siteUrl: "https://posts-app.site",
    codeUrl: "https://github.com/losarcosdev/Posts-App",
    slug: "posts-app",
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
      "This website was for a real estate agent, allowing users to navigate through properties and access information about location, price, and features. The project included an admin panel for managing properties. It was my first work for a real client, providing valuable experience in building a functional website.",
    image: "/projects/real-estate-agent.jpeg",
    tools: [
      "Typescript",
      "Next.js",
      "Redux Toolkit",
      "TailwindCSS",
      "Nest",
      "PostgreSQL",
      "Docker",
    ],
    title: "Real Estate Agent",
    siteUrl: "https://mirtafarias.com",
    codeUrl: "https://github.com/losarcosdev/Real-Estate-Agent",
    slug: "real-estate-agent",
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
    title: "Two Factor Authentication",
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
