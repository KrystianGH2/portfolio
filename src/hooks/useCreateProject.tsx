import { useState } from "react";
import { createProjects } from "../services/projectService";
import type { ProjectTypes } from "../types/types";

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
      [name]: name === "tech" ? techArr : value, //uses bracket notation to update the correct name
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const createPostReq = async () => {
      try {
        const res = await createProjects(formData);
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
    createPostReq();
  };

  return { handleOnChange, setFormData, formData, handleOnSubmit };
}

export default useCreateProject;
