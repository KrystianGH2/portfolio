import { useState, useEffect } from "react";

interface ProjectTypes {
  title: string;
  description: string;
  tech: string[];
  repoUrl: string;
  liveUrl: string;
}

function useProjects() {
  const [projects, setProjects] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch("/api/projects");
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
