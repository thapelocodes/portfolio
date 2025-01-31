"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import api from "@/utils/api";
import Image from "next/image";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        console.log("Blogs response: ", response);
        setTimeout(() => {
          setLoading(false);
        }, 1000);
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs: ", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <main className="min-h-screen w-9/12 mx-auto">
        <h1 className="text-3xl m-2 text-primary text-shadow">Blogs</h1>
        <div className={`my-5 mx-auto ${loading && "w-12"}`}>
          {!loading && blogs.length > 0 ? (
            blogs.map((blog: any) => (
              <Link key={blog._id} href={`/blogs/${blog._id}`} passHref>
                <BlogCard
                  key={blog._id}
                  title={blog.title}
                  content={blog.content}
                  createdAt={new Date(blog.createdAt).toLocaleDateString()}
                  updatedAt={new Date(blog.updatedAt).toLocaleDateString()}
                />
              </Link>
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
          {!loading && blogs.length === 0 && <p>No blog posts for now.</p>}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
