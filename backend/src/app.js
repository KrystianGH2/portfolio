import express from "express";
import { connectDB } from "./db.js";
import { Project } from "./models/project.js";

const app = express();
app.use(express.json());

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

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
