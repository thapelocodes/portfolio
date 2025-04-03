import Link from "next/link";
import Image from "next/image";
import GitHubIconBlack from "@/assets/github-black-142-svgrepo-com.svg";
import GitHubIconWhite from "@/assets/github-white-142-svgrepo-com.svg";
import LinkIconBlack from "@/assets/link-horizontal-svgrepo-com.svg";
import LinkIconWhite from "@/assets/link-horizontal-white-svgrepo-com.svg";

type ProjectCardProps = {
  id: string;
  name: string;
  description: string;
  article: string;
  image: string;
  liveLink: string;
  githubLink: string;
  // dateDeployed: Date;
};

const ProjectCard = ({
  id,
  name,
  description,
  // article,
  image,
  liveLink,
  githubLink,
}: // dateDeployed,
ProjectCardProps) => (
  <button
    className={`w-full mx-auto project-card flex flex-col my-2 p-2 px-8 rounded-xl hover:shadow-none shadow-xl group`}
    style={{
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <h3 className="text-lg my-4 w-full mx-auto text-tertiary font-semibold bg-gray-300 dark:bg-blue-950 bg-opacity-70 dark:bg-opacity-50 py-2 px-4 translate-y-44 group-hover:static group-focus:static group-hover:bg-transparent group-focus:bg-transparent group-hover:translate-y-0 group-focus:translate-y-0 rounded-lg transform transition-all duration-500">
      {name}
    </h3>
    <div className="opacity-0 group-hover:opacity-100 group-focus:opacity-100 transform transition-all duration-500">
      <div className="pb-2">
        <p className="text-secondary line-clamp-3">{description}</p>
        <button className="text-tertiary text-sm font-medium w-10/12 sm:w-7/12 mt-4 transform transition-transform duration-200 hover:scale-110 bg-gradient-to-tl dark:from-cyan-950 dark:to-slate-950 dark:hover:from-cyan-800 p-2 rounded-lg shadow-md">
          <Link href={`/projects/${id}`}>Read more</Link>
        </button>
      </div>
      <div className="flex w-fit mx-auto py-2">
        <button className="text-tertiary text-sm font-medium w-28 my-1 transform transition-transform duration-200 hover:scale-125 rounded-lg">
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src={LinkIconBlack}
              alt="Link Icon"
              width={25}
              height={25}
              className="mx-auto dark:hidden"
            />
            <Image
              src={LinkIconWhite}
              alt="Link Icon"
              width={25}
              height={25}
              className="mx-auto hidden dark:block"
            />
          </a>
        </button>
        <button className="text-tertiary text-sm font-medium w-28 my-1 transform transition-transform duration-200 hover:scale-125 rounded-lg">
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center"
          >
            <Image
              src={GitHubIconBlack}
              alt="GitHub Icon"
              width={25}
              height={25}
              className="mx-auto dark:hidden"
            />
            <Image
              src={GitHubIconWhite}
              alt="GitHub Icon"
              width={25}
              height={25}
              className="mx-auto hidden dark:block"
            />
          </a>
        </button>
      </div>
    </div>
  </button>
);

export default ProjectCard;
