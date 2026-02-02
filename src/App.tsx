"use client";
import useProjects from "./hooks/useProjects";
import type { ProjectTypes } from "./validation/projectSchema";
import "./index.css";
import Header from "./components/Header";
import About from "./components/About";

function App() {
  const { projects } = useProjects();

  console.log(projects);

  const lists = projects.map((item: ProjectTypes, index: number) => {
    return (
      <div className="flex flex-col items-start" key={index}>
        <img
          className="w-80"
          src={item?.imageUrl}
          alt={`${item.title} image`}
        />
        <h1>{item.title}</h1>
      </div>
    );
  });
  return (
    <>
      <div className="w-full m-auto max-w-7xl">
        <Header />
        <About />
        <section>{lists}</section>
      </div>
    </>
  );
}

export default App;
