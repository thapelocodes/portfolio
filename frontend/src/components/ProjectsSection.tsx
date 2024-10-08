"use client";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useEffect, useState } from "react";
import api from "@/utils/api";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const projectsToDisplay =
    projects.length >= 3 ? projects.reverse().slice(0, 4) : projects.reverse();

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
    <section className="projects md:max-w-screen-lg my-5 mx-auto p-3 rounded-xl shadow-lg dark:shadow-dark">
      <h2 className="text-shadow text-tertiary m-2 text-xl">
        Projects I have worked on
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 w-10/12 md:w-full mx-auto md:gap-4 py-2">
        {projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project: any) => (
            <div key={project._id} className="w-full mx-auto">
              <ProjectCard
                id={project._id}
                name={project.name}
                description={project.description}
                article={project.article}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
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
      <div className="text-tertiary text-sm font-medium w-fit mx-auto p-2 px-4 shadow bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-950 dark:hover:from-blue-800 rounded-3xl transform transition-transform duration-200 hover:scale-110">
        <Link href="/projects">See more projects</Link>
      </div>
    </section>
  );
};

export default ProjectsSection;
