"use client";
import Link from "next/link";
import ProjectCard from "./ProjectCard";
import { useEffect, useRef, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";

const ProjectsSection = () => {
  const [projects, setProjects] = useState([]);
  const projectsToDisplay =
    projects.length >= 3 ? projects.reverse().slice(0, 3) : projects.reverse();

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);

  // Function to check if the element is visible in the viewport
  const checkIfVisible = () => {
    if (elementRef.current) {
      const { top, bottom } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the element is in the viewport
      if (top < windowHeight - 200 && bottom > 0) {
        setIsVisible(true);
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", checkIfVisible);
    checkIfVisible(); // Initial check on mount

    return () => {
      window.removeEventListener("scroll", checkIfVisible);
    };
  }, []);

  // Fetch Projects Data
  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await api.get("/projects");
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching projects: ", error);
      }
    };
    fetchProjects();
  }, []);

  return (
    <section
      ref={elementRef}
      className={`projects md:max-w-screen-lg my-5 mx-auto p-3 pt-20 transition-transform duration-500 ${
        isVisible
          ? "animate-slideInLeft"
          : "opacity-0 transform -translate-x-full"
      }`}
      id="projects"
    >
      <h2 className="text-shadow text-tertiary m-2 text-2xl">
        Featured Projects
      </h2>
      <div
        className={`grid md:grid-cols-2 lg:grid-cols-3 mx-auto md:gap-4 py-8`}
      >
        {!loading && projectsToDisplay.length > 0 ? (
          projectsToDisplay.map((project: any) => (
            <div key={project._id} className="max-w-sm mx-auto">
              <ProjectCard
                id={project._id}
                name={project.name}
                description={project.description}
                article={project.article}
                image={project.image}
                liveLink={project.liveLink}
                githubLink={project.githubLink}
              />
            </div>
          ))
        ) : (
          <div className="col-span-full mx-auto animate-spin">
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
      <button className="text-tertiary text-sm font-medium w-full sm:w-7/12 md:w-5/12 mx-auto p-2 px-4 shadow bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-950 dark:hover:from-blue-800 rounded-3xl transform transition-transform duration-200 hover:scale-110">
        <Link href="/projects">See more projects</Link>
      </button>
    </section>
  );
};

export default ProjectsSection;
