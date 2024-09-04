"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const projectController_1 = require("../controllers/projectController");
const router = express_1.default.Router();
router.route("/").post(projectController_1.createProject).get(projectController_1.getProjects);
router
    .route("/:id")
    .get(projectController_1.getProjectById)
    .put(projectController_1.updateProject)
    .delete(projectController_1.deleteProject);
exports.default = router;
