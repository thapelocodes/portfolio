import Link from "next/link";
import ProjectCard from "./ProjectCard";

const ProjectsSection = () => (
  <section className="projects md:max-w-screen-sm mx-auto text-center bg-cyan-950 rounded-2xl p-3">
    <h2 className="m-2 text-xl">
      <Link href="/projects">Projects</Link>
    </h2>
    <div className="flex flex-col md:flex-row w-full mx-auto md:justify-between">
      <ProjectCard
        name="Project 1"
        description="My first project"
        liveLink="projects/project1"
        githubLink="https://github.com/thapelocodes/alx-frontend-for-fun"
      />
      <ProjectCard
        name="Project 2"
        description="My second project"
        liveLink="projects/project2"
        githubLink="https://github.com/thapelocodes/alx-frontend-for-fun/tree/main/sass_scss"
      />
      <ProjectCard
        name="Project 3"
        description="My third project"
        liveLink="projects/project3"
        githubLink="https://github.com/thapelocodes/LyricLounge"
      />
    </div>
  </section>
);

export default ProjectsSection;
