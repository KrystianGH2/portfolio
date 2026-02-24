import { auth } from "./authService";
import type { ProjectTypes } from "@/validation/projectSchema";

export async function createProjects(payload: ProjectTypes) {
  return auth("/api/projects", {
    method: "POST",
    body: JSON.stringify(payload),
  });
}

export async function updateProject(payload: ProjectTypes, id: string) {
  return auth(`/api/projects/${id}`, {
    method: "PUT",
    body: JSON.stringify(payload),
  });
}

export async function getProjectById(id: string) {
  return auth(`/api/projects/${id}`, { method: "GET" });
}

export function deleteProject(id: string) {
  return auth(`/api/projects/${id}`, { method: "DELETE" });
}

export async function logout() {
  return auth("/api/admin/logout", { method: "POST" });
}
