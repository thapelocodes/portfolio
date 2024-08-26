import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  image: { type: String },
  githubLink: { type: String },
  liveLink: { type: String },
  techStack: { type: Array },
  dateDeployed: { type: Date },
});

const Project = mongoose.model("Project", projectSchema);
export default Project;
