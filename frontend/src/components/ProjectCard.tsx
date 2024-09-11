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
  <div className="w-full mx-auto project-card flex flex-col my-2 p-2 bg-gradient-to-br from-slate-300 to-slate-500 dark:from-blue-950 dark:to-slate-950 rounded-xl hover:shadow-none shadow-xl">
    <h3 className="text-lg mb-4 text-tertiary">{name}</h3>
    <div className="pb-2">
      <p className="text-secondary">{description}</p>
    </div>
    <div className="flex flex-col w-fit mx-auto py-2">
      <button className="text-tertiary mx-1 w-24 my-1 transform transition-transform duration-200 hover:scale-110 bg-gradient-to-tl dark:from-cyan-950 dark:to-slate-950 dark:hover:from-cyan-800 p-1 rounded-2xl shadow">
        <a href={liveLink} target="_blank" rel="noopener noreferrer">
          Live Demo
        </a>
      </button>
      <button className="text-tertiary mx-1 w-24 my-1 transform transition-transform duration-200 hover:scale-110 bg-gradient-to-tl dark:from-cyan-950 dark:to-slate-950 dark:hover:from-cyan-800 p-1 rounded-2xl shadow">
        <a href={githubLink} target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
      </button>
    </div>
  </div>
);

export default ProjectCard;
