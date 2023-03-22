import React from "react";
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    <div className=" hidden gap-6 md:flex">
      <NavLink to="/">Beranda</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink>Kontak</NavLink>
    </div>
  );
};

export default NavButtons;