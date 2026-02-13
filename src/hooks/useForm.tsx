import React from "react";
import { useState } from "react";
import {
  contactFormSchema,
  type ContactFormTypes,
} from "@/validation/projectSchema";
import z from "zod";

type TreeError = {
  errors: string[];
  properties?: {
    name?: { errors: string[] };
    email?: { errors: string[] };
    subject?: { errors: string[] };
    message?: { errors: string[] };
  };
};

function useForm() {
  const [messageData, setMessageData] = useState("");
  const [errorMessage, setErrorMessage] = useState<TreeError | null>(null);
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);
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
    setIsSent(false);
  };

  const handleOnSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = contactFormSchema.safeParse({
      ...formData,
      message: messageData,
    });

    if (!result.success) {
      const fieldErrors = z.treeifyError(result.error) as TreeError;
      setErrorMessage(fieldErrors);
      return;
    }

    console.log("Valid submit:", result.data);

    try {
      setIsSending(true);

      const options = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(result.data),
      };

      const res = await fetch("https://formspree.io/f/xaqdyaod", options);
      if (!res.ok) {
        throw new Error("Failed to send message");
      }

      setIsSent(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      setMessageData("");
    } catch (error) {
      setSendError(
        error instanceof Error ? error.message : "Something Went wrong",
      );
    } finally {
      setIsSending(false);
    }
  };
  return {
    formData,
    messageData,
    errorMessage,
    messageDataChange,
    handleChange,
    handleOnSubmit,
    isSending,
    isSent,
    sendError,
  };
}

export default useForm;
