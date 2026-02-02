import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const experienceCard = [
  { name: "2+ Years Learning", desc: "Front-end Development" },
  { name: "5+ Projects Built", desc: "Web Applications" },
  { name: "React Focused", desc: "User Interface Development" },
];

const mappedCards = experienceCard.map((item) => {
  return (
    <section className="text-center border p-4 text-2xl" key={item.name}>
      <CardContent>{item.name}</CardContent>
      <CardDescription>{item.desc}</CardDescription>
    </section>
  );
});

function About() {
  return (
    <div id="#about">
      <Card className="flex justify-center items-center lg:flex-row">
        <section className=" basis-1/2">
          <CardHeader className="pl-">About me</CardHeader>
          <CardHeader>
            <CardTitle className="font-bold tracking-wide text-5xl">
              Crafting Code with Purpose
            </CardTitle>
          </CardHeader>

          <CardContent>
            <CardDescription>
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
            <div className="flex justify-between flex-row p-4 md:p-0 gap-4">
              {mappedCards}
            </div>
          </CardContent>
        </section>
        <section className="md:basis-1/2">
          <CardContent
            className="
    relative
    rounded-2xl
    bg-gradient-to-br from-indigo-950/80 to-slate-900/80
    border border-white/10
    p-6
    font-mono
    text-sm
    leading-6
    text-slate-200
    shadow-xl
    backdrop-blur-md
  "
          >
            <pre className="space-y-1">
              <div className="text-purple-400">const developer = &#123;</div>

              <div className="pl-4">
                <span className="text-sky-400">name</span>:{" "}
                <span className="text-emerald-400">"Krystian Cruz"</span>,
              </div>

              <div className="pl-4">
                <span className="text-sky-400">role</span>:{" "}
                <span className="text-emerald-400">"Front-End Developer"</span>,
              </div>

              <div className="pl-4">
                <span className="text-sky-400">loves</span>: [
              </div>

              <div className="pl-8 text-emerald-400">"Clean Code",</div>
              <div className="pl-8 text-emerald-400">"Problem Solving",</div>
              <div className="pl-8 text-emerald-400">"Building Products"</div>

              <div className="pl-4">],</div>

              <div className="pl-4">
                <span className="text-sky-400">coffee</span>:{" "}
                <span className="text-orange-400">true</span>,
              </div>

              <div className="text-purple-400">&#125;;</div>
            </pre>
          </CardContent>
        </section>
      </Card>
    </div>
  );
}

export default About;
