import { z } from "zod";
export const projectSchema = z.object({
  title: z.string().min(1, "Title is required"),
  description: z.string().min(1, "Description is required"),
  imageUrl: z.string().min(1, "Image URL must be a valid URL"),
  tech: z.array(z.string().min(1).min(1, "Add at least one tech")),
  repoUrl: z.string().url("Repo URL must be a valid URL"),
  liveUrl: z.string().url("Live URL must be a valid URL"),
});

// Tuns this schema into a TS type
export type ProjectTypes = z.infer<typeof projectSchema>;

export const contactFormSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.email().min(1, "Enter a valid email."),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(1, "Message must be at least 10 characters"),
});

export type ContactFormTypes = z.infer<typeof contactFormSchema>;
