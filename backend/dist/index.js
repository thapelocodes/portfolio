"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_1 = __importDefault(require("./config/db"));
const dotenv_1 = __importDefault(require("dotenv"));
const blogRoutes_1 = __importDefault(require("./routes/blogRoutes"));
const projectRoutes_1 = __importDefault(require("./routes/projectRoutes"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT;
(0, db_1.default)();
app.use(express_1.default.json());
app.get("/", (req, res) => {
    res.send("Backend is running!");
});
app.use("/api/blogs", blogRoutes_1.default);
app.use("/api/projects", projectRoutes_1.default);
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
