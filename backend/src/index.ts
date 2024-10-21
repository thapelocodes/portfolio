import express, { Request, Response } from "express";
import cors from "cors";
import connectDB from "./config/db";
import dotenv from "dotenv";
import blogRoutes from "./routes/blogRoutes";
import projectRoutes from "./routes/projectRoutes";
import messageRoutes from "./routes/messageRoutes";

dotenv.config();

const app = express();
const PORT = process.env.PORT;

connectDB();

app.use(
  cors({
    origin: [
      "http://localhost:3000",
      "http://localhost:3001",
      process.env.FRONTEND_URL_VERCEL as string,
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
app.use("/api/contacts", messageRoutes);
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
