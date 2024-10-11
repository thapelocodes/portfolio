"use client";
import { useState, useEffect } from "react";
import ProjectCard from "@/components/ProjectCard";
import api from "@/utils/api";
import Image from "next/image";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const projectsToDisplay = projects.reverse();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setTimeout(() => {
          setLoading(false);
        }, 1000);
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
      <div
        className={`my-5 max-w-sm mx-auto md:max-w-max md:grid grid-cols-2 lg:grid-cols-3 gap-4 ${
          loading && "w-12"
        }`}
      >
        {!loading && projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project: any) => (
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
          <div className="mx-auto animate-spin">
            <Image
              src={LoadingIcon}
              alt="Loading Icon"
              width={50}
              height={50}
              className="dark:hidden"
            />
            <Image
              src={LoadingIconWhite}
              alt="Loading Icon"
              width={50}
              height={50}
              className="hidden dark:block"
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default Projects;
