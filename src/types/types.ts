export interface Project {
  _id: string;
  title: string;
  description: string;
  imageUrl: string;
  tech: string[];
  repoUrl: string;
  liveUrl: string;
  createdAt?: string;
  updatedAt?: string;
}

export type ProjectErrors = {
  errors: string[];
  properties?: {
    title?: { errors: string[] };
    description?: { errors: string[] };
    imageUrl?: { errors: string[] };
    tech?: { errors: string[] };
    repoUrl?: { errors: string[] };
    liveUrl?: { errors: string[] };
  };
};

export type TreeError = {
  errors: string[];
  properties?: {
    name?: { errors: string[] };
    email?: { errors: string[] };
    subject?: { errors: string[] };
    message?: { errors: string[] };
  };
};