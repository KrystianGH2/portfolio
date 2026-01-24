import { connectDB } from "./db.js";

async function main() {
  await connectDB();
  console.log("Ready.");
}

main();
