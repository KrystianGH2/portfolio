import Form from "@/components/Form";
import DashboardComponent from "@/components/Dashboard";
function Dashboard() {
  return (
    <div className="w-full m-auto max-w-7xl">
      <h1 className="text-center">Dashboard Page</h1>
      <DashboardComponent />
      <Form />
    </div>
  );
}

export default Dashboard;
