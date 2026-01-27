import { useState, useEffect } from "react";
import type { ProjectTypes } from "../types/types";

function useProjects() {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/projects`,
        );
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjects();
  }, []);

  return { projects };
}

export default useProjects;
