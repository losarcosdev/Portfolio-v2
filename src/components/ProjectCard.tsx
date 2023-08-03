import Image from "next/image";
import Link from "next/link";

interface Props {
  url: string;
  name: string;
  img: string;
}

export const ProjectCard = ({ name, url, img }: Props) => {
  return (
    <Link href={url} className="duration-300 hover:translate-y-[-3px]">
      <Image
        alt={name}
        src={img}
        width={500}
        height={500}
        className="rounded-md object-cover"
      />
    </Link>
  );
};
