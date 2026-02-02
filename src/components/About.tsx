import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeBlock from "./CodeBlock";

const experienceCard = [
  { name: "2+ Years Learning", desc: "Front-end Development" },
  { name: "5+ Projects Built", desc: "Web Applications" },
  { name: "React Focused", desc: "User Interface Development" },
];

const mappedCards = experienceCard.map((item) => {
  return (
    <section className="text-center border p-4 md:text-2xl" key={item.name}>
      <CardContent>{item.name}</CardContent>
      <CardDescription>{item.desc}</CardDescription>
    </section>
  );
});

function About() {
  return (
    <div id="#about">
      <Card className="flex justify-center items-center lg:flex-row max-w-6xl">
        <section className=" basis-1/2">
          <CardHeader className="pl-">About me</CardHeader>
          <CardHeader>
            <CardTitle className="font-bold tracking-wide text-5xl">
              Crafting Code with Purpose
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription className="mt-5">
              I’m a junior Front-End Developer with two years of hands-on
              experience through projects and continuous learning, building
              modern and responsive web applications. I focus on creating
              user-friendly interfaces with React and writing clean,
              maintainable code.
              <p>
                I'm passionate about learning new technologies and continuously
                improving both my technical and personal skills.
              </p>
            </CardDescription>
            <div className="flex justify-between mt-5 flex-row p-4 md:p-0 gap-4">
              {mappedCards}
            </div>
          </CardContent>
        </section>
        <section className="w-full sm:basis-1/2">
          <CodeBlock />
        </section>
      </Card>
    </div>
  );
}

export default About;
