export interface ProjectTypes {
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
