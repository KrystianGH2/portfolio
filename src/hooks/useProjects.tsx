import { useState, useEffect } from "react";
import type { Project } from "../types/types";

const API_BASE =
  import.meta.env.VITE_API_BASE_URL || "https://portfolio-j42o.onrender.com";
function useProjects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState("");

  useEffect(() => {
    const fetchProjects = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`${API_BASE}/api/projects`);
        console.log(res);

        if (!res.ok) {
          setIsError(res.statusText || "Failed to fetch projects.");
        }
        const data = await res.json();
        setProjects(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, isLoading, isError };
}

export default useProjects;
