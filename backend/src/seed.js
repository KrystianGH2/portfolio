import { connectDB } from "./db.js";
import { Project } from "./models/project.js";

export async function seed() {
  await connectDB();

  try {
    const created = await Project.create({
      title: "Portfolio v1",
      description: "Clean Node + Mongoose setup",
      tech: ["Node.js", "MongoDB", "Mongoose"],
    });

    console.log("✅ Inserted:", created._id.toString());

    const all = await Project.find().sort({ createdAt: -1 }).lean();
    console.log("📦 Projects:", all.length);
    console.log(all);


    // 
    process.exit(0);
  } catch (e) {
    console.error("Seed failed", e);
  }
}
