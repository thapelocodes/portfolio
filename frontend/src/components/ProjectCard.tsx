type ProjectCardProps = {
  name: string;
  description: string;
  liveLink: string;
  githubLink: string;
};

const ProjectCard = ({
  name,
  description,
  liveLink,
  githubLink,
}: ProjectCardProps) => (
  <div className="w-fit md:w-1/3 mx-auto md:mx-1 project-card flex flex-col my-2 p-2 bg-gradient-to-br from-blue-100 to-slate-2300 dark:from-blue-950 dark:to-slate-950 rounded-xl">
    <h3 className="text-lg mb-4">{name}</h3>
    <div className="pb-2">
      <p className="">{description}</p>
    </div>
    <div className="flex md:flex-col w-fit mx-auto py-2">
      <div className="mx-1 w-24 md:my-1 transform transition-transform duration-200 hover:scale-110 bg-gradient-to-tl dark:from-cyan-950 dark:to-slate-950 dark:hover:from-cyan-800 p-1 rounded-lg">
        <a href={liveLink}>Live Demo</a>
      </div>
      <div className="mx-1 w-24 md:my-1 transform transition-transform duration-200 hover:scale-110 bg-gradient-to-tl dark:from-cyan-950 dark:to-slate-950 dark:hover:from-cyan-800 p-1 rounded-lg">
        <a href={githubLink}>GitHub</a>
      </div>
    </div>
  </div>
);

export default ProjectCard;
