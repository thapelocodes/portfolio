"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import BackIconBlack from "@/assets/back-svgrepo-com.svg";
import BackIconWhite from "@/assets/back-white-svgrepo-com.svg";

const OpenBlog = ({ params }: { params: { blogId: string } }) => {
  const router = useRouter();
  const { blogId } = params;
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (blogId) {
      const fetchBlog = async () => {
        try {
          const response = await api.get(`/blogs/${blogId}`);
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
        {blog ? (
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
          <p>No blog found.</p>
        )}
      </main>
    </div>
  );
};

export default OpenBlog;
