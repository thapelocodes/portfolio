import { useState, useEffect } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import ProjectCard from "../components/ProjectCard";
import api from "../utils/api";

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
    <div>
      <Header />
      <main>
        <h1>Projects</h1>
        {projects.map((project: any) => (
          <ProjectCard
            key={project.id}
            name={project.name}
            description={project.description}
            liveLink={project.liveLink}
            githubLink={project.githubLink}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Projects;
