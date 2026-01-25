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

app.use((req, res) => {
  console.log(req);
  res.status(404).json({
    message: "Endpoint not found",
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`API running on http://localhost:${PORT}`));
