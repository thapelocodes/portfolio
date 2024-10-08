"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import BlogCard from "@/components/BlogCard";
import api from "@/utils/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        console.log("Blogs response: ", response);
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
        <div className="my-5">
          {blogs.length > 0 ? (
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
            <p>No blogs available.</p>
          )}
        </div>
      </main>
    </div>
  );
};

export default Blogs;
