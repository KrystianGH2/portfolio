import type { ProjectTypes } from "../types/types";

interface PayloadType {
  payload: ProjectTypes;
}
export async function createProjects(payload: PayloadType) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json", 
    },
    body: JSON.stringify(payload),
  };
  try {
    const res = await fetch("/api/projects", options);
    if (!res.ok) {
      throw new Error("Something went wrong");
    }

    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed creating project.", error);
    }
  }
}
