"use client";
import useCreateProject from "@/hooks/useCreateProject";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";
import { Textarea } from "@/components/ui/textarea";

function Form() {
  const { handleOnChange, handleOnSubmit, formData, handleTextArea, textArea } =
    useCreateProject();
  return (
    <Card className="w-full m-auto sm:max-w-md p-8">
      <h1 className="">Create project</h1>
      <form className="flex flex-col gap-3" onSubmit={handleOnSubmit}>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Title</label>
          <Input
            onChange={handleOnChange}
            name="title"
            value={formData.title}
            type="text"
          />
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
            {formData.description.length} / 100 characters
          </span>
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Image Url</label>
          <Input
            onChange={handleOnChange}
            name="imageUrl"
            value={formData.imageUrl}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Tech</label>
          <Input
            onChange={handleOnChange}
            name="tech"
            value={formData.tech}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Live Url</label>
          <Input
            onChange={handleOnChange}
            name="liveUrl"
            value={formData.liveUrl}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Repo Url</label>
          <Input
            onChange={handleOnChange}
            name="repoUrl"
            value={formData.repoUrl}
            type="text"
          />
        </div>

        <Button
          className="hover:text-accent hover:cursor-pointer mt-5"
          type="submit"
        >
          Create
        </Button>
      </form>
    </Card>
  );
}

export default Form;
