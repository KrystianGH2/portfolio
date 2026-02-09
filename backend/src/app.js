import express from "express";
import { connectDB } from "./db.js";
import { Project } from "./models/project.js";
import cors from "cors";

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-roan-xi-45.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
  }),
);

app.get("/api/projects", async (req, res) => {
  try {
    await connectDB();

    const projects = await Project.find().sort({ createdAt: -1 }).lean();

    res.json(projects);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      details: String(err),
    });
  }
});

app.post("/api/projects", async (req, res) => {
  try {
    await connectDB();
    const created = await Project.create(req.body);
    res.status(201).json(created.toObject());
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Internal Error", details: String(error) });
  }
});

app.get("/api/projects/:id", async (req, res) => {
  const { id } = req.params;
  try {
    await connectDB();

    const projectById = await Project.findById(id).lean();

    if (!projectById) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(projectById);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      details: String(err),
    });
  }
});

app.delete("api/projects/:id", async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    const deleteProject = Project.findByIdAndDelete(id);

    if (!deleteProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json({ message: "Project deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Server Internal Error", details: String(error) });
  }
});

app.use((req, res) => {
  console.log(req);
  res.status(404).json({
    message: "Endpoint not found",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
