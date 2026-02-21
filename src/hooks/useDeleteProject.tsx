import { useState } from "react";
import { deleteProject } from "@/services/projectService";

export function useDeleteProject() {
  const [isDeleting, setIsDeleting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleDelete = async (projectId: string) => {
    try {
      setError(null);
      setIsDeleting(true);
      await deleteProject(projectId);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Delete failed");
      throw e;
    } finally {
      setIsDeleting(false);
    }
  };

  return { handleDelete, isDeleting, error };
}
