import ContactForm from "./ContactForm";

function Contact() {
  return (
    <main className="m-auto max-w-6xl text-center py-36 px-6 lg:px-0 ">
      <section className="flex flex-col gap-3">
        <span className="text-xs font-medium tracking-wide">GET IN TOUCH</span>
        <h2 className="font-bold text-3xl">Let's Work Together</h2>
        <p className="max-w-xl m-auto">
          Have a project in mind? I'd love to hear about it. Send me a message
          and let's create something amazing.
        </p>
      </section>
      <section>
        <ContactForm />
      </section>
    </main>
  );
}

export default Contact;
