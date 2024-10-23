import express from "express";
import {
  createBlog,
  getBlogs,
  getBlogById,
  updateBlog,
  deleteBlog,
} from "../controllers/blogController";
import { authenticateAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(authenticateAdmin, createBlog).get(getBlogs);
router
  .route("/:id")
  .get(getBlogById)
  .put(authenticateAdmin, updateBlog)
  .delete(authenticateAdmin, deleteBlog);

export default router;
