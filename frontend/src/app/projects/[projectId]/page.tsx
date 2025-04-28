"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import BackIconBlack from "@/assets/back-svgrepo-com.svg";
import BackIconWhite from "@/assets/back-white-svgrepo-com.svg";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";
import LinkIconBlack from "@/assets/link-horizontal-svgrepo-com.svg";
import LinkIconWhite from "@/assets/link-horizontal-white-svgrepo-com.svg";
import GitHubIconBlack from "@/assets/github-black-142-svgrepo-com.svg";
import GitHubIconWhite from "@/assets/github-white-142-svgrepo-com.svg";
import { useTheme } from "@/components/ThemeProvider";

const OpenProject = ({ params }: { params: { projectId: string } }) => {
  const router = useRouter();
  const { projectId } = params;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const [screenWidth, setScreenWidth] = useState(0);

  useEffect(() => {
    if (projectId) {
      const fetchProject = async () => {
        try {
          const response = await api.get(`/projects/${projectId}`);
          console.log("Project fetched:", response.data);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setProject(response.data);
        } catch (err) {
          console.error("Error fetching project: ", err);
        }
      };
      fetchProject();
    }
  }, [projectId]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);

      const handleResize = () => setScreenWidth(window.innerWidth);

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <main className="min-h-screen px-4">
      <div className={`mx-auto ${loading && "w-12"}`}>
        {!loading && project ? (
          <div>
            <button
              onClick={router.back}
              className="fixed left-8 hover:bg-gray-400 p-2 hover:bg-opacity-40 rounded-full z-50"
            >
              <Image
                src={theme === "dark" ? BackIconWhite : BackIconBlack}
                alt="Back Icon"
                width={25}
                height={25}
                className=""
              />
            </button>
            <h1 className="text-3xl m-2 my-8 text-primary text-shadow p-6 md:py-0">
              {project.name}
            </h1>
            {/* <Image
              src={project.image}
              alt={`Image of project ${project.name}`}
              width={100}
              height={100}
            /> */}
            <div
              className="mx-auto rounded-lg mt-8 mb-2 md:max-w-[48rem] aspect-video"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "cover",
                // backgroundPosition: "center",
              }}
            ></div>
            <p className="md:max-w-[48rem] mx-auto pb-8 pt-2 mb-8 text-xs md:text-sm text-tertiary font-muted">
              {project.description}
            </p>
            <article className="md:max-w-[48rem] mx-auto py-8 my-8">
              {project.article}
            </article>
            <h4 className="text-tertiary text-lg md:text-xl font-bold my-8">
              Technologies used:
            </h4>
            <ul className="text-tertiary text-sm md:text md:max-w-[48rem] mx-auto pb-16 font-muted-foreground gap-8 flex flex-wrap justify-center">
              {project.techStack &&
                project.techStack.map((tech: string) => (
                  <li key={tech}>{tech}</li>
                ))}
            </ul>
            <div className="flex w-fit mx-auto py-8">
              <button className="text-tertiary text-sm font-medium w-28 my-1 transform transition-transform duration-200 hover:scale-125 rounded-lg">
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={theme === "dark" ? LinkIconWhite : LinkIconBlack}
                    alt="Link Icon"
                    width={25}
                    height={25}
                    className="mx-auto"
                  />
                </a>
              </button>
              <button className="text-tertiary text-sm font-medium w-28 my-1 transform transition-transform duration-200 hover:scale-125 rounded-lg">
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <Image
                    src={theme === "dark" ? GitHubIconWhite : GitHubIconBlack}
                    alt="GitHub Icon"
                    width={25}
                    height={25}
                    className="mx-auto"
                  />
                </a>
              </button>
            </div>
          </div>
        ) : (
          <div className="mx-auto animate-spin">
            <Image
              src={theme === "dark" ? LoadingIconWhite : LoadingIcon}
              alt="Loading Icon"
              width={50}
              height={50}
              className=""
            />
          </div>
        )}
      </div>
    </main>
  );
};

export default OpenProject;
