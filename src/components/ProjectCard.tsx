import Link from "next/link";

interface Props {
  url: string;
  name: string;
  img: string;
}

export const ProjectCard = ({ name, url, img }: Props) => {
  return (
    <Link href={url} className="duration-300 hover:translate-y-[-3px] w-full">
      <img alt={name} src={img} className="rounded-md object-cover w-full" />
    </Link>
  );
};
