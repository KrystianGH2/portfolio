import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "@/services/authService";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      try {
        await auth("/api/admin/me");
      } catch {
        navigate("/admin/login", { replace: true });
      }
    })();
  }, [navigate]);
  return <>{children}</>;
}

export default ProtectedRoute;
