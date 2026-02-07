"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import useForm from "@/hooks/useForm";

function ContactForm() {
  const {
    formData,
    messageData,
    messageDataChange,
    handleChange,
    handleOnSubmit,
    errorMessage,
  } = useForm();

  const nameErr = errorMessage?.properties?.name?.errors?.[0];
  const emailErr = errorMessage?.properties?.email?.errors?.[0];
  const subjectErr = errorMessage?.properties?.subject?.errors?.[0];
  const messageErr = errorMessage?.properties?.message?.errors?.[0];

  return (
    <div id="contact" className="m-auto  py-15 max-w-6xl">
      <form
        onSubmit={handleOnSubmit}
        className="flex flex-col border rounded-2xl p-8 justify-center items-center"
      >
        <section className="w-full max-w-xl">
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Title</label>
            <Input
              onChange={handleChange}
              name="name"
              value={formData.name}
              type="text"
              placeholder="Your name"
            />
            {nameErr && <p className="text-red-500 text-xs">{nameErr}</p>}
          </div>
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Email</label>
            <Input
              onChange={handleChange}
              name="email"
              value={formData.email}
              type="text"
              placeholder="your@email.com"
            />
            {emailErr && <p className="text-red-500 text-xs">{emailErr}</p>}
          </div>{" "}
        </section>
        <section className="w-full max-w-xl">
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Subject</label>
            <Input
              onChange={handleChange}
              name="subject"
              value={formData.subject}
              type="text"
              placeholder="Project inquiry"
            />
            {subjectErr && <p className="text-red-500 text-xs">{subjectErr}</p>}
          </div>
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Message</label>
            <Textarea
              onChange={messageDataChange}
              name="message"
              value={messageData}
              placeholder="Tell me about your project..."
            />
          </div>{" "}
          {messageErr && <p className="text-red-500 text-xs">{messageErr}</p>}
        </section>

        <Button className="mt-10" type="submit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default ContactForm;
