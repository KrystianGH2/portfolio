import { useState, useEffect } from "react";
import type { ProjectTypes } from "../types/types";

function useProjects() {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const API_BASE =
    import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, [API_BASE]);

  return { projects, isLoading };
}

export default useProjects;
