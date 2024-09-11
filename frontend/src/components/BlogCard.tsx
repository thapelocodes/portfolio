type BlogCardProps = {
  title: string;
  content: string;
  createdAt: string;
  updatedAt: string;
};

const BlogCard = ({ title, content }: BlogCardProps) => (
  <div className="w-full shadow-lg md:max-w-lg mx-auto blog-card my-2 p-2 bg-gradient-to-br from-slate-300 to-slate-500 dark:from-blue-950 dark:to-slate-950 rounded-xl transform transition-transform duration-200 hover:scale-110">
    <h3 className="text-lg text-tertiary p-1">{title}</h3>
    <p className="truncate text-secondary p-2">{content}</p>
  </div>
);

export default BlogCard;
