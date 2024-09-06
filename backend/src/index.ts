import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes";
import projectRoutes from "./routes/projectRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(
  cors({
    origin: [
      process.env.FRONTEND_URL_RENDER as string,
      process.env.FRONTEND_URL_CUSTOM as string,
    ],
    credentials: true,
  })
);
app.use(express.json());
app.get("/", (req: Request, res: Response) => {
  res.send("Backend is running!");
});
app.use("/api/blogs", blogRoutes);
app.use("/api/projects", projectRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
