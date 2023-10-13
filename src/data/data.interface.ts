export interface Project {
  image: string;
  tools: string[];
  description: string;
  title: string;
  siteUrl?: string;
  codeUrl?: string;
  articleUrl?: string;
  slug: string;
}

export interface Work extends Project {}
