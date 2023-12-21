import React from "react";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <div className="md:flex lg:flex items-center justify-between px-28  pt-9 ">
      <h1 className="font-bold text-3xl">
        <span className="text-red-500">T</span>anjya.
      </h1>
      <header className="pt-2 flex justify-end gap-14 ">
        <NavLink to="/" className="hover:text-red-500 font-medium">
          Home
        </NavLink>
        <NavLink to="/about" className="hover:text-red-500 font-medium">
          About
        </NavLink>
        <NavLink to="/projects" className="hover:text-red-500 font-medium">
          Projects
        </NavLink>
        <NavLink to="/contact" className="hover:text-red-500 font-medium">
          Contact
        </NavLink>
      </header>
    </div>
  );
};

export default Nav;
