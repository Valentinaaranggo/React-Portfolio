import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevNav) => !prevNav);
  return (
    <nav>
    <div className="w-screen h-[100px] z-10 bg-white fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div
          className="text-black-800 px-4"
          style={{
            fontFamily: "Montserrat, sans-serif",
            fontWeight: 800,
            fontSize: "40px",
          }}
        >
          Valentina Arango
        </div>
        <ul className="hidden md:flex space-x-4 text-black-800 pr-4 font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
          <li>
            <a href="#connect">Connect</a>
          </li>
        </ul>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-6" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-indigo-500  text-slate-100 w-full px-8"
        }
      >
        <li>About</li>
        <div className="py-3">
          <button className="px-4 py-2 bg-white text-indigo-500 ">
            Sign up/Log in
          </button>
        </div>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
