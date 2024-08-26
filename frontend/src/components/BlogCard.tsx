type BlogCardProps = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const BlogCard = ({ title, content, createdAt, updatedAt }: BlogCardProps) => (
  <div className="blog-card">
    <h3>{title}</h3>
    <p>{content}</p>
    <p>Created At: {createdAt}</p>
    <p>Updated At: {updatedAt}</p>
  </div>
);

export default BlogCard;
