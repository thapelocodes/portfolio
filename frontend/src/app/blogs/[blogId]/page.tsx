"use client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import api from "@/utils/api";
import "@/app/globals.css";

const OpenBlog = () => {
  const router = useRouter();
  const { id } = router.query;
  const [blog, setBlog] = useState<any>(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        try {
          const response = await api.get(`/blogs/${id}`);
          setBlog(response.data);
        } catch (err) {
          console.error("Error fetching blog: ", err);
        }
      };
      fetchBlog();
    }
  }, [id]);

  return (
    <div className="">
      <main className="pt-20 h-screen w-11/12 mx-auto">
        {blog ? (
          <>
            <button
              onClick={() => router.back()}
              className="flex fixed z-10 bg-gradient-to-br from-transparent to-slate-500 dark:from-cyan-950 dark:to-slate-950 py-2 px-4 rounded-3xl transform transition-transform duration-200 hover:scale-110 hover:to-slate-600 dark:hover:from-cyan-900"
            >
              Back
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
