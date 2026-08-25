import useProjects from "@/hooks/useProjects";
import type { ProjectTypes } from "@/validation/projectSchema";
import { Card } from "./ui/card";
import Loading from "./Loading";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import Error from "./ui/Error";

function Projects() {
  const { projects, isLoading, isError } = useProjects();

  if (!projects)
    return <Error message={isError || "Failed to fetch projects."} />;

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
              <Card
                key={index}
                className="flex flex-col h-full relative group overflow-hidden"
              >
                <img
                  className="w-full object-cover h-50 transition-transform duration-300 group-hover:scale-105"
                  src={item?.imageUrl}
                  alt={`${item.title} image`}
                />

                <div
                  className="absolute inset-0 bg-black/10 
               opacity-0 group-hover:opacity-100 
               transition-opacity duration-300"
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

                <div
                  className="absolute inset-0 flex items-center justify-center 
               opacity-0 group-hover:opacity-100 
               transition-all duration-300 z-10"
                >
                  <div className="flex gap-5">
                    <Link target="_blank" to={item.liveUrl}>
                      <Button>Live Url</Button>
                    </Link>
                    <Link target="_blank" to={item.repoUrl}>
                      <Button>Repo Url</Button>
                    </Link>
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
