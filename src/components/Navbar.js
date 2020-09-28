import React from "react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <nav>
      <NavLink to="/login">Login</NavLink>
      <NavLink to="/">Home</NavLink>
    </nav>
  );
};

export default Navbar;
