import express from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";

const router = express.Router();

router.route("/").post(createBlog).get(getBlogs);
router.route("/:id").get(getBlogById).put(updateBlog).delete(deleteBlog);
