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
  <div className="w-full md:w-1/3 mx-auto md:mx-1 project-card flex flex-col my-2 p-2 bg-gradient-to-br from-blue-100 to-slate-2300 dark:from-blue-950 dark:to-slate-950 rounded-xl text-center">
    <h3 className="text-lg mb-4">{name}</h3>
    <p className="h-40">{description}</p>
    <a href={liveLink}>Live Demo</a>
    <a href={githubLink}>GitHub</a>
  </div>
);

export default ProjectCard;
