import { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BlogCard from "../components/BlogCard";
import api from "../utils/api";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await api.get("/blogs");
        setBlogs(response.data);
      } catch (err) {
        console.error("Error fetching blogs: ", err);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div>
      <Header />
      <main>
        <h1>Blog</h1>
        {blogs.map((blog: any) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            createdAt={blog.createdAt}
            updatedAt={blog.updatedAt}
          />
        ))}
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
