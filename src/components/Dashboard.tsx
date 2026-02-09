import useProjects from "@/hooks/useProjects";
import { Card } from "./ui/card";

function DashboardComponent() {
  const { projects } = useProjects();
  return (
    <div className="max-w-6xl m-auto">
      {projects.map((item) => (
        <Card className="p-4" key={item._id}>
          <h2>{item.title}</h2>
        </Card>
      ))}
    </div>
  );
}

export default DashboardComponent;
