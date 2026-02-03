import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import CodeBlock from "./CodeBlock";

const experienceCard = [
  { name: "2+", desc: "Years Learning" },
  { name: "5+", desc: "Projects Built" },
  { name: "React", desc: "Focused" },
];

const mappedCards = experienceCard.map((item) => {
  return (
    <section
      className="text-center border rounded-md p-4 md:text-xl"
      key={item.name}
    >
      <CardContent className="font-medium">{item.name}</CardContent>
      <CardDescription>{item.desc}</CardDescription>
    </section>
  );
});

function About() {
  return (
    <div id="about" className="m-auto max-w-6xl">
      <Card className="flex justify-center lg:justify-between border-none  shadow-none items-center lg:flex-row max-w-6xl">
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
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-3">
              {mappedCards}
            </div>
          </CardContent>
        </section>
        <section className="w-full lg:max-w-125  mt-10 lg:mt-2 relative  sm:basis-1/2">
          <CodeBlock />
          <div
            className="h-full absolute top-0 rounded-2xl z-0 bg-gradient-to-br opacity-50 from-indigo-950/80 to-slate-900/80
    border border-white/10 rotate-4 w-full block shadow-2xl"
          ></div>
        </section>
      </Card>
    </div>
  );
}

export default About;
