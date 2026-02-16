import { useState } from "react";
import useProjects from "@/hooks/useProjects";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

function DashboardComponent() {
  const { projects } = useProjects();
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <div className="max-w-6xl w-full  lg:w-1/2 ">
      <h1 className="font-bold text-3xl tracking-wide">My Projects</h1>

      <section className="grid grid-cols-1">
        {projects.map((item) => (
          <Card
            key={item._id}
            onClick={() => setSelected(item._id)}
            className={`p-4 transition w-full relative ${
              selected === item._id ? "border-blue-500" : "border"
            }  my-2 `}
          >
            <Link to={item._id}>
              <h2>{item.title}</h2>
            </Link>
            <span
              className={` ${
                selected === item._id
                  ? "block w-3 h-3 rounded-full bg-black "
                  : ""
              } absolute right-5 top-5.5 animate-pulse `}
            ></span>
          </Card>
        ))}
      </section>
    </div>
  );
}

export default DashboardComponent;
