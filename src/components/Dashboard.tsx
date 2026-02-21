import { useState } from "react";
import useProjects from "@/hooks/useProjects";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";
import Loading from "./Loading";
import { useDeleteProject } from "@/hooks/useDeleteProject";

function DashboardComponent() {
  const { projects, isLoading } = useProjects();
  const { handleDelete } = useDeleteProject();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-6xl w-full  lg:w-1/2 ">
      <h1 className="font-bold text-3xl tracking-wide">My Projects</h1>

      <section className="grid grid-cols-1">
        {" "}
        {isLoading ? (
          <Loading width={"50"} height={"10"} length={4} />
        ) : (
          projects.map((item) => (
            <Card
              key={item._id}
              onClick={() => setSelected(item._id)}
              className={`p-4 transition w-full relative ${
                selected === item._id ? "border-blue-500" : "border"
              } my-2`}
            >
              <Link to={item._id}>
                <h2>{item.title}</h2>
              </Link>

              <button
                type="button"
                onClick={() => handleDelete(item._id)}
                className="absolute right-5 top-4"
              >
                Delete
              </button>
            </Card>
          ))
        )}
      </section>
    </div>
  );
}

export default DashboardComponent;
