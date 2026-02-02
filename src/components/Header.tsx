import { Link } from "react-router-dom";
import { navLinks } from "@/constants/constants";
import { useState } from "react";
function Header() {
  const [availability, setAvailability] = useState(true);
  const links = navLinks.map((item, index) => {
    return (
      <Link key={index} to={{ hash: item.hash }}>
        {" "}
        <li>{item.name}</li>
      </Link>
    );
  });

  const handleToggle = () => {
    setAvailability((prev) => !prev);
  };
  return (
    <div className="w-full m-auto max-w-6xl pt-2 mb-10 px-2 lg:px-0 ">
      <nav className="flex flex-row justify-between items-center">
        <h1 className=" text-4xl font-semibold">KC</h1>
        <section className="border sm:min-w-md">
          <ul className="flex w-full justify-between text-[1rem] tracking-wide">
            {links}
          </ul>
        </section>
      </nav>
      <header className="w-full flex flex-col gap-5 min-h-svh justify-center lg:justify-evenly items-center md:flex-row">
        <section className="flex justify-center border items-start lg:basis-1/2 flex-col">
          <div className="max-w-43">
            <span className=" border flex flex-row justify-between items-center gap-2 px-4 py-1 rounded-full text-xs font-medium tracking-wider">
              Available For Work{" "}
              <span
                onChange={handleToggle}
                className={`${availability ? "bg-green-500 " : "bg-red-500"} bg-green-500 w-2.5 h-2.5 block rounded-full  animate-pulse`}
              ></span>
            </span>
          </div>
          <h1 className="mt-5 font-bold text-5xl lg:text-6xl tracking-wide">
            Krystian Cruz
          </h1>
          <h2 className="mt-5 font-medium text-2xl tracking-wide">
            Frontend Developer
          </h2>
          <p className="max-w-md mt-5">
            Building digital experiences that blend creativity with clean code.
            Passionate about creating intuitive, performant applications.
          </p>

          <div className="flex gap-8 mt-5">
            <button className="px-4 py-1 border rounded-full">
              View My Work
            </button>
            <button className="px-4 py-1 border rounded-full">
              Get In Touch
            </button>
          </div>
        </section>
        <section className="relative flex border w-full max-w-md lg:max-w-lg lg:basis-1/2 justify-center">
          <div className="absolute top-2 right-0 bg-black h-12 w-12 rounded float-header-right">
            <span></span>
          </div>
          <div className="bg-black h-60 w-70 m-8 rounded float-header-middle">
            <span></span>
          </div>
          <div className="  absolute bottom-0 left-0 bg-black h-12 w-12 rounded float-header-left">
            <span></span>
          </div>
        </section>
      </header>
    </div>
  );
}

export default Header;
