import type { ProjectTypes } from "@/validation/projectSchema";
const baseUrl =
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";

export async function createProjects(payload: ProjectTypes) {
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

export async function updateProject(payload: ProjectTypes, id: string) {
  const options = {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  };
  try {
    const res = await fetch(`${baseUrl}/api/projects/${id}`, options);
    if (!res.ok) {
      throw new Error("Failed updating data");
    }

    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed updating project.", error);
    }
  }
}

export async function getProjectById(id: string) {
  const options = {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const res = await fetch(`${baseUrl}/api/projects/${id}`, options);
    if (!res.ok) {
      throw new Error("Failed fetching data");
    }

    return res;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error("Failed fetching project.", error);
    }
  }
}
