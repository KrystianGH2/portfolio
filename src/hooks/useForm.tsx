import React from "react";
import { useState } from "react";
import type { ContactFormTypes } from "@/validation/projectSchema";

function useForm() {
  const [messageData, setMessageData] = useState("");
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

  const handleOnSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({ ...formData, message: messageData });
  };
  return {
    formData,
    messageData,
    messageDataChange,
    handleChange,
    handleOnSubmit,
  };
}

export default useForm;
