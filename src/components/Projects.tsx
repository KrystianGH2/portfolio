import useProjects from "@/hooks/useProjects";
import type { ProjectTypes } from "@/validation/projectSchema";
import { Card } from "./ui/card";
import Loading from "./Loading";

function Projects() {
  const { projects, isLoading } = useProjects();

  return (
    <main id="projects" className="pt-36 m-auto w-full max-w-6xl px-6 lg:px-0">
      <section className="flex flex-col justify-center items-center gap-3">
        <span className="text-xs font-medium tracking-wide">PORTFOLIO</span>
        <h1 className="font-bold text-3xl tracking-wide">Featured Projects</h1>
      </section>
      <section className="pt-15 gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {isLoading ? (
          <div className="col-span-full">
            <Loading width={"40"} height={"50"} />
          </div>
        ) : (
          projects.map((item: ProjectTypes, index: number) => {
            return (
              <Card
                className="flex flex-col p-6 items-start justify-center"
                key={index}
              >
                <img
                  className="w-full object-cover h-50"
                  src={item?.imageUrl}
                  alt={`${item.title} image`}
                />
                <h1>{item.title}</h1>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Projects;
