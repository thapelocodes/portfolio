"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import BackIconBlack from "@/assets/back-svgrepo-com.svg";
import BackIconWhite from "@/assets/back-white-svgrepo-com.svg";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";

const OpenBlog = ({ params }: { params: { blogId: string } }) => {
  const router = useRouter();
  const { blogId } = params;
  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        try {
          const response = await api.get(`/blogs/${blogId}`);
          setTimeout(() => {
            setLoading(false);
          }, 1000);
          setBlog(response.data);
        } catch (err) {
          console.error("Error fetching blog: ", err);
        }
      };
      fetchBlog();
    }
  }, [blogId]);

  return (
    <div className="">
      <main className="min-h-screen w-11/12 mx-auto">
        <div className={`mx-auto ${loading && "w-12"}`}>
          {!loading && blog ? (
            <>
              <button
                onClick={() => router.back()}
                className="flex fixed z-10 hover:bg-gray-400 hover:bg-opacity-40 rounded-full p-2"
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
              <h1 className="text-2xl m-2">{blog.title}</h1>
              <p className="m-2">{blog.content}</p>
              <p className="m-2">
                Created: {new Date(blog.createdAt).toLocaleDateString()}
              </p>
              <p className="m-2">
                Updated: {new Date(blog.updatedAt).toLocaleDateString()}
              </p>
            </>
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
    </div>
  );
};

export default OpenBlog;
