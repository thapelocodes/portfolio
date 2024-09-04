import { Request, Response } from "express";
import Blog from "../models/Blog";

// Create a new blog post
export const createBlog = async (req: Request, res: Response) => {
  const { title, content } = req.body;

  try {
    const newBlog = new Blog({ title, content });
    const savedBlog = await newBlog.save();
    res.status(201).json(savedBlog);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Failed to create blog post: ${JSON.stringify(err)}` });
  }
};

// Get all blog posts
export const getBlogs = async (_: Request, res: Response) => {
  try {
    const blogs = await Blog.find();
    res.status(200).json(blogs);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to fetch blog posts: ${JSON.stringify(err)}` });
  }
};

// Get a single blog post
export const getBlogById = async (req: Request, res: Response) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (blog) res.status(200).json(blog);
    else res.status(404).json({ message: "Blog not found" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to fetch blog post: ${JSON.stringify(err)}` });
  }
};

// Update a blog post
export const updateBlog = async (req: Request, res: Response) => {
  try {
    const updatedBlog = await Blog.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    if (updatedBlog) res.status(201).json(updatedBlog);
    else res.status(404).json;
  } catch (err) {
    res
      .status(400)
      .json({ message: `Failed to update blog post: ${JSON.stringify(err)}` });
  }
};

export const deleteBlog = async (req: Request, res: Response) => {
  try {
    const deletedBlog = await Blog.findByIdAndDelete(req.params.id);
    if (deletedBlog) res.status(200).json({ message: "Blog deleted" });
    else res.status(404).json({ message: "Blog not found" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to delete blog post: ${JSON.stringify(err)}` });
  }
};
