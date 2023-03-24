import React from "react";
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    // mid buttons start
    // only shown to medium devices and up
    <div className=" hidden gap-6 md:flex">
      <NavLink to="/">Beranda</NavLink>
      <NavLink to="/portfolio">Portfolio</NavLink>
      <NavLink to="/kontak">Kontak</NavLink>
    </div>
  );
};

export default NavButtons;
