"use client";
import useCreateProject from "@/hooks/useCreateProject";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";
import { useParams } from "react-router-dom";

function Form() {
  const { id } = useParams();
  const isEdit = Boolean(id);
  const {
    handleOnChange,
    handleOnSubmit,
    formData,
    handleTextArea,
    textArea,
    errorMessage,
  } = useCreateProject();

  const title = errorMessage?.properties?.title?.errors?.[0];
  const description = errorMessage?.properties?.description?.errors?.[0];
  const imageUrl = errorMessage?.properties?.imageUrl?.errors?.[0];
  const tech = errorMessage?.properties?.tech?.errors?.[0];
  const repoUrl = errorMessage?.properties?.repoUrl?.errors?.[0];
  const liveUrl = errorMessage?.properties?.liveUrl?.errors?.[0];

  return (
    <Card className="w-full m-auto sm:max-w-md p-8">
      <h1 className="">{isEdit ? "Update Project" : "Create Project"}</h1>
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => handleOnSubmit(e, id)}
      >
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Title</label>
          <Input
            onChange={handleOnChange}
            name="title"
            value={formData.title}
            type="text"
          />
          {title && <p className="text-red-500 text-xs">{title}</p>}
        </div>
        <div className="flex flex-col relative gap-2 justify-baseline items-start">
          <label> Description</label>
          <Textarea
            className="h-30 align-text-top"
            onChange={handleTextArea}
            name="description"
            value={textArea}
          />
          <span className="text-gray-400 font-medium text-sm absolute left-2 bottom-2">
            {textArea.length} / 100 characters
          </span>
        </div>
        {description && <p className="text-red-500 text-xs">{description}</p>}
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Image Url</label>
          <Input
            onChange={handleOnChange}
            name="imageUrl"
            value={formData.imageUrl}
            type="text"
          />
          {imageUrl && <p className="text-red-500 text-xs">{imageUrl}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Tech</label>
          <Input
            onChange={handleOnChange}
            name="tech"
            value={formData.tech}
            type="text"
          />
          {tech && <p className="text-red-500 text-xs">{tech}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Live Url</label>
          <Input
            onChange={handleOnChange}
            name="liveUrl"
            value={formData.liveUrl}
            type="text"
          />
          {liveUrl && <p className="text-red-500 text-xs">{liveUrl}</p>}
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Repo Url</label>
          <Input
            onChange={handleOnChange}
            name="repoUrl"
            value={formData.repoUrl}
            type="text"
          />
          {repoUrl && <p className="text-red-500 text-xs">{repoUrl}</p>}
        </div>

        <Button
          className="hover:text-accent hover:cursor-pointer mt-5"
          type="submit"
        >
          {isEdit ? "Update" : "Create"}
        </Button>
      </form>
    </Card>
  );
}

export default Form;
