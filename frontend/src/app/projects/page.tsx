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
    <div className="min-h-screen">
      <main className="p-8 pt-0 w-9/12 mx-auto max-w-xl">
        <h1 className="text-3xl text-shadow text-primary">Projects</h1>
        <div className="my-5">
          {projects.length > 0 ? (
            projects.map((project: any) => (
              <ProjectCard
                key={project.id}
                id={project._id}
                name={project.name}
                description={project.description}
                article={project.article}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            ))
          ) : (
            <p>No projects available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Projects;
