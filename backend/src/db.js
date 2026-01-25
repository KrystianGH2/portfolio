import mongoose from "mongoose";
import dotenv from "dotenv";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Load backend/.env explicitly (because you run nodemon from repo root)
dotenv.config({ path: path.join(__dirname, "../.env") });

let isConnected = false;

export async function connectDB() {
  if (isConnected) return mongoose.connection;

  const uri = process.env.MONGODB_URI;
  if (!uri) throw new Error("Missing MONGODB_URI in backend/.env");

  try {
    await mongoose.connect(uri, {
      dbName: process.env.DB_NAME || "mydb",
    });

    isConnected = true;
    console.log("✅ MongoDB connected (Mongoose)");
    return mongoose.connection;
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  }
}
