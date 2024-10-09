"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import api from "@/utils/api";
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
    <main className="pt-0 px-4 mx-auto min-h-screen">
      <h1 className="text-3xl text-shadow text-primary">Projects</h1>
      <div className="my-5 max-w-sm mx-auto md:max-w-max md:grid grid-cols-2 lg:grid-cols-3 gap-4">
        {projects.length > 0 ? (
          projects.map((project: any) => (
            <div key={project.id} className="max-w-sm mt-4">
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
      </div>
    </main>
  );
};

export default Projects;
