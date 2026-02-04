"use client";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import useForm from "@/hooks/useForm";

function ContactForm() {
  const { formData, messageData, messageDataChange, handleChange } = useForm();
  return (
    <div id="contact" className="m-auto  py-20 max-w-6xl">
      <form className="flex flex-col border rounded-2xl p-8 justify-center items-center">
        <section className="w-full max-w-xl">
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Title</label>
            <Input
              onChange={handleChange}
              name="title"
              value={formData.name}
              type="text"
              placeholder="Your name"
            />
          </div>
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Email</label>
            <Input
              onChange={handleChange}
              name="title"
              value={formData.email}
              type="text"
              placeholder="your@email.com"
            />
          </div>{" "}
        </section>
        <section className="w-full max-w-xl">
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Subject</label>
            <Input
              onChange={handleChange}
              name="title"
              value={formData.subject}
              type="text"
              placeholder="Project inquiry"
            />
          </div>
          <div className="flex flex-col gap-2 justify-baseline items-start">
            <label>Message</label>
            <Textarea
              onChange={messageDataChange}
              name="title"
              value={messageData}
              placeholder="Tell me about your project..."
            />
          </div>{" "}
        </section>
      </form>
    </div>
  );
}

export default ContactForm;
