import React, { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import logo from '../assets/Logo Creator (Community).png'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevNav) => !prevNav);
  return (
    <nav className="sticky top-0 z-50">
    <div className=" relative h-[120px] z-10 bg-black fixed drop-shadow-md">
      <div className="px-2 flex justify-between items-center w-full h-full">
        <div className="pt-6 pl-4 ml-2 ">
      <img
            src={logo}
            alt="Valentina Arango"
            className="w-24 h-24  mb-4"
          />
        </div>
        <ul className="hidden md:flex space-x-4 text-slate-100 pr-4 font-semibold">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>

        </ul>
        <div className="md:hidden" onClick={handleClick}>
          {!nav ? <Bars3Icon className="w-6 text-slate-100" /> : <XMarkIcon className="w-6" />}
        </div>
      </div>
      <ul
        className={
          !nav ? "hidden" : "absolute bg-black text-slate-100 font-semibold text-right w-full pb-4 px-8 md:hidden"
        }
      >
        <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
      </ul>
    </div>
    </nav>
  );
};

export default Navbar;
