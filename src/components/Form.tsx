"use client";
import React from "react";
import useCreateProject from "@/hooks/useCreateProject";

import { Input } from "@/components/ui/input";
import { Button } from "./ui/button";

function Form() {
  const { handleOnChange, handleOnSubmit, formData } = useCreateProject();
  return (
    <div className="">
      <form onSubmit={handleOnSubmit} className=" w-full">
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Title</label>
          <Input
            onChange={handleOnChange}
            name="title"
            value={formData.title}
            type="text"
          />
        </div>
        <div className="flex flex-col gap-2 justify-baseline items-start">
          <label> Description</label>
          <Input
            onChange={handleOnChange}
            name="description"
            value={formData.description}
            type="text"
          />
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

        <Button className="hover:text-accent hover:bg-accent" type="submit">
          Create
        </Button>
      </form>
    </div>
  );
}

export default Form;
