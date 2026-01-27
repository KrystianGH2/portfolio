import type { ProjectTypes } from "../types/types";

export async function createProjects(payload: ProjectTypes) {
  const baseUrl =
    import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const res = await fetch(`${baseUrl}/api/projects`, options);
    if (!res.ok) {
      throw new Error("Failed creating data");
    }

    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed creating project.", error);
    }
  }
}
