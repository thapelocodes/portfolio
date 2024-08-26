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
  <div className="project-card">
    <h3>{name}</h3>
    <p>{description}</p>
    <a href={liveLink}>GitHub</a>
    <a href={githubLink}>Live Demo</a>
  </div>
);

export default ProjectCard;
