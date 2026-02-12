import DashboardComponent from "@/components/Dashboard";
import { Outlet } from "react-router-dom";
function Dashboard() {
  return (
    <div className="w-full m-auto max-w-7xl">
      <h1 className="text-center">Dashboard Page</h1>
      <DashboardComponent/>
      <Outlet/>
    </div>
  );
}

export default Dashboard;
