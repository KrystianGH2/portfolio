import { useNavigate } from "react-router-dom";
import { logout } from "@/services/projectService";
import { Button } from "./ui/button";

function LogoutButton() {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/admin/login", { replace: true });
    } catch (err) {
      console.error(err);
    }
  };

  return <Button onClick={handleLogout}>Logout</Button>;
}

export default LogoutButton;
