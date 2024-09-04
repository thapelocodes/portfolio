"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteProject = exports.updateProject = exports.getProjectById = exports.getProjects = exports.createProject = void 0;
const Project_1 = __importDefault(require("../models/Project"));
// Create a new project
const createProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { name, description, image, githubLink, liveLink, techStack, dateDeployed, } = req.body;
    try {
        const newProject = new Project_1.default({
            name,
            description,
            image,
            githubLink,
            liveLink,
            techStack,
            dateDeployed,
        });
        const savedProject = yield newProject.save();
        res.status(201).json(savedProject);
    }
    catch (err) {
        res
            .status(400)
            .json({ message: `Failed to create project: ${JSON.stringify(err)}` });
    }
});
exports.createProject = createProject;
// Get all projects
const getProjects = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const projects = yield Project_1.default.find();
        res.status(200).json(projects);
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to fetch projects: ${JSON.stringify(err)}` });
    }
});
exports.getProjects = getProjects;
// Get a single project
const getProjectById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const project = yield Project_1.default.findById(req.params.id);
        if (project)
            res.status(200).json(project);
        else
            res.status(404).json({ message: "Project not found" });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to fetch project: ${JSON.stringify(err)}` });
    }
});
exports.getProjectById = getProjectById;
// Update a project
const updateProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const updatedProject = yield Project_1.default.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
        });
        if (updatedProject)
            res.status(201).json(updatedProject);
        else
            res.status(404).json({ message: "Project not found" });
    }
    catch (err) {
        res
            .status(400)
            .json({ message: `Failed to update project: ${JSON.stringify(err)}` });
    }
});
exports.updateProject = updateProject;
// Delete a project
const deleteProject = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const deletedProject = yield Project_1.default.findByIdAndDelete(req.params.id);
        if (deletedProject)
            res.status(200).json({ message: "Project deleted" });
        else
            res.status(404).json({ message: "Project not found" });
    }
    catch (err) {
        res
            .status(500)
            .json({ message: `Failed to delete project: ${JSON.stringify(err)}` });
    }
});
exports.deleteProject = deleteProject;
