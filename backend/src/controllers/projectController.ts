import { Request, Response } from "express";
import Project from "../models/Project";

// Create a new project
export const createProject = async (req: Request, res: Response) => {
  const {
    name,
    description,
    image,
    githubLink,
    liveLink,
    techStack,
    dateDeployed,
  } = req.body;

  try {
    const newProject = new Project({
      name,
      description,
      image,
      githubLink,
      liveLink,
      techStack,
      dateDeployed,
    });
    const savedProject = await newProject.save();
    res.status(201).json(savedProject);
  } catch (err) {
    res
      .status(400)
      .json({ message: `Failed to create project: ${JSON.stringify(err)}` });
  }
};

// Get all projects
export const getProjects = async (_: Request, res: Response) => {
  try {
    const projects = await Project.find();
    res.setHeader(
      "Content-Range",
      `projects 0-${projects.length}/${projects.length}`
    );
    res.status(200).json(projects);
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to fetch projects: ${JSON.stringify(err)}` });
  }
};

// Get a single project
export const getProjectById = async (req: Request, res: Response) => {
  try {
    const project = await Project.findById(req.params.id);
    if (project) res.status(200).json(project);
    else res.status(404).json({ message: "Project not found" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to fetch project: ${JSON.stringify(err)}` });
  }
};

// Update a project
export const updateProject = async (req: Request, res: Response) => {
  try {
    const updatedProject = await Project.findByIdAndUpdate(
      req.params.id,
      req.body,
      {
        new: true,
      }
    );
    if (updatedProject) res.status(201).json(updatedProject);
    else res.status(404).json({ message: "Project not found" });
  } catch (err) {
    res
      .status(400)
      .json({ message: `Failed to update project: ${JSON.stringify(err)}` });
  }
};

// Delete a project
export const deleteProject = async (req: Request, res: Response) => {
  try {
    const deletedProject = await Project.findByIdAndDelete(req.params.id);
    if (deletedProject) res.status(200).json({ message: "Project deleted" });
    else res.status(404).json({ message: "Project not found" });
  } catch (err) {
    res
      .status(500)
      .json({ message: `Failed to delete project: ${JSON.stringify(err)}` });
  }
};
