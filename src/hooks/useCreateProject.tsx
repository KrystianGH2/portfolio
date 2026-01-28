import { useState } from "react";
import { createProjects } from "../services/projectService";
import type { ProjectTypes } from "@/validation/projectSchema";
import { projectSchema } from "@/validation/projectSchema";

function useCreateProject() {
  const [formData, setFormData] = useState<ProjectTypes>({
    title: "",
    description: "",
    imageUrl: "",
    tech: [],
    repoUrl: "",
    liveUrl: "",
  });

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target; // Gets the name and value from the input element

    // Split by comma and removes whitespaces
    const techArr = value.split(",").map((item) => item.trim());

    // uses the prev state, spread its properties and update specific fields
    setFormData((prevState) => ({
      ...prevState,
      [name]: name === "tech" ? techArr : value.trim(), //uses bracket notation to update the correct name
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = projectSchema.safeParse(formData);
    if (!result.success) {
      return result.error;
    }
    try {
      const res = await createProjects(result.data);

      if (!res) {
        throw new Error("Failed creating data at ./useCreateProject");
      }

      return res;
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
      }
    }
  };

  return { handleOnChange, setFormData, formData, handleOnSubmit };
}

export default useCreateProject;
