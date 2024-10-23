import express from "express";
import {
  createProject,
  getProjects,
  getProjectById,
  updateProject,
  deleteProject,
} from "../controllers/projectController";
import { authenticateAdmin } from "../middleware/authMiddleware";

const router = express.Router();

router.route("/").post(authenticateAdmin, createProject).get(getProjects);
router
  .route("/:id")
  .get(getProjectById)
  .put(authenticateAdmin, updateProject)
  .delete(authenticateAdmin, deleteProject);

export default router;
