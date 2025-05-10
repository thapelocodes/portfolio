"use client";
import Link from "next/link";
import BlogCard from "./BlogCard";
import { useEffect, useRef, useState } from "react";
import api from "@/utils/api";
import Image from "next/image";
import LoadingIcon from "@/assets/loading-svgrepo-com.svg";
import LoadingIconWhite from "@/assets/loading-white-svgrepo-com.svg";
import { useTheme } from "./ThemeProvider";

const BlogsSection = () => {
  const [blogs, setBlogs] = useState([]);
  const blogsToDisplay =
    blogs.length >= 3 ? blogs.reverse().slice(0, 3) : blogs.reverse();

  const elementRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();

  // Function to check if the element is visible in the viewport
  const checkIfVisible = () => {
    if (elementRef.current) {
      const { top, bottom } = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // If the element is in the viewport
      if (top < windowHeight - 20) {
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

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        console.log("Blogs response: ", response);
        setTimeout(() => {
          setLoading(false);
        }, 2000);
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs: ", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <section
      ref={elementRef}
      className={`blogs rounded-2xl md:max-w-screen-lg p-3 pt-20 w-full my-5 mx-auto text-center transition-transform duration-500 ${
        isVisible
          ? "animate-slide-in-from-bottom"
          : "opacity-0 transform translate-y-full"
      }`}
      id="blog"
    >
      <h2 className="text-shadow text-tertiary text-2xl m-1">Blog</h2>
      <div className="flex flex-col my-2">
        {loading ? (
          <div className="mx-auto animate-spin">
            <Image
              src={theme === "dark" ? LoadingIconWhite : LoadingIcon}
              alt="Loading Icon"
              width={50}
              height={50}
              className=""
            />
          </div>
        ) : blogsToDisplay.length === 0 ? (
          <p>No blog posts for now.</p>
        ) : (
          blogsToDisplay.map((blog: any) => (
            <Link key={blog._id} href={`/blogs/${blog._id}`} passHref>
              <BlogCard
                key={blog._id}
                title={blog.title}
                content={blog.content}
                createdAt={new Date(blog.createdAt).toLocaleDateString()}
                updatedAt={new Date(blog.updatedAt).toLocaleDateString()}
              />
            </Link>
          )) && (
            <button className="text-tertiary text-sm font-medium shadow w-fit mt-3 mx-auto py-2 px-4 border border-tech-purple hover:bg-tech-purple/10 text-foreground px-6 py-3 rounded-lg font-medium transition-all duration-300">
              <Link href="blogs">Explore more blogs</Link>
            </button>
          )
        )}
      </div>
    </section>
  );
};

export default BlogsSection;
