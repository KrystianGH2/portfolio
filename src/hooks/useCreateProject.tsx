import { useState, useEffect } from "react";
import { createProjects } from "../services/projectService";
import type { ProjectTypes } from "@/validation/projectSchema";
import { projectSchema } from "@/validation/projectSchema";
import { updateProject } from "../services/projectService";
import { getProjectById } from "../services/projectService";
import { useParams } from "react-router-dom";
import z from "zod";
import type { ProjectErrors } from "@/types/types";



function useCreateProject() {
  const { id } = useParams();
  const [textArea, setTextArea] = useState("");
  const [errorMessage, setErrorMessage] = useState<ProjectErrors | null>(null);
  const [formData, setFormData] = useState<ProjectTypes>({
    title: "",
    description: "",
    imageUrl: "",
    tech: [],
    repoUrl: "",
    liveUrl: "",
  });

  const handleTextArea = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextArea(e.target.value);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Gets the name and value from the input element

    // Split by comma and removes whitespaces
    const techArr = value.split(",").map((item) => item.trim());

    // uses the prev state, spread its properties and update specific fields
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "tech" ? techArr : value, //uses bracket notation to update the correct name
    }));
  };

  useEffect(() => {
    if (!id) {
      setFormData({
        title: "",
        description: "",
        imageUrl: "",
        tech: [],
        repoUrl: "",
        liveUrl: "",
      });
      setTextArea("");
    }

    if (!id) return;
    const load = async () => {
      try {
        const res = await getProjectById(id);
        const project = await res?.json();

        setFormData({
          title: project.title ?? "",
          description: project.description ?? "",
          imageUrl: project.imageUrl ?? "",
          tech: project.tech ?? [],
          repoUrl: project.repoUrl ?? "",
          liveUrl: project.liveUrl ?? "",
        });

        setTextArea(project.description ?? "");
      } catch (error) {
        console.log(error instanceof Error ? error : null);
      }
    };

    load();
  }, [id]);

  const handleOnSubmit = async (
    e: React.FormEvent<HTMLFormElement>,
    id?: string,
  ) => {
    e.preventDefault();
    const result = projectSchema.safeParse({
      ...formData,
      description: textArea,
    });

    if (!result.success) {
      const fieldErrors = z.treeifyError(result.error) as ProjectErrors;
      setErrorMessage(fieldErrors);
      return;
    }

    // Decides create vs update - when id exists
    try {
      if (id) {
        return await updateProject(result.data, id);
      }
      return await createProjects(result.data);
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return {
    handleOnChange,
    handleTextArea,
    setFormData,
    formData,
    handleOnSubmit,
    textArea,
    errorMessage,
  };
}

export default useCreateProject;
