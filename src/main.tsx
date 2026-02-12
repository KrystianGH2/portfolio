import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./(pages)/admin/dashboard/index.tsx";
import Form from "./components/Form.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/admin/dashboard" element={<Dashboard />}>
          <Route index element={<Form />} />
          <Route path=":id" element={<div />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
