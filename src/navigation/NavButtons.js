import React from "react";
import { NavLink } from "react-router-dom";

const NavButtons = () => {
  return (
    // mid buttons start
    // only shown to medium devices and up
    <div className=" hidden gap-6 md:flex">
      <NavLink className="text-secondary-content" to="/">
        Beranda
      </NavLink>
      <NavLink className="text-secondary-content" to="/portfolio">
        Portfolio
      </NavLink>
      <NavLink className="text-secondary-content" to="/kontak">
        Kontak
      </NavLink>
    </div>
  );
};

export default NavButtons;
