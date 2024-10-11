"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import BackIconBlack from "@/assets/back-svgrepo-com.svg";
import BackIconWhite from "@/assets/back-white-svgrepo-com.svg";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";

const OpenProject = ({ params }: { params: { projectId: string } }) => {
  const router = useRouter();
  const { projectId } = params;
  const [project, setProject] = useState<any>(null);
  const [loading, setLoading] = useState(true);

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

  return (
    <main className="min-h-screen p-8 pt-0">
      <div className={`mx-auto ${loading && "w-12"}`}>
        {!loading && project ? (
          <div>
            <button
              onClick={router.back}
              className="fixed left-8 hover:bg-gray-400 p-2 hover:bg-opacity-40 rounded-full z-50"
            >
              <Image
                src={BackIconBlack}
                alt="Back Icon"
                width={25}
                height={25}
                className="dark:hidden"
              />
              <Image
                src={BackIconWhite}
                alt="Back Icon"
                width={25}
                height={25}
                className="hidden dark:block"
              />
            </button>
            <h1 className="text-3xl m-2 text-primary text-shadow p-6 pt-0">
              {project.name}
            </h1>
            <p>{project.description}</p>
            <p>{project.article}</p>
            <p>Technologies used:</p>
            <ul>
              {project.techStack &&
                project.techStack.map((tech: string) => (
                  <li key={tech}>{tech}</li>
                ))}
            </ul>
          </div>
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

export default OpenProject;
