import express from "express";
import { connectDB } from "./db.js";
import { Project } from "./models/project.js";

const app = express();
app.use(express.json());

app.get("api/projects", async (req, res) => {
  try {
    await connectDB();
    const projects = Project.find().sort({ createdAt: -1 }).lean();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: "Server Error", details: String(error) });
  }
});
