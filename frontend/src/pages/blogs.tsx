import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import BlogCard from "@/components/BlogCard";
import api from "@/utils/api";
import "@/app/globals.css";

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
      <main className="pt-20 h-screen">
        <h1 className="text-2xl">Blogs</h1>
        {/* {blogs.map((blog: any) => (
          <BlogCard
            key={blog.id}
            title={blog.title}
            content={blog.content}
            createdAt={blog.createdAt}
            updatedAt={blog.updatedAt}
          />
        ))} */}
        <div>
          <Link href="blogs/blog1">
            <BlogCard
              title="Blog 1"
              content="This is my first blog. Lorem ipsum odor amet, consectetuer adipiscing elit. Netus phasellus laoreet ut a libero? Rutrum suscipit natoque cursus nisi interdum hac. Vulputate aliquam tempus feugiat egestas diam sociosqu tristique lacinia duis. Rutrum faucibus dui etiam magna est consequat congue felis lacinia. Nascetur ridiculus vel vivamus egestas varius in blandit. Cubilia erat aptent hac vel, tortor torquent. Nullam eleifend nec, sed integer semper volutpat? Eget vivamus eleifend mauris nisi per in fringilla."
              createdAt="1st September 2024"
              updatedAt="1st September 2024"
            />
          </Link>
          <Link href="blogs/blog2">
            <BlogCard
              title="Blog 2"
              content="This is my second blog. Adapibus varius facilisis mollis hendrerit velit. Mus sociosqu semper aliquam imperdiet lectus ridiculus rutrum nascetur etiam. Dui natoque senectus eleifend sociosqu aliquam pellentesque mus metus dictum. Purus ut consequat congue platea lobortis. Tortor nulla lacinia blandit tincidunt egestas fames aliquet tortor habitasse. Aptent risus id adipiscing venenatis nulla ultrices. Dapibus ligula mollis lacus etiam urna posuere sollicitudin justo suspendisse? Primis felis purus cras nam taciti commodo a."
              createdAt="1st September 2024"
              updatedAt="1st September 2024"
            />
          </Link>
          <Link href="blogs/blog3">
            <BlogCard
              title="Blog 3"
              content="This is my third blog. Eget phasellus eleifend neque penatibus porta quam in? Phasellus nascetur velit pellentesque neque enim magnis. Mollis bibendum ridiculus fermentum aenean, vivamus porta vehicula. Fermentum velit malesuada torquent etiam amet. Pharetra fermentum eget nisi sed; id aliquam aenean? Consequat taciti commodo nibh rutrum justo fames facilisi. Pretium adipiscing ultrices ex metus donec."
              createdAt="1st September 2024"
              updatedAt="1st September 2024"
            />
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blogs;
