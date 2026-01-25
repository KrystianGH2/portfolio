import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    description: { type: String, default: "" },
    tech: [{ type: String, trim: true }],
    repoUrl: { type: String, default: "" },
    liveUrl: { type: String, default: "" },
  },
  { timestamps: true },
);

export const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
