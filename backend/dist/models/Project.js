"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const projectSchema = new mongoose_1.default.Schema({
    name: { type: String, required: true },
    description: { type: String, required: true },
    image: { type: String },
    githubLink: { type: String },
    liveLink: { type: String },
    techStack: { type: Array },
    dateDeployed: { type: Date },
});
const Project = mongoose_1.default.model("Project", projectSchema);
exports.default = Project;
