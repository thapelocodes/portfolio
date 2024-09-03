import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import api from "../utils/api";
import "@/app/globals.css";

const Projects = () => {
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
    <div className="h-full">
      <Header />
      <main className="p-8 pt-20">
        <h1>Projects</h1>
        {/* {projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))} */}
        <div className="flex flex-col w-full md:w-64 mx-auto py-3">
          <div className="">
            <ProjectCard
              name="Project 1"
              description="My first project. In this projects I built a clone of the ALX website using HTML, CSS and JavaScript."
              liveLink="projects/project1"
              githubLink="https://github.com/thapelocodes/alx-frontend-for-fun"
            />
          </div>
          <div>
            <ProjectCard
              name="Project 2"
              description="My second project"
              liveLink="projects/project2"
              githubLink="https://github.com/thapelocodes/alx-frontend-for-fun/tree/main/sass_scss"
            />
          </div>
          <div>
            <ProjectCard
              name="Project 3"
              description="My third project"
              liveLink="projects/project3"
              githubLink="https://github.com/thapelocodes/LyricLounge"
            />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
