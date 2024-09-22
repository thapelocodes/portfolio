import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section className="projects md:max-w-screen-sm my-5 mx-auto p-3 rounded-xl shadow-lg dark:shadow-dark">
      <h2 className="text-shadow text-tertiary m-2 text-xl">
        Projects I have worked on
      </h2>
      <div className="flex flex-col md:flex-row w-10/12 md:w-full mx-auto md:justify-between py-2">
        {projects.length > 0 ? (
          projects.map((project: any) => (
            <ProjectCard
              key={project.id}
              name={project.name}
              description={project.description}
              liveLink={project.liveLink}
              githubLink={project.githubLink}
            />
          ))
        ) : (
          <p>No projects available.</p>
        )}
        {/* <div className="m-1 md:w-full">
          <ProjectCard
            name="Project 1"
            description="My first project"
            liveLink="projects/project1"
            githubLink="https://github.com/thapelocodes/alx-frontend-for-fun"
          />
        </div>
        <div className="m-1 md:w-full">
          <ProjectCard
            name="Project 2"
            description="My second project"
            liveLink="projects/project2"
            githubLink="https://github.com/thapelocodes/alx-frontend-for-fun/tree/main/sass_scss"
          />
        </div>
        <div className="m-1 md:w-full">
          <ProjectCard
            name="Project 3"
            description="My third project"
            liveLink="projects/project3"
            githubLink="https://github.com/thapelocodes/LyricLounge"
          />
        </div> */}
      </div>
      <div className="text-tertiary font-medium w-fit mx-auto p-2 px-4 shadow bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-950 dark:hover:from-blue-800 rounded-3xl transform transition-transform duration-200 hover:scale-110">
        <Link href="/projects">See more projects</Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
