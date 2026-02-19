import DashboardComponent from "@/components/Dashboard";
import { Outlet } from "react-router-dom";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/authService";
function Dashboard() {
  const nav = useNavigate();

  useEffect(() => {
    (async () => {
      const res = await auth("/api/admin/me");
      if (!res.ok) nav("/admin/login");
    })();
  }, [nav]);
  return (
    <div className="w-full m-auto max-w-6xl px-5">
      <h1 className="text-baseline font-bold text-3xl py-5 m-auto tracking-wide">
        Dashboard Page
      </h1>
      <div className="flex flex-col lg:flex-row  gap-8">
        <DashboardComponent />
        <Outlet />
      </div>
    </div>
  );
}

export default Dashboard;
