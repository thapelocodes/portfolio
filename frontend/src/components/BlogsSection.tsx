import Link from "next/link";
import BlogCard from "./BlogCard";

const BlogsSection = () => (
  <section className="blogs rounded-2xl md:max-w-screen-sm p-2 w-full my-2 mx-auto text-center">
    <h2 className="text-xl m-1">Blogs</h2>
    <div className="flex flex-col">
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
      <div className="w-fit mx-auto p-2 bg-gradient-to-tl from-blue-200 to-slate-500 dark:from-blue-950 dark:to-slate-950 dark:hover:from-blue-800 rounded-xl transform transition-transform duration-200 hover:scale-110">
        <Link href="blogs">Explore more blogs</Link>
      </div>
    </div>
  </section>
);

export default BlogsSection;
