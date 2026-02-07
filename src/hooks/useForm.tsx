import React from "react";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormTypes,
} from "@/validation/projectSchema";
import z from "zod";

type TreeError = ReturnType<typeof z.treeifyError>;

function useForm() {
  const [messageData, setMessageData] = useState("");
  const [errorMessage, setErrorMessage] = useState<TreeError | null>(null);
  const [formData, setFormData] = useState<ContactFormTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const messageDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const data = e.target.value;
    setMessageData(data);
    setErrorMessage(null);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      message: messageData,
      [name]: value,
    }));
    setErrorMessage(null);
  };

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse({
      ...formData,
      message: messageData,
    });

    if (!result.success) {
      const fieldErrors = z.treeifyError(result.error);
      setErrorMessage(fieldErrors);
      return;
    }

    console.log("Valid submit:", result.data);
  };
  return {
    formData,
    messageData,
    errorMessage,
    messageDataChange,
    handleChange,
    handleOnSubmit,
  };
}

export default useForm;
