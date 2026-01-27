"use client";
import "./App.css";
import useProjects from "./hooks/useProjects";
import Form from "./components/Form";

function App() {
  const { projects } = useProjects();

  console.log(projects);

  return (
    <>
      <div className="w-full border p-20 m-auto max-w-7xl">
        <Form />
      </div>
    </>
  );
}

export default App;
