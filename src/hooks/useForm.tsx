import React from "react";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormTypes,
} from "@/validation/projectSchema";
import z from "zod";

function useForm() {
  const [messageData, setMessageData] = useState("");
  const [errorMessage, setErrorMessage] = useState({});
  const [formData, setFormData] = useState<ContactFormTypes>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const messageDataChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const data = e.target.value;
    setMessageData(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData((prev) => ({
      ...prev,
      message: messageData,
      [name]: value,
    }));
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const result = contactFormSchema.safeParse({
        ...formData,
        message: messageData,
      });

      if (!result.success) {
        setErrorMessage(result.error.issues);
        console.log("Error message", result.error.issues);
      }

      console.log(result);
    } catch (error) {
      if (error instanceof z.ZodError) {
        console.log("Validation Fail", error.issues);
      }
    }
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
