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
            <Loading width={"40"} height={"50"} length={3} />
          </div>
        ) : (
          projects.map((item: ProjectTypes, index: number) => {
            return (
              <Card key={index} className="flex flex-col h-full">
                <img
                  className="w-full object-cover h-50"
                  src={item?.imageUrl}
                  alt={`${item.title} image`}
                />

                <div className="flex flex-col flex-1 px-6 py-4">
                  <h1 className="font-medium tracking-wide">{item.title}</h1>

                  <p className="mt-2 flex-1 text-sm">{item.description}</p>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-2 py-1 bg-gray-200 rounded-md"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>
            );
          })
        )}
      </section>
    </main>
  );
}

export default Projects;
