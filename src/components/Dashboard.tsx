import useProjects from "@/hooks/useProjects";
import { Card } from "./ui/card";
import { Link } from "react-router-dom";

function DashboardComponent() {
  const { projects } = useProjects();
  return (
    <div className="max-w-6xl m-auto">
      <h1>My Projects</h1>
      {projects.map((item) => (
        <Card className="p-4" key={item._id}>
          <Link to={`/admin/dashboard/${item._id}`}>
            <h2>{item.title}</h2>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default DashboardComponent;
