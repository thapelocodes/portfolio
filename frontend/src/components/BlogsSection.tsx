import Link from "next/link";

const BlogsSection = () => (
  <section className="blogs rounded-2xl md:max-w-screen-sm p-2 w-full my-2 mx-auto text-center">
    <h2 className="">Blogs</h2>
    <div className="flex flex-col">
      <Link href="blogs/blog1">Blog 1</Link>
      <Link href="blogs/blog2">Blog 2</Link>
      <Link href="blogs/blog3">Blog 3</Link>
      <Link href="blogs">Explore more blogs</Link>
    </div>
  </section>
);

export default BlogsSection;
