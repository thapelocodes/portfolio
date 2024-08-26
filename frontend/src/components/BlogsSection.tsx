import Link from "next/link";

const BlogsSection = () => (
  <section className="blogs">
    <h2>Blogs</h2>
    <Link href="/blogs/blog1">Blog 1</Link>
    <Link href="/blogs/blog2">Blog 2</Link>
    <Link href="/blogs/blog3">Blog 3</Link>
    <Link href="/blogs">Explore more blogs</Link>
  </section>
);

export default BlogsSection;
