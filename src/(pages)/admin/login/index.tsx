import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../services/authService";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await auth("/api/admin/login", {
      method: "POST",
      body: JSON.stringify({ password }),
    });

    if (!res.ok) {
      setLoading(false);
      setError("Wrong password");
      return;
    }

    nav("/admin/dashboard");
  }

  return (
    <main className="flex flex-col justify-center items-center min-h-screen px-5 md:px-0">
      <section className="w-full place-items-center">
        <h1 className="font-bold text-2xl">Enter admin password</h1>
        <Card className="w-full max-w-xl  m-auto">
          <form
            className="flex flex-col gap-5 p-10 justify-center items-center"
            onSubmit={onSubmit}
          >
            <Input
              className=""
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Admin password"
            />

            <Button className="min-w-3xs">
              {loading ? (
                <>
                  <Spinner /> Logging in
                </>
              ) : (
                "Log in"
              )}
            </Button>
            {error && (
              <p className="tracking-wide font-medium text-sm text-red-500">
                {error}
              </p>
            )}
          </form>
        </Card>
      </section>
    </main>
  );
}
