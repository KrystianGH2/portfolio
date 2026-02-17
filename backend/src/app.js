import express from "express";
import { connectDB } from "./db.js";
import { Project } from "./models/project.js";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();
app.use(express.json(), cookieParser());

app.use(
  cors({
    origin: [
      "http://localhost:5173",
      "https://portfolio-roan-xi-45.vercel.app",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);

const ADMIN_COOKIE = "admin_auth";

function requireAdmin(req, res, next) {
  if (req.cookies?.[ADMIN_COOKIE === "1"]) return next();
  return res.status(401).json({ message: "Unauthorized" });
}

app.post("/api/admin/login", (req, res) => {
  const { password } = req.body;

  if (password !== process.env.ADMIN_PASSWORD) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  res.cookies(ADMIN_COOKIE, "1", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 1000 * 60 * 60 * 24 * 7,
  });

  req.json({ ok: true });
});

app.post("/api/admin/logout", (req, res) => {
  res.clearCookie(ADMIN_COOKIE);
  res.json({ ok: true });
});

app.get("/api/admin/me", (req, res) => {
  if (req.cookies?.[ADMIN_COOKIE] !== "1")
    return res.status(401).json({ ok: false });
});

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

app.post("/api/projects", requireAdmin, async (req, res) => {
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

app.put("/api/projects/:id", requireAdmin, async (req, res) => {
  const { id } = req.params;

  try {
    await connectDB();

    const updatedProject = await Project.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedProject) {
      return res.status(404).json({ message: "Project not found" });
    }

    res.json(updatedProject);
  } catch (err) {
    res.status(500).json({
      message: "Server Error",
      details: String(err),
    });
  }
});

app.delete("/api/projects/:id", requireAdmin, async (req, res) => {
  try {
    await connectDB();

    const { id } = req.params;

    const deleteProject = await Project.findByIdAndDelete(id);

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
